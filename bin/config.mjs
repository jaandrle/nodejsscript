const config= $.xdg.config`nodejsscript`;
if(!s.test("-d", config))
	s.mkdir("-p", config);
export { config as folder };

import { join } from 'node:path';
const completions= join(config, "completions.json");
export function readCompletions(){
	return s.test("-f", completions) ?
		s.cat(completions).xargs(JSON.parse) :
		{ version: 1, scripts: {} };
}
export function writeCompletions(data){
	return s.echo(JSON.stringify(data, null, "	")).to(completions);
}
