/* global pipe, s, $, echo */
import { join } from "node:path";
export function jsconfigTypes(argv){
	$.configAssign({ fatal: true });
	const jsconfig_file= pipe(
		f=> s.test("-e", f) ? s.cat(f) : '',
		f=> f.trim() ? f : '{"include":[]}',
		JSON.parse
	)("jsconfig.json");
	const include= new Set(jsconfig_file.include.filter(v=> v.indexOf("nodejsscript")===-1));
	argv.slice(3).forEach(f=> include.add(f));
	jsconfig_file.include= Array.from(include);
	if(argv[2]==="add")
		jsconfig_file.include.unshift(join(argv[1], "../../lib/node_modules/nodejsscript/index.d.ts"));
	echo.use("-P", jsconfig_file);
	pipe(
		o=> JSON.stringify(o, undefined, "\t"),
		s.ShellString,
		s=> s.to("jsconfig.json")
	)(jsconfig_file);
	$.exit(0);
}
