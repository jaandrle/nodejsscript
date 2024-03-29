import "./src/Error.js";
import { echo } from "./src/echo.js";
import s from "./src/shelljs.js";
const nodeFetch= globalThis.fetch || await import('node-fetch').then(m=> m.default || m);
function fetch(url, init){
	if(s.config.verbose) echo("fetch(", url, ",", init, ")");
	return nodeFetch(url, init);
}
import { $ } from "./src/$.js";
import { pipe } from "./src/utils.js";

Object.assign(globalThis, {
	echo,
	s,
	$,
	fetch,
	pipe
});

/* jshint ignore:start */
if(!globalThis.AbortController) globalThis.AbortController= await import('abort-controller').then(m=> m.default || m);
/* jshint ignore:end */
