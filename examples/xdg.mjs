#!/usr/bin/env nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: true *//* global echo, style, xdg, s */

echo.use("-P", style.magenta("xdg without arguments"), xdg());
echo.use("-P", style.magenta("xdg with subdir"), xdg({ subdir: "TestSubDir" }));
echo.use("-P", style.magenta("xdg with subdir & expanded"), xdg({ subdir: "TestSubDir", expanded: true }));

echo("Compare temp dirs", s.tempdir(), xdg({ expanded: true }).temp);
