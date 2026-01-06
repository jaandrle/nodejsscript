[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / run

# Variable: run

> `const` **run**: [`RunFunction`](../interfaces/RunFunction.md)

You can use this function to run executable commands not listed
in the shelljs (`s` namespace). For example (the simplest one):
```js
s.run`git branch --show-current`;
```
…you can also pass variables and function automatically escapes
them.
```js
const var= "Hello World";
s.run`echo ${var}`;
```
…alternatively you can use classic function approach:
```js
s.run("echo ::var::", { var: "Hello World" });
```
…this way you can also pass additional options:
```js
s.run("echo 'HI'", null, { cwd: "../" });
s.run("echo ::var::", { var: "Hi" }, { cwd: "../" });
```
Internally the [`child_process.execFileSync`](https://nodejs.org/api/child_process.html#child_processexecfilefile-args-options-callback)
is used to execute the command, so use any of the options
supported by that function.

By default the function prints the output of the command
to stdout. You can use `$.is_silent= false` or [s.$]($.md):
```js
const branch= s.$().run`git branch --show-current`.stdout;
echo(branch);
```

## Param

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

## Param

Arguments for `command`.

## Param

Silence and synchronous options.

## Returns

Returns [ShellString](ShellString.md).
