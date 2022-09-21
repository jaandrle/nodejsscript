/**
 * Function similar to [Ramda `R.pipe`](https://ramdajs.com/docs/#pipe). Provides functional way to combine commands/functions.
 * 
 * ```js
 * pipe(
 * 	Number,
 * 	v=> style.greenBright(v+1),
 * 	v=> `Result is: ${v}`,
 * 	echo
 * )(await question("Choose number:"));
 * ```
 * @category Public
*/
export function pipe(...funs: Function[]): (input: any)=> any;

/**
 * This namespace refers to `shelljs`, for docs visits [shelljs/shelljs](https://github.com/shelljs/shelljs).
 * You can pipe commands when make sense by chaining, see [**Pipes**](https://github.com/shelljs/shelljs#pipes).
 * 
 * Available commands: [cat](https://github.com/shelljs/shelljs#catoptions-file--file-) · [cd](https://github.com/shelljs/shelljs#cddir) · [chmod](https://github.com/shelljs/shelljs#chmodoptions-octal_mode--octal_string-file) · [cp](https://github.com/shelljs/shelljs#cpoptions-source--source--dest)
 *  · [pushd](https://github.com/shelljs/shelljs#pushdoptions-dir---n--n) · [popd](https://github.com/shelljs/shelljs#popdoptions--n--n) · [dirs](https://github.com/shelljs/shelljs#dirsoptions--n---n) · [exec](https://github.com/shelljs/shelljs#execcommand--options--callback)
 *  · [find](https://github.com/shelljs/shelljs#findpath--path-) · [grep](https://github.com/shelljs/shelljs#grepoptions-regex_filter-file--file-) · [head](https://github.com/shelljs/shelljs#head-n-num-file--file-) · [ln](https://github.com/shelljs/shelljs#lnoptions-source-dest)
 *  · [ls](https://github.com/shelljs/shelljs#lsoptions-path-) · [mkdir](https://github.com/shelljs/shelljs#mkdiroptions-dir--dir-) · [mv](https://github.com/shelljs/shelljs#mvoptions--source--source--dest) · [pwd](https://github.com/shelljs/shelljs#pwd)
 *  · [rm](https://github.com/shelljs/shelljs#rmoptions-file--file-) · [sed](https://github.com/shelljs/shelljs#sedoptions-search_regex-replacement-file--file-) · [sort](https://github.com/shelljs/shelljs#sortoptions-file--file-)
 *  · [tail](https://github.com/shelljs/shelljs#tail-n-num-file--file-) · [tempdir](https://github.com/shelljs/shelljs#tempdir) · [test](https://github.com/shelljs/shelljs#testexpression) · [touch](https://github.com/shelljs/shelljs#touchoptions-file--file-)
 *  · [uniq](https://github.com/shelljs/shelljs#uniqoptions-input-output) · [which](https://github.com/shelljs/shelljs#whichcommand) · [exit](https://github.com/shelljs/shelljs#exitcode) · [error](https://github.com/shelljs/shelljs#error) · [errorCode](https://github.com/shelljs/shelljs#errorcode) 
 *
 * ```js
 * s.cat("./package.json").grep("version");
 * ```
 * … this library adds two function {@link s.XargsFunction 'xargs()'} and {@link s.DollarFunction '$()'}.
 * @category Public
 */
export * as s from './src/shelljs.d';

import * as style from 'ansi-colors';
/**
 * The [doowb/ansi-colors](https://github.com/doowb/ansi-colors) package as `style` namespace.
 * ```js
 * style.theme({ info: style.blue });
 * echo(style.info('Hello world!'));
 * ```
 * @category Public
 */
export { style };

import * as __fetch from 'node-fetch';
/**
 * A wrapper around the [node-fetch](https://www.npmjs.com/package/node-fetch) package.
 *
 * ```js
 * // BASIC
 * const response1= await fetch('https://medv.io');
 * // PROMISE CHAINING
 * const text1= await fetch('https://github.com/').then(r=> r.text());
 * // AWAITING
 * const response2= await fetch('https://api.github.com/users/github');
 * const json1= await response.json();
 * // POST METHOD
 * const json2= await fetch('https://httpbin.org/post', { method: 'POST', body: 'a=1' }).then(r=> r.json());
 * // POST METHOD WITH JSON
 * const response3= await fetch('https://httpbin.org/post', {
 * 	method: 'post',
 * 	body: JSON.stringify({ a: 1 }),
 * 	headers: {'Content-Type': 'application/json'}
 * });
 * // ERRORS
 * fetch('https://domain.invalid/').catch(echo);
 * try{
 *	await fetch('https://domain.invalid');
 * } catch(error){
 *	echo(error);
 * }
 * ```
 *
 * @param url The URL to fetch.
 * @param init Request parameters.
 * @category Public 
 */
export function fetch(url: string | __fetch.Request, init?: __fetch.RequestInit): __fetch.Response;
export { __fetch };

export { log } from 'node:console';
/**
 * Prints to `stdout` with newline. Multiple arguments can be passed, with the
 * first used as the primary message and all additional used as substitution
 * values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html) (the arguments are all passed to `util.format()`).
 * Internally uses {@link log}. Stringifies inputs except objects and errors in case of {@link config.verbose}.
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
 * @category Public
 */
export function echo(message?: any, ...optionalParams: any[]): void;

import * as __sade from "sade";
export { __sade };
/**
 * Helpers for simplify cli creation.
 * @category Public
 */
export namespace cli {
	/**
	 * A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
	 * In addition to the origin, `cli.register()` supports to fill script name from script file name.
	 * This should be good balance between [commander - npm](https://www.npmjs.com/package/commander) and parsing arguments and writing help texts by hand.
	 * For more complex scripts just create full npm package.
	 * ```js
	 * cli.register("", true)
	 * 	.version("0.1.0")
	 * 	.describe("NodeJS Script cli test")
	 * 	.action(echo);
	 * ```
	 * @param usage The script name and usage (`[optional]`/`<required>`). If no `name`, then the script file name will be used.
	 * @param is_single See {@link __sade}
	 * */
	function register(usage: string, is_single?: boolean): __sade.Sade
	/**
	 * Promt user for answer.
	 * @param query Question
	 * @param  options The optional `completions` is array of options to be suggested when `tab` key is pressed.
	 * */
	function question(query?: string, options?: { completions: string[] }): Promise<string>
}
