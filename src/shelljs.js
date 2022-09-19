import shelljs, {ShellString} from "shelljs";
import plugin from "shelljs/plugin.js";

plugin.register("xargs", xargs, {
	canReceivePipe: true,
	wrapOutput: false,
	cmdOptions: {
		I: 'needle'
	}
});
plugin.register("$", $, {
	canReceivePipe: true,
	wrapOutput: false
});

export default shelljs;

function xargs({ needle }, ...args){
	if(!needle) needle= "{}";
	else needle= args.shift();
	const [ cmd, ...cmd_args ]= args;
	if(typeof cmd!=="function")
		plugin.error("xargs needs one of the `shelljs` commands as first argument");

	const pipe= plugin.readFromPipe();
	let replaced= 0;
	const args_final= cmd_args.map(a=> typeof a !== "string" ? a : a.replaceAll(needle, ()=> ( replaced+= 1, pipe )));
	if(!replaced) args_final.push(pipe);
	return cmd.apply(null, args_final);
}
function $(config_next){
	config_next= !config_next ? Object.assign({}, shelljs.config, { silent: true }) : plugin.parseOptions(config_next, {
		v: "verbose",
		f: "fatal",
		s: "silent"
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
