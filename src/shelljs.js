import shelljs from "shelljs";
import plugin from "shelljs/plugin.js";
import escape from "shell-escape-tag";
import { ProcessPromise, ProcessOutput } from "./runA-utils.js";
export { ProcessPromise, ProcessOutput };

shelljs.echo= shelljs.ShellString;

plugin.register("xargs", xargs, { canReceivePipe: true, wrapOutput: false,
	cmdOptions: {
		I: 'needle',
		R: 'is_raw'
	}
});
plugin.register("$", $, { canReceivePipe: true, wrapOutput: false });
plugin.register('run', run, { unix: false, canReceivePipe: true, wrapOutput: false });
plugin.register('runA', runA, { unix: false, canReceivePipe: true, wrapOutput: false });
export default shelljs;

function xargs({ needle, is_raw }, ...args){
	if(!needle) needle= "{}";
	const [ cmd, ...cmd_args ]= args;
	if(typeof cmd!=="function")
		plugin.error("xargs needs one of the `shelljs` commands as first argument");

	const pipe= readFromPipe(is_raw || cmd!==shelljs.run);
	let replaced= 0;
	const args_final= cmd_args.map(a=> typeof a !== "string" ? a : a.replaceAll(needle, ()=> ( replaced+= 1, pipe )));
	if(!replaced) args_final.push(pipe);
	return cmd.apply(null, args_final);
}
function readFromPipe(is_raw){
	const candidate= plugin.readFromPipe();
	if(is_raw || typeof candidate !== "string") return candidate;
	return escape(["", ""], plugin.readFromPipe());
}
function $(config_next){
	config_next= !config_next ? Object.assign({}, shelljs.config, { silent: true }) : plugin.parseOptions(config_next, {
		V: "verbose",
		F: "fatal",
		S: "silent",
		g: "noglob"
	});
	return new Proxy(this, {
		get(target, p){
			return function(...args){
				const { silent, verbose, fatal }= shelljs.config;
				Object.assign(shelljs.config, config_next);
				const out= target[p].apply(target, args);
				Object.assign(shelljs.config, { silent, verbose, fatal });
				return out instanceof String && Reflect.has(out, "stdout") ? new shelljs.ShellString(out.replace(/\n$/g, ""), out.stderr, out.code) : out;
			};
		}
	});
}
function runArgumentsToCommand(from, pieces, args){
	if(typeof pieces === "string"){
		const [ vars= {}, options= {} ]= args;
		const { needle= /::([^:]+)::/g }= options;
		Reflect.deleteProperty(options, "needle");
		if(Object.keys(vars).length)
			return [ pieces.replace(needle, function replace(_, key){
				return escape([ "" ], [ vars[key] ]);
			}), options ];
		else
			return [ pieces ];
	} else if(pieces.some((p)=> p == undefined)) {
		throw new Error(`Malformed command at ${from}`);
	} else {
		return [ escape(pieces, args) ];
	}
}
/** @this {shelljs} */
function run(pieces, ...args){
	/* jshint ignore:start */
	const s= this || shelljs;
	/* jshint ignore:end *//* global s */
	const from= new Error().stack.split(/^\s*at\s/m).find(l=> l.indexOf("async main")===0 || l.indexOf("main")===0).trim();
	const [ command, options= {} ]= runArgumentsToCommand(from, pieces, args);
	try {
		return s.exec(command, options);
	} catch(e){
		const err= new Error(e.message.split("\n").slice(0, 1).join("\n")+"\n    at "+from);
		throw err;
	}
}
function runA(pieces, ...args){
	const from= new Error().stack.split(/^\s*at\s/m).find(l=> l.indexOf("async main")===0 || l.indexOf("main")===0).trim();
	const [ command, options= {} ]= runArgumentsToCommand(from, pieces, args);
	const pipe= plugin.readFromPipe();
	if(pipe) options.pipe= pipe;
	return ProcessPromise.create(command, from, Object.assign({}, shelljs.config, options));
}
