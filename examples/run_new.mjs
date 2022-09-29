#!/usr/bin/env nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: false *//* global echo, s */
(async function main(){
	await s.runA`git branch --show-current`.pipe(s.runA`head`).then(echo);
	//s.runA("git branch --show-::0::", [ "current" ], { needle: /:(\d)+:/g });
	await s.cat("package.json").runA("tail").then(echo);
})();
