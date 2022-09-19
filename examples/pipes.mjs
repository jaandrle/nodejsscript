#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true */
import { s, pipe, echo, style, exit } from "nodejsscript";
style.theme({ pkg: style.magentaBright, version: style.greenBright });

s.$().exec("npm list")
	.grep("─")
	.grep("-v", "types")
	.trim().split("\n")
	.map(l=> l.slice(l.indexOf(" ")).split("@"))
	.forEach(pipe(
		([ pkg, version ])=> style.pkg(pkg)+"@"+style.greenBright(version),
		echo
	));

exit(0);
