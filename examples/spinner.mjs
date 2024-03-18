#!/usr/bin/env nodejsscript
/*
	You can create quick spinner animation using `css-in-console`:
	```js
	const css= echo.css`
		.spin { list-style: --terminal-spin; }
	`;
	```
	… and
	```js
	echo.use("-R", "%c", css.spin);
	```
*/
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true *//* global echo, $, cyclicLoop */
const css= echo.css`
	.spin { color: lightmagenta; list-style-type: --terminal-spin; }
	@counter-style custom-spin{
		system: extends --terminal-spin;
		symbols: "A" "B" "C" "D" "E" "F" "G" "H" "I" "J" "K" "L" "M" "N" "O" "P" "Q" "R" "S" "T" "U" "V" "W" "X" "Y" "Z";
	}
	.spinLetters { list-style-type: custom-spin; }
	.info { color: lightblue; }
	.success { color: lightgreen; }
	.success:before { content: '✓ '; }
`;

longTask(spinner("Long task running…"))
.then(function(spinEnd){
	spinEnd("%cFirst long task ended successfully.", css.success);
	return longTask(spinner("Second long task running…", { animation: css.spinLetters }));
})
.then(function(spinEnd){
	spinEnd("%cSecond long task ended successfully.", css.success);
	$.exit(0);
});


import { setTimeout } from "node:timers/promises";
function longTask(out){ return setTimeout(15*750, out); }

function spinner(message= "Waiting", { interval= 750, animation= "" }= {}){
	const echoSpin= ()=> echo.use("-R", `%c%c${message}`, css.spin+animation, css.info);
	const id= setInterval(echoSpin, interval);
	return function(...message){
		clearInterval(id);
		echo(...message);
	};
}
