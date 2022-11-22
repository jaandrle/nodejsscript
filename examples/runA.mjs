#!/usr/bin/env nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: false *//* global echo, s, $ */
(async function main(){
	await s.runA`git branch --show-current`.pipe(s.runA`head`);
	await s.runA("git branch --show-:0:", [ "current" ], { needle: /:(\d)+:/g });
	echo(await s.cat("package.json").runA("tail").pipe(s=> s.grep("type")));
	await s.$("-F").runA("npm list").pipe(s=> s.grep("type").xargs(echo)).catch(echo.bind(null, "E"));
	await s.$("-F").runA("npM list"); //.pipe(s=> s.grep("type").xargs(echo)).catch(echo.bind(null, "E"));
	s.runA("npm list").then(o=> $.exit(0, console.log(o)));
})();
