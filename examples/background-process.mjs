#!/usr/bin/env nodejsscript
/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true *//* global echo, s, fetch */
const serve= s.runA("npx serve");
for await (const chunk of serve.stdout)
	if (chunk.includes('Accepting connections')) break;

await fetch("http://localhost:3000").then(res=> res.text()).then(echo);
$.exit(0);
