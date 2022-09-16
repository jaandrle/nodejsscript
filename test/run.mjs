#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true */
import * as s from "/home/jaandrle/.nvm/versions/node/v17.0.1/lib/node_modules/nodejsscript/index.js";
// from "nodejsscript";
import { join } from "node:path";

s.cli("", true)
	.version("0.1.0")
	.describe("NodeJS Script cli test")
	.option("--clear", "Clears cerated temp dir")
	.action(async function main({ clear }){
		s.echo(s.grep("name", "../package.json").trim());
		
		s.pipe( s.exec$.bind(null, "git branch --show-current"), s.xarg(s.exec, "echo deploy --branch={}") )();

		s.exec("sleep 1; echo 1");
		s.exec("sleep 2; echo 2");
		s.exec("sleep 3; echo 3");

		const name= join(s.tempdir(), "foo bar");
		s.pipe(s.mkdir, s.echo)(name);
		s.echo(s.test("-d", name));
		if(clear)
			s.rm("-R", name);
		s.echo(s.test("-d", name));
		
		s.pipe(
			Number,
			v=> s.s.greenBright(v+1),
			v=> `Result is: ${v}`,
			s.echo
		)(await s.question("Choose number:"));
	})
	.parse(process.argv);
