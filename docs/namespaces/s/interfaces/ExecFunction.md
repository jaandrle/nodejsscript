[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / ExecFunction

# Interface: ExecFunction()

> **ExecFunction**(`command`): [`ShellString`](../type-aliases/ShellString.md)

Executes the given command synchronously.

## Parameters

• **command**: `string`

The command to execute.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as string.

> **ExecFunction**(`command`, `options`): [`ShellString`](../type-aliases/ShellString.md)

Executes the given command synchronously.

## Parameters

• **command**: `string`

The command to execute.

• **options**: [`ExecOptions`](ExecOptions.md) & `object`

Silence and synchronous options.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

> **ExecFunction**(`command`, `options`): [`ChildProcess`](../namespaces/child/classes/ChildProcess.md)

Executes the given command asynchronously.

## Parameters

• **command**: `string`

The command to execute.

• **options**: [`ExecOptions`](ExecOptions.md) & `object`

Silence and synchronous options.

## Returns

[`ChildProcess`](../namespaces/child/classes/ChildProcess.md)

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

> **ExecFunction**(`command`, `options`): [`ChildProcess`](../namespaces/child/classes/ChildProcess.md) \| [`ShellString`](../type-aliases/ShellString.md)

Executes the given command.

## Parameters

• **command**: `string`

The command to execute.

• **options**: [`ExecOptions`](ExecOptions.md)

Silence and synchronous options.

## Returns

[`ChildProcess`](../namespaces/child/classes/ChildProcess.md) \| [`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

> **ExecFunction**(`command`, `options`, `callback`): [`ChildProcess`](../namespaces/child/classes/ChildProcess.md)

Executes the given command synchronously.

## Parameters

• **command**: `string`

The command to execute.

• **options**: [`ExecOptions`](ExecOptions.md)

Silence and synchronous options.

• **callback**: [`ExecCallback`](../type-aliases/ExecCallback.md)

Receives code and output asynchronously.

## Returns

[`ChildProcess`](../namespaces/child/classes/ChildProcess.md)

> **ExecFunction**(`command`, `callback`): [`ChildProcess`](../namespaces/child/classes/ChildProcess.md)

Executes the given command synchronously.

## Parameters

• **command**: `string`

The command to execute.

• **callback**: [`ExecCallback`](../type-aliases/ExecCallback.md)

Receives code and output asynchronously.

## Returns

[`ChildProcess`](../namespaces/child/classes/ChildProcess.md)
