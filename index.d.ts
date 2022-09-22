import { IOptions } from 'glob';
/**
 * Read/write global configuration.
 * @category Public
 */
export namespace config {
	/**
	 * Suppresses all command output if `true`, except for `echo()` call.
	 * @default false
	 * */
	const silent: boolean;
    /**
	 * Will print each executed command to the screen.
	 * @default false
	 * */
	const verbose: boolean;
    /**
	 * If `true`, the script will throw a JavaScript error when any `shell.js` command encounters an error. This is analogous to Bash's `set -e`.
	 * @default false
	 * */
	const fatal: boolean;
    /**
	 * Disable filename expansion (globbing)
	 * @default false
	 * */
	const noglob: boolean;
    /**
	 * Options for [`glob.sync()`](https://github.com/isaacs/node-glob/tree/af57da21c7722bb6edb687ccd4ad3b99d3e7a333#options).
	 * @default {}
	 * */
	const globOptions: IOptions;

	/**
	 *  Set multiple options with one command.
	 * ```js
	 * const { verbose, fatal, noglob }= config;
	 * config.silent= true;
	 * const config.assign({ verbose: true, silent: false });
	 * ```
	 * */
	function assign(...c: Record<"verbose"|"fatal"|"noglob"|"silent",boolean>[]): typeof config;
}

/** @category Public */
export { echo } from './src/echo.d';
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

import * as __sade from "sade";
export { __sade };
/**
 * A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
 * In addition to the origin, `cli()` supports to fill script name from script file name.
 * This should be good balance between [commander - npm](https://www.npmjs.com/package/commander) and parsing arguments and writing help texts by hand.
 * For more complex scripts just create full npm package.
 * ```js
 * cli("", true)
 * .version("0.1.0")
 * .describe("NodeJS Script cli test")
 * .action(echo)
 * .parse(process.argv);
 * ```
 * 	
 * ```js
 * cli("copy <file> <destination>", true)
 * .version("0.1.0")
 * .describe("copy file simpulation")
 * .option("--force", "Overwrite file in destination.")
 * .action(function(file, destination, { force }){
 * 	// copy file logic
 * })
 * .parse(process.argv);
 * ```
 * 
 * ```js
 * const prog= cli('my-cli');
 * prog
 *   .version('1.0.5')
 *   .option('--global, -g', 'An example global flag')
 *   .option('-c, --config', 'Provide path to custom config', 'foo.config.js');
 * prog
 *   .command('build <src> <dest>')
 *   .describe('Build the source directory. Expects an `index.js` entry file.')
 *   .option('-o, --output', 'Change the name of the output file', 'bundle.js')
 *   .example('build src build --global --config my-conf.js')
 *   .example('build app public -o main.js')
 *   .action((src, dest, opts) => {
 *     echo(`> building from ${src} to ${dest}`);
 *     echo('> these are extra opts', opts);
 *   });
 * prog.parse(process.argv);
 * ```
 * @param usage The script name and usage (`[optional]`/`<required>`). If no `name`, then the script file name will be used.
 * @param is_single See {@link __sade}
 * @category Public
 * */
export function cli(usage: string, is_single?: boolean): __sade.Sade
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
 * const answer= await read({ "-p": "Question" });
 * const color= await read({ "-p": "Your color", completions: [ "red", "green" ] });
 * if(is_piped.left) await read().then(echo.bind(null, "E.g. for reading received input:"));
 * ```
 * @category Public
 * */
export function read(options: ReadOptions): Promise<string>

/**
 * Contains `true`/`false` values to find out if script is running through a shell pipe.
 * ```bash
 * node pipes.js | … # — test by is_piped.right
 * … | node pipes.js # — test by is_piped.left
 * ```
 * @category Public
 */
export const is_piped: { left: boolean; right: boolean; }
/**
 * Repeatedly loops through the given chars/strings/….
 * Typical usage is to create a spinner (by default):
 *
 * ```js
 * import { setTimeout } from "node:timers/promises";
 * const spinEnd= spinner(); //output=> ⠋ Waiting…
 * setTimeout(10*750).then(spinEnd);
 * 
 * function spinner(message= "Waiting…"){
 * 	const animation= cyclicLoop();
 * 	const echoSpin= ()=> echo.use("-R", `${animation.next().value} ${message}`);
 * 	const id= setInterval(echoSpin, 750);
 * 	return function(){
 * 		clearInterval(id);
 * 		echo.use("-r");
 * 	};
 * }
 * ```
 * …also see [spinner example](../examples/spinner.mjs).
 * @category Public
 * */
export function cyclicLoop<T>(items: T[]): Generator<T[], any, T>
