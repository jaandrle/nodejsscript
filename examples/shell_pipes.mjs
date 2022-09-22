#!/usr/bin/env nodejsscript
import { pipe, echo, read, is_piped,  exit } from "nodejsscript";

if(is_piped.left) read().then(pipe(
	str=> str.grep("needle"),
	echo,
	exit.bind(null, 0)
)); // echo -e '1garbage\n2needle' | ./shell_pipes.mjs

const math= pipe(
	str=> str.sed ? str.sed(/[^0-9]/, -100) : str,
	Number,
	n=> n+(10*Math.random()),
	Math.floor,
	result=> ({ math: "input * rand", result }),
	echo.use.bind(echo, is_piped.right ? "" : "-P"),
	exit.bind(null, 0)
);
if(!is_piped.right) read({ "-p": "Choose number 0-9 [fallback to -100]", "-n": 1 }).then(math);
else math(100);
// ./examples/shell_pipes.mjs | head
// ./examples/shell_pipes.mjs
