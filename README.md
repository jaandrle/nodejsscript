# NodeJSScript – write cross-platform scripts with ease
This package provides very similar functionality such as [google/zx](https://github.com/google/zx).
Tke key difference is to provide unix shell commands in cross-platform commpatible way.
This is done by using [shelljs/shelljs](https://github.com/shelljs/shelljs) library.

You can compare the final script code to `zx` example:
```javascript
#!/usr/bin/env nodejsscript
import { exec, grep, echo, mkdir, tempdir } from "nodejsscript";

echo(grep("name", "../package.json").trim());

const branch= exec("git branch --show-current").trim();
exec(`dep deploy --branch=${branch}`);

exec("sleep 1; echo 1");
exec("sleep 2; echo 2");
exec("sleep 3; echo 3");

const name= "foo bar";
mkdir(tempdir()+"/"+name);
```

## Instalation
**For now experiment!!!**

1. you need nodejs >=v17.0.1 ⇒ folows [nvm-sh/nvm: Node Version Manager](https://github.com/nvm-sh/nvm)[^node]
1. `npm install https://github.com/jaandrle/nodejsscript --global`

## Goods
 · [shelljs/shelljs:](https://github.com/shelljs/shelljs)
[cat](https://github.com/shelljs/shelljs#catoptions-file--file-) · [cd](https://github.com/shelljs/shelljs#cddir) · [chmod](https://github.com/shelljs/shelljs#chmodoptions-octal_mode--octal_string-file) · [cp](https://github.com/shelljs/shelljs#cpoptions-source--source--dest)
 · [pushd](https://github.com/shelljs/shelljs#pushdoptions-dir---n--n) · [popd](https://github.com/shelljs/shelljs#popdoptions--n--n) · [dirs](https://github.com/shelljs/shelljs#dirsoptions--n---n) · [exec](https://github.com/shelljs/shelljs#execcommand--options--callback)
 · [find](https://github.com/shelljs/shelljs#findpath--path-) · [grep](https://github.com/shelljs/shelljs#grepoptions-regex_filter-file--file-) · [head](https://github.com/shelljs/shelljs#head-n-num-file--file-) · [ln](https://github.com/shelljs/shelljs#lnoptions-source-dest)
 · [ls](https://github.com/shelljs/shelljs#lsoptions-path-) · [mkdir](https://github.com/shelljs/shelljs#mkdiroptions-dir--dir-) · [mv](https://github.com/shelljs/shelljs#mvoptions--source--source--dest) · [pwd](https://github.com/shelljs/shelljs#pwd)
 · [rm](https://github.com/shelljs/shelljs#rmoptions-file--file-) · [sed](https://github.com/shelljs/shelljs#sedoptions-search_regex-replacement-file--file-) · [set](https://github.com/shelljs/shelljs#setoptions) · [sort](https://github.com/shelljs/shelljs#sortoptions-file--file-)
 · [tail](https://github.com/shelljs/shelljs#tail-n-num-file--file-) · [tempdir](https://github.com/shelljs/shelljs#tempdir) · [test](https://github.com/shelljs/shelljs#testexpression) · [touch](https://github.com/shelljs/shelljs#touchoptions-file--file-)
 · [uniq](https://github.com/shelljs/shelljs#uniqoptions-input-output) · [which](https://github.com/shelljs/shelljs#whichcommand) · [exit](https://github.com/shelljs/shelljs#exitcode) · [error](https://github.com/shelljs/shelljs#error) · [errorCode](https://github.com/shelljs/shelljs#errorcode) 
 · [cli()](#cli)
 · [xarg()](#xarg)
 · [pipe()](#pipe)
 · [fetch()](#fetch)
 · [question()](#question)
 · [echo()](#echo)
 · [exec$()](#exec$)
 · [stdin()](#stdin)
 · [chalk](#chalk-package)


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

### `xarg()`
Simplify version of `xargs` allowing passing one argument. For now only "-I" argument is allowed.
By default `{}` will be replaced, if not presented the argument is append as last one.

```js
pipe(
	exec$.bind(null, "git branch --show-current"),
	xarg(exec, "echo deploy --branch={}")
)();
pipe(
	exec$.bind(null, "git branch --show-current"),
	xarg("-I §", exec, "echo deploy --branch=§")
)();
```

### `pipe()`
Function similar to [Ramda `R.pipe`](https://ramdajs.com/docs/#pipe)). Provides functional way to combine commands/functions.
Can be used with [xarg()](#xarg). **Some functions from shelljs also allow you to combine them, see [Pipes](https://github.com/shelljs/shelljs#pipes)**.

```js
pipe(
	Number,
	v=> s.greenBright(v+1),
	v=> `Result is: ${v}`,
	echo
)(await question("Choose number:"));

```

### `cli()`
A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
In addition to the origin, `cli()` supports to fill script name from script file name.

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

### `exec$()`
A wrapper around the [exec](https://github.com/shelljs/shelljs#execcommand--options--callback) function.
Runs in silent mode and handle text to be used as variables.

```js
const branch= exec$("git branch --show-current");
echo('Current branch is', branch);
```

### `echo()`
A `console.log()` alternative optimalized for scripting.

```js
const branch= exec$("git branch --show-current");
echo('Current branch is', branch);
```

### `stdin()`
Returns the stdin as a string.

```js
const content= JSON.parse(await stdin());
```

### `chalk` package
The [chalk](https://www.npmjs.com/package/chalk) package. Also as shorthand **s**.

```js
echo(chalk.blue('Hello world!'));
echo(s.blue('Hello world!'));
```

[^node]: Alternatively `curl -sL install-node.vercel.app/17.0.1 | bash`
