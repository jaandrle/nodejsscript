#!/usr/bin/env nodejsscript
import { cli, echo, mkdir, pipe, rm, tempdir, test, xarg } from "nodejsscript";
import { join } from "node:path";

cli("", true)
	.version("0.1.0")
	.describe("NodeJS Script cli test")
	.option("--clear", "Clears cerated temp dir")
	.action(function main({ clear }){
		const name= join(tempdir(), "foo bar");
		mkdir("-p", name);
		
		const testDir= pipe(xarg(test, "-d"), echo);
		testDir(name);
		
		if(clear) rm("-R", name);
		testDir(name);
	})
	.parse(process.argv);
