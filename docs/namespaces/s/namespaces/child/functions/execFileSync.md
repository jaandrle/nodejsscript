[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / execFileSync

# Function: execFileSync()

## execFileSync(file)

> **execFileSync**(`file`): `Buffer`

The `child_process.execFileSync()` method is generally identical to [execFile](execFile.md) with the exception that the method will not
return until the child process has fully closed. When a timeout has been
encountered and `killSignal` is sent, the method won't return until the process
has completely exited.

If the child process intercepts and handles the `SIGTERM` signal and
does not exit, the parent process will still wait until the child process has
exited.

If the process times out or has a non-zero exit code, this method will throw an `Error` that will include the full result of the underlying [spawnSync](spawnSync.md).

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

### Parameters

• **file**: `string`

The name or path of the executable file to run.

### Returns

`Buffer`

The stdout from the command.

### Since

v0.11.12

## execFileSync(file, options)

> **execFileSync**(`file`, `options`): `string`

### Parameters

• **file**: `string`

• **options**: [`ExecFileSyncOptionsWithStringEncoding`](../interfaces/ExecFileSyncOptionsWithStringEncoding.md)

### Returns

`string`

## execFileSync(file, options)

> **execFileSync**(`file`, `options`): `Buffer`

### Parameters

• **file**: `string`

• **options**: [`ExecFileSyncOptionsWithBufferEncoding`](../interfaces/ExecFileSyncOptionsWithBufferEncoding.md)

### Returns

`Buffer`

## execFileSync(file, options)

> **execFileSync**(`file`, `options`?): `string` \| `Buffer`

### Parameters

• **file**: `string`

• **options?**: [`ExecFileSyncOptions`](../interfaces/ExecFileSyncOptions.md)

### Returns

`string` \| `Buffer`

## execFileSync(file, args)

> **execFileSync**(`file`, `args`): `Buffer`

### Parameters

• **file**: `string`

• **args**: readonly `string`[]

### Returns

`Buffer`

## execFileSync(file, args, options)

> **execFileSync**(`file`, `args`, `options`): `string`

### Parameters

• **file**: `string`

• **args**: readonly `string`[]

• **options**: [`ExecFileSyncOptionsWithStringEncoding`](../interfaces/ExecFileSyncOptionsWithStringEncoding.md)

### Returns

`string`

## execFileSync(file, args, options)

> **execFileSync**(`file`, `args`, `options`): `Buffer`

### Parameters

• **file**: `string`

• **args**: readonly `string`[]

• **options**: [`ExecFileSyncOptionsWithBufferEncoding`](../interfaces/ExecFileSyncOptionsWithBufferEncoding.md)

### Returns

`Buffer`

## execFileSync(file, args, options)

> **execFileSync**(`file`, `args`?, `options`?): `string` \| `Buffer`

### Parameters

• **file**: `string`

• **args?**: readonly `string`[]

• **options?**: [`ExecFileSyncOptions`](../interfaces/ExecFileSyncOptions.md)

### Returns

`string` \| `Buffer`
