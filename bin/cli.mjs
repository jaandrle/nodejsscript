#!/usr/bin/env node
import { join, resolve } from "node:path";
import { argv } from "node:process";
import url from "node:url";
import { randomUUID } from "node:crypto";
import "../index.js";/* global echo, $, s, pipe */
import { stdin as key_stdin } from "../src/keys.js";

process.on('uncaughtException', printError);
(async function main(){
	const candidate= argv.splice(2, 1)[0] || "--help";
	let filepath_tmp;
	if(candidate[0]==="-")
		filepath_tmp= handleMyArgvs(candidate);
	const is_tmp= filepath_tmp !== undefined;

	const filepath= is_tmp ?
		filepath_tmp : (
		candidate.startsWith('/') ?
			candidate :
			( candidate.startsWith('file:///') ?
				url.fileURLToPath(candidate) :
				resolve(candidate) ));
	argv[1]= filepath;
	$.push(...argv.slice(1));
	await $.stdin[key_stdin]();
	try{
		if(!s.test("-f", filepath)) $.error(`File '${candidate}' not found.`);
		await import(url.pathToFileURL(filepath).toString());
		if(is_tmp) s.rm("-f", filepath_tmp);
	} catch(e){
		if(is_tmp) s.rm("-f", filepath_tmp);
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
	if(['-e', '--eval'].includes(candidate))
		return runEval(0);
	if(['-p', '--print'].includes(candidate))
		return runEval(1);
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
	const css= echo.css`
		* { margin-left: 2; }
		.n { color: lightblue; }
		.v { color: lightgreen; margin-left: 0; }
		.code { font-style: italic; margin-left: 0; }
		.H { color: yellow; }
		.T { margin-left: 4; }
	`;
	echo("%c%s%c@%c%s", css.n, css.unset, css.v, n, v);
	echo(`%c${d}`, css.T);
	echo(`%cUsage%c:`, css.H);
	echo(`%c${n} [options] <script>`, css.T);
	echo(`%cOptions%c:`, css.H);
	echo(`%c          --version, -v    print current ${n} version`, css.T);
	echo("%c             --help, -h    print help", css.T);
	echo("%c             --eval, -e    similar to `node -e …`", css.T);
	echo("%c            --print, -p    similar to `node -p …`, infact (for now?) it wraps argument by `echo` function (splits givent string by ';' and wraps last non-empty part)", css.T);
	echo("%c--global-jsconfig [add]    woraround for type checking of non-package scripts", css.T);
	echo("%cExamples%c:", css.H);
	echo(`%c${n} script.js`, css.T);
	echo(`%c${n} --help`, css.T);
	echo(`%cls | ${n} -p '$.stdin.text().replaceAll("A", "AAAA")'`, css.T);
	echo(`%cls | ${n} -p '$.stdin.lines().filter(line=> line[0]==="R").map(line=> \`file: \${line}\`)'`, css.T);
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
function runEval(is_print){
	let input= argv.splice(2, 1)[0];
	if(is_print){
		let out_arr= input.split(";").reverse();
		if(out_arr[0].trim()==="") out_arr.shift();
		let pre= "";
		let out= out_arr[0].trim();
		if(out[0]==="}"){
			pre= "}";
			out= out.slice(1).trim();
		}
		const input_rest= argv.slice(2).join(",");
		if(input_rest.trim()!=="") out= `pipe(${input_rest})(${out})`;
		out_arr[0]= `${pre} echo(${out})`;
		input= out_arr.reverse().join(";");
	}
	const filepath= $.xdg.temp`nodejsscript-${randomUUID()}.mjs`;
	s.echo(input).to(filepath);
	return filepath;
}
