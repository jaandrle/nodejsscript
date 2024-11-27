# nodejsscriptrc.mjs
You can define `nodejsscriptrc.mjs` file in your config location.
That corresponds to [`$.xdg.config("nodejsscript")`](../docs/modules/xdg_.xdg.md#config) folder.
In linux the full location should be `~/.config/nodejsscript/nodejsscriptrc.mjs`.

Use `nodejsscript --help` to find out the location of
the `nodejsscriptrc.mjs` file.

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
globalThis.my= {
	get nosed(){ return this.stdin.text(""); },
	get nojq(){ return this.stdin.json(null); },
	get noawk(){ return this.stdin.lines([]); },
};
```

So, than you can:
```bash
# instead of
echo '{"a":"A"}' | nodejsscript --print '$.stdin.json().a'
# you can also use
echo '{"a":"A"}' | njs -p 'my.nojq.a'
```
```bash
# instead of
who | nodejsscript --print '$.stdin.text().split(/ +/)[0]'
# you can also use
who | njs -p 'my.nosed.split(/ +/)[0]'
```
```bash
# instead of
apt list --installed | nodejsscript --print '$.stdin.lines().filter(l=> l.indexOf("libreoffice")!==-1).length'
# you can also use
apt list --installed | njs -p 'my.noawk.filter(l=> l.indexOf("libreoffice")!==-1).length'
```

*Note*: in case you used pre-v1.0.0 non-promoted API methods
(`$.nojq`, …), use these aliases instead:
```js
Reflect.defineProperty($, "nosed", { get(){ return this.stdin.text(""); }, });
Reflect.defineProperty($, "nojq", { get(){ return this.stdin.json(null); }, });
Reflect.defineProperty($, "noawk", { get(){ return this.stdin.lines([]); }, });
```
## Custom error handler/printer
You can define your own error handler which can print the error message
into the console.

```js
/** Custom uncaughtException function */
export function uncaughtException(e){
	echo("There was an error:", e);
};
```

## Targets
You can specify in which kind of nodejsscript invocation you want to use
your definitions:

```js
//nodejsscriptrc.mjs
// … my code evaluated for each nodejsscript invocation

/** Place for custom code when script starts */
export function onscript(){}
/** Place for custom code when REPL starts (`--interactive`) */
export function onrepl(){}
/** Place for custom code when eval starts (`--eval`/`--print`) */
export function oneval(){}
```

## Processing (modifications)
You can use `norc` in environmental variable `NODEJSSCRIPTOPTS`, for example:
```bash
export NODEJSSCRIPTOPTS=norc
# …
NODEJSSCRIPTOPTS=norc njs --eval 'console.log("Hello World!")'
```
**The `nodejsscriptrc.mjs` is not processed when called locally (`npx nodejsscript`…).**
