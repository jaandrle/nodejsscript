export type XdgPath= [ path: TemplateStringsArray, ...path_vars: string[] ];
/**
 * Returns the directory/file path based on the passed tag string.
 * ```js
 * $.xdg.home() //=> (on my linux) /home/jaandrle
 * $.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
 * $.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
 * ```
 * …similarly for `temp`, `data`, `config`, `cache`, `root`, `cwd` and `main`.
 */
export type XdgFunctionPath= (...path: XdgPath)=> string;
export type XdgFunctionRoot= ()=> string;
export type XdgFunction= XdgFunctionPath | XdgFunctionRoot;
/**
 * This namespace contains convenience folders to store your data, config and cache files.
 * It tryies to use [xdg-user-dirs](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/) or typical dir on current system.
 */
export namespace xdg{
	const home: XdgFunction;
	const temp: XdgFunction;
	const data: XdgFunction;
	const config: XdgFunction;
	const cache: XdgFunction;
	const root: XdgFunction;
	const cwd: XdgFunction;
	const main: XdgFunction;

	/**
	 * This is helper function to get the globally installed packages.
	 * ```js
	 * npm install chrome-remote-interface --location=global
	 * // script.mjs
	 * const pkg= await import($.xdg.globalPackage`chrome-remote-interface`);
	 * // or script.js
	 * const pkg= require($.xdg.globalPackage`chrome-remote-interface`);
	 * ```
	 * */
	function globalPackage(...path: XdgPath): string;
	function globalPackage(path: string): string;
}
