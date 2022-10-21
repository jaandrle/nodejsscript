#!/usr/bin/env nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: true *//* global echo, $ */
const css= echo.css("h1 { color: lightblue; }");
echo.use("-P", "%cXDG dirs:", css.h1, [
	$.xdg.home(),
	$.xdg.config(),
	$.xdg.cache(),
	$.xdg.data()
]);

echo.use("-P", "%cXDG dirs & subdir `test_dir` (using function``):", css.h1, [
	$.xdg.home`test_dir`,
	$.xdg.config`test_dir`,
	$.xdg.cache`test_dir`,
	$.xdg.data`test_dir`,
]);

echo.use("-P", "%cXDG dirs & subdir `test_dir` (using function()):", css.h1, [
	$.xdg.home("test_dir"),
	$.xdg.config("test_dir"),
	$.xdg.cache("test_dir"),
	$.xdg.data("test_dir"),
]);

$.exit(0);
