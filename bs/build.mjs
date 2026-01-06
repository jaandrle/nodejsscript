#!/usr/bin/env -S npx nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: true *//* global $ */
$.configAssign({ fatal: true });
import "./dev/lint.mjs";
import "./build/doc.mjs";
