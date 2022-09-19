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

export { Spinner } from "./src/Spinner.js";

import nodeFetch from 'node-fetch';
/**
 * Fetch function
 * @param   {import('node-fetch').RequestInfo} url - Absolute url or Request instance
 * @param   {import('node-fetch').RequestInit} [init] - Fetch options
 * @return  {Promise<import('node-fetch').Response>}
 */
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
/**
 * @param {string} usage The script name and usage (`[optional]`/`<required>`). If no `name`, then the script file name will be used.
 * @param {boolean} [is_single] See {@link sade}
 * @returns {sade.Sade}
 * */
export function cli(usage, is_single= false){
	if(usage && !/^[\[<]/.test(usage))
		return sade(usage, is_single);

	const script= process.argv[1];
	const name= script.slice(script.lastIndexOf("/")+1);
	return sade(name+(usage ? " "+usage : ""), is_single);
}

import { createInterface } from 'node:readline';
/**
 * Promt user for answer.
 * @param {string} query
 * @param {{ completions: string[] }} options
 * */
export function question(query= "", options= undefined){
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
}

export async function stdin(){
	let buf = '';
	process.stdin.setEncoding('utf8');
	for await (const chunk of process.stdin)
		buf += chunk;
	return buf;
}
