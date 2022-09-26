import { config, ShellString } from "shelljs";
import { formatWithOptions } from "node:util";
import __log from 'log-update-async-hook';
const { create: createLogUpdate }= __log;
/** @type {(arr: any[]|string, item: any)=> boolean} */
const contains= Array.prototype.contains ? Function.prototype.bind(Array.prototype.contains.call) : (arr, item)=> arr.indexOf(item) !== -1;
let rewritableCurr;

class EchoOptions extends String{
	constructor(options= "1"){ super(options.replaceAll(/[ -]/g, "")); return this; }
	has(needle){ return contains(this, needle); }
}

export function echo(options, ...messages){
	let target= "stdout";
	if(!arguments.length){
		process[target].write("\n");
		return ShellString("\n");
	}
	const has_options= options instanceof EchoOptions;
	const o= has_options ? options : new EchoOptions("1");
	if(!o.has("R")) rewritableEnd();
	if(o.has("r") && !messages.length) return ShellString("");
	if(o.has("2")) target= "stderr";
	if(!has_options) messages.unshift(options);
	
	let output= formatWithOptions({ colors: !o.has("c"), compact: !o.has("P") }, ...messages.map(prepareTexts));
	if(!o.has("n")) output+= "\n";
	if(o.has("R")) return rewritableStart({ stream: process[target], output });
	
	process[target].write(output);
	return ShellString(output);
}
echo.use= function(options, ...messages){ return this(new EchoOptions(options), ...messages); };

function rewritableStart({ output, stream= process.stdout, showCursor= false }= {}){
	if(!rewritableCurr)
		rewritableCurr= createLogUpdate(stream, { showCursor });
	rewritableCurr(output);
	return ShellString(output);
}
function rewritableEnd(type= "clear"){
	if(!rewritableCurr) return;
	rewritableCurr[type]();
	rewritableCurr= false;
}
function prepareTexts(v){
	if(v instanceof Error && !config.verbose) return String(v);
	if(v instanceof String && v.hasOwnProperty("stdout") && !config.verbose) return v.stdout.replace(/\n$/g, "");
	return v;
}
