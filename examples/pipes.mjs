#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true *//* global echo, $, pipe, s */
const css= echo.css(
	".pkg { color: lightmagenta; margin-left: 2; }",
	".pkg:before { content: '- '; }",
	".version { color: lightgreen; }",
);

const printPackage= pipe(
	l=> l.slice(l.indexOf(" ")+1).split(/@(?=\d)/),
	([ pkg, version ])=> echo.format(`%c${pkg}%c@%c${version}`, css.pkg, css.unset, css.version),
	echo
);
const getPackages= is_global=> 
	s.$().run("npm list ::g::", { g: is_global ? "--location=global" : "" })
	.grep("─")
	.grep("-v", "types")
	.sed(/->.*$/, '') //trim aliases
	.trim().split("\n");

echo("Local packages:");
getPackages(false).forEach(printPackage);
echo("Global packages:");
getPackages(true).forEach(printPackage);
$.exit(0);
