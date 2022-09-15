#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true */
import { cd, exec, echo, s } from "nodejsscript";

(async function main(){
	cd("../../jaaJSU");
	const git= exec("git status", { silent: true });
	echo(s.hex("#fc0")(git.trim()));
})();
