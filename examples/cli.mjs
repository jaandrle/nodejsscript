#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true *//* global echo, cli, pipe, s, xdg */
import { join } from "node:path";

cli.api("", true)
.version("0.1.0")
.describe("NodeJS Script cli test")
.option("--clear", "Clears cerated temp dir")
.action(function main({ clear }){
	echo(xdg({ subdir: "TestSubDir" }));
	const name= join(s.tempdir(), "foo bar");
	s.mkdir("-p", name);
	
	const testDir= pipe(s.test.bind(null, "-d"), echo);
	testDir(name);
	
	if(clear) s.rm("-R", name);
	testDir(name);
})
.parse(process.argv);
