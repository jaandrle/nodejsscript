#!/usr/bin/env nodejsscript
/* jshint esversion: 9,-W097, -W040, node: true, expr: true, undef: true */
import { style, cli, echo, exit, abortable, cyclicLoop } from "nodejsscript";
style.theme({ spin: style.magentaBright, info: style.blueBright, success: style.greenBright });

longTask(spinner("Long task running…"))
.then(function(spinEnd){
	spinEnd(style.success("First long task ended successfully."));
	return longTask(spinner("Second long task running…", { animation: cyclicLoop("ABCDEFGHIJKLMNOPQRSTUVWXYZ") }));
})
.then(function(spinEnd){
	spinEnd(style.success("Second long task ended successfully."));
	exit(0);
});

function longTask(out){ return abortable.timeout(15*750, null, out); }
function spinner(message= "Waiting", { interval= 750, animation= cyclicLoop() }= {}){
	const controller= abortable.controller();
	const { signal }= controller;
	const log= cli.rewritable({ signal, stream: process.stderr, end: "clear" });
	abortable.interval(()=> log(`${style.spin(animation.next().value)} ${style.info(message)}`), interval, signal);
	return function(message){
		controller.abort();
		echo(message);
	};
}
