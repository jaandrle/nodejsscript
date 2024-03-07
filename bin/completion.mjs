/* global echo, $, s, pipe */
import { resolve } from "node:path";
import { styles } from './styles.mjs';
import { info } from './info.mjs';
import { file_completions, readCompletions, updateCompletions } from './config.mjs';
export function completion(argv){
	const option= argv[2];
	const script_name= info("name")[0];
	if(typeof option==="undefined" || [ "help", "--help", "-h" ].includes(option)){
		const css= styles();
		echo(`%cUsage:\n%c%c${script_name}%c --completion [options]`, css.H, css.T, css.n);
		echo("%cOptions%c:", css.H);
		echo("%c                    help . . . Print this help", css.T);
		echo("%c     bash-local [target] . . . Outputs bash completion code for use by eval to enable", css.T);
		echo("%c                        	scripts completions on demand (see %cregister%c).", css.T, css.code);
		echo(`%c                        	Use %ceval "$(${script_name} --completion bash-local)"%c in terminal.`, css.T, css.code);
		echo(`%c                        	By default enable completions for all scripts in current directory recursively.`, css.T);
		echo(`%c                        	Use optional [target] to enable completions for specific script or subfolder.`, css.T);
		echo("%c                    bash . . . Outputs bash completion code for use by eval.", css.T);
		echo(`%c                        	Add %ceval "$(${script_name} --completion bash)"%c to your '.bashrc' file.`, css.T, css.code);
		echo("%c       register <target> . . . This enable completion for custom script created with nodejsscript (using %c$.api%c).", css.T, css.code);
		echo(`%c                        	The <target> reffers to script itself/the text triggering the completion.`, css.T);
		echo(`%c                        	As <target> use global script name or (relative) path.`, css.T);
		echo(`%c                        	Completions for scripts registered by path is on demand, see %cbash-local%c.`, css.T, css.code);
		echo("%c         remove <target> . . . This remove completion for custom script previously registered by <target>.", css.T);
		echo(`%c                  config . . . Returns location of the completions config file.`, css.T);
		$.exit(0);
	}
	if("config"===option)
		return $.exit(0, echo(file_completions));
	if("remove"===option)
		return remove(argv);
	if("register"===option)
		return register(argv);
	$.is_color= 0;
	if("complete"===option)
		return complete(script_name, argv);
	if("bash"===option)
		return bash(script_name);
	if("bash-local"===option)
		return bashLocal(script_name, argv);
}

const alias= "njs";
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
	const returnResult= arr=> { echo(matches(arr)); return $.exit(0); };
	if(script_name===trigger||alias===trigger){
		if(!level_num && !now?.includes("/"))
			return returnResult([ "--completion", "--help", "--version", "--eval", "--print", "--global-jsconfig", "--inspect", "--interactive" ]);
		if("--completion"===prev)
			return returnResult([ "help", "bash", "register", "remove", "config" ]);
		if("--global-jsconfig"===prev)
			return returnResult([ "add" ]);
		if([ "--eval", "-e", "--print", "-p" ].includes(first))
			return pipe(
				()=> Object.keys($.stdin),
				keys=> keys.map(name=> `$.stdin.${name}()`),
				arr=> arr.concat("$", "echo", "s", "fetch", "pipe"),
				arr=> now ? arr.filter(i=> i.startsWith(now[0]==="'"||now[0]==='"' ? now.slice(1) : now)) : arr,
				arr=> arr.join(" "),
				echo,
				$.exit.bind(null, 0)
			)();
		return returnResult([]);
	}
	const { version, scripts }= readCompletions();
	if(!version.toString().startsWith("1"))
		$.exit(1);
	const trigger_full= isPath(trigger) ? resolve(trigger) : trigger;
	echo(trigger_full);
	if(!Reflect.has(scripts, trigger_full))
		$.exit(0);
	const c= Reflect.get(scripts, trigger_full);
	if(!level_num)
		return returnResult(Object.keys(c.completions).concat(...c.completions_all));
	if(!Reflect.has(c.completions, first))
		return returnResult([]);
	const o= Reflect.get(c.completions, first);
	returnResult(( typeof o==="string" ? Reflect.get(c.completions, o) : o ).concat(...c.completions_all));
	$.exit(0);
}
function remove(argv){
	const css= styles();
	let [ name ]= argv.slice(3);
	const { version, scripts }= readCompletions();
	if(isPath(name)) name= resolve(name);
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
	let [ target ]= argv.slice(3);
	const { version, scripts }= readCompletions();
	if(!version.toString().startsWith("1"))
		$.error(`Completion configuration file version '${version}' is not supported. Update to newer version of nodejsscript.`);
	if(Reflect.has(scripts, target))
		$.error(`Completion for '${target}' already exists. You can remove previous one and than register this one.`);
	try{
		const { npx, completions, completions_all }= s.$("-FS").run`${target} __ALL__ completion`.xargs(JSON.parse);
		if(npx || isPath(target))
			target= resolve(target);
		Reflect.set(scripts, target, { npx, completions, completions_all });
		updateCompletions({ scripts });
		echo(`%cSuccessfully registered completion for %c${target}%c.`, css.success, css.code);
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
		bashC(script_name, script_name),
		bashC(script_name, alias),
		...Object.entries(scripts)
			.filter(([ s, o ])=> !s.includes("/") && !o.npx)
			.map(bashC.bind(null, script_name)),
	].join("\n"));
	$.exit(0);
}
function bashLocal(script_name, argv){
	let [ local= "./" ]= argv.slice(3);
	local= resolve(local);
	const { scripts }= readCompletions();
	echo(Object.entries(scripts)
		.filter(([ s ])=> s.startsWith(local))
		.map(([ s ])=> bashC(script_name, s.replace(local, ".")))
		.join("\n"));
	$.exit(0);
}
function bashC(script_name, s){
	if(Array.isArray(s)) s= s[0];
	return `complete -o filenames -F __${script_name}_opts ${s}`;
}
function isPath(str){
	if(str.includes("/")) return true;
	return false;
}
