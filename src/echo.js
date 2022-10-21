import { ShellString } from "shelljs";
import { $ } from "./$.js";
import support_colors from "supports-color";
import { formatWithOptions } from "node:util";
import __log from 'log-update-async-hook';
const { create: createLogUpdate }= __log;
/** @type {(arr: any[]|string, item: any)=> boolean} */
const contains= Array.prototype.contains ? Function.prototype.bind(Array.prototype.contains.call) : (arr, item)=> arr.indexOf(item) !== -1;
let rewritableCurr;
/** @see https://gist.github.com/rauschma/8698180ae64428badd498599fffd5069 */
const ansi_constants = {
	"unset:all": 0, "display:none": 8,
	"font-weight:bold": 1, "font-style:italic": 3,
	"text-decoration:underline": 4, "text-decoration:line-through": 9,
	"animation:blink": 5,
	"color:black": 30, "color:red": 31, "color:green": 32, "color:yellow": 33, "color:blue": 34, "color:magenta": 35,
	"color:cyan": 36, "color:white": 37, "color:gray": 90, "color:lightred": 91, "color:lightgreen": 92,
	"color:lightyellow": 93, "color:lightblue": 94, "color:lightmagenta": 95, "color:lightcyan": 96, "color:whitesmoke": 97,
	"background:black": 40, "background:red": 41, "background:green": 42, "background:yellow": 43, "background:blue": 44,
	"background:magenta": 45, "background:cyan": 46, "background:white": 47, "background:gray": 100,
	"background:lightred": 101, "background:lightgreen": 102, "background:lightyellow": 103, "background:lightblue": 104,
	"background:lightmagenta": 105, "background:lightcyan": 106, "background:whitesmoke": 107
};

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
	
	if(!o.has("c")&&useColors(target)) messages= processColors(messages);
	let output= formatWithOptions({ colors: !o.has("c"), compact: !o.has("P") }, ...messages.map(prepareTexts));
	if(!o.has("n")) output+= "\n";
	if(o.has("R")) return rewritableStart({ stream: process[target], output });
	
	process[target].write(output);
	return ShellString(output);
}
echo.use= function(options, ...messages){ return this(new EchoOptions(options), ...messages); };
echo.css= function(...styles_arr){
	const out= { unset: "unset:all" };
	let all= "";
	for(const style of styles_arr){
		let [ name, css ]= style.replace("}","").replaceAll(/[\.#]/g, "").split("{");
		let pseudo;
		[ name, pseudo ]= name.trim().split(":");
		if(pseudo) css= css.replaceAll("content", "content-"+pseudo);
		if(name!=="*")
			out[name]= out[name] ? out[name]+css : css;
		else
			all+= css;
	}
	if(all) Object.keys(out).forEach(key=> key!=="unset" && (out[key]= all+";"+out[key]));
	return out;
};

function useColors(target){ return $.is_colors===-1 && support_colors[target] || $.is_colors; }
function processColors(messages){
	const out= [];
	const c= "%c", cr= new RegExp(`(?<!%)(?=${c})`);
	for(let i=0, { length }= messages; i<length; i++){
		const m= messages[i];
		if(typeof m !== "string"||m.indexOf(c)===-1){ out.push(m); continue; }
		const ms= m.split(cr);
		for(let j=0, { length: jl }= ms; j<jl; j++){
			const msj= ms[j];
			if(msj.indexOf(c)===-1) continue;
			ms[j]= msj.replace(c, processCSS(messages[++i]))+"\x1B[0m";
		}
		out.push(ms.join(""));
	}
	return out;
}
function processCSS(candidate= ""){ //TODO?: https://github.com/doowb/ansi-colors/blob/master/index.js
	if(typeof candidate !== "string") return "";
	if(candidate.indexOf(":")===-1) return "";
	const filter= {};
	let css= candidate.split(";").reverse();
	const left_rule= css.find(c=> c.split(":")[0].trim()==="margin-left");
	let left= "";
	if(left_rule){
		filter["margin-left"]= 1;
		left= " ".repeat(Number(left_rule.split(":")[1]));
	}
	let before= "";
	css= css
		.filter(c=> { const type= c.split(":")[0]; if(filter[type]) return false; filter[type]= 1; return true; })
		.map(c=> {
			if(c.trim().indexOf("content-before")===0){
				before= c.split(":")[1].trim().replaceAll(/["']/g, "");
				return;
			}
			return ansi_constants[c.replaceAll(" ", "")];
		})
		.filter(Boolean);
	return `${left}\x1B[${css.join(';')}m${before}`;
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
	if(v instanceof String && v.hasOwnProperty("stdout") && !$.is_verbose) return v.stdout.replace(/\n$/g, "");
	return v;
}
