import { config, ShellString } from "shelljs";
import { fstatSync } from "node:fs";
import * as xdg from "./xdg.js";
import { stdin as key_stdin } from "./keys.js";
import { fileURLToPath } from "node:url";

export const $= Object.assign([], {
	isMain(_meta){
		const module_path= fileURLToPath(_meta.url);
		console.log(module_path);
		return this[0] === module_path;
	},
	
	get is_silent(){ return config.silent; },
	set is_silent(v){ config.silent= v; },
	get is_verbose(){ return config.verbose; },
	set is_verbose(v){ return (config.verbose= v); },
	get is_fatal(){ return config.fatal; },
	set is_fatal(v){ return (config.fatal= v); },
	
	get glob_options(){ return ({
		get is_off(){ return config.noglob; },
		set is_off(v){ return (config.noglob= v); },
		get options(){ return config.globOptions; },
		set options(v){ return (config.globOptions= v); },
	});},
	
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
			text(_default){ return setted ? stdin : _default; },
			lines(_default){ return setted ? stdin.split("\n") : _default; },
			json(_default){ return setted ? JSON.parse(stdin.trim()) : _default; },
			[key_stdin](){
				if(!$.isFIFO(0)) return Promise.resolve("");
				return $.read().then(t=> (setted= true, stdin= (t.replace(/\n$/, ""))));
			}
		};
	})(),
	
	Error: class extends Error{},
	error(message){ const e= new $.Error(message); Error.captureStackTrace(e, $.error); throw e; },
	exit(code){ return process.exit(code); },

	xdg,

	get $(){ return process.pid; },
	get env(){ return process.env; },

	hasArgs(...needles){ return this.findIndex(a=> needles.indexOf(a)!==-1) !==-1; }
});
Reflect.defineProperty($, "nosed", { get(){ return this.stdin.text(""); }, });
Reflect.defineProperty($, "nojq", { get(){ return this.stdin.json(null); }, });
Reflect.defineProperty($, "noawk", { get(){ return this.stdin.lines([]); }, });

import sade from "sade";
$.api= function(usage, is_single= false){
	if(usage && !/^[\[<]/.test(usage))
		return sade(usage, is_single);

	const script= process.argv[1];
	const name= script.slice(script.lastIndexOf("/")+1);
	const out= sade(name+(usage ? " "+usage : ""), is_single);
	out._parse= out.parse;
	out.parse= function(options= {}){
		const { argv= process.argv }= options;
		Reflect.deleteProperty(options, "argv");
		return this._parse(argv, options);
	};
	return out;
};

import { echo } from "./echo.js";
$.read= async function(options= {}){
	const { stdin }= process;
	stdin.setEncoding('utf8');
	const has= Reflect.has.bind(null, options);
	const get= Reflect.get.bind(null, options);
	if(has("-p")) return promt(options, has, get);
	if(has("-n")){
		const line= await stdin[Symbol.asyncIterator]().next();
		return ShellString(line.value.slice(0, get("-n")));
	}
	let buf= $.stdin ? $.stdin.text("") : "";
	if(has("-d")){
		const needle= get("-d");
		for await (const chunk of stdin){
			const i= chunk.indexOf(needle);
			if(i!==-1) return ShellString(buf+chunk.slice(0, i));
			buf+= chunk;
		}
	}
	for await (const chunk of stdin)
		buf+= chunk;
	return ShellString(buf);
};

function promt(options, has, get){
	if(!get("-s")) options.output= process.stdout;
	return question(get("-p"), options).then(function(promt){
		if(get("-s")) echo();
		const chars= has("-n") ? get("-n") : ( has("-d") ? promt.indexOf(get("-d")) : -1 );
		return chars < 0 ? promt : promt.slice(0, chars);
	});
}
import { createInterface } from "node:readline";
function question(query= "", options= {}){
	query= String(query);
	if(!/\s$/.test(query)) query+= "\n"+echo.format('%c❯ ', "color:lightgreen");
	if(!options.output) echo.use("-n", query);
	
	const rl= createInterface({
		input: process.stdin,
		output: options.output,
		terminal: true,
		completer: !Array.isArray(options.completions) ? undefined : 
			function completer(line){
				const completions= options.completions;
				const hits= completions.filter((c) => c.startsWith(line));
				return [hits.length ? hits : completions, line];
			},
	});

	return new Promise(resolve=>
		rl.question(query,
			answer=> { rl.close(); resolve(answer); }));
}
