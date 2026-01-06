#!/usr/bin/env -S npx nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: true *//* global s */
const res= s.$().run([
	"npx jshint",
	"*.js", "src/*.js bs/*.mjs",
	"--show-non-errors",
].join(" "));
