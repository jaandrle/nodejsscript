#!/usr/bin/env nodejsscript
import { cli, echo, mkdir, pipe, rm, tempdir, test } from "nodejsscript";
import { join } from "node:path";

cli("", true)
	.version("0.1.0")
	.describe("NodeJS Script cli test")
	.option("--clear", "Clears cerated temp dir")
	.action(async function main({ clear }){
		const name= join(tempdir, "foo bar");
		pipe(mkdir, echo)(name);
		echo(test("-d", name));
		
		if(clear)
			rm("-R", name);
		echo(test("-d", name));
	})
	.parse(process.argv);
