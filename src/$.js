import { config, ShellString, default as shelljs } from "shelljs";
import { fstatSync, readlinkSync } from "node:fs";
import * as xdg from "./xdg.js";
import { stdin as key_stdin } from "./keys.js";
import { fileURLToPath } from "node:url";
import { argv } from 'node:process';
import { resolve, join } from "node:path";

export const $= Object.assign([ ...argv.slice(1) ], {
	isMain(_meta){
		const module_path= fileURLToPath(_meta.url);
		const [ argv0 ]= this;
		if(!shelljs.test("-L", argv0))
			return argv0 === module_path;
		//TODO: for locally installed modules, this can be also link
		return resolve(argv0, "..", readlinkSync(argv0)) === module_path;
	},
	
	is_colors: -1,
	configAssign(...c){
		const o= Object.assign({}, ...c);
		const has= Reflect.has.bind(null, o);
		const get= Reflect.get.bind(null, o);
		for(const config of [ "silent", "verbose", "fatal", "colors" ])
			if(has(config)) this["is_"+config]= get(config);
	},
	isFIFO(stream_id= 0){ return fstatSync(stream_id).isFIFO(); },
	stdin: (function(){ // stdin[key_stdin] is called from cli.mjs to make text/lines synchronous
		let stdin, setted= false;
		return {
			[Symbol.toPrimitive](hint){
				if(hint==="boolean") return setted;
				if(hint==="number") return Number(setted);
				if(hint==="string") return stdin || "";
				return null;
			},
			text(_default){ return ShellString(setted ? stdin : _default); },
			lines(_default){ return ShellString(setted ? stdin.split("\n") : _default); },
			json(_default){ return setted ? JSON.parse(stdin.trim()) : _default; },
			[key_stdin](){
				if(!$.isFIFO(0)) return Promise.resolve("");
				return $.read().then(t=> (setted= true, stdin= t.replace(/\n$/, "")));
			}
		};
	})(),
	
	Error: class extends Error{},
	error(message){ const e= new $.Error(message); Error.captureStackTrace(e, $.error); throw e; },
	exit(code){ return process.exit(code); },

	xdg,
	pathFromURL(from_url){ return function relative(p, ...pieces){
		const relative= Array.isArray(p) ? String.raw(p, ...pieces) : p || "";
		return fileURLToPath(new URL(relative, from_url));
	}; },

	hasArgs(...needles){ return this.findIndex(a=> needles.indexOf(a)!==-1) !==-1; }
});
Reflect.defineProperty($, "is_silent", {
	get(){ return config.silent; },
	set(v){ config.silent= v; },
});
Reflect.defineProperty($, "is_verbose", {
	get(){ return config.verbose; },
	set(v){ return (config.verbose= v); },
});
Reflect.defineProperty($, "is_fatal", {
	get(){ return config.fatal; },
	set(v){ return (config.fatal= v); },
});
Reflect.defineProperty($, "glob_options", {
	get(){ return ({
		get is_off(){ return config.noglob; },
		set is_off(v){ return (config.noglob= v); },
		get options(){ return config.globOptions; },
		set options(v){ return (config.globOptions= v); },
	});},
});
Reflect.defineProperty($, 	    "$", { get(){ return process.pid; } });
Reflect.defineProperty($, 	  "env", { get(){ return process.env; } });
Reflect.defineProperty($, "version", { get(){ return shelljs.cat(fileURLToPath(join(import.meta.url, "../../package.json"))).xargs(JSON.parse).version; } });
Reflect.defineProperty($, 	 "read", { get(){ return shelljs.read; } });

import sade from "sade";
$.api= function(usage, is_single= false){
	if(usage && !/^[\[<]/.test(usage))
		return sadeOut(sade(usage, is_single));

	const script= process.argv[1];
	const name= script.slice(script.lastIndexOf("/")+1);
	const out= sade(name+(usage ? " "+usage : ""), is_single);
	return sadeOut(out);
};
import { echo } from "./echo.js";
import { pipe } from "./utils.js";
function sadeOut(sade){
	sade._parse= sade.parse;
	sade.parse= function(options= {}){
		const { argv= process.argv }= options;
		if(argv[2]==="__ALL__"){ //as this is already protected by Sade
			const completions= pipe(
				Object.entries,
				a=> a.filter(([ name ])=> name!=="__default__"),
				a=> a.map(([n,v])=> [ n, typeof v==="string" ? v : v.options.flatMap(o=> o[0].split(/, ?/g)) ]),
				a=> a.reduce((acc, [ name, o ])=> (acc[name]= o, acc), {}),
			)(sade.tree);
			const completions_all= Reflect.get(completions, "__all__").concat("--help", "--version");
			Reflect.deleteProperty(completions, "__all__");
			const npx= $.is_local;
			pipe(
				JSON.stringify,
				echo
			)({ npx, completions, completions_all });
			$.exit(0);
		}
		Reflect.deleteProperty(options, "argv");
		return this._parse(argv, options);
	};
	return sade;
}
