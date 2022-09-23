import { ShellString } from "shelljs";
import { echo } from "./echo.js";
export async function read(options= {}){
	const { stdin }= process;
	stdin.setEncoding('utf8');
	const has= Reflect.has.bind(null, options);
	const get= Reflect.get.bind(null, options);
	if(has("-p")) return promt(options, has, get);
	if(has("-n")){
		const line= await stdin[Symbol.asyncIterator]().next();
		return ShellString(line.value.slice(0, get("-n")));
	}
	let buf= "";
	if(has("-d")){
		const needle= get("-d");
		for await (const chunk of stdin){
			const i= chunk.indexOf(needle);
			if(i!==-1) return ShellString(buf+chunk.slice(0, i));
			buf+= chunk;
		}
	}
	for await (const chunk of stdin)
		buf+= chunk;
	return ShellString(buf);
}

function promt(options, has, get){
	if(!get("-s")) options.output= process.stdout;
	return question(get("-p"), options).then(function(promt){
		if(get("-s")) echo();
		const chars= has("-n") ? get("-n") : ( has("-d") ? promt.indexOf(get("-d")) : -1 );
		return ShellString(chars < 0 ? promt : promt.slice(0, chars));
	});
}
import style from "ansi-colors";
import { createInterface } from "node:readline";
function question(query= "", options= {}){
	query= String(query);
	if(!/\s$/.test(query)) query+= "\n"+style.greenBright.bold('❯ ');
	if(!options.output) echo.use("-n", query);
	
	const rl= createInterface({
		input: process.stdin,
		output: options.output,
		terminal: true,
		completer: !Array.isArray(options.completions) ? undefined : 
			function completer(line){
				const completions= options.completions;
				const hits= completions.filter((c) => c.startsWith(line));
				return [hits.length ? hits : completions, line];
			},
	});

	return new Promise(resolve=>
		rl.question(query,
			answer=> { rl.close(); resolve(answer); }));
}
