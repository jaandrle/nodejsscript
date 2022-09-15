# NodeJSScript – write cross-platform scripts with ease
This package provides very similar functionality such as [google/zx](https://github.com/google/zx#chalk-package).
Tke key difference is to provide unix shell commands in cross-platform commpatible way.
This is done by using [shelljs/shelljs](https://github.com/shelljs/shelljs) library.

You can compare the final script code similar to `zx`:
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
[shelljs/shelljs: ls, find, dirs, cd, pwd, pushd, popd, cp, rm, mv, mkdir, ln, touch, tempdir, chmod, test, error, cat, sed, grep, sort, head, tail, uniq, which, exit, env, set, exec, config](https://github.com/shelljs/shelljs#tempdir)
 · [fetch()](#fetch)
 · [question()](#question)
 · [echo()](#echo)
 · [stdin()](#stdin)
 · [chalk](#chalk-package)


## Documentation

Write your scripts in a file with an `.mjs` extension in order to
use `await` at the top level. If you prefer the `.js` extension,
wrap your scripts in something like `(async function () {...})()`.

Add the following shebang to the beginning of your `zx` scripts:
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
A `console.log()` alternative optimalozed for scripting.

```js
const branch= exec("git branch --show-current");
echo('Current branch is', branch);
```

### `stdin()`
Returns the stdin as a string.

```js
const content= JSON.parse(await stdin())
```

### `chalk`
The [chalk](https://www.npmjs.com/package/chalk) package. Also as shorthand **s**.

```js
echo(chalk.blue('Hello world!'));
echo(s.blue('Hello world!'));
```
