import { echo } from "./src/echo.js";
export { echo };
export const pipe= (...funs)=> input=> Array.prototype.reduce.call(funs, (out, f)=> f(out), input);

import s from "./src/shelljs.js";
export { s };
export const exit= s.exit;
export { config } from "./src/config.js";

import style from "ansi-colors";
export { style };

import * as pubsub from "./src/pubsub.js";
export { pubsub };

import nodeFetch from 'node-fetch';
export function fetch(url, init){
	if(s.config.verbose) echo("fetch(", url, ",", init, ")");
	return nodeFetch(url, init);
}

export { read } from "./src/read.js";

import sade from "sade";
export function cli(usage, is_single= false){
	if(usage && !/^[\[<]/.test(usage))
		return sade(usage, is_single);

	const script= process.argv[1];
	const name= script.slice(script.lastIndexOf("/")+1);
	return sade(name+(usage ? " "+usage : ""), is_single);
}

export function* cyclicLoop(items){
	if(!items) items= 'win32'===process.platform ? '|/-\\' : "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏";
	const { length }= items;
	for(let i=0; true; i++){
		if(i===length) i= 0;
		yield items[i];
	}
}

import { fstatSync } from "node:fs";
export const is_piped= {
	get left(){ return fstatSync(0).isFIFO(); },
	get right(){ return fstatSync(1).isFIFO(); }
};
