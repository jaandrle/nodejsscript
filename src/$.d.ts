import { env as _env, exit as _exit } from 'node:process';
export { _env, _exit };
import { IOptions } from 'glob';
import * as __sade from "sade";
export { __sade };
import * as xdg_ from "./xdg.d";
export { xdg_ };
import { ShellString } from 'shelljs';

export namespace Dollar{
	/**
	 * This is small helper function to determine if current script file was launched as main one.
	 * ```js
	 * if($.isMain(import.meta)) echo("This is main script");
	 * ```
	 * */
	function isMain(import_meta: ImportMeta): boolean;
	
	/**
	 * Suppresses all command output if `true`, except for `echo()` call.
	 * @default false
	 * @category Public
	 * */
	const is_silent: boolean;
    /**
	 * Will print each executed command to the screen.
	 * @default false
	 * @category Public
	 * */
	const is_verbose: boolean;
    /**
	 * If `true`, the script will throw a JavaScript error when any `shell.js` command encounters an error. This is analogous to Bash's `set -e`.
	 * @default false
	 * @category Public
	 * */
	const is_fatal: boolean;

	/** @category Public */
	const glob_options: {
		/**
		* Disable filename expansion (globbing)
		* @default false
		* */
		is_off: boolean;
		/**
		* Options for [`glob.sync()`](https://github.com/isaacs/node-glob/tree/af57da21c7722bb6edb687ccd4ad3b99d3e7a333#options).
		* @default {}
		* */
		options: IOptions;
	}

	/**
	 *  Set multiple options except `glob_options` with one command.
	 * ```js
	 * const { is_verbose, is_fatal }= $;
	 * $.is_silent= true;
	 * const $.configAssign({ verbose: true, silent: false });
	 * ```
	 * @category Public
	 * */
	function configAssign(...c: Record<"verbose"|"fatal"|"silent",boolean>[]): void;

	/**
	 * Method to check whether script stdin/stdout (0/1) is a first-in-first-out (FIFO) pipe or not.
	 * ```bash
	 * node pipes.js | … # — test by $.isFIFO(1)
	 * … | node pipes.js # — test by $.isFIFO(0)
	 * ```
	 * @category Public
	 */
	function isFIFO(stream_id: 0|1): boolean;
	/**
	 * A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
	 * In addition to the origin, `$.api()` supports to fill script name from script file name.
	 * Also, you can call `*.parse()` and it automatically use `process.argv` or use `*.parse(options: {})` with custom `argv` key.
	 * This should be good balance between [commander - npm](https://www.npmjs.com/package/commander) and parsing arguments and writing help texts by hand.
	 * For more complex scripts just create full npm package.
	 * ```js
	 * $.api("", true)
	 * .version("0.1.0")
	 * .describe("NodeJS Script $ test")
	 * .action(echo)
	 * .parse();
	 * ```
	 * 	
	 * ```js
	 * $.api("copy <file> <destination>", true)
	 * .version("0.1.0")
	 * .describe("copy file simpulation")
	 * .option("--force", "Overwrite file in destination.")
	 * .action(function(file, destination, { force }){
	 * 	// copy file logic
	 * })
	 * .parse();
	 * ```
	 * 
	 * ```js
	 * const prog= $.api('my-cli');
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
	 * prog.parse();
	 * ```
	 * @param usage The script name and usage (`[optional]`/`<required>`). If no `name`, then the script file name will be used.
	 * @param is_single See {@link __sade}
	 * @category Public
	 * */
	function api(usage: string, is_single?: boolean): __sade.Sade
	
	interface ReadOptions{
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
	 * const answer= await $.read({ "-p": "Question" });
	 * const color= await $.read({ "-p": "Your color", completions: [ "red", "green" ] });
	 * if($.isFIFO(0)) await $.read().then(echo.bind(null, "E.g. for reading received input:"));
	 * ```
	 * @category Public
	 * */
	function read(options: ReadOptions): Promise<ShellString>;
	
	/**
	 * @category Public
	 */
	const xdg: typeof xdg_.xdg;

	/**
	 * Returns the PID of the process. Compare to bash `$$` vs `$.$`.
	 * @category Public
	 * @alias process.pid
	 */
	const $: typeof process.pid;
	/**
	 * {@link _env}. Compare to bash `$var` vs `$.env['var']`.
	 * @category Public
	 * @alias process.env
	 */
	const env: typeof _env;
	/**
	 * Holding `stdin` when script was executed.
	 * ```bash
	 * echo TEST | nodejsscript script.js
	 * ```
	 * ```javascript
	 * echo($.stdin.text());//= "TEST"
	 * ```
	 * @category Public
	 */
	const stdin: STDIN;
	interface STDIN {
		/**
		 * Returns stdin as a text.
		 * @param _default Default value when no stdin.
		 * */
		text: <T>(_default: T)=> string | T;
		/**
		 * Returns stdin as an array of lines.
		 * @param _default Default value when no stdin.
		 * */
		lines: <T>(_default: T)=> string[] | T;
	}

	/**
	 * Throws user targeted error
	 * ```js
	 * const number= await $.read({ "-p". "Insert a number:" });
	 * if(Number.isNaN(Number(number))) $.error(`Provided text '${number}' is not a number`);
	 * ```
	 * @category Public
	 * */
	function error(message: string): Error;

	const Error: typeof global.Error;

	/**
	 * Just an alias for {@link _exit}. Any other argument is ignored, so you can use:
	 * ```js
	 * if($.hasArgs("-v", "--version")) $.exit(0, echo("v0.0.1"));
	 * ```
	 * @category Public
	 */
	function exit(code?: number, ...ignore: any[]): never;
	
	/**
	 * Returns boolean value that script has been executed with given arguments (`needles`).
	 * ```js
	 * if($.hasArgs("-v", "--version")) $.exit(0, echo("v0.0.1"));
	 * ```
	 * @category Public
	 */
	function hasArgs(...needles: string[]): boolean;
}
