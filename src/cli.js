import { config } from "shelljs";
import { fstatSync } from "node:fs";
export const cli= {
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
	
	configAssign(...c){
		const o= Object.assign({}, ...c);
		const has= Reflect.has.bind(null, o);
		const get= Reflect.get.bind(null, o);
		for(const config of [ "silent", "verbose", "fatal" ])
			if(has(config)) this["is_"+config]= get(config);
	},
	isFIFO(stream_id= 0){ return fstatSync(stream_id).isFIFO(); },
	
	Error: class extends Error{},
	error(message){ throw new cli.Error(message); }
};

import sade from "sade";
cli.api= function(usage, is_single= false){
	if(usage && !/^[\[<]/.test(usage))
		return sade(usage, is_single);

	const script= process.argv[1];
	const name= script.slice(script.lastIndexOf("/")+1);
	return sade(name+(usage ? " "+usage : ""), is_single);
};

import { echo } from "./echo.js";
cli.read= async function(options= {}){
	const { stdin }= process;
	stdin.setEncoding('utf8');
	const has= Reflect.has.bind(null, options);
	const get= Reflect.get.bind(null, options);
	if(has("-p")) return promt(options, has, get);
	if(has("-n")){
		const line= await stdin[Symbol.asyncIterator]().next();
		return line.value.slice(0, get("-n"));
	}
	let buf= "";
	if(has("-d")){
		const needle= get("-d");
		for await (const chunk of stdin){
			const i= chunk.indexOf(needle);
			if(i!==-1) return buf+chunk.slice(0, i);
			buf+= chunk;
		}
	}
	for await (const chunk of stdin)
		buf+= chunk;
	return buf;
};

function promt(options, has, get){
	if(!get("-s")) options.output= process.stdout;
	return question(get("-p"), options).then(function(promt){
		if(get("-s")) echo();
		const chars= has("-n") ? get("-n") : ( has("-d") ? promt.indexOf(get("-d")) : -1 );
		return chars < 0 ? promt : promt.slice(0, chars);
	});
}
import style from "ansi-colors";
import { createInterface } from "node:readline";
function question(query= "", options= {}){
	query= String(query);
	if(!/\s$/.test(query)) query+= "\n"+style.greenBright.bold('❯ ');
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
