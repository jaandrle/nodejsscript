import * as s from "shelljs";
export type Options= `-${string}`;
import { style } from 'css-in-console';
export interface EchoFunction {
	/**
	 * Similarly to {@link s.echo}, the first argument accepts options string starting with `-`:
	 * - `-n`: Don’t append **n**ew line
	 * - `-1`/`-2`: Outputs to `stdout`/`stderr`
	 * - `-c`: Don’t **c**olorize output (e.g. objects)
	 * - `-P`: Outputs objects in **p**rettier format
	 * - `-R`/`-r`: Starts/Ends **r**ewritable mode (for spinners, progress bars, etc.). Mode can be ended with any other `echo` without `-R`.
	 * - `-S`: silent mode ⇒ just return processed final string (ignores: `-1`, `-2`, `R`)
	 *
	 * ```js
	 * echo.use("-R", "0%");
	 * // …
	 * echo.use("-r", "100%");
	 * // combination
	 * echo.use("-2cP", { a: "A" });
	 * ```
	 * @param options Available options: `-n`, `-1`/`-2`, `-c`, `-P`, `-R`/`-r`.
	 * @param message The text to print.
	 * @return	   Returns processed string with additional utility methods like .to().
	 */
	use(options: Options, message?: any, ...optionalParams: any[]): s.ShellString;

	/**
	 * In `echo`, you can use `%c` for styling:
	 * ```js
	 * echo("%cHello %cWorld!", "color: red", "color: blue");
	 * ```
	 * **But**, implementation for `echo` is much more limited. There is no CSS parser, just keywords see [css_rules](https://github.com/jaandrle/css-in-console/blob/main/docs/README.md#css_rules).
	 * **Internally uses [css-in-console - npm](https://www.npmjs.com/package/css-in-console)**.
	 *
	 * You can pre-define css class with this method:
	 * ```js
	 * const css= echo.css(".red { color: red; }", ".blue { color: blue; }");
	 * echo("%cRed text", css.red);
	 * echo("%cBlue text", css.blue);
	 * ```
	 * …there is special style name `*` which applies to all defined classes:
	 * ```js
	 * const css= echo.css("* { font-weight: bold; }", ".red { color: red; }", ".blue { color: blue; }");
	 * echo("%cRed and bold text", css.red);
	 * echo("%cBlue and bold text", css.blue);
	 * ```
	 * …there is also helpers (see {@link EchoFunction.format} and {@link EchoFunction.formatWithOptions}) to just return finally formated text:
	 * ```js
	 * const css= echo.css`
	 *	* { font-weight: bold; }
	 *	.red { color: red; }
	 *	.blue { color: blue; }
	 * `;
	 * const text= echo.format("%cRed and bold text", css.red);
	 * echo(text);
	 * ```
	 * For further information, see:
	 * <br>- [css-in-console - npm](https://www.npmjs.com/package/css-in-console)
	 * <br>- [Styling console output](https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output)
	 * <br>- [Util.format | Node.js v19.1.0 Documentation](https://nodejs.org/api/util.html#utilformatformat-args)
	 */
	css: typeof style;
	/**
	 * A helper method returning formated text as it processed by {@link echo}, but not printed into the console.
	 * (So infact, it is an alias `echo.use("-S", …);`)
	 * @param message The text to print.
	 * @return	   Returns processed string with additional utility methods like .to().
	 * */
	format(message?: any, ...optionalParams: any[]): s.ShellString;
	/**
	 * A helper method returning formated text as it processed by {@link echo}, but not printed into the console.
	 * (So infact, it is an alias `echo.use("-S"+…, …);`)
	 * @param options Available options: `-n`, `-c`, `-P` (these are available, but ignored: `-1`/`-2`, `-R`/`-r`).
	 * @param message The text to print.
	 * @return	   Returns processed string with additional utility methods like .to().
	 * */
	formatWithOptions(options: Options, message?: any, ...optionalParams: any[]): s.ShellString;

	/**
	 * Prints to `stdout` with newline. Multiple arguments can be passed, with the
	 * first used as the primary message and all additional used as substitution
	 * values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html) (the arguments are all passed to `util.format()`).
	 * Internally uses `console.log`. Stringify inputs except objects and errors in case of `$.is_verbose`.
	 * Supports basic styling, see {@link css}.
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
 * This is mixed function between bash’s `echo` and `console.log`.
 * By default, works more like `console.log` with partial supports
 * for styling mimic CSS and `console.log` in the web browser. See {@link EchoFunction.css echo.css} (internally uses [css-in-console - npm](https://www.npmjs.com/package/css-in-console)).
 * 
 * The {@link EchoFunction.use} provides more `echo` way,
 * the first argument accepts options string starting with `-`:
 * - `-n`: Don’t append **n**ew line
 * - `-1`/`-2`: Outputs to `stdout`/`stderr`
 * - `-c`: Don’t **c**olorize output (e.g. objects)
 * - `-P`: Outputs objects in **p**rettier format
 * - `-R`/`-r`: Starts/Ends **r**ewritable mode (for spinners, progress bars, etc.). Mode can be ended with any other `echo` without `-R`.
 *
 * There is also 
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
