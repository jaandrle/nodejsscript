import { inspect } from "node:util";
import { file_repl } from "./config.mjs";
import repl from "node:repl";

export function startRepl(){ return new Promise(async function(){
	const title= (title= "")=> console.log(String.fromCharCode(27) + "]2;%s" + String.fromCharCode(7) + title, title); // \e ASCII escape character (033 → js 0o33), \a ASCII bell character (007 → js 0o7)
	title(`nodejsscript@v${$.version} — REPL`);
	echo("Use `.help` for help, use `_` to reuse last command result.");
	
	const r= repl.start({
		prompt: echo.format("%c❯ ", "color:lightgreen;"),
		replMode: repl.REPL_MODE_STRICT,
		useGlobal: true,
		preview: true,
		writer(res){
			const is_shellScript= res && typeof res==="object" && "stdout" in res;
			if(is_shellScript && !res.code){
				const is_string= !Array.isArray(res);
				console.log("Shell"+(is_string ? "String" : "Array"));
				res= is_string ? res.stdout : [...res];
			}
			return inspect(res, { colors: $.is_colors, compact: !$.is_verbose });
		}
	});
	const completer= r.completer.bind(r);
	const ls_tmp= { pwd: "", ls: [] };
	r.completer= function(line, callback){
		completer.call(null, line, function(err, [ completions= [], line_ ]) {
			if(err) return callback(err, [ completions, line_ ]);
			let pwd= ".";
			const is_open_function= "(\\(|,)\\s*\"[^\"]*"; //= detect line endings like “somethingA("somethingB”
			if((new RegExp(is_open_function+"\\/[^\"]*$")).test(line)){ //-||- + somethingB is a nested path or starts as root
				pwd= line.slice(line.lastIndexOf('"')+1, line.lastIndexOf("/"));
				if(!pwd) pwd= "/";
			}
			if((pwd==="." ? s.pwd().trim() : pwd)!==ls_tmp.pwd){
				ls_tmp.pwd= pwd;
				const map= pwd==="." ? l=> `"${l}"` : pwd==="/" ? l=> `"/${l}"` : l=> `"${pwd}/${l}"`;
				try {
					const ls= s.$("-vFgs").ls(pwd).filter(l=> l!==pwd);
					if(ls.length) ls_tmp.ls= ls.concat("..").map(map);
					else throw null;
				} catch(_){
					ls_tmp.ls= [];
				}
			}
			const { ls }= ls_tmp;
			let todo= [];
			if((new RegExp(is_open_function+"$")).test(line)){
				const candidate= line.slice(line.lastIndexOf('"'));
				todo= ls.filter(l=> l.indexOf(candidate)===0).map(l=> line+l.slice(candidate.length));
			} else if(line.at(-1)==="("){
				todo= ls.map(l=> line+l);
			}
			callback(null, [ todo.concat(completions), todo.length ? line : line_ ]);
		})
	}
	r.setupHistory(file_repl, () => {});
	r.defineCommand("history", {
		help: "Show history of used commands. Use `history <number>` to jump to a command.",
		action(expresion){
			const history= pipe(s.cat, s=> s.split("\n"))(file_repl);
			if(!expresion){
				console.log(Object.fromEntries(Object.entries(history)));
				return this.displayPrompt();
			}
			this.displayPrompt();
			this.write(history.at(Number.parseInt(expresion)));
		}
	})
	r.defineCommand("man", {
		help: "Show help texts for nodejscript functions such as `s.cat`, `s.isMain`, `echo`, ….",
		async action(expresion){
			const { printUsage }= await import("./info.mjs");
			await printUsage(expresion, false);
			this.displayPrompt();
		}
	});
	r.defineCommand("q", {
		help: "Exit the REPL. Alias for `.exit`.",
		action(){ r.close(); }
	});
	r.on("exit", ()=> {
		title();
		$.exit(0);
	});
}); }
