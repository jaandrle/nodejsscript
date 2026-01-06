[**nodejsscript**](../../README.md)

***

[nodejsscript](../../README.md) / [s](../../nodejsscript/namespaces/s/README.md) / [child\_process](../README.md) / spawnSync

# Function: spawnSync()

## Call Signature

> **spawnSync**(`command`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`NonSharedBuffer`\>

The `child_process.spawnSync()` method is generally identical to [spawn](spawn.md) with the exception that the function will not return
until the child process has fully closed. When a timeout has been encountered
and `killSignal` is sent, the method won't return until the process has
completely exited. If the process intercepts and handles the `SIGTERM` signal
and doesn't exit, the parent process will wait until the child process has
exited.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

### Parameters

#### command

`string`

The command to run.

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`NonSharedBuffer`\>

### Since

v0.11.12

## Call Signature

> **spawnSync**(`command`, `options`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string`\>

The `child_process.spawnSync()` method is generally identical to [spawn](spawn.md) with the exception that the function will not return
until the child process has fully closed. When a timeout has been encountered
and `killSignal` is sent, the method won't return until the process has
completely exited. If the process intercepts and handles the `SIGTERM` signal
and doesn't exit, the parent process will wait until the child process has
exited.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

### Parameters

#### command

`string`

The command to run.

#### options

[`SpawnSyncOptionsWithStringEncoding`](../interfaces/SpawnSyncOptionsWithStringEncoding.md)

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string`\>

### Since

v0.11.12

## Call Signature

> **spawnSync**(`command`, `options`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`NonSharedBuffer`\>

The `child_process.spawnSync()` method is generally identical to [spawn](spawn.md) with the exception that the function will not return
until the child process has fully closed. When a timeout has been encountered
and `killSignal` is sent, the method won't return until the process has
completely exited. If the process intercepts and handles the `SIGTERM` signal
and doesn't exit, the parent process will wait until the child process has
exited.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

### Parameters

#### command

`string`

The command to run.

#### options

[`SpawnSyncOptionsWithBufferEncoding`](../interfaces/SpawnSyncOptionsWithBufferEncoding.md)

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`NonSharedBuffer`\>

### Since

v0.11.12

## Call Signature

> **spawnSync**(`command`, `options?`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string` \| `NonSharedBuffer`\>

The `child_process.spawnSync()` method is generally identical to [spawn](spawn.md) with the exception that the function will not return
until the child process has fully closed. When a timeout has been encountered
and `killSignal` is sent, the method won't return until the process has
completely exited. If the process intercepts and handles the `SIGTERM` signal
and doesn't exit, the parent process will wait until the child process has
exited.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

### Parameters

#### command

`string`

The command to run.

#### options?

[`SpawnSyncOptions`](../interfaces/SpawnSyncOptions.md)

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string` \| `NonSharedBuffer`\>

### Since

v0.11.12

## Call Signature

> **spawnSync**(`command`, `args`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`NonSharedBuffer`\>

The `child_process.spawnSync()` method is generally identical to [spawn](spawn.md) with the exception that the function will not return
until the child process has fully closed. When a timeout has been encountered
and `killSignal` is sent, the method won't return until the process has
completely exited. If the process intercepts and handles the `SIGTERM` signal
and doesn't exit, the parent process will wait until the child process has
exited.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

### Parameters

#### command

`string`

The command to run.

#### args

readonly `string`[]

List of string arguments.

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`NonSharedBuffer`\>

### Since

v0.11.12

## Call Signature

> **spawnSync**(`command`, `args`, `options`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string`\>

The `child_process.spawnSync()` method is generally identical to [spawn](spawn.md) with the exception that the function will not return
until the child process has fully closed. When a timeout has been encountered
and `killSignal` is sent, the method won't return until the process has
completely exited. If the process intercepts and handles the `SIGTERM` signal
and doesn't exit, the parent process will wait until the child process has
exited.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

### Parameters

#### command

`string`

The command to run.

#### args

readonly `string`[]

List of string arguments.

#### options

[`SpawnSyncOptionsWithStringEncoding`](../interfaces/SpawnSyncOptionsWithStringEncoding.md)

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string`\>

### Since

v0.11.12

## Call Signature

> **spawnSync**(`command`, `args`, `options`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`NonSharedBuffer`\>

The `child_process.spawnSync()` method is generally identical to [spawn](spawn.md) with the exception that the function will not return
until the child process has fully closed. When a timeout has been encountered
and `killSignal` is sent, the method won't return until the process has
completely exited. If the process intercepts and handles the `SIGTERM` signal
and doesn't exit, the parent process will wait until the child process has
exited.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

### Parameters

#### command

`string`

The command to run.

#### args

readonly `string`[]

List of string arguments.

#### options

[`SpawnSyncOptionsWithBufferEncoding`](../interfaces/SpawnSyncOptionsWithBufferEncoding.md)

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`NonSharedBuffer`\>

### Since

v0.11.12

## Call Signature

> **spawnSync**(`command`, `args?`, `options?`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string` \| `NonSharedBuffer`\>

The `child_process.spawnSync()` method is generally identical to [spawn](spawn.md) with the exception that the function will not return
until the child process has fully closed. When a timeout has been encountered
and `killSignal` is sent, the method won't return until the process has
completely exited. If the process intercepts and handles the `SIGTERM` signal
and doesn't exit, the parent process will wait until the child process has
exited.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

### Parameters

#### command

`string`

The command to run.

#### args?

readonly `string`[]

List of string arguments.

#### options?

[`SpawnSyncOptions`](../interfaces/SpawnSyncOptions.md)

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string` \| `NonSharedBuffer`\>

### Since

v0.11.12
