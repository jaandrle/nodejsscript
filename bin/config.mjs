/* global $, s */
import { join } from 'node:path';

const config= $.xdg.config`nodejsscript`;
if(!s.test("-d", config))
	s.mkdir("-p", config);
export { config as folder };

export const file_completions= join(config, "completions.json");
let temp;
export function readCompletions(){
	temp= s.test("-f", file_completions) ?
		s.cat(file_completions).xargs(JSON.parse) :
		{ version: "1.0", scripts: {} };
	return temp;
}
export function updateCompletions(data){
	if(!temp) readCompletions();
	data= Object.assign(temp, data);
	return s.echo(JSON.stringify(data, null, "	")).to(file_completions);
}

export const file_rc= join(config, "nodejsscriptrc.mjs");
export function importRC(){
	if(s.test("-f", file_rc))
		return import(file_rc);
	return Promise.reject();
}

export const file_repl= join(config, "repl_history");
