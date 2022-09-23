#!/usr/bin/env nodejsscript
import { cli, s, echo, pipe } from "nodejsscript";
import { join } from "node:path";

cli.api("", true)
.version("0.1.0")
.describe("NodeJS Script cli test")
.option("--clear", "Clears cerated temp dir")
.action(function main({ clear }){
	const name= join(s.tempdir(), "foo bar");
	s.mkdir("-p", name);
	
	const testDir= pipe(s.test.bind(null, "-d"), echo);
	testDir(name);
	
	if(clear) s.rm("-R", name);
	testDir(name);
})
.parse(process.argv);
