export type XdgPath= [ path: TemplateStringsArray, ...path_vars: string[] ];
/**
 * Returns the directory/file path based on the passed tag string.
 * ```
 * cli.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
 * ```
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
}
