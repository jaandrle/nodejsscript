[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / cmd

# Variable: cmd

> `const` **cmd**: [`CmdFunction`](../interfaces/CmdFunction.md)

Executes the given command synchronously. This is intended as an easier
alternative for `exec()`], with better security around globbing, comamnd
injection, and variable expansion. This is guaranteed to only run one
external command, and won't give special treatment for any shell characters
(ex. this treats `|` as a literal character, not as a shell pipeline).

By default, this performs globbing on all platforms, but you can disable this
with `set('-f')`.

This **does not** support asynchronous mode. If you need asynchronous
command execution, check out [execa](https://www.npmjs.com/package/execa) or
the node builtin `child_process.execFile()` instead.

## Param

Command to run.

## Param

Any number of arguments of arguments. If the last argument given
	           is an object, it will be created as a `CmdOptions` object.
