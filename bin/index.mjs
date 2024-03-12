#!/usr/bin/env node
import { resolve } from "node:path";
import { argv } from "node:process";
import url from "node:url";
import "../index.js";/* global echo, $, s, pipe */
import { stdin as key_stdin } from "../src/keys.js";

const config_env= ($.env.NODEJSSCRIPTOPTS || "").split(":")
	.filter(Boolean)
	.reduce(function(acc, key){
		let val= true;
		if(key.startsWith("no")){
			val= false;
			key= key.slice(2);
		}
		acc[key]= val;
		return acc;
	}, { rc: true });
const { is_fatal }= $;
$.is_fatal= true;
process.on('uncaughtException', printError);
(async function main(){
	const candidate= argv.splice(2, 1)[0] || "--help";
	let filepath_tmp;
	if(candidate[0]==="-")
		filepath_tmp= await handleBuildin(candidate);
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
	$.length= 0;
	$.push(...argv.slice(1));
	await $.stdin[key_stdin]();
	try{
		if(!s.test("-f", filepath)) $.error(`File '${candidate}' not found.`);
		$.is_fatal= is_fatal;
		await importRC("script");
		await import(url.pathToFileURL(filepath).toString());
		if(is_tmp) s.rm("-f", filepath_tmp);
	} catch(e){
		if(is_tmp) s.rm("-f", filepath_tmp);
		if($.is_verbose) Error.print(e, 1);
		else if(!$.is_silent) printError(e);
		$.exit(e?.exitCode || 1);
	}
})();
async function handleBuildin(candidate){
	if(["--version", "-v", "-V"].includes(candidate)){
		const { info }= await import("./info.mjs");
		echo(info("version")[0]);
		return $.exit(0);
	}
	if(["--help", "-h"].includes(candidate)){
		const { printCliUsage, printUsage }= await import("./info.mjs");
		const out= argv.length===2 ? await printCliUsage() : await printUsage(argv[argv.length-1]);
		return $.exit(out || 0);
	}
	if("--inspect"===candidate){
		const { inspect }= await import("./inspect.mjs");
		await inspect(argv);
		return $.exit(0);
	}
	if("--global-jsconfig"===candidate){
		const { jsconfigTypes }= await import("./jsconfigTypes.mjs");
		return jsconfigTypes(argv);
	}
	if(["-e", "--eval"].includes(candidate)){
		const { runEval }= await import("./runEval.mjs");
		await importRC("eval");
		return runEval(argv, 0);
	}
	if(["-p", "--print"].includes(candidate)){
		const { runEval }= await import("./runEval.mjs");
		await importRC("eval");
		return runEval(argv, 1);
	}
	if("--completion"===candidate){
		const { completion }= await import("./completion.mjs");
		return completion(argv);
	}
	if(["-i", "--interactive"].includes(candidate)){
		const { startRepl }= await import("./repl.mjs");
		await importRC("repl");
		return await startRepl(argv);
	}
}

async function importRC(type){
	if(!config_env.rc || $.is_local)
		return;
	const c= await import("./config.mjs");
	const {
		uncaughtException, ...events }= await c.importRC();
	
	if(uncaughtException) printError= uncaughtException;
	type= "on"+type;
	if(Object.prototype.hasOwnProperty.call(events, type))
		events[type]();
}
function printError(e){
	if(e instanceof $.Error)
		return console.error(e.message);
	Error.print(e);
}
