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
	$.length= 0;
	$.push(...argv.slice(1));
	await $.stdin[key_stdin]();
	try{
		if(!s.test("-f", filepath)) $.error(`File '${candidate}' not found.`);
		$.is_fatal= is_fatal;
		await importRC();
		await import(url.pathToFileURL(filepath).toString());
		if(is_tmp) s.rm("-f", filepath_tmp);
	} catch(e){
		if(is_tmp) s.rm("-f", filepath_tmp);
		if($.is_verbose) Error.print(e, 1);
		else if(!$.is_silent) printError(e);
		$.exit(e?.exitCode || 1);
	}
})();

async function importRC(){
	if(!config_env.rc || $.is_local)
		return;
	const c= await import("./config.mjs");
	const {
		uncaughtException }= await c.importRC();
	
	if(uncaughtException) printError= uncaughtException;
}
async function handleMyArgvs(candidate){
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
		await importRC();
		return runEval(argv, 0);
	}
	if(["-p", "--print"].includes(candidate)){
		const { runEval }= await import("./runEval.mjs");
		await importRC();
		return runEval(argv, 1);
	}
	if("--completion"===candidate){
		const { completion }= await import("./completion.mjs");
		return completion(argv);
	}
	if(["-i", "--interactive"].includes(candidate)){
		return await startRepl(argv);
	}
}
function printError(e){
	if(e instanceof $.Error)
		return console.error(e.message);
	Error.print(e);
}

import { inspect } from "node:util";
import { file_repl } from "./config.mjs";
function startRepl(){ return new Promise(async function(){
	echo("Use `.help` for help, use `_` to reuse last command result.");
	const repl= await import("node:repl");
	const r= repl.start({
		prompt: echo.format("%c❯ ", "color:lightgreen;"),
		replMode: repl.REPL_MODE_STRICT,
		useGlobal: true,
		preview: true,
		writer(res){
			const is_shellScript= typeof res==="object" && "stdout" in res;
			if(is_shellScript && !res.code){
				const is_string= !Array.isArray(res);
				console.log("Shell"+(is_string ? "String" : "Array"));
				res= is_string ? res.stdout : [...res];
			}
			return inspect(res, { colors: $.is_colors, compact: !$.is_verbose });
		}
	});
	const completer= r.completer.bind(r);
	const ls_tmp= { pwd: "", ls: [] };
	r.completer= function(line, callback){
		completer.call(null, line, function(err, [ completions= [], line_ ]) {
			if(err) return callback(err, [ completions, line_ ]);
			let pwd= ".";
			if(/(\(|,)\s*"[^"]*\/[^"]*$/.test(line)){
				pwd= line.slice(line.lastIndexOf('"')+1, line.lastIndexOf("/"));
				if(!pwd) pwd= "/";
			}
			if(pwd!==ls_tmp.pwd){
				ls_tmp.pwd= pwd;
				const map= pwd==="." ? l=> `"${l}"` : pwd==="/" ? l=> `"/${l}"` : l=> `"${pwd}/${l}"`;
				try {
					ls_tmp.ls= s.ls(pwd).concat("..").filter(l=> l!==pwd).map(map);
				} catch(_){
					ls_tmp.ls= [];
				}
			}
			const { ls }= ls_tmp;
			let todo= [];
			if(/(\(|,)\s*"[^"]*$/.test(line)){
				const candidate= line.slice(line.lastIndexOf('"'));
				todo= ls.filter(l=> l.indexOf(candidate)===0).map(l=> line+l.slice(candidate.length));
			} else if(line.at(-1)==="("){
				todo= ls.map(l=> line+l);
			}
			callback(null, [ completions.concat(todo), line ]);
			
		})
	}
	r.setupHistory(file_repl, () => {});
	r.defineCommand("man", {
		help: "Show help texts for nodejscript functions such as `s.cat`, `s.isMain`, `echo`, ….",
		async action(expresion){
			const { printUsage }= await import("./info.mjs");
			await printUsage(expresion, false);
			this.displayPrompt();
		}
	});
	r.on("exit", $.exit.bind(null, 0));
}); }
