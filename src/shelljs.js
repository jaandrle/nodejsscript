import shelljs from "shelljs";
import plugin from "shelljs/plugin.js";
import escape from "shell-escape-tag";

plugin.register("xargs", xargs, {
	canReceivePipe: true,
	wrapOutput: false,
	cmdOptions: {
		I: 'needle',
		R: 'is_raw'
	}
});
plugin.register("$", $, {
	canReceivePipe: true,
	wrapOutput: false
});

export default shelljs;

function xargs({ needle, is_raw }, ...args){
	if(!needle) needle= "{}";
	const [ cmd, ...cmd_args ]= args;
	if(typeof cmd!=="function")
		plugin.error("xargs needs one of the `shelljs` commands as first argument");

	const pipe= readFromPipe(is_raw);
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
