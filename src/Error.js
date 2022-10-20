import style from "ansi-colors";
import { pipe } from "./utils.js";
const exit_codes= { 2: 'Misuse of shell builtins', 126: 'Invoked command cannot execute', 127: 'Command not found', 128: 'Invalid exit argument', 129: 'Hangup', 130: 'Interrupt', 131: 'Quit and dump core', 132: 'Illegal instruction', 133: 'Trace/breakpoint trap', 134: 'Process aborted', 135: 'Bus error: "access to undefined portion of memory object"', 136: 'Floating point exception: "erroneous arithmetic operation"', 137: 'Kill (terminate immediately)', 138: 'User-defined 1', 139: 'Segmentation violation', 140: 'User-defined 2', 141: 'Write to pipe with no one reading', 142: 'Signal raised by alarm', 143: 'Termination (request to terminate)', 145: 'Child process terminated, stopped (or continued*)', 146: 'Continue if stopped', 147: 'Stop executing temporarily', 148: 'Terminal stop signal', 149: 'Background process attempting to read from tty ("in")', 150: 'Background process attempting to write to tty ("out")', 151: 'Urgent data available on socket', 152: 'CPU time limit exceeded', 153: 'File size limit exceeded', 154: 'Signal raised by timer counting virtual time: "virtual timer expired"', 155: 'Profiling timer expired', 157: 'Pollable event', 159: 'Bad syscall', };

const ErrorOld= global.Error;
/*
 * Replacig build-in Error, because of libraries we have not under control
 * */
global.Error= class extends ErrorOld{
	static stackToList(stack){ return stack.split(/^\s*at\s/m); }
	static listToStack(list){ return list.map(l=> "    at "+l).join(""); }
	static exitCodeInfo(exitCode){ return exit_codes[exitCode || -1]; }

	static print(e){
		style.theme({ h1: style.redBright, h2: style.magenta, pre: style.gray });
		const { stdout, stderr, name, message, stack, exitCode= 1 }= e;
		const out= [
			style.h1(`${name}: ${message.trim()}`),
			style.h2("code:"), exitCode + ( Error.exitCodeInfo(exitCode) ? ` (${style.blue(Error.exitCodeInfo(exitCode))})` : "" )
		];
		if(stderr) out.push( style.h2("stderr:"), style.pre(stderr));
		if(stdout) out.push( style.h2("stdout:"), style.pre(stdout));
		if(stack){
			out.push(
				style.h2("stack:"),
				pipe(
					Error.stackToList,
					l=> l.slice(1),
					Error.listToStack
				)(stack)
			);
		}
		console.error(out.join("\n"));
	}
	
	constructor(message, options){
		super(message, options);
		const [ lm, ...l ]= Error.stackToList(this.stack);
		const i= l.findIndex(l=> l.indexOf("nodejsscript")===-1 || l.indexOf("nodejsscript/examples")!==-1);
		const l_out= l.slice(i).filter(l=> l.indexOf("node:internal")==-1 && l.indexOf("nodejsscript/bin/cli.mjs")===-1 && l.indexOf("async Promise.all (index 0)")===-1);
		this.stack= lm+Error.listToStack(l_out);
	}
};
export class ProcessOutput extends Error {
	static bind(){
		const stack= new Error().stack.split("\n").slice(1).join("\n");
		return (...m)=> {
			const e= new this(...m);
			e.stack= Error.stackToList(e.stack)[0]+stack;
			return e;
		};
	}
	constructor({ is_async= true, message, code, ...rest }){
		super(message);
		this.name= "s.run"+(is_async ? "A" : "")+" [Process Output]";
		for(const [ k, value ] of Object.entries(rest))
			Reflect.defineProperty(this, k, { value, writable: false });
		Reflect.defineProperty(this, "exitCode", { value: code, writable: false });
		const combined= rest.stdout + ( rest.stderr ? "\n"+rest.stderr : "");
		Reflect.defineProperty(this, "toString", { value: ()=> combined, writable: false });
	}
}
