#!/usr/bin/env -S npx nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: true *//* global echo, $, pipe, s, fetch, cyclicLoop */
s.run([
	"npx jshint",
	"**/*.js",
	"--show-non-errors",
].join(" "));
