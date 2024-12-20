import { env as _env, exit as _exit } from 'node:process';
export { _env, _exit };
import { IOptions } from 'glob';
import * as __sade from "sade";
export { __sade };
import * as xdg_ from "./xdg.d";
export { xdg_ };
import { read as ReadType } from './shelljs.d';

export namespace Dollar{
	/* tldr-start
	 * ### $.version
	 * */
	/**
	 * Holds current nodejsscript version
	 * */
	const version: string;
	/* tldr-end */
	/* tldr-start
	 * ### $.isMain(import.meta)
	 * */
	/**
	 * This is small helper function to determine if current script file was launched as main one.
	 * ```js
	 * //nodejsscript main.js
	 * 
	 * //main.js
	 * if($.isMain(import.meta)) echo("This is main script");
	 * import 'nomain.js';
	 * 
	 * //nomain.js
	 * if($.isMain(import.meta)) echo("This is NOT main script ⇒ never echo");
	 * ```
	 * This can be helpful for writing importable scripts.
	 * It is very similar to [`__name__ == '__main__'`](https://docs.python.org/3/library/__main__.html).
	 * For this use case, be careful to use `$.exit` correctly (when the script is imported, you probably don't want to use it).
	 * @category Public
	 * */
	function isMain(import_meta: ImportMeta): boolean;
	/* tldr-end */
	/* tldr-start
	 * ### $.is_silent: boolean
	 *
	 * Suppresses all command output if `true`, except for `echo()` call.
	 * ### $.is_verbose: boolean
	 *
	 * Will print each executed command to the screen.
	 * ### $.is_fatal: boolean
	 *
	 * If `true`, the script will throw a JavaScript error when any `shell.js` command encounters an error. This is analogous to Bash's `set -e`.
	 * ### $.glob_options: { is_off: boolean, options: boolean }
	 *
	 * + glob: disable filename expansion (globbing), options for `glob.sync()`
	 * */
	/* tldr-end */
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

	/* tldr-start
	 * ### $.configAssign({ verbose?: boolean, fatal?: boolean, silent?: boolean })
	 * */
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
	/* tldr-end */

	/* tldr-start
	 * ### $.isFIFO(0|1)
	 * */
	/**
	 * Method to check whether script stdin/stdout (0/1) is a first-in-first-out (FIFO) pipe or not.
	 * ```bash
	 * node pipes.js | … # — test by $.isFIFO(1)
	 * … | node pipes.js # — test by $.isFIFO(0)
	 * ```
	 * …more precisely:
	 * ```javascript
	 * import { stdin, stdout } from "node:process";
	 * echo($.isFIFO(stdin.fd), $.isFIFO(stdout.fd));
	 * ```
	 * ⚠️ On Windows it can throw an error (see https://github.com/jaandrle/nodejsscript/issues/42)!
	 * @category Public
	 */
	function isFIFO(stream_id: 0|1): boolean;
	/* tldr-end */
	/* tldr-start
	 * ### $.api([usage])
	 * ### $.api(usage, true)
	 * 
	 * A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
	 * */
	/* tldr-end */
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
	
	/**
	 * For backward compatibility, **use `s.read()` instead**.
	 * @deprecated Use {@link s.read} instead.
	 * */
	const read: typeof ReadType;
	
	/* tldr-start
	 * ### $.xdg: { home, temp, data, config, cache, root, cwd, main }
	 *
	 * Returns the directory/file path based on `$.xdg.<tag>()`.
	 * ```js
	 * $.xdg.<tag>`…`
	 * $.xdg.<tag>("…")
	 * $.xdg.<tag>()
	 * ```
	 * */
	/* tldr-end */
	/**
	 * See {@link xdg_.xdg xdg namespace}.
	 * @category Public
	 */
	const xdg: typeof xdg_.xdg;

	/* tldr-start
	 * ### $.pathFromURL(import.meta.url)`path`
	 * */
	/**
	 * This is a helper motivated to evaluate relative paths from current script file:
	 * ```js
	 * const $path= $.pathFromURL(import.meta.url);
	 * echo("Relative path: ", $path`../file.txt`);
	 * ```
	 * @category Public
	 * */
	function pathFromURL(from_url: URL): typeof String.raw | ( (relative: string) => string );
	/* tldr-end */

	/* tldr-start
	 * ### $.$
	 * */
	/**
	 * Returns the PID of the process. Compare to bash `$$` vs `$.$`.
	 * @category Public
	 * @alias process.pid
	 */
	const $: typeof process.pid;
	/* tldr-end */
	/* tldr-start
	 * ### $.env
	 * */
	/**
	 * {@link _env}. Compare to bash `$var` vs `$.env['var']`.
	 * @category Public
	 * @alias process.env
	 */
	const env: typeof _env;
	/* tldr-end */
	/* tldr-start
	 * ### $.stdin: { text, json, lines }
	 * */
	/**
	 * Holding `stdin` when script was executed with pipe.
	 * ```bash
	 * echo TEST | nodejsscript script.js
	 * ```
	 * ```javascript
	 * echo($.stdin.text());//= "TEST"
	 * ```
	 * …but it can be empty in case of platform specific error (see {@link Dollar.isFIFO $.isFIFO}).
	 * @category Public
	 */
	const stdin: STDIN;
	/* tldr-end */
	interface STDIN {
		/**
		 * Returns stdin as a text.
		 * @param _default Default value when no stdin.
		 * */
		text: <T>(_default: T)=> string | T;
		/**
		 * Returns stdin processed by `JSON.parse`.
		 * @param _default Default value when no stdin.
		 * */
		json: <T>(_default: T)=> string | T;
		/**
		 * Returns stdin as an array of lines.
		 * @param _default Default value when no stdin.
		 * */
		lines: <T>(_default: T)=> string[] | T;
	}

	/* tldr-start
	 * ### $.error(message)
	 * */
	/**
	 * Throws user targeted error
	 * ```js
	 * const number= await $.read({ "-p". "Insert a number:" });
	 * if(Number.isNaN(Number(number))) $.error(`Provided text '${number}' is not a number`);
	 * ```
	 * @category Public
	 * */
	function error(message: string): Error;
	/* tldr-end */

	const Error: typeof global.Error;

	/* tldr-start
	 * ### $.exit(code[, ...ignore])
	 * */
	/**
	 * Just an alias for {@link _exit}. Any other argument is ignored, so you can use:
	 * ```js
	 * if($.hasArgs("-v", "--version")) $.exit(0, echo("v0.0.1"));
	 * ```
	 * @category Public
	 */
	function exit(code?: number, ...ignore: any[]): never;
	/* tldr-end */
	
	/* tldr-start
	 * ### $.hasArgs(...needles)
	 * */
	/**
	 * Returns boolean value that script has been executed with given arguments (`needles`).
	 * ```js
	 * if($.hasArgs("-v", "--version")) $.exit(0, echo("v0.0.1"));
	 * ```
	 * @category Public
	 */
	function hasArgs(...needles: string[]): boolean;
	/* tldr-end */
}
