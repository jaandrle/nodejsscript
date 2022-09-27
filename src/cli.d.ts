import { IOptions } from 'glob';
import * as __sade from "sade";
export { __sade };
import * as xdg_ from "./xdg.d";
export { xdg_ };
/**
 * Contains configuration for current script and methods
 * for managing arguments.
 */
export namespace cli{
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
	 * const { is_verbose, is_fatal }= cli;
	 * cli.is_silent= true;
	 * const cli.configAssign({ verbose: true, silent: false });
	 * ```
	 * @category Public
	 * */
	function configAssign(...c: Record<"verbose"|"fatal"|"silent",boolean>[]): void;

	/**
	 * Method to check whether script stdin/stdout (0/1) is a first-in-first-out (FIFO) pipe or not.
	 * ```bash
	 * node pipes.js | … # — test by cli.isFIFO(1)
	 * … | node pipes.js # — test by cli.isFIFO(0)
	 * ```
	 * @category Public
	 */
	function isFIFO(stream_id: 0|1): boolean;
	/**
	 * A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
	 * In addition to the origin, `cli.api()` supports to fill script name from script file name.
	 * This should be good balance between [commander - npm](https://www.npmjs.com/package/commander) and parsing arguments and writing help texts by hand.
	 * For more complex scripts just create full npm package.
	 * ```js
	 * cli.api("", true)
	 * .version("0.1.0")
	 * .describe("NodeJS Script cli test")
	 * .action(echo)
	 * .parse(process.argv);
	 * ```
	 * 	
	 * ```js
	 * cli.api("copy <file> <destination>", true)
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
	 * const prog= cli.api('my-cli');
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
	 * const answer= await cli.read({ "-p": "Question" });
	 * const color= await cli.read({ "-p": "Your color", completions: [ "red", "green" ] });
	 * if(cli.isFIFO(0)) await cli.read().then(echo.bind(null, "E.g. for reading received input:"));
	 * ```
	 * @category Public
	 * */
	function read(options: ReadOptions): Promise<string>;
	
	/**
	 * @category Public
	 */
	const xdg: typeof xdg_.xdg;
}
