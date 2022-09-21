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
[s (shelljs)](./docs/modules/s.md) · [cli (register, question, rewritable, stdin)](./docs/modules/cli.md) · [style (ansi-colors)](./docs/modules/style.md) · [pubsub](./docs/modules/pubsub.md) · [config](./docs/modules/config.md)
· [fetch()](./docs/README.md#fetch) · [pipe()](./docs/README.md#pipe) · [echo()](./docs/README.md#echo) · [cyclicLoop()](./docs/README.md#cyclicloop)


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

Don’t forgot there are also build-in `'node:*'` modules:
```js
import { setTimeout } from "node:timers/promises";
import { join, resolve } from "node:path";
```
…and more, see [Node.js v17.9.1 Documentation](https://nodejs.org/docs/latest-v17.x/api/documentation.html#stability-overview).
