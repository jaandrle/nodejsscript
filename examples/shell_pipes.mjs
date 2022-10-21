#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true *//* global echo, $, pipe */
(async function main(){
	if($.isFIFO(0)) await $.read().then(pipe(
		str=> str.split("\n").filter(line=> line.indexOf("needle")!==-1),
		echo,
		$.exit.bind(null, 0)
	)); // echo -e '1garbage\n2needle' | ./shell_pipes.mjs

	const math= pipe(
		str=> typeof str==="string" ? str.replace(/[^0-9]/, -100) : str,
		Number,
		n=> n+(10*Math.random()),
		Math.floor,
		result=> ({ math: "input * rand", result }),
		echo.use.bind(echo, $.isFIFO(1) ? "" : "-P"),
		$.exit.bind(null, 0)
	);
	if(!$.isFIFO(1)) $.read({ "-p": "Choose number 0-9 [fallback to -100]", "-n": 1 }).then(math);
	else math(100);
	// ./examples/shell_pipes.mjs | head
	// ./examples/shell_pipes.mjs
})();
