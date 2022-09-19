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
[s (shelljs)](#shelljs) · [cli()](#cli) · [chalk](#chalk-package) · [fetch()](#fetch) · [pipe()](#pipe) · [question()](#question) · [echo()](#echo) · [stdin()](#stdin) · [config](#config)


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
Available commands: `ls`, `find`, `dirs`, `cd`, `pwd`, `pushd`, `popd`, `cp`, `rm`, `mv`, `mkdir`, `ln`, `touch`, `tempdir`, `chmod`, `test`, `error`, `cat`, `sed`, `grep`, `sort`, `head`, `tail`, `uniq`, `which`, `exit`, `env`, `exec`.

```js
s.cat("./package.json").grep("version");
```
… this library adds two function `xargs` and `$`:
#### `xargs(cmd, ...cmd_args)`
#### `xargs("-I", pattern, cmd, ...cmd_args)`
```js
s.exec("git branch --show-current").xargs(s.exec, "dep deploy --branch={}");
s.exec("git branch --show-current").xargs("-I", "§", s.exec, "dep deploy --branch=§");
```

#### `$()`
#### `$("-svf")`
Modifies config for next command in chain. The `$()` runs next command in silent mode (compare to bash `var=$(echo Hi)`).

```js
const branch= s.$().exec("git branch --show-current");
echo(branch);

s.$("-vf").exec("gyt branch --show-current");
```

### `pipe()`
Function similar to [Ramda `R.pipe`](https://ramdajs.com/docs/#pipe)). Provides functional way to combine commands/functions.

```js
pipe(
	Number,
	v=> chalk.greenBright(v+1),
	v=> `Result is: ${v}`,
	echo
)(await question("Choose number:"));

```

### `cli()`
A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
In addition to the origin, `cli()` supports to fill script name from script file name.
This should be good balance between [commander - npm](https://www.npmjs.com/package/commander) and parsing arguments and writing help texts by hand.
For more complex scripts just create full npm package.

```js
cli("", true)
	.version("0.1.0")
	.describe("NodeJS Script cli test")
	.action(echo);
```

### `fetch()`
A wrapper around the [node-fetch](https://www.npmjs.com/package/node-fetch) package.

```js
const resp= await fetch('https://medv.io')
```

### `question()`
A wrapper around the [readline](https://nodejs.org/api/readline.html) package.

```js
const bear= await question('What kind of bear is best? ')
```

### `echo()`
A `console.log()` alternative optimized for scripting.

```js
const branch= exec$("git branch --show-current");
echo('Current branch is', branch);
```

### `stdin()`
Returns the stdin as a string.

```js
const content= JSON.parse(await stdin());
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

### `chalk` package
The [chalk](https://www.npmjs.com/package/chalk) package.

```js
echo(chalk.blue('Hello world!'));
```

[^node]: Alternatively `curl -sL install-node.vercel.app/17.0.1 | bash`
