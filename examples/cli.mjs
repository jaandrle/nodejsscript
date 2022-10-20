#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true *//* global echo, $, pipe, s */
echo($.hasArgs("--help"));
$.api("", true)
.version("0.1.0")
.describe("NodeJS Script cli test")
.option("--clear", "Clears cerated temp dir")
.action(function main({ clear }){
	const name= $.xdg.temp`foo bar`;
	s.mkdir("-p", name);
	
	const testDir= pipe(s.test.bind(null, "-d"), echo);
	testDir(name);
	
	if(clear) s.rm("-R", name);
	testDir(name);
})
.parse();
