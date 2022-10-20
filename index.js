import "./src/Error.js";
import { echo } from "./src/echo.js";
import s from "./src/shelljs.js";
import nodeFetch from 'node-fetch';
function fetch(url, init){
	if(s.config.verbose) echo("fetch(", url, ",", init, ")");
	return nodeFetch(url, init);
}
function* cyclicLoop(items){
	if(!items) items= 'win32'===process.platform ? '|/-\\' : "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏";
	const { length }= items;
	for(let i=0; true; i++){
		if(i===length) i= 0;
		yield items[i];
	}
}

import { $ } from "./src/$.js";
import style from "ansi-colors";
import { read } from "./src/read.js";
import { pipe } from "./src/utils.js";
Object.assign(globalThis, {
	echo,
	exit: s.exit,
	pipe,
	s,
	$,
	style,
	fetch,
	read,
	cyclicLoop
});

/* jshint ignore:start */
if(!globalThis.AbortController) globalThis.AbortController= await import('abort-controller');
/* jshint ignore:end */
