#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true */
import { echo, s, fetch, exit } from "nodejsscript";

const serve= s.exec("npx serve", { async: true });
for await (const chunk of serve.stdout)
	if (chunk.includes('Accepting connections')) break;

await fetch("http://localhost:3000").then(res=> res.text()).then(echo);
exit(0);
