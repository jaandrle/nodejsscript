[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / ExecFunction

# Interface: ExecFunction()

## Call Signature

> **ExecFunction**(`command`): [`ShellString`](../type-aliases/ShellString.md)

Executes the given command synchronously.

### Parameters

#### command

`string`

The command to execute.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as string.

## Call Signature

> **ExecFunction**(`command`, `options`): [`ShellString`](../type-aliases/ShellString.md)

Executes the given command synchronously.

### Parameters

#### command

`string`

The command to execute.

#### options

[`ExecOptions`](ExecOptions.md) & `object`

Silence and synchronous options.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

## Call Signature

> **ExecFunction**(`command`, `options`): [`ChildProcess`](../../../../child_process/classes/ChildProcess.md)

Executes the given command asynchronously.

### Parameters

#### command

`string`

The command to execute.

#### options

[`ExecOptions`](ExecOptions.md) & `object`

Silence and synchronous options.

### Returns

[`ChildProcess`](../../../../child_process/classes/ChildProcess.md)

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

## Call Signature

> **ExecFunction**(`command`, `options`): [`ChildProcess`](../../../../child_process/classes/ChildProcess.md) \| [`ShellString`](../type-aliases/ShellString.md)

Executes the given command.

### Parameters

#### command

`string`

The command to execute.

#### options

[`ExecOptions`](ExecOptions.md)

Silence and synchronous options.

### Returns

[`ChildProcess`](../../../../child_process/classes/ChildProcess.md) \| [`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

## Call Signature

> **ExecFunction**(`command`, `options`, `callback`): [`ChildProcess`](../../../../child_process/classes/ChildProcess.md)

Executes the given command synchronously.

### Parameters

#### command

`string`

The command to execute.

#### options

[`ExecOptions`](ExecOptions.md)

Silence and synchronous options.

#### callback

[`ExecCallback`](../type-aliases/ExecCallback.md)

Receives code and output asynchronously.

### Returns

[`ChildProcess`](../../../../child_process/classes/ChildProcess.md)

## Call Signature

> **ExecFunction**(`command`, `callback`): [`ChildProcess`](../../../../child_process/classes/ChildProcess.md)

Executes the given command synchronously.

### Parameters

#### command

`string`

The command to execute.

#### callback

[`ExecCallback`](../type-aliases/ExecCallback.md)

Receives code and output asynchronously.

### Returns

[`ChildProcess`](../../../../child_process/classes/ChildProcess.md)
