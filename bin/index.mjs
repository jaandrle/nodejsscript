#!/usr/bin/env node
import { resolve } from "node:path";
import { argv } from "node:process";
import url from "node:url";
import "../index.js";/* global echo, $, s, pipe */
import { stdin as key_stdin } from "../src/keys.js";

const { is_fatal }= $;
$.is_fatal= true;
process.on('uncaughtException', printError);
(async function main(){
	const candidate= argv.splice(2, 1)[0] || "--help";
	let filepath_tmp;
	if(candidate[0]==="-")
		filepath_tmp= await handleMyArgvs(candidate);
	const is_tmp= filepath_tmp !== undefined;

	const filepath= is_tmp ?
		filepath_tmp : (
		candidate.startsWith('/') ?
			candidate :
			( candidate.startsWith('file:///') ?
				url.fileURLToPath(candidate) :
				resolve(candidate) ));
	$.is_local= argv[1].includes("node_modules"); //TODO: rm/doc
	argv[1]= filepath;
	$.push(...argv.slice(1));
	await $.stdin[key_stdin]();
	try{
		if(!s.test("-f", filepath)) $.error(`File '${candidate}' not found.`);
		$.is_fatal= is_fatal;
		await import(url.pathToFileURL(filepath).toString());
		if(is_tmp) s.rm("-f", filepath_tmp);
	} catch(e){
		if(is_tmp) s.rm("-f", filepath_tmp);
		printError(e);
	}
})();

async function handleMyArgvs(candidate){
	if(['--version', '-v', '-V'].includes(candidate)){
		const { info }= await import("./info.mjs");
		echo(info("version")[0]);
		return $.exit(0);
	}
	if(['--help', '-h'].includes(candidate)){
		const { printUsage }= await import("./info.mjs");
		return await printUsage();
	}
	if("--global-jsconfig"===candidate){
		const { jsconfigTypes }= await import("./jsconfigTypes.mjs");
		return jsconfigTypes(argv);
	}
	if(['-e', '--eval'].includes(candidate)){
		const { runEval }= await import("./runEval.mjs");
		return runEval(argv, 0);
	}
	if(['-p', '--print'].includes(candidate)){
		const { runEval }= await import("./runEval.mjs");
		return runEval(argv, 1);
	}
	if("--completion"===candidate){
		const { completion }= await import("./completion.mjs");
		return completion(argv);
	}
}
function printError(e){
	if(e instanceof $.Error){
		console.error(e.message);
		return $.exit(1);
	}
	Error.print(e);
	$.exit(e.exitCode || 1);
}
