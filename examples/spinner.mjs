#!/usr/bin/env nodejsscript
/* jshint esversion: 9,-W097, -W040, node: true, expr: true, undef: true */
import { style, cli, echo, exit, pubsub, cyclicLoop } from "nodejsscript";
import { setTimeout } from "node:timers/promises";
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

function longTask(out){ return setTimeout(15*750, out); }
function spinner(message= "Waiting", { interval= 750, animation= cyclicLoop() }= {}){
	const topic= pubsub.topicFromInterval(interval,
		{ mapper: ()=> `${style.spin(animation.next().value)} ${style.info(message)}` });
	cli.rewritable({ stream: process.stderr, end: "clear", topic });
	return function(message){
		pubsub.pubC(topic);
		echo(message);
	};
}
