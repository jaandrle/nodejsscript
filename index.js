import { echo } from "./src/echo.js";
import s from "./src/shelljs.js";
import nodeFetch from 'node-fetch';
function fetch(url, init){
	if(s.config.verbose) echo("fetch(", url, ",", init, ")");
	return nodeFetch(url, init);
}
const pipe= (...funs)=> input=> Array.prototype.reduce.call(funs, (out, f)=> f(out), input);
function* cyclicLoop(items){
	if(!items) items= 'win32'===process.platform ? '|/-\\' : "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏";
	const { length }= items;
	for(let i=0; true; i++){
		if(i===length) i= 0;
		yield items[i];
	}
}

import { cli } from "./src/cli.js";
import style from "ansi-colors";
import { read } from "./src/read.js";
import $ from "shell-escape-tag";
import xdg from "@folder/xdg";
Object.assign(globalThis, {
	xdg,
	$,
	echo,
	exit: s.exit,
	pipe,
	s,
	cli,
	style,
	fetch,
	read,
	cyclicLoop
});

/* jshint ignore:start */
if(!globalThis.AbortController) globalThis.AbortController= await import('abort-controller');
/* jshint ignore:end */
