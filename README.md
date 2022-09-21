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
[s (shelljs)](./docs/modules/s.md)
· [cli (register, question, rewritable, stdin)](./docs/modules/cli.md)
· [style (ansi-colors)](./docs/modules/style.md)
· [fetch()](./docs/README.md#fetch)
· [pipe()](./docs/README.md#pipe)
· [echo()](./docs/README.md#echo)
· [abortable (controller, timeout, interval)](#abortable)
· [config](#config)


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
logProg("Task started");
// … later
logProg("1/n Done");
// … later
logProgCon.abort();
echo("Task finished");
```

### `abortable`
Namespace contains functions for creating `AbortController` and abortable 'interval'/'timeout'.

[abortable.controller()](#abortablecontroller) · [abortable.timeout()](#abortabletimeout) · [abortable.interval()](#abortableinterval)

#### `abortable.controller()`
Returns `AbortController` to be used for aborting [fetch()](#fetch), [cli.rewritable()](#clirewritable), [abortable.timeout()](#abortabletimeout), [abortable.interval()](#availableinterval), ….

```js
const data_controller= abortable.controller();
const { signal }= data_controller;
abortable.timeout(150, signal).then(()=> data_controller.abort()).catch(()=>{});
try{
	const data= await fetch("https://example.com", { signal }).then(r=> r.json());
	data_controller.abort();
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
