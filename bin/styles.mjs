/* global echo */
const gap= " . . . ";
const size= 34;
const margin_left= 2;

export const css= echo.css`
	.n, .h1 { color: magenta; }
	.v { color: lightgreen; }
	.code { font-style: italic; color: cyan; }
	.code::before, .code::after{ content: "\`"; }
	.H { color: yellow; }
	.T { margin-left: ${margin_left}; }
	.success { color: lightgreen; }
	.li, .li2 { display: list-item; }
	.li2 { margin-left: 2ch; }
	.url { color: lightblue; }
	.url::before, .url::after { content: '"'; }
`;
/**
 * @param {number} size
 * @param {string} name
 * @param {string|string[]} desc
 * */
export function echoOption(name, desc, ...styles){
	if(Array.isArray(desc)) desc= desc.join(" ");
	name= name.padStart(size-7, " ");
	desc= desc.split(" ");
	let description= [];
	let tmp= "";
	for(let i= 0; i< desc.length; i++){
		const todo= tmp+desc[i];
		if(todo.length + size > 80){
			description.push(tmp);
			tmp= desc[i] + " ";
			continue;
		}
		tmp= todo+" ";
	}
	if(tmp) description.push(tmp);
	description= description.map((s, i)=> i
		? " ".repeat(margin_left)+s
		: s);
	echo(" ".repeat(margin_left)+name+gap+description.join("\n"+" ".repeat(size)), ...styles);
};
export async function echoHead(title){
	const { info }= await import("./info.mjs");
	const script= info("name")[0];
	echo(`%c${script}%c ${title}`, css.n, css.unset);
}
