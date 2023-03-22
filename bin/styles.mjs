/* global echo */
export function styles(){
	return echo.css`
		.n { color: lightblue; }
		.v { color: lightgreen; }
		.code { font-style: italic; }
		.code::before, .code::after{ content: "\`"; }
		.H { color: yellow; margin-left: 2; }
		.T { margin-left: 4; }
		.success { color: lightgreen; }
		.li { display: list-item; }
	`;
}
