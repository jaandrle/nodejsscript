/* global echo, $, s */
import url from "node:url";
import { join } from "node:path";
import { file_rc } from './config.mjs';
export async function printUsage(name){
	if(!name){
		const [ n ]= info("name");
		const { css, echoOption, echoHead }= await import("./styles.mjs");
		await echoHead("--man <expression>");
		echo("%cUse to get quick overview of nodejsscript commands and their usage.", css.T);
		echo("%cUsage%c:", css.H);
		echo(`%c${n} --man <namespace.>`, css.T);
		echo(`%c${n} --man [namespace.]<function>`, css.T);
		echo("%cOption%c:", css.H);
		echoOption("<namespace.>",
			"Lists all commands in <namespace>");
		echoOption("[namespace.]<function>",
			"Prints usage of <function>");
		echo("%cExamples%c:", css.H);
		echo(`%c${n} --man s.`, css.T);
		echo(`%c${n} --man s.cat`, css.T);
		echo("%cNote%c:", css.H);
		echo("%cYou can use this also in REPL with %c.man <expression>", css.T, css.code);
		return 0;
	}
	const docs= s.cat(new URL("../man.md", import.meta.url));
	if(name.endsWith(".")){
		const candidates= docs.split("\n")
			.filter(line=> line.startsWith("### "+name));
		if(!candidates.length) throw new Error("Not found: "+name);
		candidates.forEach(line=> console.log(line.slice(line.indexOf(" ")+1)));
		return 0;
	}
	const i_start= docs.indexOf("### "+name);
	pipe(
		d=> i_start===-1 ? (()=> { throw new Error("Not found: "+name) })() : d.slice(i_start, sectionEnd(docs, i_start, name)),
		d=> d.trim()+"\n\nFor more information, please visit: "+homeurl(),
		d=> console.log(d)
	)(docs);
	return 0;
}
function sectionEnd(docs, i_start, name){
	const candidate= new RegExp(`\n### (?!${name.replace("$", "\\$")}\\()`).exec(docs.slice(i_start))?.index;
	if(!candidate) return docs.length;
	return candidate+i_start;
}
export async function printCliUsage(){
	const [ n, v, d ]= info("name", "version", "description");
	const { css, echoOption }= await import("./styles.mjs");
	const arg_script= "script.(m)js";
	echo(`%c${n}%c@%c${v}`, css.H+css.n, css.unset, css.v);
	echo(`%c${d}`, css.T);
	echo(`%cUsage%c:`, css.H);
	echo(`%c${n} <${arg_script}>`, css.T);
	echo(`%c${n} [options] <${arg_script}|expression>`, css.T);
	echo(`%cOptions%c:`, css.H);
	const more= {
		text: (arg)=> `%c(use without ${arg} for more info)%c`,
		css: [ css.H, css.unset ],
	};
	echoOption(`<${arg_script}>`,
		"run given script file");
	echoOption("--eval, -e <expression>",
		"similar to %cnode -e …%c — evaluates given string "+more.text("expression"),
		css.code, css.unset, ...more.css);
	echoOption("--print, -p <expression>",
		"similar to %cnode -p …%c — evaluates given string "+more.text("expression"),
		css.code, css.unset, ...more.css);
	echoOption(`--inspect <${arg_script}>`,
		"run given script in debug mode "+more.text("script file"), ...more.css);
	echoOption("--interactive, -i",
		"similar to %cnode -i%c — opens REPL, the interactive mode",
		css.code, css.unset);
	echoOption("--completion <...args>",
		"register TAB completion for %c%s%c and your scripts "+more.text("args"),
		css.n, css.unset, ...more.css, n);
	echoOption("--man <expression>",
		"print quick usage for given command "+more.text("expression"), ...more.css);
	echoOption("--global-jsconfig [add] <s>",
		"woraround for type checking of non-package scripts");
	echoOption("--version, -v",
		`print current ${n} version`);
	echoOption("--help, -h",
		"print this help");
	echo(`%cDetailed help ${more.text("any other arguments")}%c:`, css.H, ...more.css);
	echo(`%c${n} --print`, css.T);
	echo(`%c${n} --eval`, css.T);
	echo(`%c${n} --completion`, css.T);
	echo(`%c${n} --inspect`, css.T);
	echo(`%c${n} --man`, css.T);
	echo("%cExamples%c:", css.H);
	echo(`%c${n} ./script.js`, css.T);
	echo(`%c${n} --help`, css.T);
	echo(`%cls | ${n} -p '$.stdin.text().replaceAll("A", "AAAA")'`, css.T);
	echo(`%cls | ${n} -p '$.stdin.lines().filter(line=> line[0]==="R").map(line=> \`file: \${line}\`)'`, css.T);
	echo("%cUsage in scripts%c:", css.H);
	echo("%cJust start the file with: %c#!/usr/bin/env nodejsscript", css.T, css.code);
	echo("%c…and make the script file executable.", css.T);
	echo("%cLocation of the config file%c:", css.H);
	echo("%c"+file_rc, css.T + css.code);
	echo("%cMore info/docs%c:", css.H);
	echo("%c"+homeurl(), css.T + css.url);
	$.exit(0);
}
export function info(...keys){
	const info= s.$("-F").cat(url.fileURLToPath(join(import.meta.url, "../../package.json"))).xargs(JSON.parse);
	return keys.map(key=> Reflect.get(info, key));
}
function homeurl(){ return info("homepage", "version").join("/tree/v"); }
