#!/usr/bin/env node
import { join, resolve } from "node:path";
import { argv } from "node:process";
import url from "node:url";
import "../index.js";/* global echo, $, s, pipe */

process.on('uncaughtException', printError);
(async function main(){
	const candidate= argv.splice(2, 1)[0];
	if(candidate[0]==="-") handleMyArgvs(candidate);

	const filepath= candidate.startsWith('/') ? candidate : ( candidate.startsWith('file:///') ? url.fileURLToPath(candidate) : resolve(candidate) );
	argv[1]= filepath;
	$.push(...argv.slice(1));
	if($.isFIFO(0)) $.stdin= await $.read();
	try{
		if(!s.test("-f", filepath)) $.error(`File '${candidate}' not found.`);
		await import(url.pathToFileURL(filepath).toString());
	} catch(e){
		printError(e);
	}
})();

function handleMyArgvs(candidate){
	if(['--version', '-v', '-V'].includes(candidate)){
		echo(info("version")[0]);
		return $.exit(0);
	}
	if(['--help', '-h'].includes(candidate))
		return printUsage();
	if("--global-jsconfig"===candidate)
		return jsconfigTypes();
}
function printError(e){
	if(e instanceof $.Error){
		console.error(e.message);
		return $.exit(1);
	}
	Error.print(e);
	$.exit(e.exitCode || 1);
}
function printUsage(){
	const [ n, v, d ]= info("name", "version", "description");
	const css= echo.css(
		"* { margin-left: 2; }",
		".n { color: lightblue; }",
		".v { color: lightgreen; margin-left: 0; }",
		".code { font-style: italic; margin-left: 0; }",
		".H { color: yellow; }",
		".T { margin-left: 4; }"
	);
	echo(`%c${n}@%c${v}`, css.n, css.v);
	echo(`%c${d}`, css.T);
	echo(`%cUsage%c:`, css.H);
	echo(`%c${n} [options] <script>`, css.T);
	echo(`%cOptions%c:`, css.H);
	echo("%c          --version, -v    print current zx version", css.T);
	echo("%c             --help, -h    print help", css.T);
	echo("%c--global-jsconfig [add]    woraround for type checking of non-package scripts", css.T);
	echo("%cExamples%c:", css.H);
	echo(`%c${n} script.js`, css.T);
	echo(`%c${n} --help`, css.T);
	echo("%cUsage in scripts%c:", css.H);
	echo("%cJust start the file with: %c#!/usr/bin/env nodejsscript", css.T, css.code);
	$.exit(0);
}
function info(...keys){
	const info= s.cat(url.fileURLToPath(join(import.meta.url, "../../package.json"))).xargs(JSON.parse);
	return keys.map(key=> Reflect.get(info, key));
}
function jsconfigTypes(){
	const jsconfig_file= pipe(
		f=> f ? f : '{"include":[]}',
		JSON.parse
	)(s.$().cat("jsconfig.json").stdout);
	const include= new Set(jsconfig_file.include.filter(v=> v.indexOf("nodejsscript")===-1));
	argv.slice(3).forEach(f=> include.add(f));
	jsconfig_file.include= Array.from(include);
	if(argv[2]==="add")
		jsconfig_file.include.unshift(join(argv[1], "../../lib/node_modules/nodejsscript/index.d.ts"));
	echo.use("-P", jsconfig_file);
	pipe(
		o=> JSON.stringify(o, undefined, 2),
		s.ShellString,
		s=> s.to("jsconfig.json")
	)(jsconfig_file);
	$.exit(0);
}
