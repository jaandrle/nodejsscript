#!/usr/bin/env -S npx nodejsscript
/* jshint esversion: 11,-W097, -W040, module: true, node: true, expr: true, undef: true *//* global echo, $, pipe, s, fetch */
$.configAssign({ fatal: true });
if(!s.test("-f", "./package.json")){
	const [ curr ]= $;
	if(!s.ls().includes(curr.slice(curr.lastIndexOf("/")+1))){
		echo.use("-2", "Please execute in project root directory.");
		$.exit(1);
	}
	s.cd("..");
}
const section= async (name, fn)=> {
	echo(name);
	const res= fn();
	if(res instanceof Promise) await res;
	echo("%c✓ Done", "color: lightgreen");
};

await section("Generating documentation from `*.d.ts`...", () => {
	const tds= s.$("-fS").run([
		"npx typedoc",
		"_index.d.ts",
		"--plugin typedoc-plugin-markdown",
		"--readme none",
		"--defaultCategory 'Internal'",
		"--categoryOrder 'Public'",
		"--categoryOrder 'Internal'",
		"--sort visibility --disableSources"
	].join(" "));
	if(tds.code){
		echo(tds.stderr);
		$.exit(tds.code);
	}
	if(tds.stderr){
		const lines= tds.stderr.split("\n");
		for(let i= 0; i< lines.length; i++){
			const line= lines[i];
			if(line.includes("node/events.d.ts") || line.includes("shelljs/index.d.ts")){
				i+= 3;
				continue;
			}
			if(!line || line.includes("s.child.ChildProcess")){
				continue;
			}
			echo(line);
		}
	}
});
await section("Cleanup documentation...", ()=> {
	const start= "## Public Functions";
	const file= "./docs/README.md";
	const [ head, docs ]= s.cat(file).split("\n"+start);
	const head_new= head.split("\n").slice(1)
		.filter(line=>
			!line.includes("_")
			&& !line.includes("EchoFunction")
			&& !line.includes("###")
		)
		.filter(Boolean)
		.map(line=> line+"\n");
	s.echo([
		"[nodejsscript](../README.md)",
		head_new.join(""),
		start,
		docs
	].join("\n")).to(file);
});

await section("Generating tldr pages...", async ()=> {
	const path_tldr= "tldr.md";
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
			md=> s.echo(md).to(path_tldr)
		));
	// shelljs from nodejsscript
	mdFromDts("src/shelljs.d.ts").toEnd(path_tldr);
	// dollar
	mdFromDts("src/$.d.ts").toEnd(path_tldr);
	// echo
	mdFromDts("src/echo.d.ts").toEnd(path_tldr);
	// pipe
	mdFromDts("_index.d.ts").toEnd(path_tldr);
});

function mdFromDts(path){
	const file= s.cat(path).trim().split("\n");
	let out= [];
	let is_collecting= false;
	for(const line_ of file){
		const line= line_.trim();
		if(!is_collecting){
			if(line.startsWith("/* tldr-start"))
				is_collecting= true;
			continue;
		}
		if(line.startsWith("/* tldr-end")){
			is_collecting= false;
			out.push("");
			continue;
		}
		if(!line.startsWith("/*") && !line.startsWith("*"))
			continue;
		if(line.startsWith("*/") || line.startsWith("/**") || line.includes("@category")) // || /^\* ?@/.test(line))
			continue;
		out.push(
			line.slice(
				line.indexOf("*")+1,
				getIndexOrLineEnd(line.lastIndexOf("*/"), line)
			).trim()
		);
	}
	return s.echo(out.join("\n"));
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
