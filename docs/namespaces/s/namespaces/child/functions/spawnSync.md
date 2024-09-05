[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / spawnSync

# Function: spawnSync()

## spawnSync(command)

> **spawnSync**(`command`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`Buffer`\>

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

• **command**: `string`

The command to run.

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`Buffer`\>

### Since

v0.11.12

## spawnSync(command, options)

> **spawnSync**(`command`, `options`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string`\>

### Parameters

• **command**: `string`

• **options**: [`SpawnSyncOptionsWithStringEncoding`](../interfaces/SpawnSyncOptionsWithStringEncoding.md)

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string`\>

## spawnSync(command, options)

> **spawnSync**(`command`, `options`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`Buffer`\>

### Parameters

• **command**: `string`

• **options**: [`SpawnSyncOptionsWithBufferEncoding`](../interfaces/SpawnSyncOptionsWithBufferEncoding.md)

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`Buffer`\>

## spawnSync(command, options)

> **spawnSync**(`command`, `options`?): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string` \| `Buffer`\>

### Parameters

• **command**: `string`

• **options?**: [`SpawnSyncOptions`](../interfaces/SpawnSyncOptions.md)

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string` \| `Buffer`\>

## spawnSync(command, args)

> **spawnSync**(`command`, `args`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`Buffer`\>

### Parameters

• **command**: `string`

• **args**: readonly `string`[]

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`Buffer`\>

## spawnSync(command, args, options)

> **spawnSync**(`command`, `args`, `options`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string`\>

### Parameters

• **command**: `string`

• **args**: readonly `string`[]

• **options**: [`SpawnSyncOptionsWithStringEncoding`](../interfaces/SpawnSyncOptionsWithStringEncoding.md)

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string`\>

## spawnSync(command, args, options)

> **spawnSync**(`command`, `args`, `options`): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`Buffer`\>

### Parameters

• **command**: `string`

• **args**: readonly `string`[]

• **options**: [`SpawnSyncOptionsWithBufferEncoding`](../interfaces/SpawnSyncOptionsWithBufferEncoding.md)

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`Buffer`\>

## spawnSync(command, args, options)

> **spawnSync**(`command`, `args`?, `options`?): [`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string` \| `Buffer`\>

### Parameters

• **command**: `string`

• **args?**: readonly `string`[]

• **options?**: [`SpawnSyncOptions`](../interfaces/SpawnSyncOptions.md)

### Returns

[`SpawnSyncReturns`](../interfaces/SpawnSyncReturns.md)\<`string` \| `Buffer`\>
