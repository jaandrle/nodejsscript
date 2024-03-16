/* global echo */
export function styles(){
	return echo.css`
		.n, .h1 { color: magenta; }
		.v { color: lightgreen; }
		.code { font-style: italic; color: cyan; }
		.code::before, .code::after{ content: "\`"; }
		.H { color: yellow; }
		.T { margin-left: 2; }
		.success { color: lightgreen; }
		.li, .li2 { display: list-item; }
		.li2 { margin-left: 2ch; }
		.url { color: lightblue; }
		.url::before, .url::after { content: '"'; }
	`;
}
