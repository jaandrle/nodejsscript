**The package is in early stage, some changes (in API) may be made until version 1.0.0.!**

# NodeJS Script – Easy cross-platform scripting
This package serves as an alternative to [google/zx](https://github.com/google/zx) for example.
The key difference is to provide Unix shell commands in a cross-platform compatible way and usable inside JavaScript.
This is primarily achieved by using [shelljs/shelljs](https://github.com/shelljs/shelljs) library.

You can compare the final script code to `zx` example:
```javascript
#!/usr/bin/env nodejsscript
echo(s.grep("name", "package.json"));

s.exec("git branch --show-current").xargs(s.exec, "dep deploy --branch={}");

s.exec("sleep 1; echo 1");
s.exec("sleep 2; echo 2");
s.exec("sleep 3; echo 3");

import { join } from "node:path";
const name= "foo bar";
s.mkdir(join(s.tempdir(), name));
```
…also see [examples](./examples).

## Installation

1. tested/used on *NodeJS*: `node@v16.13.0` and `node@v17.9.1` ⇒ for installation follow [nvm-sh/nvm: Node Version Manager](https://github.com/nvm-sh/nvm)[^OR]
1. `npm install https://github.com/jaandrle/nodejsscript --global` (**will be registered also in npm repository**)
1. alternatively install locally

## Goods
[s #shelljs](./docs/modules/s.md)
 · [cli](./docs/modules/cli.md) ([cli.api() #sade](./docs/modules/cli.md#api), [cli.read()](./docs/modules/cli.md#read), …)
 · [echo()](./docs/README.md#echo)
 · [xdg()](./docs/README.md#xdg)
 · [$\`\`](./docs/README.md#$)
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
**`exec()` command injection**: this advice applies to `child_process.exec()` just as
much as it applies to `s.exec()`. It is potentially risky to run commands passed
for example by user input:
```js
function curlUnsafe(urlToDownload){ return s.exec('curl ' + urlToDownload); }
curlUnsafe('https://some/url ; rm -rf $HOME'); //=> curl https://some/url ; rm -rf $HOME
```
Therefore, `nodejsscript` provide [$\`\`](./docs/README.md#$) function for escaping shell commands:
```js
function curl(urlToDownload){ return s.exec($`curl ${urlToDownload}`); }
curl('https://some/url ; rm -rf $HOME'); //=> curl 'https://some/url ; rm -rf $HOME'
```
…*Note: The ['xargs()'](../interfaces/s.XargsFunction.md) by default also escapes piped strings.*

*…Note 2: `$`` is also helpul for escaping parameters passed as variables (e.g. arrays).*

**Glob injection (all commands)**: Most ShellJS commands support [glob](https://github.com/isaacs/node-glob) expansion,
expanding wildcards such as `*` to match files. While this is very powerful,
dependent modules should exercise caution. Unsanitized user input may contain
wildcard characters. Consider for example that the `*.txt` is valid file name,
however the `s.rm("*.txt")` by default (using the globbing) delete all `txt` files.
Keep in mind that you can always turn off this for next command by using:
```js
s.$("-g").rm("*.txt");
```

[^OR]: Alternatively `curl -sL install-node.vercel.app/16.13.0 | bash`
