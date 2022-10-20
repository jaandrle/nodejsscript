#!/usr/bin/env nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: true *//* global echo, $, style */
echo.use("-P", style.blueBright("XDG dirs:"), [
	$.xdg.home(),
	$.xdg.config(),
	$.xdg.cache(),
	$.xdg.data()
]);

echo.use("-P", style.blueBright("XDG dirs & subdir `test_dir` (using function``):"), [
	$.xdg.home`test_dir`,
	$.xdg.config`test_dir`,
	$.xdg.cache`test_dir`,
	$.xdg.data`test_dir`,
]);

echo.use("-P", style.blueBright("XDG dirs & subdir `test_dir` (using function()):"), [
	$.xdg.home("test_dir"),
	$.xdg.config("test_dir"),
	$.xdg.cache("test_dir"),
	$.xdg.data("test_dir"),
]);
