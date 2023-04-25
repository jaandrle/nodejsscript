const css= echo.css`
	.h1 { color: magenta; }
	.li, .li2 { display: list-item; }
	.li2 { margin-left: 2ch; }
	.code { color: cyan; }
	.code::before, .code::after { content: '\`'; }
	.url { color: lightblue; }
	.url::before, .url::after { content: '"'; }
`;
export async function inspect(argv){
	echo("%cDebugging nodejsscript", css.h1,
		`: ${argv.slice(2).map(a=> `'${a}'`).join(" ")}`);
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
	$.env.NODE_INSPECT_RESUME_ON_START= 1;
	const cmd= [ argv[0], "inspect", "--trace-uncaught" ];
	return await s.runA`${cmd} ${argv.slice(1)}`;
}
