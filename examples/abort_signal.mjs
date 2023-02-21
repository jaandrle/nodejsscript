#!/usr/bin/env nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: true *//* global $, s, fetch, AbortController, echo */
(async ()=> {
	const abort= new AbortController();
	setTimeout(()=> abort.abort("test"), 150);
	await Promise.all([
		s.runA("sleep 2", false, { signal: abort.signal, killSignal: 'SIGKILL' }),
		fetch("https://www.seznam.cz", { signal: abort.signal }).then(r=> r.ok)
	]).then(echo);
	$.exit(0);
})();
