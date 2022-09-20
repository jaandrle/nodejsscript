#!/usr/bin/env nodejsscript
/* jshint esversion: 9,-W097, -W040, node: true, expr: true, undef: true */
import { style, cli, echo, exit, abortable, textsLoop } from "nodejsscript";
style.theme({ spin: style.magentaBright, info: style.blueBright, success: style.greenBright });

longTask(spinner("Long task running…"))
.then(function(spinEnd){
	spinEnd(style.success("First long task ended successfully."));
	return longTask(spinner("Second long task running…", { animation: textsLoop("ABCDEFGHIJKLMNOPQRSTUVWXYZ") }));
})
.then(function(spinEnd){
	spinEnd(style.success("Second long task ended successfully."));
	exit(0);
});

function longTask(out){ return new Promise(function(resolve){
	setTimeout(resolve, 15*750, out);
}); }
function spinner(message= "Waiting", { interval= 750, animation= textsLoop() }= {}){
	const controller= abortable.controller();
	const { signal }= controller;
	const log= cli.rewritable({ signal, stream: process.stderr, end: "clear" });
	abortable.interval(signal, ()=> log(`${style.spin(animation.next().value)} ${style.info(message)}`), interval);
	return function(message){
		controller.abort();
		echo(message);
	};
}

function setIntervalAbortable(signal, callback, interval, ...params){
	const id= setInterval(callback, interval, ...params);
	signal.addEventListener("abort", clearInterval.bind(null, id));
}
