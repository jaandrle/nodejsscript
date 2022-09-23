import { echo } from "./src/echo.js";
export { echo };
export const pipe= (...funs)=> input=> Array.prototype.reduce.call(funs, (out, f)=> f(out), input);

import s from "./src/shelljs.js";
export { s };
export const exit= s.exit;
export { cli } from "./src/cli.js";

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


export function* cyclicLoop(items){
	if(!items) items= 'win32'===process.platform ? '|/-\\' : "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏";
	const { length }= items;
	for(let i=0; true; i++){
		if(i===length) i= 0;
		yield items[i];
	}
}


/* jshint ignore:start */
if(!globalThis.AbortController) globalThis.AbortController= await import('abort-controller');
/* jshint ignore:end *//* global AbortController */
