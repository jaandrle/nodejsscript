#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true */
import { exec, grep, echo, mkdir, tempdir } from "nodejsscript";

(async function main(){
	echo(grep("name", "../package.json").trim());
	
	const branch= exec("git branch --show-current").trim();
	exec(`echo deploy --branch=${branch}`);

	exec("sleep 1; echo 1");
	exec("sleep 2; echo 2");
	exec("sleep 3; echo 3");

	const name= "foo bar";
	echo(mkdir(tempdir()+"/"+name));
})();
