export const pipe= (...funs)=> input=> Array.prototype.reduce.call(funs, (out, f)=> f(out), input);

import s from "./src/shelljs.js";
export { s };
export const exit= s.exit;
export const config= {
	get silent(){ return s.config.silent; },
	set silent(v){ s.config.silent= v; },
	get verbose(){ return s.config.verbose; },
	set verbose(v){ return (s.config.verbose= v); },
	get fatal(){ return s.config.fatal; },
	set fatal(v){ return (s.config.fatal= v); },
	get noglob(){ return s.config.noglob; },
	set noglob(v){ return (s.config.noglob= v); },
	get globOptions(){ return s.config.globOptions; },
	set globOptions(v){ return (s.config.globOptions= v); },
	
	assign(...c){ return Object.assign(this, ...c); }
};

import style from "ansi-colors";
export { style };

import * as pubsub from "./src/pubsub.js";
export { pubsub };

import nodeFetch from 'node-fetch';
export function fetch(url, init){
	if(s.config.verbose) echo("fetch(", url, ",", init, ")");
	return nodeFetch(url, init);
}

import { log } from "node:console";
export function echo(...messages){
	log(...messages.map(v=>
		v instanceof Error && s.config.verbose ? v :
		( String(v)==="[object Object]" ? v : String(v).replaceAll("\t", "    ") )));
}

import sade from "sade";
import { createInterface } from "node:readline";
import { createLogUpdate } from "log-update";
export const cli= {
	register(usage, is_single= false){
		if(usage && !/^[\[<]/.test(usage))
			return sade(usage, is_single);

		const script= process.argv[1];
		const name= script.slice(script.lastIndexOf("/")+1);
		return sade(name+(usage ? " "+usage : ""), is_single);
	},
	question(query= "", options= undefined){
		query= String(query);
		if(!/\s$/.test(query)) query+= "\n"+style.greenBright.bold('❯ ');
		
		const rl= createInterface({
			input: process.stdin,
			output: process.stdout,
			terminal: true,
			completer: !options || !Array.isArray(options.completions) ? undefined : 
				function completer(line){
					const completions= options.completions;
					const hits= completions.filter((c) => c.startsWith(line));
					return [hits.length ? hits : completions, line];
				},
		});

		return new Promise(resolve=>
			rl.question(query,
				answer=> { rl.close(); resolve(answer); }));
	},
	rewritable({ stream= process.stdout, showCursor= false, end= "done", topic= pubsub.topic() }= {}){
		const log= createLogUpdate(stream, { showCursor });
		pubsub.sub(topic, e=> log(e.data));
		pubsub.subC(topic, log[end].bind(log));
		return topic;
	},
	async stdin(){
		let buf = '';
		process.stdin.setEncoding('utf8');
		for await (const chunk of process.stdin)
			buf += chunk;
		return buf;
	}
};

export function* cyclicLoop(items){
	if(!items) items= 'win32'===process.platform ? '|/-\\' : "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏";
	const { length }= items;
	for(let i=0; true; i++){
		if(i===length) i= 0;
		yield items[i];
	}
}
