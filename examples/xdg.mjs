#!/usr/bin/env nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: true *//* global echo, cli, style */

echo.use("-P", style.blueBright("XDG dirs:"), [
	cli.xdg.home(),
	cli.xdg.config(),
	cli.xdg.cache(),
	cli.xdg.data()
]);

echo.use("-P", style.blueBright("XDG dirs & subdir `test_dir` (using function``):"), [
	cli.xdg.home`test_dir`,
	cli.xdg.config`test_dir`,
	cli.xdg.cache`test_dir`,
	cli.xdg.data`test_dir`,
]);

echo.use("-P", style.blueBright("XDG dirs & subdir `test_dir` (using function()):"), [
	cli.xdg.home("test_dir"),
	cli.xdg.config("test_dir"),
	cli.xdg.cache("test_dir"),
	cli.xdg.data("test_dir"),
]);
