#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true *//* global echo, $, cyclicLoop */
import { setTimeout } from "node:timers/promises";
const css= echo.css(
	".spin { color: lightmagenta; }",
	".info { color: lightblue; }",
	".success { color: lightgreen; }",
	".success:before { content: '✓ '; }"
);

longTask(spinner("Long task running…"))
.then(function(spinEnd){
	spinEnd("%cFirst long task ended successfully.", css.success);
	return longTask(spinner("Second long task running…", { animation: cyclicLoop("ABCDEFGHIJKLMNOPQRSTUVWXYZ") }));
})
.then(function(spinEnd){
	spinEnd("%cSecond long task ended successfully.", css.success);
	$.exit(0);
});

function longTask(out){ return setTimeout(15*750, out); }

function spinner(message= "Waiting", { interval= 750, animation= cyclicLoop() }= {}){
	const echoSpin= ()=> echo.use("-R", `%c${animation.next().value} %c${message}`, css.spin, css.info);
	const id= setInterval(echoSpin, interval);
	return function(...message){
		clearInterval(id);
		echo(...message);
	};
}
