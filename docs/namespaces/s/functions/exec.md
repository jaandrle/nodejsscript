[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / exec

# Function: exec()

Executes the given command.

## Param

The command to execute.

## Param

Silence and synchronous options.

## Param

Receives code and output asynchronously.

## exec(command)

> **exec**(`command`): [`ShellString`](../type-aliases/ShellString.md)

Executes the given command synchronously.

### Parameters

• **command**: `string`

The command to execute.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

Returns an object containing the return code and output as string.

### Param

The command to execute.

### Param

Silence and synchronous options.

### Param

Receives code and output asynchronously.

## exec(command, options)

> **exec**(`command`, `options`): [`ShellString`](../type-aliases/ShellString.md)

Executes the given command synchronously.

### Parameters

• **command**: `string`

The command to execute.

• **options**: [`ExecOptions`](../interfaces/ExecOptions.md) & `object`

Silence and synchronous options.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

### Param

The command to execute.

### Param

Silence and synchronous options.

### Param

Receives code and output asynchronously.

## exec(command, options)

> **exec**(`command`, `options`): [`ChildProcess`](../namespaces/child/classes/ChildProcess.md)

Executes the given command asynchronously.

### Parameters

• **command**: `string`

The command to execute.

• **options**: [`ExecOptions`](../interfaces/ExecOptions.md) & `object`

Silence and synchronous options.

### Returns

[`ChildProcess`](../namespaces/child/classes/ChildProcess.md)

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

### Param

The command to execute.

### Param

Silence and synchronous options.

### Param

Receives code and output asynchronously.

## exec(command, options)

> **exec**(`command`, `options`): [`ChildProcess`](../namespaces/child/classes/ChildProcess.md) \| [`ShellString`](../type-aliases/ShellString.md)

Executes the given command.

### Parameters

• **command**: `string`

The command to execute.

• **options**: [`ExecOptions`](../interfaces/ExecOptions.md)

Silence and synchronous options.

### Returns

[`ChildProcess`](../namespaces/child/classes/ChildProcess.md) \| [`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

### Param

The command to execute.

### Param

Silence and synchronous options.

### Param

Receives code and output asynchronously.

## exec(command, options, callback)

> **exec**(`command`, `options`, `callback`): [`ChildProcess`](../namespaces/child/classes/ChildProcess.md)

Executes the given command synchronously.

### Parameters

• **command**: `string`

The command to execute.

• **options**: [`ExecOptions`](../interfaces/ExecOptions.md)

Silence and synchronous options.

• **callback**: [`ExecCallback`](../type-aliases/ExecCallback.md)

Receives code and output asynchronously.

### Returns

[`ChildProcess`](../namespaces/child/classes/ChildProcess.md)

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

### Param

The command to execute.

### Param

Silence and synchronous options.

### Param

Receives code and output asynchronously.

## exec(command, callback)

> **exec**(`command`, `callback`): [`ChildProcess`](../namespaces/child/classes/ChildProcess.md)

Executes the given command synchronously.

### Parameters

• **command**: `string`

The command to execute.

• **callback**: [`ExecCallback`](../type-aliases/ExecCallback.md)

Receives code and output asynchronously.

### Returns

[`ChildProcess`](../namespaces/child/classes/ChildProcess.md)

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

### Param

The command to execute.

### Param

Silence and synchronous options.

### Param

Receives code and output asynchronously.
