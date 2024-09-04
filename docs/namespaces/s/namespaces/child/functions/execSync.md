[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / execSync

# Function: execSync()

## execSync(command)

> **execSync**(`command`): `Buffer`

The `child_process.execSync()` method is generally identical to [exec](exec.md) with the exception that the method will not return
until the child process has fully closed. When a timeout has been encountered
and `killSignal` is sent, the method won't return until the process has
completely exited. If the child process intercepts and handles the `SIGTERM` signal and doesn't exit, the parent process will wait until the child process
has exited.

If the process times out or has a non-zero exit code, this method will throw.
The `Error` object will contain the entire result from [spawnSync](spawnSync.md).

**Never pass unsanitized user input to this function. Any input containing shell**
**metacharacters may be used to trigger arbitrary command execution.**

### Parameters

• **command**: `string`

The command to run.

### Returns

`Buffer`

The stdout from the command.

### Since

v0.11.12

## execSync(command, options)

> **execSync**(`command`, `options`): `string`

### Parameters

• **command**: `string`

• **options**: [`ExecSyncOptionsWithStringEncoding`](../interfaces/ExecSyncOptionsWithStringEncoding.md)

### Returns

`string`

## execSync(command, options)

> **execSync**(`command`, `options`): `Buffer`

### Parameters

• **command**: `string`

• **options**: [`ExecSyncOptionsWithBufferEncoding`](../interfaces/ExecSyncOptionsWithBufferEncoding.md)

### Returns

`Buffer`

## execSync(command, options)

> **execSync**(`command`, `options`?): `string` \| `Buffer`

### Parameters

• **command**: `string`

• **options?**: [`ExecSyncOptions`](../interfaces/ExecSyncOptions.md)

### Returns

`string` \| `Buffer`
