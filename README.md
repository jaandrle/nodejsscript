**The package is in early stage, some changes (in API) may be made until version 1.0.0.!**

# NodeJS Script – Easy cross-platform scripting
This package serves as an alternative to [google/zx](https://github.com/google/zx) for example.
The key difference is to provide Unix shell commands in a cross-platform compatible way and usable inside JavaScript.
This is primarily achieved by using [shelljs/shelljs](https://github.com/shelljs/shelljs) library.

You can compare the final script code to `zx` example:
```javascript
#!/usr/bin/env nodejsscript

echo(s.grep("name", "package.json"));

s.run("git branch --show-current")
.xargs(s.run, "dep deploy --branch={}");

s.run("sleep 1; echo 1");
s.run("sleep 2; echo 2");
s.run("sleep 3; echo 3");

const name= "foo bar";
s.mkdir($.xdg.temp(name));
```
…also see [examples](./examples).

## Installation

1. tested/used on *NodeJS*: `node@v16.13.0` and `node@v17.9.1` ⇒ for installation follow [nvm-sh/nvm: Node Version Manager](https://github.com/nvm-sh/nvm)[^ORnpm]
1. `npm install nodejsscript --location=global` … alternatively install locally: `npm install nodejsscript`[^ORnjs]

## Goods
[s #shelljs](./docs/modules/s.md)
 · [$](./docs/modules/.md) ([$.api() #sade](./docs/modules/.md#api), [$.read()](./docs/modules/.md#read), [$.xdg](./docs/modules/xdg_.xdg.md), …)
 · [echo()](./docs/README.md#echo)
 · [fetch() #node-fetch](./docs/README.md#fetch)
 · [style #ansi-colors](./docs/modules/style.md)
 · [pipe()](./docs/README.md#pipe)
 · [cyclicLoop()](./docs/README.md#cyclicloop)

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

<details>
<summary>Alternatively when installed locally</summary>

```bash
#!/usr/bin/env -S npx nodejsscript
```
```bash
npx nodejsscript ./script.mjs
```

</details>

All function (`shelljs`, `fetch`, …) are registered as global namespaces/functions:
… *The entry point for documentation of all **Public** items is in the* [**docs/**](./docs/README.md).

Note that there are also built-in `'node:*'` modules:
```js
import { setTimeout } from "node:timers/promises";
import { join, resolve } from "node:path";

//current file url
import.meta.url;
//url to path
import { fileURLToPath } from "node:url";
const file_path= fileURLToPath(import.meta.url);
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
