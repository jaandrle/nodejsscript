import { info } from './info.mjs';
export async function inspect(argv){
	const { css, echoHead }= await import("./styles.mjs");
	const script_name= info("name")[0];
	if(typeof argv[2]==="undefined"){
		await echoHead("--inspect <script.(m)js>");
		echo("%cDebugging nodejsscript",
			css.T);
		echo("%cNotes:",
			css.H);
		echo("%c%cinternally uses %cnode inspect",
			css.T, css.li, css.code);
		echo("%c%csee %chttps://nodejs.org/api/debugger.html",
			css.T, css.li2, css.url);
		echo("%c%csee %chttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger",
			css.T, css.li2, css.url);
		echo("%c%cin terminal use",
			css.T, css.li);
		echo("%c%c%chelp%c for help",
			css.T, css.li2, css.code, css.unset);
		echo("%c%c%c.exit%c/%cCtrl-c%c for quit",
			css.T, css.li2, css.code, css.unset, css.code, css.unset);
		echo("%c%cfor using Edge/Chrome/Chromium dev tools window",
			css.T, css.li);
		echo("%c%csee %chttps://www.builder.io/blog/debug-nodejs",
			css.T, css.li2, css.url);
		echo("%cUsage:",
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
	return await s.$("-F").runA`${cmd} ${argv.slice(1)}`;
}
