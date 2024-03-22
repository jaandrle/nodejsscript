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
process.on('uncaughtException', printError);
(async function main(){
	let candidate= argv.splice(2, 1)[0] || "--interactive";
	let filepath_tmp;
	if(candidate==="--") // TODO: indicate the end of njs options
		candidate= argv.splice(2, 1)[0];
	else if(candidate[0]==="-")
		filepath_tmp= await handleBuildin(candidate);
	const is_tmp= filepath_tmp !== undefined; // ≡is eval

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
		if(!s.$("-F").test("-f", filepath)) $.error(`File '${candidate}' not found.`);
		await importRC(is_tmp ? "eval" : "script");
		await import(url.pathToFileURL(filepath).toString());
		if(is_tmp){
			s.$("-F").rm("-f", filepath_tmp);
			$.exit(0);
		}
	} catch(e){
		if(is_tmp) s.$("-F").rm("-f", filepath_tmp);
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
	if(["--help", "-h", "--man"].includes(candidate)){
		const { printCliUsage, printUsage }= await import("./info.mjs");
		try{
			const out= "--man"!==candidate ? await printCliUsage() : await printUsage(argv.slice(2)[0]);
			return $.exit(out || 0);
		} catch(e){
			printError(e);
			return $.exit(e?.exitCode || 1);
		}
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
		return await runEval(argv, 0);
	}
	if(["-p", "--print"].includes(candidate)){
		const { runEval }= await import("./runEval.mjs");
		return await runEval(argv, 1);
	}
	if("--completion"===candidate){
		const { completion }= await import("./completion.mjs");
		return await completion(argv);
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
