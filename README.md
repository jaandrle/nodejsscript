# NodeJS Script – write cross-platform scripts with ease
This package provides very similar functionality such as [google/zx](https://github.com/google/zx).
The key difference is to provide unix shell commands in cross-platform compatible way and suitable for javascript.
This is done by using [shelljs/shelljs](https://github.com/shelljs/shelljs) library.

You can compare the final script code to `zx` example:
```javascript
#!/usr/bin/env nodejsscript
import { s, echo } from "nodejsscript";
echo(s.grep("name", "package.json"));

s.exec("git branch --show-current").xargs(s.exec, "dep deploy --branch={}");

s.exec("sleep 1; echo 1");
s.exec("sleep 2; echo 2");
s.exec("sleep 3; echo 3");

import { join } from "node:path";
const name= "foo bar";
s.mkdir(join(s.tempdir(), name));
```

## Installation
**For now experiment!!!**

1. you need nodejs >=v17.0.1 ⇒ follow [nvm-sh/nvm: Node Version Manager](https://github.com/nvm-sh/nvm)[^node]
1. `npm install https://github.com/jaandrle/nodejsscript --global`

## Goods
[s (shelljs)](#shelljs) · [cli (register, question, rewritable, stdin)](#cli) · [ansi-colors](#ansi-colors-package) · [fetch()](#fetch) · [pipe()](#pipe)] · [echo()](#echo) · [config](#config)


## Documentation

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

All function (`shelljs`, `fetch`, …) are exported by library, so use:
```javascript
import { … } from "nodejsscript";
```

### shelljs
The `shelljs` extension is available as `s`. For docs visits [shelljs/shelljs](https://github.com/shelljs/shelljs).
You can pipe commands when make sense by chaining, see **[Pipes](https://github.com/shelljs/shelljs#pipes)**.
Available commands: [cat](https://github.com/shelljs/shelljs#catoptions-file--file-) · [cd](https://github.com/shelljs/shelljs#cddir) · [chmod](https://github.com/shelljs/shelljs#chmodoptions-octal_mode--octal_string-file) · [cp](https://github.com/shelljs/shelljs#cpoptions-source--source--dest)
 · [pushd](https://github.com/shelljs/shelljs#pushdoptions-dir---n--n) · [popd](https://github.com/shelljs/shelljs#popdoptions--n--n) · [dirs](https://github.com/shelljs/shelljs#dirsoptions--n---n) · [exec](https://github.com/shelljs/shelljs#execcommand--options--callback)
 · [find](https://github.com/shelljs/shelljs#findpath--path-) · [grep](https://github.com/shelljs/shelljs#grepoptions-regex_filter-file--file-) · [head](https://github.com/shelljs/shelljs#head-n-num-file--file-) · [ln](https://github.com/shelljs/shelljs#lnoptions-source-dest)
 · [ls](https://github.com/shelljs/shelljs#lsoptions-path-) · [mkdir](https://github.com/shelljs/shelljs#mkdiroptions-dir--dir-) · [mv](https://github.com/shelljs/shelljs#mvoptions--source--source--dest) · [pwd](https://github.com/shelljs/shelljs#pwd)
 · [rm](https://github.com/shelljs/shelljs#rmoptions-file--file-) · [sed](https://github.com/shelljs/shelljs#sedoptions-search_regex-replacement-file--file-) · [sort](https://github.com/shelljs/shelljs#sortoptions-file--file-)
 · [tail](https://github.com/shelljs/shelljs#tail-n-num-file--file-) · [tempdir](https://github.com/shelljs/shelljs#tempdir) · [test](https://github.com/shelljs/shelljs#testexpression) · [touch](https://github.com/shelljs/shelljs#touchoptions-file--file-)
 · [uniq](https://github.com/shelljs/shelljs#uniqoptions-input-output) · [which](https://github.com/shelljs/shelljs#whichcommand) · [exit](https://github.com/shelljs/shelljs#exitcode) · [error](https://github.com/shelljs/shelljs#error) · [errorCode](https://github.com/shelljs/shelljs#errorcode) 

```js
s.cat("./package.json").grep("version");
```
… this library adds two function `xargs` and `$`:
#### `xargs(cmd, ...cmd_args)`
#### `xargs("-I", pattern, cmd, ...cmd_args)`
```js
s.exec("git branch --show-current").xargs(s.exec, "dep deploy --branch={}");
s.exec("git branch --show-current").xargs({ "-I": "§" }, s.exec, "dep deploy --branch=§");
```

#### `$()`
#### `$("-svf")`
Modifies config for next command in chain. The `$()` runs next command in silent mode (compare to bash `var=$(echo Hi)`).

```js
const branch= s.$().exec("git branch --show-current");
echo(branch);

s.$("-vf").exec("gyt branch --show-current");
```

### `cli`
Namespace contains helpers for working with command line interface.

[cli.register()](#cliregister) · [cli.question()](#cliquestion) · [cli.rewritable()](#clirewritable)

#### `cli.register()`
A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
In addition to the origin, `cli.register()` supports to fill script name from script file name.
This should be good balance between [commander - npm](https://www.npmjs.com/package/commander) and parsing arguments and writing help texts by hand.
For more complex scripts just create full npm package.

```js
cli.register("", true)
	.version("0.1.0")
	.describe("NodeJS Script cli test")
	.action(echo);
```

#### `cli.question()`
A wrapper around the [readline](https://nodejs.org/api/readline.html) package.

```js
const bear= await cli.question('What kind of bear is best?');
```

#### `cli.stdin()`
Returns the stdin as a string.

```js
const content= JSON.parse(await cli.stdin());
```

#### `cli.rewritable()`
Returns functions that rewrite previous terminal output created by this function:

```js
const logProgCon= abortable.controller();
const logProg= cli.rewritable({ signal: logProgCon.signal });
logProgCon.addEventListener("abort", echo.bind(null, "Task Done"), { signal: logProgCon.signal });
logProg("Task started");
// … later
logProg("1/n Done");
// … later
logProgCon.abort();
```

### `abortable`
Namespace contains functions for creating `AbortController` and abortable 'interval'/'timeout'.

[abortable.controller()](#abortablecontroller) · [abortable.timeout()](#abortabletimeout) · [abortable.interval()](#abortableinterval)

#### `abortable.controller()`
Returns `AbortController` to be used for aborting [fetch()](#fetch), [cli.rewritable()](#clirewritable), [abortable.timeout()](#abortabletimeout), [abortable.interval()](#availableinterval), ….

```js
const data_controller= abortable.controller();
const { signal }= data_controller;
abortable.timeout(150, signal).catch(()=>{}).then(()=> data_controller.abort());
try{
	const data= await fetch("https://example.com", { signal }).then(r=> r.json());
} catch(e){
	echo("Error name is AbortError, when aborted – now:", e.name);
}
```

#### `abortable.timeout()`
As 'promised' `setTimeout`:
```js
abortable.timeout(750)
.then(echo);
```
…with abortion:
```js
const t_controller= abortable.controller();
abortable.timeout(750, t_controller.signal)
.then(echo.bind(null, "Not aborted"))
.catch(echo.bind(null, "Aborted"));
// …
t_controller.abort();
```

#### `abortable.interval()`
```js
const i_controller= abortable.controller();
abortable.interval(echo.bind(null, "Interval"), 750, i_controller.signal);
abortable.timeout(10*750).then(()=> i_controller.abort());
```

### `cyclicLoop()`
Repeatedly loops through the given chars/strings/….
By default uses spinner string:
```js
const spin_controller= abortable.controller();
spinner("Waiting…", spin_controller.signal);
abortable.timeout(10*750).then(()=> spin_controller.abort());

function spinner(message, signal){
	const log= cli.rewritable({ signal });
	const animation= cyclicLoop();
	abortable.interval(()=> log(`${animation.next().value} ${message}`), 750, signal);
}
```
…also see [spinner example](./examples/spinner.mjs).

### `pipe()`
Function similar to [Ramda `R.pipe`](https://ramdajs.com/docs/#pipe)). Provides functional way to combine commands/functions.

```js
pipe(
	Number,
	v=> style.greenBright(v+1),
	v=> `Result is: ${v}`,
	echo
)(await question("Choose number:"));
```

### `fetch()`
A wrapper around the [node-fetch](https://www.npmjs.com/package/node-fetch) package.

```js
const resp= await fetch('https://medv.io')
```

### `echo()`
A `console.log()` alternative optimized for scripting.

```js
const branch= s.$().exec("git branch --show-current");
echo('Current branch is', branch);
```

### `config`
Read/write global configuration.

- `silent` [`false`]: Suppresses all command output if `true`, except for `echo()` call.
- `verbose` [`false`]: Will print each executed command to the screen.
- `fatal` [`false`]: If `true`, the script will throw a JavaScript error when any `shell.js` command encounters an error. This is analogous to Bash's `set -e`.
- `noglob` [`false`]: Disable filename expansion (globbing)
- `globOptions` [`{}`]: Options for [`glob.sync()`](https://github.com/isaacs/node-glob/tree/af57da21c7722bb6edb687ccd4ad3b99d3e7a333#options).

```js
const { verbose, fatal, noglob }= config;
config.silent= true;
const config.assign({ verbose: true, silent: false });

```

### `ansi-colors` package
The [doowb/ansi-colors](https://github.com/doowb/ansi-colors) package as `style`.

```js
style.theme({ info: style.blue });
echo(style.info('Hello world!'));
```

[^node]: Alternatively `curl -sL install-node.vercel.app/17.0.1 | bash`
