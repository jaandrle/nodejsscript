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
	 * Asynchronous execution.
	 *
	 *
	 * @default false
	 */
	async?: "child" | boolean | undefined;
	/**
	 * Pattern in `command` to be replacced by variables.
	 *
	 * @default /::([^:]+)::/g
	 */
	needle?: RegExp;
}
export type AsyncCommandString= `${string} &`;
export interface RunFunction {
	/**
	 * Executes the given command synchronously.
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
	 * @return		  Returns an object containing the return code and output as string.
	 */
	(command: string, vars?: {}): ShellString;

	/**
	 * Executes the given command synchronously.
	 *
	 * *Passing variables*:
	 * ```js
	 * const branch= s.$().run("git branch --show-current").stdout;
	 * s.run("echo ::branch::", { branch });
	 * ```
	 *
	 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
	 * @param vars Arguments for `command`.
	 * @param options Silence and synchronous options.
	 * @return		  Returns an object containing the return code and output as string,
	 *				  or if `{async: true}` was passed, a `ChildProcess`.
	 */
	(command: string, vars: {} | false, options: RunOptions & { async?: false | undefined }): ShellString;

	/**
	 * Executes the given command asynchronously.
	 * ```js
	 * s.$().run("git branch --show-current", false, { async: true })
	 * .then(echo.bind(echo, "success:"))
	 * .catch(echo.bind(echo, "error:"))
	 * ```
	 *
	 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
	 * @param vars Arguments for `command`.
	 * @param options Silence and synchronous options.
	 * @return		  Returns an object containing the return code and output as string,
	 *				  or if `{async: true}` was passed, a `Promise`.
	 */
	(command: string, vars: {} | false, options: RunOptions & { async: true }): Promise<string>;

	/**
	 * Executes the given command asynchronously.
	 * ```js
	 * s.$().run("git branch --show-current", false, { async: true })
	 * .then(echo.bind(echo, "success:"))
	 * .catch(echo.bind(echo, "error:"))
	 * ```
	 *
	 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
	 * @param vars Arguments for `command`.
	 * @param options Silence and synchronous options.
	 * @return		  Returns an object containing the return code and output as string,
	 *				  or if `{async: true}` was passed, a `Promise`.
	 */
	(command: AsyncCommandString, vars?: {} | false, options?: RunOptions): Promise<string>;

	/**
	 * Executes the given command asynchronously. *Get the {@link child}*:
	 * ```js
	 * const ch= s.$().run("git branch --show-current", false, { async: "child" });
	 * ch.on("data", echo);
	 * ```
	 *
	 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
	 * @param vars Arguments for `command`.
	 * @param options Silence and synchronous options.
	 * @return		  Returns an object containing the return code and output as string,
	 *				  or if `{async: "child"}` was passed, a `ChildProcess`.
	 */
	(command: string, vars: {} | false, options: RunOptions & { async: "child" }): child.ChildProcess;
}
/**
 * Executes the given command. You can use `&` in `command` to run command asynchronously (but `options.async` has higher priority).
 *
 * @param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
 * @param vars Arguments for `command`.
 * @param options Silence and synchronous options.
 * @return Returns an object containing the return code and output as string,
 *         or if `{async: true}` or a `callback` was passed, a `ChildProcess`.
 */
export const run: RunFunction;

export interface ShellReturnValue{
	xargs: XargsFunction
	$: DollarFunction,
	run: RunFunction
}
