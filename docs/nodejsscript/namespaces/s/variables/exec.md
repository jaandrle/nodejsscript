[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / exec

# Variable: exec

> `const` **exec**: [`ExecFunction`](../interfaces/ExecFunction.md)

Executes the given command.

## Param

**command**

The command to execute.

## Param

**options**

Silence and synchronous options.

## Param

**callback**

Receives code and output asynchronously.

## Returns

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.
