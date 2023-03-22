/* global $, s */
const config= $.xdg.config`nodejsscript`;
if(!s.test("-d", config))
	s.mkdir("-p", config);
export { config as folder };

import { join } from 'node:path';
export const completions= join(config, "completions.json");
let temp;
export function readCompletions(){
	temp= s.test("-f", completions) ?
		s.cat(completions).xargs(JSON.parse) :
		{ version: 1, scripts: {} };
	return temp;
}
export function updateCompletions(data){
	if(!temp) readCompletions();
	data= Object.assign(temp, data);
	return s.echo(JSON.stringify(data, null, "	")).to(completions);
}
