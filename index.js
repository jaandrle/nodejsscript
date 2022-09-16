export const pipe= (...funs)=> input=> Array.prototype.reduce.call(funs, (out, f)=> f(out), input);
function parseOptions(candidate, initial= {}){
	if(typeof candidate!=="string") return Object.assign({}, initial, candidate);
	return candidate.split(" -").reduce(function parse(out, curr, i){
		const space_i= curr.indexOf(" ");
		const name= ( i ? "-" : "" )+curr.slice(0, space_i);
		Reflect.set(out, name, curr.slice(space_i+1));
		return out;
	}, initial);
}
export function xarg(...params){
	const options_default= { "-I": "{}" };
	const options= typeof params[0]!=="function" ? parseOptions(params.shift()) : options_default;
	const needle= options["-I"];
	const [ cmd, ...args ]= params;
	return function call(arg){
		let replaced= 0;
		const args_final= args.map(a=> a.replaceAll(needle, ()=> ( replaced+= 1, arg )));
		if(!replaced) args_final.push(arg);
		return cmd.apply(null, args_final);
	};
}

import shelljs from "shelljs";
export const {
	ls, find, dirs,
	cd, pwd, pushd, popd,
	cp, rm, mv, mkdir, ln, touch, tempdir,
	chmod,
	test, error,
	cat, sed, grep, sort, head, tail, uniq,
	which,
	exit, env, set,
	exec,
	config
}= shelljs;
/**
 * Silent execution of {@link exec} to be used with pipeing or as variable.
 * @param {string} command The command to execute.
 * @param {object} options 
 * @param {boolean} [options.fatal] Exit when command return code is non-zero.
 * @param {string} [options.encoding] Character encoding to use.
 * @example
 * const out= exec$("cmd");
 */
export function exec$(command, options= {}){
	return exec(command, Object.assign({}, options, { async: false, silent: true })).replace(/\n$/g, "");
}

import chalk from "chalk";
export { chalk, chalk as s };

import nodeFetch from 'node-fetch';
/**
 * Fetch function
 * @param   {import('node-fetch').RequestInfo} url - Absolute url or Request instance
 * @param   {import('node-fetch').RequestInit} [init] - Fetch options
 * @return  {Promise<import('node-fetch').Response>}
 */
export function fetch(url, init){
	if(config.verbose) echo("fetch(", url, ",", init, ")");
	return nodeFetch(url, init);
}

import { log } from "node:console";
export function echo(...messages){
	log(...messages.map(v=>
		v instanceof Error && config.verbose ? v :
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
	if(!/\s$/.test(query)) query+= "\n"+chalk.greenBright.bold('❯ ');
	
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
