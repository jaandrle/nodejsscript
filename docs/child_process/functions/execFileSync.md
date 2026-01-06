[**nodejsscript**](../../README.md)

***

[nodejsscript](../../README.md) / [s](../../nodejsscript/namespaces/s/README.md) / [child\_process](../README.md) / execFileSync

# Function: execFileSync()

## Call Signature

> **execFileSync**(`file`): `NonSharedBuffer`

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

#### file

`string`

The name or path of the executable file to run.

### Returns

`NonSharedBuffer`

The stdout from the command.

### Since

v0.11.12

## Call Signature

> **execFileSync**(`file`, `options`): `string`

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

#### file

`string`

The name or path of the executable file to run.

#### options

[`ExecFileSyncOptionsWithStringEncoding`](../interfaces/ExecFileSyncOptionsWithStringEncoding.md)

### Returns

`string`

The stdout from the command.

### Since

v0.11.12

## Call Signature

> **execFileSync**(`file`, `options`): `NonSharedBuffer`

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

#### file

`string`

The name or path of the executable file to run.

#### options

[`ExecFileSyncOptionsWithBufferEncoding`](../interfaces/ExecFileSyncOptionsWithBufferEncoding.md)

### Returns

`NonSharedBuffer`

The stdout from the command.

### Since

v0.11.12

## Call Signature

> **execFileSync**(`file`, `options?`): `string` \| `NonSharedBuffer`

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

#### file

`string`

The name or path of the executable file to run.

#### options?

[`ExecFileSyncOptions`](../interfaces/ExecFileSyncOptions.md)

### Returns

`string` \| `NonSharedBuffer`

The stdout from the command.

### Since

v0.11.12

## Call Signature

> **execFileSync**(`file`, `args`): `NonSharedBuffer`

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

#### file

`string`

The name or path of the executable file to run.

#### args

readonly `string`[]

List of string arguments.

### Returns

`NonSharedBuffer`

The stdout from the command.

### Since

v0.11.12

## Call Signature

> **execFileSync**(`file`, `args`, `options`): `string`

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

#### file

`string`

The name or path of the executable file to run.

#### args

readonly `string`[]

List of string arguments.

#### options

[`ExecFileSyncOptionsWithStringEncoding`](../interfaces/ExecFileSyncOptionsWithStringEncoding.md)

### Returns

`string`

The stdout from the command.

### Since

v0.11.12

## Call Signature

> **execFileSync**(`file`, `args`, `options`): `NonSharedBuffer`

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

#### file

`string`

The name or path of the executable file to run.

#### args

readonly `string`[]

List of string arguments.

#### options

[`ExecFileSyncOptionsWithBufferEncoding`](../interfaces/ExecFileSyncOptionsWithBufferEncoding.md)

### Returns

`NonSharedBuffer`

The stdout from the command.

### Since

v0.11.12

## Call Signature

> **execFileSync**(`file`, `args?`, `options?`): `string` \| `NonSharedBuffer`

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

#### file

`string`

The name or path of the executable file to run.

#### args?

readonly `string`[]

List of string arguments.

#### options?

[`ExecFileSyncOptions`](../interfaces/ExecFileSyncOptions.md)

### Returns

`string` \| `NonSharedBuffer`

The stdout from the command.

### Since

v0.11.12
