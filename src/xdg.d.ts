export interface XdgOptions{
	/** Override the default cachedir */
	cachedir: string;
	/** Override the default configdir */
	configdir: string;
	/** Override the default datadir */
	datadir: string;
	/** The env object to use for getting paths. */
	env: object;
	/** Expand paths into an object. See the Expanded Paths example for more details. */
	expanded: boolean;
	/** The user's home directory. */
	homedir: string;
	/** The platform to use: darwin, linux, win32 */
	platform: string;
	/** Custom function for resolving paths to each directory. The default function attempts to respect casing in the user's existing directories. */
	resolve: Function;
	/** Override the default runtimedir */
	runtimedir: string;
	/** A sub-directory to join to the path, typically the name of your application. This path is joined differently on each platform. See examples. */
	subdir: string;
	/** The temp directory to use. */
	tempdir: string;
}
export interface XdgReturn{
	cache: string;
	config: string;
	configdirs: string[];
	data: string;
	datadirs: string[];
	runtime: string;
}
export interface Xdg{
	/**
	 * Get the XDG Base Directory paths for Linux, or equivalent paths for Windows or MaxOS.
	 * @category Public
	 */
	(options?: XdgOptions): XdgReturn;
	/**
	 * Get XDG equivalent paths for MacOS. Used by the main export when `process.platform`
	 * is `darwin`. Aliased as `xdg.macos()`.
	 *
	 * ```js
	 * const dirs = xdg.darwin();
	 * // or
	 * const dirs = xdg.macos();
	 * ```
	 * @param {Object} `options`
	 * @return {Object} Returns an object of paths.
	 * @category Public
	 */
	darwin(options?: XdgOptions): any;
	/** Alias {@link darwin} */
	macos(...args: Parameters<typeof xdg.darwin>): ReturnType<typeof xdg.darwin>;
	/**
	 * Get XDG equivalent paths for Linux. Used by the main export when `process.platform`
	 * is `linux`.
	 *
	 * ```js
	 * const dirs = xdg.linux();
	 * ```
	 * @return {Object} Returns an object of paths.
	 * @return {Object} Returns an object of paths.
	 * @category Public
	 */
	linux(options?: XdgOptions): any;
	/**
	 * Get XDG equivalent paths for MacOS. Used by the main export when `process.platform`
	 * is `win32`. Aliased as `xdg.windows()`.
	 *
	 * ```js
	 * const dirs = xdg.win32();
	 * // or
	 * const dirs = xdg.windows();
	 * ```
	 * @param {Object} `options`
	 * @return {Object} Returns an object of paths.
	 * @category Public
	 */
	windows(options?: XdgOptions): any;
	/** Alias {@link windows} */
	win32(...args: Parameters<typeof xdg.windows>): ReturnType<typeof xdg.windows>;
	userdirs: {
		(options?: any): any;
		expand(options?: any, paths?: any): any;
		conf(options: any): any;
		defaults(options?: any): any;
		dirs(options?: any): any;
		create(...args: any[]): any;
		darwin(options?: any): any;
		linux(options?: {}): any;
		win32(options?: any): any;
		home(options?: {}): any;
		load: (filepath: any, options?: {}, resolve?: (fp: any) => any) => {};
		windows: (options?: any) => any;
		macos: (options?: any) => any;
	};
}
/**
 * Namespace/function represents [folder/xdg: Get cross-platform XDG Base Directories or their equivalents. Works with Linux, Windows, or MacOS.](https://github.com/folder/xdg).
 * ```js
 * echo(xdg({ subdir: "TestSubDir" }));
 * ```
 * …output:
 * ```json
 * {
 * 	"cache": "/home/jaandrle/.cache/testsubdir",
 * 	"config": "/home/jaandrle/.config/testsubdir",
 * 	"config_dirs": [
 *		"/home/jaandrle/.config/testsubdir",
 * 		"/home/jaandrle/.config/kdedefaults",
 * 		"/etc/xdg/xdg-plasma",
 * 		"/etc/xdg"
 * ],
 * 	"data": "/home/jaandrle/.local/share/testsubdir",
 * 	"data_dirs": [
 *		"/home/jaandrle/.local/share/testsubdir",
 * 		"/usr/share/plasma",
 * 		"/home/jaandrle/.local/share/flatpak/exports/share",
 * 		"/var/lib/flatpak/exports/share",
 * 		"/usr/local/share",
 * 		"/usr/share",
 * 		"/var/lib/snapd/desktop"
 * ],
 * 	"runtime": "/run/user/1000/testsubdir",
 * 	"logs": "/home/jaandrle/.cache/testsubdir/logs"
 * }
 * ```
 */
export const xdg: Xdg;

// import { load } from "@folder/xdg/lib/utils";
// import { resolve } from "@folder/xdg/lib/utils";
