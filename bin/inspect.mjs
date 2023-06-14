import { styles } from './styles.mjs';
import { info } from './info.mjs';
export async function inspect(argv){
	const css= styles();
	const script_name= info("name")[0];
	if(typeof argv[2]==="undefined"){
		echo("%cDebugging nodejsscript",
			css.h1);
		echo("%cinternally uses %cnode inspect",
			css.li, css.code);
		echo("%csee %chttps://nodejs.org/api/debugger.html",
			css.li2, css.url);
		echo("%csee %chttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger",
			css.li2, css.url);
		echo("%cin terminal use",
			css.li);
		echo("%c%chelp%c for help",
			css.li2, css.code, css.unset);
		echo("%c%c.exit%c/%cCtrl-c%c for quit",
			css.li2, css.code, css.unset, css.code, css.unset);
		echo("%cfor using Edge/Chrome/Chromium dev tools window",
			css.li);
		echo("%csee %chttps://www.builder.io/blog/debug-nodejs",
			css.li2, css.url);
		echo("\n%cUsage:",
			css.H);
		echo(`%c${script_name} --inspect [script path]`,
			css.T + css.code);
		return $.exit(0);
	}
	echo("%cDebugging nodejsscript%c"+`: ${argv.slice(2).map(a=> `'${a}'`).join(" ")}`,
		css.h1);
	echo("Use %c.exit%c/%cCtrl-c%c for quit, "+`%c${script_name} --inspect%c for help.`,
		css.code, css.unset, css.code, css.unset, css.code);
	$.env.NODE_INSPECT_RESUME_ON_START= 1;
	const cmd= [ argv[0], "inspect", "--trace-uncaught" ];
	return await s.runA`${cmd} ${argv.slice(1)}`;
}
