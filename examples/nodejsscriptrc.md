# nodejsscriptrc.mjs
You can define `nodejsscriptrc.mjs` file in your config location.
That corresponds to [`$.xdg.config("nodejsscript")`](../docs/modules/xdg_.xdg.md#config) folder.
In linux the full location should be `~/.config/nodejsscript/nodejsscriptrc.mjs`.

## Ideas
This script corresponds to what the `.bashrc` if for bash. It is imported before
requested script.

### Fallback
In vresion ≥1 you can for example fallback:

```js
/* deprecated/fallback */
globalThis.cyclicLoop= function*(items){
	if(!items) items= 'win32'===process.platform ? '|/-\\' : "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏";
	const { length }= items;
	for(let i=0; true; i++){
		if(i===length) i= 0;
		yield items[i];
	}
}
```

### Aliases
For shorter [`--eval`/`--print`](./eval_print.md#aliases):
```js
/* --print/--echo aliases */
Reflect.defineProperty($, "nosed", { get(){ return this.stdin.text(""); }, });
Reflect.defineProperty($, "nojq", { get(){ return this.stdin.json(null); }, });
Reflect.defineProperty($, "noawk", { get(){ return this.stdin.lines([]); }, });
```

So, than you can:
```bash
# instead of
echo '{"a":"A"}' | nodejsscript -p '$.stdin.json().a'
# you can also use
echo '{"a":"A"}' | nodejsscript -p '$.nojq.a'
```
```bash
# instead of
who | nodejsscript -p '$.stdin.text().split(/ +/)[0]'
# you can also use
who | nodejsscript -p '$.nosed.split(/ +/)[0]'
```
```bash
# instead of
apt list --installed | nodejsscript -p '$.stdin.lines().filter(l=> l.indexOf("libreoffice")!==-1).length'
# you can also use
apt list --installed | nodejsscript -p '$.noawk.filter(l=> l.indexOf("libreoffice")!==-1).length'
```

## Processing (modifications)
You can use `norc` in environmental variable `NODEJSSCRIPTOPTS`, for example:
```bash
export NODEJSSCRIPTOPTS=norc
```
**The `nodejsscriptrc.mjs` is not processed when called locally (`npx nodejsscript`…).**