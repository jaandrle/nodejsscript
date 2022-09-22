#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true */
import { s, pipe, echo, style, exit } from "nodejsscript";
style.theme({ pkg: style.magentaBright, version: style.greenBright });

const printPackage= pipe(
	l=> l.slice(l.indexOf(" ")).split("@"),
	([ pkg, version ])=> style.pkg(pkg)+"@"+style.version(version),
	echo
);
const getPackages= is_global=> 
	s.$().exec("npm list"+(is_global ? " --location=global" : ""))
	.grep("─")
	.grep("-v", "types")
	.sed(/->.*$/, '') //trim aliases
	.trim().split("\n");

echo("Local packages:");
getPackages(false).forEach(printPackage);
echo("Global packages:");
getPackages(true).forEach(printPackage);
exit(0);
