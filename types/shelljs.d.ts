import * as shelljs from "shelljs";

export interface XargsFunction {
	/**
	 * Works as `xargs` in bash, only `-I` option is supported.
	 *
	 * @param options Available options:
	 *		  - `-I`: Next parameter represents to be replaced in `cmd_args`.
	 * @param I_arg		Defaults to `{}`
	 * @param cmd		ShellJS method from {@link shelljs.ShellReturnValue}
	 * @param cmd_args	Arguments for `cmd`
	 * @return			Result of `cmd`
	 */
	<T extends function>(options: string, I_arg: string, cmd: T, ...cmd_args: Parameters<T>): ReturnType<T>;
	<T extends function>(cmd: T, ...cmd_args: Parameters<T>): ReturnType<T>;
}
shelljs.ShellReturnValue.xargs = XargsFunction;

export interface $Function{
	/**
	 * Modifies {@link shelljs.config} for next command. By default `silent= true`
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
	(options: "-v"|"-s"|"-f"= "-s"): ShellReturnValue;
}
shelljs.$= $Function;
shelljs.ShellReturnValue.$= $Function;

export { shelljs as s };
