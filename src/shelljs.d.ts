import { ShellString, ExecOptions, ExecCallback } from "shelljs";
import child= require('child_process');
export { child };
export * from "shelljs";

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
	 * @param options	Defaults to `-I {}`
	 * @param cmd		ShellJS method from {@link ShellReturnValue}
	 * @param cmd_args	Arguments for `cmd`
	 * @return			Result of `cmd`
	 */
	<T extends (...args: any[])=> any>(options: XargsOptions, cmd: T, ...cmd_args: Parameters<T>): ReturnType<T>;
	<T extends (...args: any[])=> any>(cmd: T, ...cmd_args: Parameters<T>): ReturnType<T>;
}
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
	 * @param options Options
	 *	- "-V": verbose
	 *	- "-S": silent (default)
	 *	- "-F": fatal
	 *	- "-g": noglob
	 */
	(options: "-V"|"-S"|"-F"|"-g"): ShellString;
	(): ShellString;
}
export const $: DollarFunction;

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
	 * Executes the given command synchronously, because of that it does not know whether it will be piped,
	 * so by default prints the command output. You can off that by prepend `….$().run`.
	 *
	 * *Synchronous simple examples*:
	 * ```js
	 * s.run("node --version");
	 * const version= s.$().run("node --version").stdout;
	 * ```
	 * *Passing variables*:
	 * ```js
	 * const branch= s.$().run("git branch --show-current").stdout;
	 * s.run("echo ::branch::", { branch });
	 * ```
	 *
	 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
	 * @param vars Arguments for `command`.
	 * @return		  Returns an object containing the return code and output as {@link ShellString}.
	 */
	(command: string, vars?: {}): ShellString;

	/**
	 * Executes the given command synchronously, because of that it does not know whether it will be piped,
	 * so by default prints the command output. You can off that by prepend `….$().run`.
	 *
	 * *Passing variables*:
	 * ```js
	 * const branch= s.$().run("git branch --show-current").stdout;
	 * s.run("echo ::branch::", { branch });
	 * ```
	 *
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
	 * Executes the given command asynchronously.
	 * ```js
	 * s.$().runA("git branch --show-current")
	 * .then(echo.bind(echo, "success:"))
	 * .catch(echo.bind(echo, "error:"));
	 *
	 * s.$().runA("npm list")
	 * .pipe(s=> echo(s.grep("types")))
	 * .catch(echo.bind(echo, "error:"));
	 *
	 * const ch= s.$().runA("git branch --show-current");
	 * ch.child.on("data", echo);
	 *
	 * const result_a= await s.$().runA("git branch --show-current");
	 * echo(result_a.toString());
	 * ```
	 *
	 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
	 * @param vars Arguments for `command`.
	 */
	(command: string, vars: {} | false): ProcessPromise;

	/**
	 * Executes the given command asynchronously.
	 * ```js
	 * const result_b= await s.$().runA("git branch --show-::var::", { var: "current" }, { silent: true });
	 * echo(result_b.toString());
	 * ```
	 *
	 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
	 * @param vars Arguments for `command`.
	 * @param options Silence and options.
	 */
	(command: string, vars: {} | false, options: RunOptions): ProcessPromise;
}
/**
 * Executes the given command synchronously, because of that it does not know whether it will be piped,
 * so by default prints the command output. You can off that by prepend `….$().run`.
 *
 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
 * @param vars Arguments for `command`.
 * @param options Silence and synchronous options.
 * @return Returns {@link ShellString}.
 */
export const run: RunFunction;
/**
 * Executes the given command asynchronously.
 * ```js
 * s.$().runA("git branch --show-current")
 * .pipe(echo.bind(echo, "success:"))
 * .catch(echo.bind(echo, "error:"))
 *
 * const ch= s.$().runA("git branch --show-current");
 * ch.child.on("data", echo);
 *
 * const result_a= await s.$().runA("git branch --show-current");
 * echo(result_a.toString());
 *
 * const result_b= await s.$().runA("git branch --show-::var::", { var: "current" }, { silent: true });
 * echo(result_b.toString());
 * ```
 *
 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
 * @param vars Arguments for `command`.
 * @param options Silence and synchronous options.
 * @return Returns {@link ProcessPromise}.
 */
export const runA: RunAsyncFunction;

export interface ShellReturnValue{
	xargs: XargsFunction
	$: DollarFunction,
	run: RunFunction
	runA: RunAsyncFunction
}
