import { ProcessOutput } from "./Error.js";
import { spawn } from "node:child_process";
import assert from "node:assert";
import { AsyncLocalStorage, createHook } from 'node:async_hooks';
import shelljs from "shelljs";
const { which, ShellString }= shelljs;

const processCwd= Symbol('processCwd');
const storage= new AsyncLocalStorage();
createHook({
	init: syncCwd,
	before: syncCwd,
	promiseResolve: syncCwd,
	after: syncCwd,
	destroy: syncCwd,
}).enable();
const defaults= getDefaults();
function getStore(){ return storage.getStore() || defaults; }
export const process_store= getProcesStore(()=> ({
	command: '', from: '',
	resolve: noop, reject: noop,
	stdio: ['inherit', 'pipe', 'pipe'],
	resolved: false, piped: 0,
	prerun: noop, postrun: noop
}));
export class ProcessPromise extends Promise{
	static create(command, options){
		let resolve, reject;
		const i= new this((...args) => ([resolve, reject] = args));
		process_store.assign(i, { resolve, reject, command, options, processOutput: ProcessOutput.bind() });
		setImmediate(()=> i._run()); // Postpone run to allow promise configuration.
		return i;
	}
	_run(){
		if(this.child) return; // The _run() can be called from a few places.
		const { prerun, command, options, stdio }= process_store.get(this);
		prerun(); // In case $1.pipe($2), the $2 returned, and on $2._run() invoke $1._run().
		const { spawn, prefix, shell, [processCwd]: cwd, env }= getStore();
		if(!Reflect.has(options, "cwd")) options.cwd= cwd;
		if(Reflect.has(options, "pipe")) stdio[0]= "pipe";
		this.child= spawn(prefix + command,
			Object.assign({ shell: typeof shell === 'string' ? shell : true, windowsHide: true, env, stdio }, options));
		if(Reflect.has(options, "pipe")) this.child.stdin.end(options.pipe);
		let stdout = '', stderr = '';
		const { resolve, reject, processOutput }= process_store.get(this);
		this.child.on('close', (code, signal)=> {
			let message= stderr.trim();
			const output= processOutput({ code, signal, stdout, stderr, message });
			process_store.get(this).resolved= true;
			if(code === 0 || !process_store.get(this).options.fatal)
				return resolve(output);
			reject(output);
		});
		this.child.on('error', (err) => {
			const message= err.message;
			reject(processOutput({ stdout, stderr, message }));
			process_store.get(this).resolved= true;
		});
		const { piped, postrun, options: { silent } }= process_store.get(this);
		const log= piped || silent ? ( ()=> ({}) ) : d=> console.log(d.toString());
		if(piped<2) this.child.stdout?.on('data', d=> ( stdout+= d, log(d) ));
		this.child.stderr?.on('data', d=> ( stderr+= d, log(d) ));
		postrun(); // In case $1.pipe($2), after both subprocesses are running, we can pipe $1.stdout to $2.stdin.
		if(this._timeout && this._timeoutSignal) {
			const t = setTimeout(() => this.kill(this._timeoutSignal), this._timeout);
			this.finally(() => clearTimeout(t)).catch(noop);
		}
	}
	pipe(dest) {
		if(process_store.get(this).resolved) {
			if(dest instanceof ProcessPromise) dest.stdin.end(); // In case of piped stdin, we may want to close stdin of dest as well.
			throw new Error("The pipe() method shouldn't be called after promise is already resolved!");
		}
		process_store.get(this).piped= 1;
		if(typeof dest === "function")
			return this.then(({ stdout, stderr, exitCode })=> dest(ShellString(stdout, stderr, exitCode)));

		process_store.get(this).piped= 2;
		if(dest instanceof ProcessPromise){
            dest.stdio('pipe');
			process_store.assign(dest, {
				prerun: this._run.bind(this),
				postrun: ()=> {
					if (!dest.child) throw new Error('Access to stdin of pipe destination without creation a subprocess.');
					this.stdout.pipe(dest.stdin);
				}});
			return dest;
		}
		process_store.get(this).postrun = () => this.stdout.pipe(dest);
		return this;
	}
	//async kill(signal = 'SIGTERM') {
	//	if (!this.child) throw new Error('Trying to kill a process without creating one.');
	//	if (!this.child.pid) throw new Error('The process pid is undefined.');
	//=>	let children= await psTree(this.child.pid);
	//	for (const p of children) {
	//		try { process.kill(+p.PID, signal); }
	//		catch (e) { }
	//	}
	//	try { process.kill(this.child.pid, signal); }
	//	catch (e) { }
	//}
	stdio(stdin, stdout = 'pipe', stderr = 'pipe') {
		process_store.get(this).stdio= [stdin, stdout, stderr];
		return this;
	}
	get stdin(){
		process_store.get(this).stdio= 'pipe';
		return stdInOutErr(this, "stdin"); }
	get stdout(){
		return stdInOutErr(this, "stdout"); }
	get stderr(){
		return stdInOutErr(this, "stderr"); }
	timeout(d, signal = 'SIGTERM') {
		this._timeout = parseDuration(d);
		this._timeoutSignal = signal;
		return this;
	}
}
function stdInOutErr(target, name){
	target._run();
	assert(target.child);
	if (target.child[name] == null)
		throw new Error(`The ${name} of subprocess is null.`);
	return target.child[name];
}
function noop(){}
function getProcesStore(initial){
	const store= new WeakMap();
	return {
		has: store.has.bind(store),
		set: store.set.bind(store),
		get(target){ return store.has(target) ? store.get(target) : initial; },
		assign(target, data){
			const now= store.has(target) ? store.get(target) : initial();
			store.set(target, Object.assign(now, data));
			return now;
		}
	};
}function syncCwd() {
	const cwd= getStore()[processCwd];
	if(cwd != process.cwd())
		process.chdir(cwd);
}
export function parseDuration(d) {
	if (typeof d == 'number') {
		if (isNaN(d) || d < 0)
			throw new Error(`Invalid duration: "${d}".`);
		return d;
	}
	else if (/\d+s/.test(d)) {
		return +d.slice(0, -1) * 1000;
	}
	else if (/\d+ms/.test(d)) {
		return +d.slice(0, -2);
	}
	throw new Error(`Unknown duration: "${d}".`);
}
function getDefaults(){
	const defaults= {
		[processCwd]: process.cwd(),
		verbose: true,
		env: process.env,
		shell: true,
		prefix: '',
		spawn
	};
	try {
		if (process.platform !== 'win32') {
			defaults.shell= which("bash").stdout;
			defaults.prefix= 'set -euo pipefail;';
		}
	}
	catch (err) {
		// ¯\_(ツ)_/¯
	}
	return defaults;
}
