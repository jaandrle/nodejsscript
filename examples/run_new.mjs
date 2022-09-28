#!/usr/bin/env nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: false *//* global run, echo */
(async function main(){
	await run`git branch --show-current`.pipe(run`head`).then(echo);
	run("git branch --show-::0::", [ "current" ], { needle: /:(\d)+:/g });
})();
