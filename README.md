# NodeJS Script – Easy cross-platform “one–file” scripting
This package serves as an alternative to [google/zx](https://github.com/google/zx) for example.
The key difference is to provide Unix shell commands in a cross-platform compatible way and usable inside JavaScript.
This is primarily achieved by using [shelljs/shelljs](https://github.com/shelljs/shelljs) library.

You can compare the final script code to `zx` example:
```javascript
#!/usr/bin/env nodejsscript

echo(s.grep("name", "package.json"));

s.run`git branch --show-current`
.xargs(s.run, "dep deploy --branch={}");

s.run`sleep 1; echo 1`;
s.run`sleep 2; echo 2`;
s.run`sleep 3; echo 3`;

pipe( $.xdg.temp, s.mkdir )("foo bar");
```
…also see [examples](./examples) or [Show And Tell · Discussions](https://github.com/jaandrle/nodejsscript/discussions/categories/show-and-tell).

## Goods
Open ‘▸’ sections for quick overview and/or navigate to link(s) for documentation.

<!-- #region --><details> <summary><a href="./docs/modules/s.md">s #shelljs</a> namespace <i>(unix shell-like commands in JavaScript)</i></summary>

Contains functions from [shelljs/shelljs](https://github.com/shelljs/shelljs) library mimic the bash utilities and some additional added by nodejsscript.
Typically `s.cat`/`s.grep`/…, to run other than buildin commands use `s.run`/`s.runA`.

<!-- #endregion -->
</details>
<!-- #region --><details> <summary><a href="./docs/modules/.md">$</a> (
		<a href="./docs/modules/.md#api">$.api() #sade</a>,
		<a href="./docs/modules/xdg_.xdg.md">$.xdg</a>,
		…
	)
	namespace <i>(nodejsscript/cli related functions/variables)</i></summary>

```js
// ls.mjs
$.api()
.command("ls [folder]")
.description("list files")
.option("-a", "list all files")
.action((folder, options)=> {
	if(Object.keys(options).length === 0)
		s.ls(folder);
	else {
		const opts= pipe(
			Object.entries,
			o=> o.map(([k, v])=> [ "-"+k, v ]),
			Object.fromEntries
		)(options);
		s.ls(opts, folder);
	}
	$.exit(0);
})
.parse();
// ls.mjs ls -a
```

- contains cli/nodejsscript related functions
- for processing script arguments you can use `$[0]`/`$[1]`/… (compare with bash `$0`/`$1`/…) or
- **`$.api()`: allows to quickly create script cli API, internally uses [sade](https://github.com/lukeed/sade) library (compare with [commander](https://github.com/tj/commander.js))**
- `$.isMain()`: detects if the script is executed as main or if it is imported from another script file
- `$.xdg`: provides cross-platform file system access for specific locations (home, temp, config, … directory)
- `$.stdin`: handles standard input when the script is run in shell pipe (can be helpful for `nodejsscript --eval`/`nodejsscript --print` bellow)
- …for more see [related section in docs](./docs/modules/.md)

<!-- #endregion -->
</details>
<!-- #region --><details> <summary><a href="./docs/README.md#echo">echo() #css-in-console</a> function/namespace</summary>

```js
const css= echo.css`
	.blue { color: blue; }
	.spin { list-style: --terminal-spin; }
	.success { color: green; list-style: "✓ "; }
`;
echo("Hello %cWorld", css.blue);
for(let i= 0; i < 10; i++){
	echo.use("-R", "%cLoading…", css.spin);
	s.run`sleep .5`;
}
echo.use("-r", "%cDone", css.success);
```

- prints to console, also supports styling using CSS like syntax
- internally uses [css-in-console](https://www.npmjs.com/package/css-in-console)

<!-- #endregion -->
</details>
<!-- #region --><details> <summary><a href="./docs/README.md#pipe">pipe()</a> function</summary>

```js
pipe(
	Number,
	v=> `Result is: ${v}`,
	echo
)("42");
```
Provides functional way to combine JavaScript functions.

<!-- #endregion -->
</details>
<!-- #region --><details> <summary><code>fetch()</code>, <code>new AbortController()</code></summary>

These are supported in nodejsscript:

- uses native `fetch()`/`AbortController` or
- fallbacks
	- [node-fetch - npm](https://www.npmjs.com/package/node-fetch)
	- [abort-controller - npm](https://www.npmjs.com/package/abort-controller)


<!-- #endregion -->
</details>
<!-- #region --><details> <summary><a href="./examples/eval_print.md"
	><code>nodejsscript --eval</code>/<code>nodejsscript --print</code></a> <i>(quickly eval javascript code in terminal)</i></summary>

```bash
curl https://api.spacexdata.com/v4/launches/latest | \
nodejsscript -p '$.stdin.json()' Object.entries 'e=> e.filter(([_,v])=> Array.isArray(v))'
```

- *similar to `node --eval`/`node --print`*
- you can use less verbose syntax `njs -e`/`njs -p`

<!-- #endregion -->
</details>
<!-- #region --><details> <summary><code>nodejsscript --inspect</code></summary>

Use to debug your script, similar to [`node inspect`](https://nodejs.org/api/debugger.html) ([Node.js — Debugging Node.js](https://nodejs.org/en/learn/getting-started/debugging)).

<!-- #endregion -->
</details>
<!-- #region --><details> <summary><code>nodejsscript --interactive</code> <i>(REPL)</i></summary>

Use to run [REPL, similar to `node`/`node --interactive`/`node -i`](https://nodejs.org/en/learn/command-line/how-to-use-the-nodejs-repl).

*Idea*: you can use REPL to analyze your JSON log files (pseudo code):

```js
// njs --interactive
> s.ls("*.json").flatMap(f=> s.cat(f).xargs(JSON.parse)).filter(x=> x.error)
> _.map(x=> x.error===404)
```

REPL supports tab-completion (also for folders and files).

<!-- #endregion -->
</details>
<!-- #region --><details> <summary><code>nodejsscript --completion</code> <i>(bash completions for nodejsscript and scripts)</i></summary>

- provide shell completion for nodejsscript and scripts written using nodejsscript (**using `$.api()`**)
- **(for now) only for bash**
- add `eval "$(nodejsscript --completion bash)"` to your '.bashrc' file
- prepare your script cli API using `$.api()`
- register your scritp autocompletion using `nodejsscript --completion register <target>`
	- use global script name (your script must be also included in the PATH) to automatically enable completions on the shell start
	- or (relative) path to enable completions on demand see ↙
- use `eval "$(nodejsscript --completion bash-local [target])"`
	- empty target or path to the directory enables completions for all scripts in the given directory recursively
	- script path as target enables completions for specific script only
- see help `nodejsscript --completion`/`nodejsscript --completion help`

<!-- #endregion -->
</details>
<!-- #region --><details> <summary><a href="./examples/nodejsscriptrc.md"
	><code>~/.config/nodejsscript/nodejsscriptrc.mjs</code></a> <i>(<code>.bashrc</code> for nodejsscript)</i></summary>

```js
//nodejsscriptrc.mjs
// … my code evaluated for each nodejsscript invocation

/** Custom uncaughtException function */
export function uncaughtException(){};
/** Place for custom code when script starts */
export function onscript(){}
/** Place for custom code when REPL starts (`--interactive`) */
export function onrepl(){}
/** Place for custom code when eval starts (`--eval`/`--print`) */
export function oneval(){}
```

This is very similar to `.bashrc` file, but for nodejsscript.

<!-- #endregion -->
</details>
<!-- #region --><details> <summary><code>njs</code> alias for <code>nodejsscript</code></summary>

You can use `njs` instead of `nodejsscript`, so for use less verbose syntax

- `njs -e`/`njs -p`
- `njs --inspect`
- `njs`/`njs --interactive`
- `njs --completion`

<!-- #endregion -->
</details>
<!-- #region --><details> <summary><code>npx nodejsscript</code></summary>

```js
// some script file
#!/usr/bin/env -S npx nodejsscript
```
You can install/use `nodejsscript` for specific project, for example in combination with [jaandrle/bs: The simplest possible build system using executables](https://github.com/jaandrle/bs).

<!-- #endregion -->
</details>

## Quick links/info
- migration from *0.9.\**: see [API changes 0.9 → 1.0](https://github.com/jaandrle/nodejsscript/pull/32)
- migration from *0.8.\**: see [API changes 0.8 → 0.9](https://github.com/jaandrle/nodejsscript/blob/e9c4d9d/README.md#api-changes-08--09)
- [Ideas (for new features)](https://github.com/jaandrle/nodejsscript/discussions/categories/ideas)
- [Contribute](#contribute)

## Installation

1. install *NodeJS* using [nvm-sh/nvm: Node Version Manager](https://github.com/nvm-sh/nvm)[^ORnpm] — tested/used on `node@v16`, `node@v17` and `node@v18`
1. `npm install nodejsscript --location=global` … alternatively install locally: `npm install nodejsscript`[^ORnjs]

## Usage
Write your scripts in a file with an `.mjs` extension in order to
use `await` at the top level. If you prefer the `.js` extension,
wrap your scripts in something like `(async function () {...})()`.

Add the following shebang to the beginning of your `nodejsscript` scripts:
```bash
#!/usr/bin/env nodejsscript
```

Now you will be able to run your script like so:
```bash
chmod +x ./script.mjs
./script.mjs
```

Or via the `nodejsscript` executable:

```bash
nodejsscript ./script.mjs
```

<!-- #region --><details> <summary>Alternatively when installed locally</summary>

```bash
#!/usr/bin/env -S npx nodejsscript
```
```bash
npx nodejsscript ./script.mjs
```

<!-- #endregion -->
</details>

All function (`shelljs`, `fetch`, …) are registered as global namespaces/functions:
… *The entry point for documentation of all **Public** items is in the* [**docs/**](./docs/README.md).

Note that there are also built-in `'node:*'` modules:
```js
import { setTimeout } from "node:timers/promises";
import { join, resolve } from "node:path";

//.current file url
import.meta.url;
//.url to path
import { fileURLToPath } from "node:url";
const file_path= fileURLToPath(import.meta.url);
// url is supported! (see relative reading)
s.cat(new URL('relative_file', import.meta.url));

//.crypto utils
import { randomUUID } from "node:crypto";

// …
```
…and more, see [Node.js v17.9.1 Documentation](https://nodejs.org/docs/latest-v17.x/api/documentation.html#stability-overview).

## Security guidelines
**`run()`/`runA()` command injection**: this advice applies to `child_process.exec()` just as
much as it applies to `s.run()`. It is potentially risky to run commands passed
for example by user input:
```js
function curlUnsafe(urlToDownload){ return s.run('curl ' + urlToDownload); }
curlUnsafe('https://some/url ; rm -rf $HOME'); //=> curl https://some/url ; rm -rf $HOME
```
Therefore, `nodejsscript`s `s.run()` provide way to escapes untrusted parameters:
```js
function curl(url){ return s.run("curl ::url::", { url }); }
curl('https://some/url ; rm -rf $HOME'); //=> curl 'https://some/url ; rm -rf $HOME'
```
…you can also use as template function (but without command specific options):
```js
function curl(url){ return s.run`curl ${url}`; }
curl('https://some/url ; rm -rf $HOME'); //=> curl 'https://some/url ; rm -rf $HOME'
```

…*Note: The ['xargs()'](../interfaces/s.XargsFunction.md) by default also escapes piped strings.*

*…Note 2: `s.run(…cmd, …vars)` is also helpul for escaping parameters passed as variables (e.g. arrays).*

*…Note 3: ShellJS also provides `s.exec`, but `s.run` should be prefered way to execute commands.*

**Glob injection (all commands)**: Most ShellJS commands support [glob](https://github.com/isaacs/node-glob) expansion,
expanding wildcards such as `*` to match files. While this is very powerful,
dependent modules should exercise caution. Unsanitized user input may contain
wildcard characters. Consider for example that the `*.txt` is valid file name,
however the `s.rm("*.txt")` by default (using the globbing) delete all `txt` files.
Keep in mind that you can always turn off this for next command by using:
```js
s.$("-g").rm("*.txt");
```

## Helper(s) for developing
You can create `jsconfig.json` to help your editor provide proper suggestions.
As editor you can use VSCode or Vim with for example [neoclide/coc.nvim](https://github.com/neoclide/coc.nvim).
NodeJSScript provides `nodejsscript --global-jsconfig add script_file` to
help generate `jsconfig.json`.

## Migration from `zx`
The `runA` is almost identical to `$`:
```js
await $`cat package.json | grep name`;
await s.runA`cat package.json | grep name`;
```
…but for `cp`/`mv`/… you need to rewrite code to `s.*`:
```js
echo(s.cat("package.json").grep("name"));
// or
echo(s.grep("name", "package.json"));
```

## Contribute
- [Contributor Covenant Code of Conduc](./CODE_OF_CONDUCT.md)
- [How to contribute](./CONTRIBUTING.md)

[^ORnpm]: Alternatively `curl -sL install-node.vercel.app/16.13.0 | bash`
[^ORnjs]: Or: `npm install https://github.com/jaandrle/nodejsscript --global`
