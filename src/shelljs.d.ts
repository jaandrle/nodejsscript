import { ShellString } from "shelljs";
export * from "shelljs";

export interface XargsOptions{
	/** Next parameter represents to be replaced in `cmd_args`. */
	"-I": string
}
export interface XargsFunction {
	/**
	* Works as `xargs` in bash, only `-I` option is supported.
	* ```js
	* s.exec("git branch --show-current").xargs(s.exec, "dep deploy --branch={}");
	* s.exec("git branch --show-current").xargs({ "-I": "§" }, s.exec, "dep deploy --branch=§");
	* ```
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
	 * const branch= s.$().exec("git branch --show-current");
	 * echo(branch);
	 * 
	 * s.$("-vf").exec("gyt branch --show-current");
	 * ```
	 * @param options Options
	 *	- "-v":  verbose
	 *	- "-s": silent (default)
	 *	- "-f": fatal
	 */
	(options: "-v"|"-s"|"-f"): ShellString;
	(): ShellString;
}
export const $: DollarFunction;

export interface ShellReturnValue{
	xargs: XargsFunction
	$: DollarFunction
}
