#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true */
import { pubsub, echo, exit } from "nodejsscript";
import { setTimeout } from "node:timers/promises";
const { sub, pub, subC, pubC }= pubsub;

(async function main(){
	const interval_topic= sub(pubsub.topicFromInterval(750, "Hi"), echo);
	subC(interval_topic, echo.bind(null, { interval_topic }));
	await setTimeout(5*750).then(pubC.bind(null, interval_topic));

	const abort_topic= subC(pubsub.topicFromAbort(), echo.bind(null, "from topic:"));
	sub(abort_topic, echo.bind(null, "sub:"));
	abort_topic.signal.addEventListener("abort", echo.bind(null, "from abort:"));
	pub(abort_topic, "message");
	// await setTimeout(5*750).then(()=> abort_topic.abort());
	await setTimeout(5*750).then(pubC.bind(null, abort_topic, 1));

	exit(0);
})();
