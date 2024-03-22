import { ShellString, ShellArray, ShellReturnValue, ExecOptions, ExecCallback } from "shelljs";
import child= require('child_process');
export { child };
export * from "shelljs";

/* tldr-start
 * ### s.xargs([options,], cmd[, cmd_args])
 *
 * Available options:
 *
 * + `-I`: Next parameter represents to be replaced in `cmd_args`.
 * + `-R`: Raw piped string ⇒ turn off escaping piped string (by default).
 *
 * */
export interface XargsOptions{
	/** Next parameter represents to be replaced in `cmd_args`. */
	"-I": string,
	/** Raw piped string ⇒ turn off escaping piped string (by default). */
	"-R": boolean
}
export interface XargsFunction {
	/**
	 * Works as `xargs` in bash, only `-I` option is supported.
	 * ```js
	 * s.run("git branch --show-current").xargs(s.run, "dep deploy --branch={}");
	 * s.run("git branch --show-current").xargs({ "-I": "§" }, s.run, "dep deploy --branch=§");
	 * ```
	 * *xarg() by default escapes piped string, this can be off by passing `-R` option.*
	 * 
	 * @param options	Defaults to `-I {}`
	 * @param cmd		ShellJS method from {@link ShellReturnValue}
	 * @param cmd_args	Arguments for `cmd`
	 * @return			Result of `cmd`
	 */
	<T extends (...args: any[])=> any>(options: XargsOptions, cmd: T, ...cmd_args: Parameters<T>): ReturnType<T>;
	<T extends (...args: any[])=> any>(cmd: T, ...cmd_args: Parameters<T>): ReturnType<T>;
}
/* tldr-end */
/* tldr-start
 * ### s.$()
 * ### s.$(options)
 * */
export interface DollarFunction{
	/**
	 * Modifies {@link config} for next command in chain. The `$()` runs next command in silent mode:
	 * ```bash
	 * // comapre bash
	 * var=$(echo Hi)
	 * echo $var
	 * // with
	 * const var= s.$().echo("Hi");
	 * echo(var);
	 * ```
	 * …examples:
	 * ```js
	 * const branch= s.$().run("git branch --show-current");
	 * echo(branch);
	 * 
	 * s.$("-VF").run("gyt branch --show-current");
	 *
	 * s.$("-g").rm("*.tx"); //remove only "*.txt" file
	 * ```
	 * 
	 * @param options Options
	 *	- "-V": verbose
	 *	- "-S": silent (default)
	 *	- "-F": fatal
	 *	- "-G": glob (evaluate `*` in paths)
	 *	- to off option(s) use lower-case letters ("-v" no-verbose, "-s" …, …, **"-g" noglob**)
	 */
	(options: "-V"|"-S"|"-F"|"-g"|"-v"|"-s"|"-f"|"-G"): ShellString;
	(): ShellString;
}
/* tldr-end */
export const $: DollarFunction;
/**
 * Use options as for:
 *
 * - [`child_process.spawn`](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options)
 * - [`child_process.execFileSync`](https://nodejs.org/api/child_process.html#child_processexecfilefile-args-options-callback)
 *
 * …in addition, use `needle` to replace `::var::` in `command` with actual
 * `var` value.
 * */
export type RunOptions=  ExecOptions & {
	/**
	 * Pattern in `command` to be replacced by variables.
	 *
	 * @default /::([^:]+)::/g
	 */
	needle?: RegExp;
}
export interface RunFunction {
	/**
	 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
	 * @param vars Arguments for `command`.
	 * @return		  Returns an object containing the return code and output as {@link ShellString}.
	 */
	(command: string, vars?: {}): ShellString;
	/**
	 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
	 * @param vars Arguments for `command`.
	 * @param options Silence and options.
	 * @return		  Returns an object containing the return code and output as {@link ShellString}.
	 */
	(command: string, vars: {} | false, options: RunOptions): ShellString;
}
import { Readable, Writable } from 'node:stream';
import { inspect } from 'node:util';
import { ChildProcess, StdioNull, StdioPipe } from 'node:child_process';
export declare type IO= StdioPipe | StdioNull;
export declare class ProcessOutput extends Error {
    constructor(code: number | null, signal: NodeJS.Signals | null, stdout: string, stderr: string, combined: string, message: string);
    toString(): string;
    get stdout(): string;
    get stderr(): string;
    get exitCode(): number | null;
    get signal(): NodeJS.Signals | null;
    [inspect.custom](): string;
}
export declare class ProcessPromise extends Promise<ProcessOutput> {
    child?: ChildProcess;
    _run(): void;
    get stdin(): Writable;
    get stdout(): Readable;
    get stderr(): Readable;
    stdio(stdin: IO, stdout?: IO, stderr?: IO): this;
    pipe(dest: Writable | ProcessPromise | ((s: ShellString)=> any)): ProcessPromise;
    // kill(signal?: string): Promise<void>;
    // timeout(d: Duration, signal?: string): this;
}
export interface RunAsyncFunction {
	/**
	 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
	 * @param vars Arguments for `command`.
	 */
	(command: string, vars: {} | false): ProcessPromise;

	/**
	 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
	 * @param vars Arguments for `command`.
	 * @param options Silence and options.
	 */
	(command: string, vars: {} | false, options: RunOptions): ProcessPromise;
}
/* tldr-start
 * ### s.run`cmd`
 * ### s.run(cmd[, vars][, options])
 * */
/**
 * You can use this function to run executable commands not listed
 * in the shelljs (`s` namespace). For example (the simplest one):
 * ```js
 * s.run`git branch --show-current`;
 * ```
 * …you can also pass variables and function automatically escapes
 * them.
 * ```js
 * const var= "Hello World";
 * s.run`echo ${var}`;
 * ```
 * …alternatively you can use classic function approach:
 * ```js
 * s.run("echo ::var::", { var: "Hello World" });
 * ```
 * …this way you can also pass additional options:
 * ```js
 * s.run("echo 'HI'", null, { cwd: "../" });
 * s.run("echo ::var::", { var: "Hi" }, { cwd: "../" });
 * ```
 * Internally the [`child_process.execFileSync`](https://nodejs.org/api/child_process.html#child_processexecfilefile-args-options-callback)
 * is used to execute the command, so use any of the options
 * supported by that function.
 *
 * By default the function prints the output of the command
 * to stdout. You can use `$.is_silent= false` or {@link s.$}:
 * ```js
 * const branch= s.$().run`git branch --show-current`.stdout;
 * echo(branch);
 * ```
 *
 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
 * @param vars Arguments for `command`.
 * @param options Silence and synchronous options.
 * @return Returns {@link ShellString}.
 */
export const run: RunFunction;
/* tldr-end */
/* tldr-start
 * ### s.runA`cmd`
 * ### s.runA(cmd[, vars][, options])
 * */
/**
 * Executes the given command asynchronously, the function arguments
 * are the same as for {@link s.run} function except that the
 * [`child_process.spawn`](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options)
 * is used internally.
 * ```js
 * s.runA`git branch --show-current`;
 * s.runA`echa ${"Hello World"}`;
 * s.runA("echo ::var::", { var: "Hello World" });
 * s.runA("echo 'HI'", null, { cwd: "../" });
 * ```
 *
 * The function returns a {@link ProcessPromise} object.
 * ```js
 * const result_a= await s.$().runA("git branch --show-current");
 * echo(result_a.toString());
 *
 * const result_b= await s.$().runA("git branch --show-::var::", { var: "current" }, { silent: true });
 * echo(result_b.toString());
 *
 * const ch= s.$().runA`git branch --show-current`;
 * ch.child.on("data", echo);
 * ```
 *
 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
 * @param vars Arguments for `command`.
 * @param options Silence and synchronous options.
 * @return Returns {@link ProcessPromise}.
 */
export const runA: RunAsyncFunction;
/* tldr-end */
/* tldr-start
 * ### s.read()
 * ### s.read(options)
 *
 * Available options:
 * + `-p`: Promt mode, value is used as question. It is possible to cobine with other options.
 * + `-s`: Make sence to combine only with `-p` to not show pressed keys (e.g. to prompt password).
 * + `completions`: Make sence to combine only with `-p` to provide tab suggestion/completions.
 * + `-d`: Returns the `stdin` till given needle.
 * + `-n`: Choose given number of chars from `stdin`.
 * 
 * */
export interface ReadOptions{
	/** Promt mode, value is used as question. It is possible to cobine with other options. */
	"-p": string;
	/** Make sence to combine only with `-p` to not show pressed keys (e.g. to prompt password). */
	"-s": boolean;
	/** Make sence to combine only with `-p` to provide tab suggestion/completions. */
	"completions": string[];
	/** Returns the `stdin` till given needle. */
	"-d": string;
	/** Choose given number of chars from `stdin`. */
	"-n": number;
}
/**
 * This function mimic [`read`](https://phoenixnap.com/kb/bash-read) command.
 * So, the function purpose is reading from `stdin`.
 * ```js
 * const answer= await $.read({ "-p": "Question" });
 * const color= await $.read({ "-p": "Your color", completions: [ "red", "green" ] });
 * if($.isFIFO(0)) await $.read().then(echo.bind(null, "E.g. for reading received input:"));
 * ```
 * */
export function read(options: ReadOptions): Promise<ShellString>;
/* tldr-end */

export interface ShellReturnValueNJS extends ShellReturnValue {
	xargs: XargsFunction
	$: DollarFunction,
	run: RunFunction
	runA: RunAsyncFunction,
	read: typeof read
}
