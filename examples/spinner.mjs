#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true */
import { style, Spinner, exit } from "/home/jaandrle/.nvm/versions/node/v17.0.1/lib/node_modules/nodejsscript/index.js";
style.theme({ spin: style.magentaBright, info: style.blueBright });

const spin= new Spinner(` ${style.spin("${spinner}")} Spinner test (phase ${style.info("${phase}")})`, { phase: "start" }).start();
let i= 0;
setInterval(()=> {
	spin.params({ phase: (i++)+"× iteration" });
}, 750);
setTimeout(()=> {
	spin.end("");
	exit(0);
}, 10*750);
