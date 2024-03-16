#!/usr/bin/env -S npx nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: true *//* global echo, $, pipe, s, fetch, cyclicLoop */
$.configAssign({ fatal: true });
// s.run([
// 	"npx typedoc",
// 	"_index.d.ts",
// 	"--readme none",
// 	"--defaultCategory 'Internal'",
// 	"--categoryOrder 'Public'",
// 	"--categoryOrder 'Internal'",
// 	"--sort visibility --disableSources"
// ].join(" "));

const path_man= "man.md";
// shelljs original
await fetch("https://github.com/shelljs/shelljs/raw/master/README.md")
	.then(res=> res.text())
	.then(pipe(
		md=> md.slice(md.indexOf("### "), md.indexOf("\n### ShellString(str)")),
		pipe(
			cutOut("echo"),
			cutOut("exec"),
			cutOut("set"),
			cutOut("tempdir"),
			cutOut("exit"),
		),
		md=> md.replaceAll("### ", "### s."),
		md=> s.echo(md).to(path_man)
	))
// shelljs from nodejsscript
mdFromDts("src/shelljs.d.ts").toEnd(path_man);

function mdFromDts(path){
	const file= s.cat(path).trim().split("\n");
	let out= [];
	let is_collecting= false;
	for(const line_ of file){
		const line= line_.trim();
		if(!is_collecting){
			if(line.startsWith("/* man-start"))
				is_collecting= true;
			continue;
		}
		if(line.startsWith("/* man-end")){
			is_collecting= false;
			out.push("");
			continue;
		}
		if(!line.startsWith("/*") && !line.startsWith("*"))
			continue;
		if(line.startsWith("*/") || line.startsWith("/**")) // || /^\* ?@/.test(line))
			continue;
		out.push(
			line.slice(
				line.indexOf("*")+1,
				getIndexOrLineEnd(line.lastIndexOf("*/"), line)
			).trim()
		);
	}
	return s.echo(out.join("\n").trimEnd());
}
function getIndexOrLineEnd(idx, { length }){
	return idx < 1 ? length : idx;
}
function cutOut(section){
	return md=> {
		const idx= md.indexOf("### "+section);
		return md.slice(0, idx) + md.slice(md.indexOf("\n### ", idx + 3) + 1);
	};
}
