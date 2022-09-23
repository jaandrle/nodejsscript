import * as s from "shelljs";
type Options= `-${string}`;
export interface EchoFunction {
	/**
	 * Similarly to {@link s.echo}, the first argument accepts options string starting with `-`:
	 * - `-n`: Don’t append **n**ew line
	 * - `-1`/`-2`: Outputs to `stdout`/`stderr`
	 * - `-c`: Don’t **c**olorize output (e.g. objects)
	 * - `-P`: Outputs objects in **p**rettier format
	 * - `-R`/`-r`: Starts/Ends **r**ewritable mode (for spinners, progress bars, etc.). Mode can be ended with any other `echo` without `-R`.
	 *
	 * ```js
	 * echo.use("-R", "0%");
	 * // …
	 * echo.use("-r", "100%");
	 * // combination
	 * echo.use("-2cP", { a: "A" });
	 * ```
	 * @param options Available options: `-n`, `-1`/`-2`, `-c`, `-P`, `-R`/`-r` and `--`.
	 * @param message The text to print.
	 * @return	   Returns processed string with additional utility methods like .to().
	 */
	use(options: Options, message?: any, ...optionalParams: any[]): s.ShellString;

	/**
	 * Prints to `stdout` with newline. Multiple arguments can be passed, with the
	 * first used as the primary message and all additional used as substitution
	 * values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html) (the arguments are all passed to `util.format()`).
	 * Internally uses {@link console.log}. Stringify inputs except objects and errors in case of {@link config.verbose}.
	 *
	 * ```js
	 * const count = 5;
	 * echo('count: %d', count);
	 * // Prints: count: 5, to stdout
	 * echo('count:', count);
	 * // Prints: count: 5, to stdout
	 * echo({ count });
	 * // Prints: { count: 5 }, to stdout
	 * echo(new Error("Test"));
	 * // Prints: 'Error: Test', when `config.verbose= false`
	 * ```
	 *
	 * @param message The text to print.
	 * @return	   Returns processed string with additional utility methods like .to().
	 */
	(message?: any, ...optionalParams: any[]): s.ShellString;
}
/**
 * The `console.log` alternative with method `use` similar to {@link s.echo},
 *  the first argument accepts options string starting with `-`:
 * - `-n`: Don’t append **n**ew line
 * - `-1`/`-2`: Outputs to `stdout`/`stderr`
 * - `-c`: Don’t **c**olorize output (e.g. objects)
 * - `-P`: Outputs objects in **p**rettier format
 * - `-R`/`-r`: Starts/Ends **r**ewritable mode (for spinners, progress bars, etc.). Mode can be ended with any other `echo` without `-R`.
 *
 * ```js
 * // as console.log
 * const count = 5;
 * echo('count: %d', count);
 * // Prints: count: 5, to stdout
 * echo('count:', count);
 * // Prints: count: 5, to stdout
 * echo({ count });
 * // Prints: { count: 5 }, to stdout
 * echo(new Error("Test"));
 * // Prints: 'Error: Test', when `config.verbose= false`
 * ```
 * ```js
 * echo.use("-R", "0%");
 * // …
 * echo.use("-r", "100%");
 * // combination
 * echo.use("-2cP", { a: "A" });
 * ```
 * ```js
 * echo("Hi").to("./test.txt");
 * // Prints: 'Hi' & save to file 'test.txt'
 * ```
 * @param message The text to print.
 * @return	   Returns processed string with additional utility methods like .to().
 * @category Public
 */
export const echo: EchoFunction;
