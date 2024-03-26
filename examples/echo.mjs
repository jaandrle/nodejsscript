#!/usr/bin/env nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: true *//* global echo, $ */
const css= echo.css`
	.h1 { color: lightblue; }
	.pid { background: red; color: yellow; animation: blink; }
	.json {}
	.pid, .json, .media { margin-left: 2; }
	.h1, .pid, .json, .media { display: list-item; }
	.media { color: lightblue; }
	@media not (--terminal-stdout){
		.media { color: lightred; }
	}
`;

echo("%cTest 1", css.h1);
echoList(list());

echo("%cTest 2", css.h1);
echo("%c%i", css.pid, $.$);

echo("%cTest 3", css.h1);
echo("%c%j", css.json, { a: "A" });

echo("%cTest 4", css.h1);
echo("%c`stdout`", css.media);
echo.use("-2", "%c`stderr`", css.media);

$.exit(0);

function echoList(items){
	const css= echo.css`
		* { margin-left: 2; display: list-item; }
		.list { color: gray; }
		.list-odd { font-style: italic; }
	`;
	items.forEach(function(item, i){
		echo("%c"+item, i%2 ? css.list : css["list-odd"]);
	});
}
function list(length= 5){ return Array.from({ length }).map((_, i)=> "List item no. "+echo.format("%c"+(i+1), "color: lightred")); }
