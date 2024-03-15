import shelljs from "shelljs";
import plugin from "shelljs/plugin.js";
import escape from "shell-escape-tag";
import { ProcessPromise } from "./runA-utils.js";
import { ProcessOutput } from "./Error.js";
export { ProcessPromise, ProcessOutput };

const { ShellString }= shelljs;
shelljs.echo= ShellString;

plugin.register("read", read, { unix: false, canReceivePipe: false, wrapOutput: false });
plugin.register("xargs", xargs, { canReceivePipe: true, wrapOutput: false,
	cmdOptions: {
		I: 'needle',
		R: 'is_raw'
	}
});
plugin.register("$", $, { canReceivePipe: true, wrapOutput: false });
plugin.register("run", run, { unix: false, canReceivePipe: true, wrapOutput: false });
plugin.register("runA", runA, { unix: false, canReceivePipe: true, wrapOutput: false });
export default shelljs;

async function read(options= {}){
	const { stdin }= process;
	stdin.setEncoding('utf8');
	const has= Reflect.has.bind(null, options);
	const get= Reflect.get.bind(null, options);
	if(has("-p")) return promt(options, has, get);
	/** @type {AbortSignal|null} */
	const signal= options.signal instanceof global.AbortSignal ? options.signal : null;
	if(signal && signal.aborted) return;
	if(has("-n")){
		const line= await stdin[Symbol.asyncIterator]().next();
		return ShellString(line.value.slice(0, get("-n")));
	}
	let buf= $.stdin ? $.stdin.text("") : "";
	if(has("-d")){
		const needle= get("-d");
		for await (const chunk of stdin){
			if(signal && signal.aborted) return;
			const i= chunk.indexOf(needle);
			if(i!==-1) return ShellString(buf+chunk.slice(0, i));
			buf+= chunk;
		}
	}
	for await (const chunk of stdin){
		if(signal && signal.aborted) return;
		buf+= chunk;
	}
	return ShellString(buf);
};
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
	config_next= !config_next ? Object.assign({}, shelljs.config, { silent: true }) : Object.fromEntries(
		config_next.split("")
			.flatMap(c=> {
				switch(c.toLowerCase()){
					case "v": return [ [ "verbose", c!=="v" ] ];
					case "f": return [ [ "fatal", c!=="f" ] ];
					case "s": return [ [ "silent", c!=="s" ] ];
					case "g": return [ [ "noglob", c!=="g" ] ];
				}
				return [];
			})
	);
	return new Proxy(this, {
		get(target, p){
			return function(...args){
				const { silent, verbose, fatal }= shelljs.config;
				Object.assign(shelljs.config, config_next);
				const out= target[p].apply(target, args);
				Object.assign(shelljs.config, { silent, verbose, fatal });
				return out instanceof String && Reflect.has(out, "stdout") ? new shelljs.ShellString(out.stdout.replace(/\n$/g, ""), out.stderr, out.code) : out;
			};
		}
	});
}
function runArgumentsToCommand(pieces, args){
	if(typeof pieces === "string"){
		const [ vars= {}, options= {} ]= args;
		const { needle= /::([^:]+)::/g }= options;
		Reflect.deleteProperty(options, "needle");
		if(vars && Object.keys(vars).length)
			return [ pieces.replace(needle, function replace(_, key){
				return escape([ "" ], vars[key]);
			}), options ];
		else
			return [ pieces, options ];
	} else if(pieces.some((p)=> p == undefined)) {
		throw new Error("Malformed command");
	} else {
		return [ escape(pieces, ...args) ];
	}
}
/** @this {shelljs} */
function run(pieces, ...args){
	/* jshint ignore:start */
	const s= this || shelljs;
	/* jshint ignore:end *//* global s */
	const [ command, options= {} ]= runArgumentsToCommand(pieces, args);
	const { fatal, verbose }= shelljs.config;
	const is_fatal= fatal||options.fatal;
	if(is_fatal) shelljs.config.fatal= false;
	if(Reflect.has(options, "signal")){
		if( verbose||options.verbose )
			console.warn("AbortSignal is not supported by run.");
		Reflect.deleteProperty(options, "signal");
	}

	const out= s.exec(command, options);
	shelljs.config.fatal= fatal;
	if(!out.code || !is_fatal) return out;
	const { stderr, stdout, code }= out;
	throw new ProcessOutput({ is_async: false, message: stderr, stderr, stdout, code });
}
function runA(pieces, ...args){
	const [ command, options= {} ]= runArgumentsToCommand(pieces, args);
	const pipe= plugin.readFromPipe();
	if(pipe) options.pipe= pipe;
	return ProcessPromise.create(command, Object.assign({}, shelljs.config, options));
}

function promt(options, has, get){
	if(!get("-s")) options.output= process.stdout;
	return question(get("-p"), options).then(function(promt){
		if(get("-s")) echo();
		const chars= has("-n") ? get("-n") : ( has("-d") ? promt.indexOf(get("-d")) : -1 );
		return chars < 0 ? promt : promt.slice(0, chars);
	});
}
import { createInterface } from "node:readline";
function question(query= "", options= {}){
	query= String(query);
	if(!/\s$/.test(query)) query+= "\n"+echo.format('%c❯ ', "color:lightgreen");
	if(!options.output) echo.use("-n", query);
	
	const rl= createInterface({
		input: process.stdin,
		output: options.output,
		terminal: true,
		signal: options.signal,
		completer: !Array.isArray(options.completions) ? undefined : 
			function completer(line){
				const completions= options.completions;
				const hits= completions.filter((c) => c.startsWith(line));
				return [hits.length ? hits : completions, line];
			},
	});

	return new Promise((resolve, reject)=> {
		rl.on("SIGINT", ()=> { rl.close(); reject(); });
		rl.question(query,
			answer=> { rl.close(); resolve(answer); });
	});
}
