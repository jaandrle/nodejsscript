#!/usr/bin/env node
import { join, resolve } from "node:path";
import { argv } from "node:process";
import url from "node:url";
import "../index.js";/* global echo, exit, $, s, style, pipe */

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
		return exit(0);
	}
	if(['--help', '-h'].includes(candidate))
		return printUsage();
	if("--global-jsconfig"===candidate)
		return jsconfigTypes();
}
function printError(e){
	if(e instanceof $.Error){
		console.error(e.message);
		return exit(1);
	}
	Error.print(e);
	exit(e.exitCode || 1);
}
function printUsage(){
	const S= style;
	S.theme({
		n: S.blueBright, v: S.greenBright, code: S.italic,
		H: t=> S.yellow(t)+":", T: t=> "  "+t
	});
	const [ n, v, d ]= info("name", "version", "description");
	echo([
		`${S.n(n)}@${S.v(v)}`,
		S.T(d),
		S.H("Usage"),
		S.T(`${n} [options] <script>`),
		S.H("Options"),
		S.T("          --version, -v    print current zx version"),
		S.T("             --help, -h    print help"),
		S.T("--global-jsconfig [add]    woraround for type checking of non-package scripts"),
		S.H("Examples"),
		S.T(`${n} script.js`),
		S.T(`${n} --help`),
		S.H("Usage in scripts"),
		S.T("Just start the file with: "+S.code('#!/usr/bin/env nodejsscript'))
	].map(t=> "  "+t).join("\n"));
	exit(0);
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
	exit(0);
}
