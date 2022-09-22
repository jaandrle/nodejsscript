import { config as c } from "shelljs";
export const config= {
	get silent(){ return c.silent; },
	set silent(v){ c.silent= v; },
	get verbose(){ return c.verbose; },
	set verbose(v){ return (c.verbose= v); },
	get fatal(){ return c.fatal; },
	set fatal(v){ return (c.fatal= v); },
	get noglob(){ return c.noglob; },
	set noglob(v){ return (c.noglob= v); },
	get globOptions(){ return c.globOptions; },
	set globOptions(v){ return (c.globOptions= v); },
	
	assign(...c){ return Object.assign(this, ...c); }
};
