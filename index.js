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

import chalk from "chalk";
export { chalk, chalk as s };

import fetch from 'node-fetch';
export { fetch };

import { log } from "node:console";
export function echo(...messages){
	log(...messages.map(v=>
		v instanceof Error && config.verbose ? v :
		( String(v)==="[object Object]" ? v : String(v).replaceAll("\t", "    ") )));
}

/**
 * Returns object representation of given arguments. Script name is under `_name` key, arguments without `-`/`--` are under `_` key.
 * @param {NodeJS.Process.argv} argv
 * @param {Record<string, any>} initial Initial values
 * @returns {{ _name: string, _: string[] } & Record<string, any>}
 * @example
 * script arg1 --arg2=val -arg3 val --arg4
 * => { _name: "script", _: [ "arg1" ], arg2: "val", arg3: "val", arg4: true }
 * */
export function parseArgsMinimal(initial= {}, argv= process.argv){
	const out= Object.create(initial);
	out._name= argv[1].slice(argv[1].lastIndexOf("/")+1);
	out._= [];
	const args= argv.slice(2);
	for(let i= 0, { length }= args; i<length; i+= 1){
		const item= args[i];
		if(0===item.indexOf("--")){
			const [ name, value= true ]= item.slice(2).split("=");
			Reflect.set(out, name, value);
			continue;
		}
		if(0!==item.indexOf("-")){
			out._.push(item);
			continue;
		}
		let next= args[i+1];
		if(!next || !next.indexOf("-"))
			next= true;
		Reflect.set(out, item.slice(1), next);
		if(next!==true)
			i+= 1;
	}
	if(!out._.length && initial._ && initial._.length)
		out._= initial._;
	return out;
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
