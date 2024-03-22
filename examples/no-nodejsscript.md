## You (may) not need to use `nodejsscript`
The main goal of `nodejsscript` is to make “one-file” scripting easy
and mainly quick and cross-platform. In a lots of cases the `nodejsscript`
is just an ‘extension’ of the `node`-js runtime.

Almost everything can be done with just “pure” JavaScript script file written
for `node`. In case, you just need (“very” small) script with only basic
functionalities available in node, you can just use:

```js
#!/usr/bin/env node
// script.js (chmod +x script.js)
const { version }= require("./package.json", "utf8");
console.log(version);
```
…similarly for `--eval`/`--print`/`--interactive`:
```bash
git tag $(node -p "require('./package.json').version"); git push --tag
```

### Libraries
Also, you can use libraries used by `nodejsscript` directly when you
scripting inside the package. Just install it and use it:

- [shelljs - npm](https://www.npmjs.com/package/shelljs) for Unix shell-like function in JavaScript
- [sade - npm](https://www.npmjs.com/package/sade) for building command-line interface
  (you can use also more robust solutions like [commander - npm](https://www.npmjs.com/package/commander))
- [css-in-console - npm](https://www.npmjs.com/package/css-in-console) for styling in console
  (you can use alternative solutions like [chalk - npm](https://www.npmjs.com/package/chalk))

### ShellJS (`shjs`)
There is non-promoted functionality similar to `nodejsscript` in
ShellJS library. You can use `shjs` to execute scripts, too.

```js
#!/usr/bin/env -S npx shjs
echo(ls());
```
…keep in mind that only commonJS modules are supporteda and only
functions shipped with ShellJS are available.

### Large scripts or scripts for sharing as a package
In this case, the npm package should be used instead of the script file.
Follow for example this guide [Publishing a Node.js CLI tool to npm in less than 15 minutes | HackerNoon](https://hackernoon.com/publishing-a-nodejs-cli-tool-to-npm-in-less-than-15-minutes).

In the package, you **can use `nodejsscript`** or if it makes sence
(for example because size/performance optimization) to use [libraries](#libraries)
directly.

In future version there can be implemented some migration helper
see [Candidate to implement — (interactive) cli migration to package](https://github.com/jaandrle/nodejsscript/discussions/38).
