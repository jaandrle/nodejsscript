export * from "shelljs";

export interface XargsFunction {
	/**
	 * Works as `xargs` in bash, only `-I` option is supported.
	 *
	 * @param options Available options:
	 *		  - `-I`: Next parameter represents to be replaced in `cmd_args`.
	 * @param I_arg		Defaults to `{}`
	 * @param cmd		ShellJS method from {@link ShellReturnValue}
	 * @param cmd_args	Arguments for `cmd`
	 * @return			Result of `cmd`
	 */
	<T extends (...args: any[])=> any>(options: string, I_arg: string, cmd: T, ...cmd_args: Parameters<T>): ReturnType<T>;
	<T extends (...args: any[])=> any>(cmd: T, ...cmd_args: Parameters<T>): ReturnType<T>;
}

export interface DollarFunction{
	/**
	 * Modifies {@link config} for next command. By default `silent= true`
	 * @param options Options
	 *	- "-v":  verbose
	 *	- "-s": silent (default)
	 *	- "-f": fatal
	 * @example
	 * // comapre bash
	 * var=$(echo Hi)
	 * echo $var
	 * // with
	 * const var= s.$().echo("Hi");
	 * echo(var);
	 */
	(options: "-v"|"-s"|"-f"): ShellReturnValue;
	(): ShellReturnValue;
}
export interface ShellReturnValue{
	xargs: XargsFunction
	$: DollarFunction
}

export function $(): DollarFunction;
