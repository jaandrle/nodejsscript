export const pipe= (...funs)=> input=> Array.prototype.reduce.call(funs, (out, f)=> f(out), input);

import s from "./src/shelljs.js";
export { s };
export const exit= s.exit;
export const config= {
	/**
	 * Suppresses all command output if `true`, except for `echo()` call.
	 * @default false
	 * */
	get silent(){ return s.config.silent; },
	set silent(v){ s.config.silent= v; },
    /**
	 * Will print each executed command to the screen.
	 * @default false
	 * */
	get verbose(){ return s.config.verbose; },
	set verbose(v){ return (s.config.verbose= v); },
    /**
	 * If `true`, the script will throw a JavaScript error when any `shell.js` command encounters an error. This is analogous to Bash's `set -e`.
	 * @default false
	 * */
	get fatal(){ return s.config.fatal; },
	set fatal(v){ return (s.config.fatal= v); },
    /**
	 * Disable filename expansion (globbing)
	 * @default false
	 * */
	get noglob(){ return s.config.noglob; },
	set noglob(v){ return (s.config.noglob= v); },
    /**
	 * Options for [`glob.sync()`](https://github.com/isaacs/node-glob/tree/af57da21c7722bb6edb687ccd4ad3b99d3e7a333#options).
	 * @default {}
	 * */
	get globOptions(){ return s.config.globOptions; },
	set globOptions(v){ return (s.config.globOptions= v); },
	
	/** Set multiple options with one command.
	 * @param {...Record<"verbose"|"fatal"|"noglob"|"silent",boolean>} c
	 * */
	assign(...c){ return Object.assign(this, ...c); }
};

import style from "ansi-colors";
export { style };

/* jshint ignore:start */
const AbortController= globalThis.AbortController || await import('abort-controller');
/* jshint ignore:end *//* global AbortController */
export const abortable= {
	controller(...args){ return new AbortController(...args); },
	/**
	 * Abortable `setInterval`.
	 * @template {any[]} TArgs
	 * @param {AbortSignal} signal
	 * @param {(...args: TArgs) => void} callback
	 * @param {number} [interval] Interval in milliseconds
	 * @param {...TArgs} [params] Parameters for `callback`
	 * */
	interval(callback, interval, signal, ...params){
		const id= setInterval(callback, interval, ...params);
		signal.addEventListener("abort", clearInterval.bind(null, id), { once: true });
	},
	/**
	 * Abortable `setTimeout`.
	 * @template {any} TArg
	 * @param {AbortSignal} signal
	 * @param {number} [interval] Interval in milliseconds
	 * @param {TArg} [param] Parameters for 'callback'
	 * @returns {Promise<TArg>}
	 * */
	timeout(interval, signal, param){
		if(s.config.verbose) echo("timeout(", interval, ",", signal, ",", param, ")");
		return new Promise(function(resolve, reject){
			if(signal && signal.aborted) return reject(param);
			
			let id;
			const onabort= !signal ? false : ()=> { clearTimeout(id); reject(param); };
			id= setTimeout(param=> {
				if(onabort) signal.removeEventListener("abort", onabort);
				resolve(param);
			}, interval, param);
			if(onabort) signal.addEventListener("abort", onabort, { once: true });
		});
	}
};
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
	/**
	 * Overwritable text output. For end use `abort` from {@link AbortController}.
	 * @param {import("log-update").Options & { stream?: NodeJS.WritableStream, signal?: AbortSignal, end: "done"|"clear" }} params
	 * */
	rewritable({ stream= process.stdout, showCursor= false, end= "done", signal }= {}){
		const log= createLogUpdate(stream, { showCursor });
		if(signal) signal.addEventListener("abort", log[end].bind(log), { once: true });
		return function(...msg){
			if(signal && signal.aborted) return;
			return log(...msg);
		};
	},
	async stdin(){
		let buf = '';
		process.stdin.setEncoding('utf8');
		for await (const chunk of process.stdin)
			buf += chunk;
		return buf;
	}
};


/**
 * Repeatedly loops through the given chars/strings/….
 * Typical usage is to create a spinner.
 * @template T
 * @param {T[]} items
 * @returns {Generator<T[], any, T>}
 * */
export function* cyclicLoop(items){
	if(!items) items= 'win32'===process.platform ? '|/-\\' : "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏";
	const { length }= items;
	for(let i=0; true; i++){
		if(i===length) i= 0;
		yield items[i];
	}
}
