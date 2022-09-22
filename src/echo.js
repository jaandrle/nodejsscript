import { config } from "./config.js";
import { formatWithOptions } from "node:util";
import __log from 'log-update-async-hook';
const { create: createLogUpdate }= __log;
/** @type {(arr: any[]|string, item: any)=> boolean} */
const contains= Array.prototype.contains ? Function.prototype.bind(Array.prototype.contains.call) : (arr, item)=> arr.indexOf(item) !== -1;
let rewritableCurr;

export function echo(options, ...messages){
	let target= "stdout";
	if(!options) return process[target].write("\n");
	const has_options= typeof options === "string" && options[0]==="-";
	const has= prepareChecks(has_options, options, "1");
	if(!has("R")) rewritableEnd();
	if(has("r") && !messages.length) return;
	if(has("2")) target= "stderr";
	if(!has_options) messages.unshift(options);
	
	let output= formatWithOptions({ colors: !has("c"), compact: !has("P") }, ...messages.map(prepareTexts));
	if(!has("n")) output+= "\n";
	if(has("R")) return rewritableStart({ stream: process[target], output });
	
	process[target].write(output);
	return output;
}

function rewritableStart({ output, stream= process.stdout, showCursor= false }= {}){
	if(!rewritableCurr)
		rewritableCurr= createLogUpdate(stream, { showCursor });
	rewritableCurr(output);
}
function rewritableEnd(type= "clear"){
	if(!rewritableCurr) return;
	rewritableCurr[type]();
	rewritableCurr= false;
}
function prepareChecks(has_options, options, init= ""){
	if(!has_options || options[1]==="-")
		return contains.bind(null, init);
	options= options.replaceAll(/[ -]/g, "");
	return contains.bind(null, options);
}
function prepareTexts(v){
	if(v instanceof Error && config.verbose) return v;
	return  String(v)==="[object Object]" ? v : String(v).replaceAll("\t", "    ");
}
