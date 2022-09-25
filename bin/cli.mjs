#!/usr/bin/env node
import { join, resolve } from "node:path";
import { argv } from "node:process";
import url from "node:url";
import "../index.js";/* global echo, exit, cli, s, style */

(async function main(){
	const candidate= argv.splice(2, 1)[0];
	if(candidate[0]==="-") handleMyArgvs(candidate);

	const filepath= candidate.startsWith('/') ? candidate : ( candidate.startsWith('file:///') ? url.fileURLToPath(candidate) : resolve(candidate) );
	argv[1]= filepath;
	try{
		if(!s.test("-f", filepath)) cli.error(`File '${candidate}' not found.`);
		await import(url.pathToFileURL(filepath).toString());
	} catch(e){
		const error= e instanceof cli.Error ? e.message : e;
		console.error(error);
		exit(1);
	}
})();

function handleMyArgvs(candidate){
	if(['--version', '-v', '-V'].includes(candidate)){
		echo(info("version")[0]);
		return exit(0);
	}
	if(['--help', '-h'].includes(candidate))
		return printUsage();
}
function printUsage(){
	style.theme({ n: style.blueBright, v: style.greenBright, info: style.yellow, code: style.italic });
	const [ n, v, d ]= info("name", "version", "description");
	echo(`
 ${style.n(n)}@${style.v(v)}
	${d}
 ${style.info("Usage")}:
	${n} [options] <script>
 ${style.info('Options')}:
	--version, -v       print current zx version
	--help, -h          print help
 ${style.info('Examples')}:
	${n} script.js
	${n} --help
 ${style.info('Usage in scripts')}:
	Just start the file with: ${style.code('#!/usr/bin/env nodejsscript')}
`);
	exit(0);
}
function info(...keys){
	const info= s.cat(url.fileURLToPath(join(import.meta.url, "../../package.json"))).xargs(JSON.parse);
	return keys.map(key=> Reflect.get(info, key));
}
