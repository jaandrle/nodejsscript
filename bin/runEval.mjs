/* global s, $ */
import { randomUUID } from "node:crypto";
export function runEval(argv, is_print){
	let input= argv.splice(2, 1)[0] ?? "";
	if(is_print){
		const m= "--§--"+randomUUID().replaceAll("-", "")+"--§--";
		const store_quotes= [];
		input= input.replace(/(['"`])(?:(?!\1)[^\\]|\\[\s\S])*\1/g,
			//temporary remove quotes (can contain ';')
			f=> (store_quotes.push(f), m));
		const m_regexp= new RegExp(m, "g");
		let out_arr= input.split(";")
			.map(/* return quotes */ v=> v.replace(m_regexp, ()=> store_quotes.shift()))
			.reverse();
		if(out_arr[0].trim()==="") out_arr.shift();
		let pre= "";
		let out= out_arr[0]?.trim();
		if(out && out[0]==="}"){// "function …{ …; }" ⇒ [ " }".trim(), "function …{ …"  ]
			pre= "}";
			out= out.slice(1).trim();
		}
		const input_rest= argv.slice(2).join(",");
		if(input_rest.trim()!=="") out= `pipe(${input_rest})(${out})`;
		const name_ret= "__"+randomUUID().replaceAll("-", "");
		out_arr[0]= `${pre} const ${name_ret}= ${out}; echo(${name_ret} instanceof Promise ? await ${name_ret} : ${name_ret})`;
		input= out_arr.reverse().join(";");
	}
	input+= ";";
	const filepath= $.xdg.temp`nodejsscript-${is_print ? "print" : "eval"}-${randomUUID()}.mjs`;
	s.echo(input).$("-F").to(filepath);
	return filepath;
}
