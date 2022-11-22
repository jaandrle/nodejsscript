import { ShellString } from "shelljs";
import { $ } from "./$.js";
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
	
	if(!o.has("c")&&useColors(target)) messages= processColors(messages);
	const output= echoOutput(messages, o);
	if(o.has("S")) return ShellString(output);
	if(o.has("R")) return rewritableStart({ stream: process[target], output });
	
	process[target].write(output);
	return ShellString(output);
}
function echoOutput(messages, o){
	let output= formatWithOptions({ colors: !o.has("c"), compact: !o.has("P") }, ...messages.map(prepareTexts));
	if(!o.has("n")) output+= "\n";
	return output;
}
echo.use= function(options, ...messages){ return this(new EchoOptions(options), ...messages); };

echo.css= function(...styles_arr){
	const out= { unset: "unset:all" };
	let all= "";
	const styles_preprocessed= styles_arr.flatMap(function(style){
		let [ name_candidate, css ]= style.replace("}","").replaceAll(/[\.#]/g, "").split("{");
		return name_candidate.split(",").map(name=> {
			let pseudo;
			[ name, pseudo ]= name.trim().split(":");
			if(pseudo) css= css.replaceAll("content", "content-"+pseudo);
			return [ name, css ];
		});
	});
	for(const [ name, css ] of styles_preprocessed){
		if(name!=="*")
			out[name]= out[name] ? out[name]+css : css;
		else
			all+= css;
	}
	if(all) Object.keys(out).forEach(key=> key!=="unset" && (out[key]= all+";"+out[key]));
	return out;
};
echo.format= function(...messages){ return this(new EchoOptions("-Sn"), ...messages); };
echo.formatWithOptions= function(options, ...messages){ return this(new EchoOptions("-S"+options), ...messages); };

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
			ms[j]= processCSS(messages[++i])(msj);
		}
		out.push(ms.join(""));
	}
	return out;
}
import { inspect } from 'node:util';
const ansi_constants= (s=> ({
	"unset:all": s.reset, "display:none": s.hidden,
	"font-weight:bold": s.bold, "font-style:italic": s.italic,
	"text-decoration:underline": s.underline, "text-decoration:line-through": s.strikethrough,
	"animation:blink": s.blink,
	"color:black": s.black, "color:red": s.red, "color:green": s.green, "color:yellow": s.yellow, "color:blue": s.blue, "color:magenta": s.magenta, "color:cyan": s.cyan, "color:white": s.white, "color:gray": s.gray,
	"color:lightred": s.redBright, "color:lightgreen": s.greenBright, "color:lightyellow": s.yellowBright, "color:lightblue": s.blueBright, "color:lightmagenta": s.magentaBright, "color:lightcyan": s.cyanBright, "color:whitesmoke": s.whiteBright,
	"background:black": s.bgBlack, "background:red": s.bgRed, "background:green": s.bgGreen, "background:yellow": s.bgYellow, "background:blue": s.bgBlue, "background:magenta": s.bgMagenta, "background:cyan": s.bgCyan, "background:white": s.bgWhite, "background:gray": s.bgGray,
	"background:lightred": s.bgRedBright, "background:lightgreen": s.bgGreenBright, "background:lightyellow": s.bgYellowBright, "background:lightblue": s.bgBlueBright, "background:lightmagenta": s.bgMagentaBright, "background:lightcyan": s.bgCyanBright, "background:whitesmoke": s.bgEsmokeBright
}))(inspect.colors);
function processCSS(candidate= ""){
	if(typeof candidate !== "string") return m=> m.slice(2);
	if(candidate.indexOf(":")===-1) return m=> m.slice(2);
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
		.filter(c=> { const type= c.split(":")[0].trim(); if(filter[type]) return false; filter[type]= 1; return c.trim() && c.indexOf(":")!==-1; })
		.map(c=> {
			if(c.trim().indexOf("content-before")===0){
				before= c.split(":")[1].trim().replaceAll(/["']/g, "");
				return;
			}
			return ansi_constants[c.replaceAll(" ", "")];
		})
		.filter(Boolean);
	const css_pre= css.map(s=> s[0]);
	const css_after= css.map(s=> s[1]);
	return function(match){
		return left+`\x1B[${css_pre.join(';')}m`+before+match.slice(2)+`\x1B[${css_after.join(';')}m`;
	};
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
