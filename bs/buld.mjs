#!/usr/bin/env -S npx nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: true *//* global echo, $, pipe, s, fetch, cyclicLoop */
$.configAssign({ fatal: true });
import "./buld:lint.mjs";
import "./buld:doc.mjs";
