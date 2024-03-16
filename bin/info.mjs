/* global echo, $, s */
import url from "node:url";
import { join } from "node:path";
import { file_rc } from './config.mjs';
export async function printUsage(name){
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
		d=> d.trim()+"\n\nFor more information, please visit: "+info("homepage"),
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
	const { styles }= await import("./styles.mjs");
	const css= styles();
	echo("%c%s%c@%c%s",
		css.H+css.n, css.unset, css.v, n, v);
	echo(`%c${d}`,
		css.T);
	echo(`%cUsage%c:`,
		css.H);
	echo(`%c${n} <script.js|script.mjs>`,
		css.T);
	echo(`%c${n} [options] <script.js|script.mjs|expression>`,
		css.T);
	echo(`%cDetailed help%c:`,
		css.H);
	echo(`%c${n} --completion`,
		css.T);
	echo(`%c${n} --inspect`,
		css.T);
	echo(`%cOptions%c:`,
		css.H);
	echo("%c              <script.js|script.mjs>    run given script file",
		css.T);
	echo("%c             --eval, -e <expression>    similar to `node -e …`, evaluates given string",
		css.T);
	echo("%c            --print, -p <expression>    similar to `node -p …`, infact (for now?) it wraps argument by `echo` function (splits given string by ';' and wraps last non-empty part)",
		css.T);
	echo("%c    --inspect <script.js|script.mjs>    run given script in debug mode, see %c%s --inspect%c for more info",
		css.T, css.code, css.unset, n);
	echo("%c                   --interactive, -i    similar to `node -i`, opens REPL, the interactive mode",
		css.T);
	echo("%c                        --completion    register TAB completion for %c%s%c and your scripts, see %c%s --completion help%c for more info",
		css.T, css.n, css.unset, css.code, css.unset, n, n);
	echo("%c             --global-jsconfig [add]    woraround for type checking of non-package scripts",
		css.T);
	echo("%c                  --man <expression>    print quick documentation for given command",
		css.T);
	echo(`%c                       --version, -v    print current ${n} version`,
		css.T);
	echo("%c                          --help, -h    print this help",
		css.T);
	echo("%cExamples%c:",
		css.H);
	echo(`%c${n} ./script.js`,
		css.T);
	echo(`%c${n} --help`,
		css.T);
	echo(`%cls | ${n} -p '$.stdin.text().replaceAll("A", "AAAA")'`,
		css.T);
	echo(`%cls | ${n} -p '$.stdin.lines().filter(line=> line[0]==="R").map(line=> \`file: \${line}\`)'`,
		css.T);
	echo("%cUsage in scripts%c:",
		css.H);
	echo("%cJust start the file with: %c#!/usr/bin/env nodejsscript",
		css.T, css.code);
	echo("%c…and make the script file executable.",
		css.T);
	echo("%cLocation of the config file%c:",
		css.H);
	echo("%c"+file_rc,
		css.T + css.code);
	$.exit(0);
}
export function info(...keys){
	const info= s.$("-F").cat(url.fileURLToPath(join(import.meta.url, "../../package.json"))).xargs(JSON.parse);
	return keys.map(key=> Reflect.get(info, key));
}
