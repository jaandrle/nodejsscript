import { homedir, platform, tmpdir } from "node:os";
import { join, resolve, parse } from "node:path";
import { env, cwd as cwd_native, argv } from "node:process";
let os;
switch(platform()){
	case "win32": os= "windows"; break;
	case "darwin": os= "macos"; break;
	default: os= "linux";
}
const { datadir, configdir, cachedir }= os==="windows" ? fw() : ( os==="macos" ? fd() : fl() );
export function home(pieces, ...vars){ return out(homedir(), pieces, vars); }
export function temp(pieces, ...vars){ return out(tmpdir() || [ "TMPDIR", "TEMP", "TMP", "Wimp$ScrapDir" ].find(name=> env[name]) || home`tmp`, pieces, vars); }
export function data(pieces, ...vars){ return out(datadir(), pieces, vars); }
export function config(pieces, ...vars){ return out(configdir(), pieces, vars); }
export function cache(pieces, ...vars){ return out(cachedir(), pieces, vars); }

export function root(pieces, ...vars){ return out(parse(cwd_native()).root, pieces, vars); }
export function cwd(pieces, ...vars){ return out(cwd_native(), pieces, vars); }
export function main(pieces, ...vars){ return out(join(argv[1], ".."), pieces, vars); }

import s from "./shelljs.js";
const libs= resolve(argv[1], "../../lib/node_modules/")+"/";
export function globalPackage(pieces, ...vars){
	if(!pieces) throw new Error("Package name cannot be empty!");
	const [ pkg_name, ...pkg_subpath_arr ]= ( typeof pieces==="string" ? pieces : String.raw(pieces, ...vars) ).split("/");
	const pkg_subpath= pkg_subpath_arr.join("/");
	const pkg= libs+pkg_name;
	if(!s.test("-d", pkg)) throw new Error(`Package ${pkg} not found!`);
	const { main, exports }= s.$("-SF").cat(pkg+"/package.json").xargs(JSON.parse);
	if(!exports || typeof require === "function") return resolve(pkg, pkg_subpath ? pkg_subpath : main);
	const export_name= pkg_subpath ? "./"+pkg_subpath : ".";
	return resolve(pkg, exports[export_name]);
}

function out(folder, pieces, vars){
	if(!pieces) return folder;
	if(typeof pieces==="string") return join(folder, pieces);
	return join(folder, String.raw(pieces, vars));
}

function fl(){
	const { XDG_CACHE_HOME, XDG_CONFIG_HOME, XDG_DATA_HOME }= env;
	const cache= () => join(homedir(), '.cache');
	const config= () => join(homedir(), '.config');
	const share= () => join(homedir(), '.local', 'share');

	return {
		datadir: ()=> XDG_DATA_HOME || share(),
		cachedir: ()=> XDG_CACHE_HOME || cache(),
		configdir: ()=> XDG_CONFIG_HOME || config()
	};
}
function fd(){
	const { XDG_CACHE_HOME, XDG_CONFIG_HOME, XDG_DATA_HOME }= env;
	const lib= () => join(homedir(), 'Library');
	const app= () => join(lib(), 'Application Support');
	const caches= () => join(lib(), 'Caches');

	return {
		datadir: ()=> XDG_DATA_HOME || app(),
		cachedir: ()=> XDG_CACHE_HOME || caches(),
		configdir: ()=> XDG_CONFIG_HOME || app()
	};
}
function fw(){
	const {
		APPDATA= join(homedir(), 'AppData', 'Roaming'),
		LOCALAPPDATA= join(homedir(), 'AppData', 'Local'),
		XDG_CACHE_HOME, XDG_CONFIG_HOME, XDG_DATA_HOME
	}= env;

	return {
		datadir: ()=> join(XDG_DATA_HOME || LOCALAPPDATA, 'Data'),
		cachedir: ()=> join(XDG_CACHE_HOME || LOCALAPPDATA, 'Cache'),
		configdir: ()=> join(XDG_CONFIG_HOME || APPDATA, 'Config')
	};
}
