import { ShellString } from "shelljs";
import { $ } from "./$.js";
import { formatWithOptions, css } from "css-in-console";
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
	
	const is_colors= useColors(target);
	const output= echoOutput(messages, o, is_colors);
	if(o.has("S")) return ShellString(output);
	if(o.has("R") && is_colors) return rewritableStart({ stream: process[target], output });
	
	process[target].write(output);
	return ShellString(output);
}
function echoOutput(messages, o, colors){
	let output= formatWithOptions({ colors: !o.has("c")&&colors, compact: !o.has("P") }, ...messages.map(prepareTexts));
	if(!o.has("n")) output+= "\n";
	return output;
}
echo.use= function(options, ...messages){ return this(new EchoOptions(options), ...messages); };
echo.format= function(...messages){ return this(new EchoOptions("-Sn"), ...messages); };
echo.formatWithOptions= function(options, ...messages){ return this(new EchoOptions("-S"+options), ...messages); };
echo.css= css;

function useColors(target){//?also levels, see supports-color, and ?$.isFIFO
	if($.is_colors!==-1) return $.is_colors;
	if("FORCE_COLORS" in $.env){
		const { FORCE_COLORS: f }= $.env;
		if(f==="false"||f==="0") return false;
		return true;
	}
	const { hasColors= ()=> false }= process[target];
	return hasColors();
}
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
	if(v instanceof Error && !$.is_verbose) return String(v);
	if(v instanceof String && v.hasOwnProperty("stdout") && !$.is_verbose)
		return typeof v.stdout!=="string" ? v.stdout : v.stdout.replace(/\n$/g, "");
	return v;
}
