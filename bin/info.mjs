/* global echo, $, s */
import url from "node:url";
import { join } from "node:path";
import { file_rc } from './config.mjs';
export async function printUsage(){
	const [ n, v, d ]= info("name", "version", "description");
	const { styles }= await import("./styles.mjs");
	const css= styles();
	echo("%c%s%c@%c%s",
		css.H+css.n, css.unset, css.v, n, v);
	echo(`%c${d}`,
		css.T);
	echo(`%cUsage%c:`,
		css.H);
	echo(`%c${n} [options] <script>`,
		css.T);
	echo(`%cOptions%c:`,
		css.H);
	echo(`%c          --version, -v    print current ${n} version`,
		css.T);
	echo("%c             --help, -h    print help",
		css.T);
	echo("%c             --eval, -e    similar to `node -e …`",
		css.T);
	echo("%c            --print, -p    similar to `node -p …`, infact (for now?) it wraps argument by `echo` function (splits given string by ';' and wraps last non-empty part)",
		css.T);
	echo("%c              --inspect    run given script in debug mode, see %c%s --inspect%c for more info",
		css.T, css.code, css.unset, n);
	echo("%c           --completion    register TAB completion for %c%s%c and your scripts, see %c%s --completion help%c for more info",
		css.T, css.n, css.unset, css.code, css.unset, n, n);
	echo("%c--global-jsconfig [add]    woraround for type checking of non-package scripts",
		css.T);
	echo("%cExamples%c:",
		css.H);
	echo(`%c${n} script.js`,
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
	const info= s.cat(url.fileURLToPath(join(import.meta.url, "../../package.json"))).xargs(JSON.parse);
	return keys.map(key=> Reflect.get(info, key));
}
