**The package is in early stage, some changes (in API) may be made until version 1.0.0.!**

# NodeJS Script – Easy cross-platform scripting
This package serves as an alternative to [google/zx](https://github.com/google/zx) for example.
The key difference is to provide Unix shell commands in a cross-platform compatible way and usable inside JavaScript.
This is primarily achieved by using [shelljs/shelljs](https://github.com/shelljs/shelljs) library.

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
…also see [examples](./examples).

## Installation

1. tested/used on *NodeJS*: `node@v16.13.0` and `node@v17.9.1` ⇒ for installation follow [nvm-sh/nvm: Node Version Manager](https://github.com/nvm-sh/nvm)[^OR]
1. `npm install https://github.com/jaandrle/nodejsscript --global` (**will be moved to npm repository**)

## Goods
[s #shelljs](./docs/modules/s.md)
 · [cli](./docs/modules/cli.md) ([cli.api() #sade](./docs/modules/cli.md#api), [cli.read()](./docs/modules/cli.md#read), …)
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

All function (`shelljs`, `fetch`, …) are exported by library, so use:
```javascript
import { … } from "nodejsscript";
```
… *The entry point for documentation of all exported (**Public**) items is in the* [**docs/**](./docs/README.md).

Note that there are also built-in `'node:*'` modules:
```js
import { setTimeout } from "node:timers/promises";
import { join, resolve } from "node:path";
```
…and more, see [Node.js v17.9.1 Documentation](https://nodejs.org/docs/latest-v17.x/api/documentation.html#stability-overview).

[^OR]: Alternatively `curl -sL install-node.vercel.app/16.13.0 | bash`
