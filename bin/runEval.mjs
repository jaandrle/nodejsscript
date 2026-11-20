/* global s, $ */
import { randomUUID } from "node:crypto";
export async function runEval(argv, is_print){
	let input= argv.splice(2, 1)[0] ?? "";
	if(!input) await runEvalHelp(is_print);
	
	if(is_print){
		const ignore_start= "\"'`{";
		const ignore_end= "\"'`}";
		let declarations_end= -1, ignore_till= "";
		for(const [ idx, char ] of Array.from(input).entries()){
			if("}"===ignore_till && "}"===char)
				for (const [_, char_next] of Array.from(input.slice(idx+1)).entries()){
					if(/\s/.test(char_next)) continue;
					if(");,".includes(char_next)) break;
					declarations_end= idx;
					break;
				}
			if(ignore_till){
				if(ignore_till===char) ignore_till= "";
				continue;
			}
			if(ignore_start.includes(char)){
				ignore_till= ignore_end[ignore_start.indexOf(char)];
				continue;
			}
			if(char===";") declarations_end= idx;
		}

		const delcarations= declarations_end===-1 ? "" : input.slice(0, declarations_end+1)+" ";
		input= input.slice(declarations_end+1);
		const input_end = argv.indexOf("--");
		const input_rest= argv.slice(2, input_end>=2 ? input_end : undefined).join(",");
		if(input_rest.trim()!=="") input= `pipe(${input_rest})(${input})`;
		input= `${delcarations}echo(${input})`;
	}
	input+= ";";
	const filepath= $.xdg.temp`nodejsscript-${is_print ? "print" : "eval"}-${randomUUID()}.mjs`;
	s.echo(input).$("-F").to(filepath);
	return filepath;
}
async function runEvalHelp(is_print){
	const { info }= await import("./info.mjs");
	const [ n ]= info("name");
	const { css, echoHead, echoOption }= await import("./styles.mjs");
	const echoNotes= ()=> {
		echo("%cNotes%c:", css.H);
		echo("%cThe <expression> is temporarily saved in a file,", css.T);
		echo("%cthen it is executed as %c%s <tmp-file>%c. ", css.T, css.code, css.unset, n);
		echo();
		echo("%cThe executed script file uses `.mjs` and", css.T);
		echo([
			"%cis used as an ESM module. %cThis is different",
			"%cto how the %cnode --eval <expression>%c/",
			"%cnode --print <expression>%c commands work!",
		].join("\n"),
			css.T, css.H,
			css.T+css.H, css.code, css.H,
			css.T+css.code, css.H);
		echo();
		echo("%cThanks to this, you can for example use", css.T);
		echo("%c%cawait fetch(…)%c.", css.T, css.code);
	};
	if(!is_print){
		await echoHead("--eval <expression>");
		echo("%cEvaluates given string <expression>", css.T);
		echoNotes();
		echo("%cExamples%c:", css.H);
		echo(`%c${n} --eval 'echo(1+2)'`, css.T+css.code);
		echo(`%c${n} --eval 'const sum= 1+2; echo(sum);'`, css.T+css.code);
	} else {
		await echoHead("--print […definitions;]<expression>[ …functions]");
		echo("%cEvaluates given expressions and prints the result.", css.T);
		echo("%cOptions%c:", css.H);
		echoOption("<expression>",
			"evaluates given string and prints the result or is used for %c[ …functions]",
			css.H);
		echoOption("[ …functions]",
			"you can define additional functions to process <expression> using pipe function");
		echoOption("[…definitions;]",
			"this is experimental, you can define variables and functions separated by semicolons, DO NOT overuse it");
		echoNotes();
		echo("%cExamples%c:", css.H);
		echo(`%c${n} --print 'const sum= 1+2; 2*sum' 'sum=> sum/2' 'sum=> sum+2'`, css.T+css.code);
		echo("%c…this is processes as %cconst sum= 1+2; pipe(sum=> sum/2, sum=> sum+2)(2*sum)%c.", css.T, css.code);
		echo();
		echo(`%cecho "[ 1, 2 , 3 ]" | ${n} -p '$.stdin.json()' 'a=> a.reduce((acc, v)=> acc+v, 0)'`, css.T+css.code);
	}
	$.exit(0);
}
