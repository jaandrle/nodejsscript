/** @category Public */
export { echo, EchoFunction } from './src/echo.d';
export { xdg_, __sade, _env, _exit } from './src/$.d';
/**
 * Contains configuration for current script and methods
 * for managing arguments.
 *
 * You can also use `$[0]`–`$[n]` for getting nth script argument (compare to bashs `$0`–`$n`).
 * @category Public 
 */
export { Dollar as $ } from './src/$.d';
/* tldr-start
 * ### pipe
 * */
/**
 * Function similar to [Ramda `R.pipe`](https://ramdajs.com/docs/#pipe). Provides functional way to combine commands/functions.
 * 
 * ```js
 * pipe(
 * 	Number,
 * 	v=> `Result is: ${v}`,
 * 	echo
 * )(await question("Choose number:"));
 * ```
 * @category Public
*/
export function pipe(...funs: Function[]): (input: any)=> any;
/* tldr-end */

/**
 * This namespace refers to `shelljs`, for docs visits [shelljs/shelljs](https://github.com/shelljs/shelljs).
 * You can pipe commands when make sense by chaining, see [**Pipes**](https://github.com/shelljs/shelljs#pipes).
 * 
 * Available commands:
 *    [cat](https://github.com/shelljs/shelljs#catoptions-file--file-)
 *  · [cd](https://github.com/shelljs/shelljs#cddir)
 *  · [chmod](https://github.com/shelljs/shelljs#chmodoptions-octal_mode--octal_string-file)
 *  · [cp](https://github.com/shelljs/shelljs#cpoptions-source--source--dest)
 *  · [pushd](https://github.com/shelljs/shelljs#pushdoptions-dir---n--n)
 *  · [popd](https://github.com/shelljs/shelljs#popdoptions--n--n)
 *  · [dirs](https://github.com/shelljs/shelljs#dirsoptions--n---n)
 *  · [find](https://github.com/shelljs/shelljs#findpath--path-)
 *  · [grep](https://github.com/shelljs/shelljs#grepoptions-regex_filter-file--file-)
 *  · [head](https://github.com/shelljs/shelljs#head-n-num-file--file-)
 *  · [ln](https://github.com/shelljs/shelljs#lnoptions-source-dest)
 *  · [ls](https://github.com/shelljs/shelljs#lsoptions-path-)
 *  · [mkdir](https://github.com/shelljs/shelljs#mkdiroptions-dir--dir-)
 *  · [mv](https://github.com/shelljs/shelljs#mvoptions--source--source--dest)
 *  · [pwd](https://github.com/shelljs/shelljs#pwd)
 *  · [rm](https://github.com/shelljs/shelljs#rmoptions-file--file-)
 *  · [sed](https://github.com/shelljs/shelljs#sedoptions-search_regex-replacement-file--file-)
 *  · [sort](https://github.com/shelljs/shelljs#sortoptions-file--file-)
 *  · [tail](https://github.com/shelljs/shelljs#tail-n-num-file--file-)
 *  · [test](https://github.com/shelljs/shelljs#testexpression)
 *  · [touch](https://github.com/shelljs/shelljs#touchoptions-file--file-)
 *  · [uniq](https://github.com/shelljs/shelljs#uniqoptions-input-output)
 *  · [which](https://github.com/shelljs/shelljs#whichcommand)
 *  · [error](https://github.com/shelljs/shelljs#error)
 *  · [errorCode](https://github.com/shelljs/shelljs#errorcode) 
 *
 * ```js
 * s.cat("./package.json").grep("version");
 * ```
 * … this library adds:
 * - {@link s.run 'run()'}
 * - {@link s.runA 'runA()'}
 * - {@link s.XargsFunction 'xargs()'}
 * - {@link s.DollarFunction '$()'}
 * - {@link s.read 'read()'}
 *
 * **Changes/recommenctions:**
 * - use {@link echo} instead of `s.echo`, this was changed to `s.ShellString` for easy file writing without logging to console `s.echo("Data").to("file.txt")`.
 * - use {@link s.run 'run()'}/{@link s.runA 'runA()'} instead of `s.exec`, because of options for passing arguments in secure way.
 * - use {@link s.DollarFunction '$()'} instead of `s.set()`, because `$()` allows chaining (you can also access config with {@link $}s `.is_*` keys).
 * - use {@link $.xdg}`.temp` instead of `s.tempdir()` – the `$.xdg.*` provides more paths than just temp directory.
 * @category Public
 */
export * as s from './src/shelljs.d';

import * as __fetch from 'node-fetch';
/**
 * The [node-fetch](https://www.npmjs.com/package/node-fetch)
 * package can be used in cases when `fetch` is not available natively.
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
