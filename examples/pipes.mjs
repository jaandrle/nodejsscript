#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true */
import { s, pipe, echo, chalk, exit } from "nodejsscript";

s.$().exec("npm list")
	.grep("─")
	.grep("-v", "types")
	.trim().split("\n")
	.map(l=> l.slice(l.indexOf(" ")).split("@"))
	.forEach(pipe(
		([ pkg, version ])=> chalk.magentaBright(pkg)+"@"+chalk.greenBright(version),
		echo
	));

exit(0);
