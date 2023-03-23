/* global echo, $, s, pipe */
import { styles } from './styles.mjs';
import { info } from './info.mjs';
import { completions as config, readCompletions, updateCompletions } from './config.mjs';
export function completion(argv){
	const option= argv[2];
	const script_name= info("name")[0];
	if(typeof option==="undefined" || [ "help", "--help", "-h" ].includes(option)){
		const css= styles();
		echo(`%cUsage:\n%c%c${script_name}%c --completion [options]`, css.H, css.T, css.n);
		echo("%cOptions%c:", css.H);
		echo("%c                    help	Print this help", css.T);
		echo("%c                    bash	Output bash completion script.", css.T);
		echo(`%c                        	Add %ceval "$(${script_name} --completion bash)"%c to your '.bashrc' file.`, css.T, css.code);
		echo("%cregister <target> [name]	This enable completion for custom script created with nodejsscript (using %c$.api%c).", css.T, css.code);
		echo(`%c                        	The <target> reffers to script itself, the [name] (defaults to <target>) to text triggering the completion.`, css.T);
		echo("%c           remove <name>	This remove completion for custom script previously registered by <name>.", css.T, css.code);
		echo(`%c                  config	Returns location of the completions config file.`, css.T);
		$.exit(0);
	}
	if("config"===option)
		return $.exit(0, echo(config));
	if("remove"===option)
		return remove(argv);
	if("register"===option)
		return register(argv);
	$.is_color= 0;
	if("complete"===option)
		return complete(script_name, argv);
	if("bash"===option)
		return bash(script_name);
}

function complete(script_name, argv){
	const [ trigger, level, now, prev, first ]= argv.slice(3);
	const level_num= level - 2;
	const matches= arr=> {
		const out= arr.filter(item=> item.indexOf(now)===0);
		if(out.length) return out.join(" ");
		const now_= now.startsWith("'") || now.startsWith('"') ? now.slice(1) : now;
		const now_ls= now.includes("/") ? now_.slice(0, now_.lastIndexOf("/")+1) : undefined;
		const ls= now_ls ? s.ls(now_ls).map(r=> now_ls+r) : s.ls();
		if(ls.code) return "";
		return ls.filter(item=> item.indexOf(now_)===0).join(" ");
	};
	const resolve= arr=> { echo(matches(arr)); return $.exit(0); };
	if(script_name===trigger){
		if(!level_num && !now?.includes("/"))
			return resolve([ "--completion", "--help", "--version", "--eval", "--print", "--global-jsconfig" ]);
		if("--completion"===prev)
			return resolve([ "help", "bash", "register", "remove", "config" ]);
		if("--global-jsconfig"===prev)
			return resolve([ "add" ]);
		if([ "--eval", "--print" ].includes(first))
			return pipe(
				()=> Object.keys($.stdin),
				keys=> keys.map(name=> `$.stdin.${name}()`),
				arr=> arr.concat("$", "echo", "s", "fetch", "pipe"),
				arr=> now ? arr.filter(i=> i.startsWith(now[0]==="'"||now[0]==='"' ? now.slice(1) : now)) : arr,
				arr=> arr.join(" "),
				echo,
				$.exit.bind(null, 0)
			)();
		return resolve([]);
	}
	const { version, scripts }= readCompletions();
	if(!version.toString().startsWith("1"))
		$.exit(1);
	if(!Reflect.has(scripts, trigger))
		$.exit(0);
	const c= Reflect.get(scripts, trigger);
	if(!level_num)
		return resolve(Object.keys(c.completions).concat(...c.completions_all));
	if(!Reflect.has(c.completions, first))
		return resolve([]);
	const o= Reflect.get(c.completions, first);
	resolve(( typeof o==="string" ? Reflect.get(c.completions, o) : o ).concat(...c.completions_all));
	$.exit(0);
}
function remove(argv){
	const css= styles();
	const [ name ]= argv.slice(3);
	const { version, scripts }= readCompletions();
	if(!version.toString().startsWith("1"))
		$.error(`Completion configuration file version '${version}' is not supported. Update to newer version of nodejsscript.`);
	if(!Reflect.has(scripts, name))
		$.error(`Nothig to do, the '${name}' is not already registered.`);
	Reflect.deleteProperty(scripts, name);
	updateCompletions({ scripts });
	echo(`%cSuccessfully removed completion for %c${name}%c.`, css.success, css.code);
	$.exit(0);
}
function register(argv){
	const css= styles();
	let [ target, name ]= argv.slice(3);
	name= name || target;
	const { version, scripts }= readCompletions();
	if(!version.toString().startsWith("1"))
		$.error(`Completion configuration file version '${version}' is not supported. Update to newer version of nodejsscript.`);
	if(Reflect.has(scripts, name) && scripts[name].target!==target)
		$.error(`Completion for '${name}' already exists. You can remove previous one and than register this one.`);
	try{
		const { npx, completions, completions_all }= s.$("-FS").run`${target} __ALL__ completion`.xargs(JSON.parse);
		Reflect.set(scripts, name, { target, npx, completions, completions_all });
		updateCompletions({ scripts });
		echo(`%cSuccessfully registered completion for %c${name}%c.`, css.success, css.code);
		$.exit(0);
	} catch(e){
		if(e?.exitCode==127)
			throw e;
		$.error([
			`The '${target}' doesn't support completions.`,
			"This can be caused by:",
			echo.format("%clower version of projects nodejsscript (use ≥0.9.4)", css.li),
			echo.format("%cthe script doesn't uses %c$.api%c.", css.li, css.code),
		].join("\n"));
	}
}
function bash(script_name){
	const { scripts }= readCompletions();
	echo([
		`__${script_name}_opts()`,
		"{",
		` COMPREPLY=( $(${script_name} --completion complete "$1" "\${#COMP_WORDS[@]}" "\${COMP_WORDS[COMP_CWORD]}" "\${COMP_WORDS[COMP_CWORD-1]}" "\${COMP_WORDS[1]}") )`,
		" return 0",
		"}",
		`complete -o filenames -F __${script_name}_opts ${script_name}`,
		...Object.keys(scripts).map(s=> `complete -o filenames -F __${script_name}_opts ${s}`)
	].join("\n"));
	$.exit(0);
}
