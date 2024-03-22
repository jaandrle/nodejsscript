[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / SpawnSyncOptions

# Interface: SpawnSyncOptions

[s](../modules/s.md).[child](../modules/s.child.md).SpawnSyncOptions

## Hierarchy

- [`CommonSpawnOptions`](s.child.CommonSpawnOptions.md)

  ↳ **`SpawnSyncOptions`**

  ↳↳ [`SpawnSyncOptionsWithStringEncoding`](s.child.SpawnSyncOptionsWithStringEncoding.md)

  ↳↳ [`SpawnSyncOptionsWithBufferEncoding`](s.child.SpawnSyncOptionsWithBufferEncoding.md)

## Table of contents

### Properties

- [input](s.child.SpawnSyncOptions.md#input)
- [maxBuffer](s.child.SpawnSyncOptions.md#maxbuffer)
- [encoding](s.child.SpawnSyncOptions.md#encoding)
- [argv0](s.child.SpawnSyncOptions.md#argv0)
- [stdio](s.child.SpawnSyncOptions.md#stdio)
- [shell](s.child.SpawnSyncOptions.md#shell)
- [windowsVerbatimArguments](s.child.SpawnSyncOptions.md#windowsverbatimarguments)
- [windowsHide](s.child.SpawnSyncOptions.md#windowshide)
- [timeout](s.child.SpawnSyncOptions.md#timeout)
- [uid](s.child.SpawnSyncOptions.md#uid)
- [gid](s.child.SpawnSyncOptions.md#gid)
- [cwd](s.child.SpawnSyncOptions.md#cwd)
- [env](s.child.SpawnSyncOptions.md#env)
- [serialization](s.child.SpawnSyncOptions.md#serialization)
- [killSignal](s.child.SpawnSyncOptions.md#killsignal)
- [signal](s.child.SpawnSyncOptions.md#signal)

## Properties

### input

• `Optional` **input**: `string` \| `ArrayBufferView`

___

### maxBuffer

• `Optional` **maxBuffer**: `number`

___

### encoding

• `Optional` **encoding**: ``"buffer"`` \| `BufferEncoding`

___

### argv0

• `Optional` **argv0**: `string`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[argv0](s.child.CommonSpawnOptions.md#argv0)

___

### stdio

• `Optional` **stdio**: [`StdioOptions`](../modules/s.child.md#stdiooptions)

Can be set to 'pipe', 'inherit', 'overlapped', or 'ignore', or an array of these strings.
If passed as an array, the first element is used for `stdin`, the second for
`stdout`, and the third for `stderr`. A fourth element can be used to
specify the `stdio` behavior beyond the standard streams. See
[stdio](../classes/s.child.ChildProcess.md#stdio) for more information.

**`Default`**

'pipe'

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[stdio](s.child.CommonSpawnOptions.md#stdio)

___

### shell

• `Optional` **shell**: `string` \| `boolean`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[shell](s.child.CommonSpawnOptions.md#shell)

___

### windowsVerbatimArguments

• `Optional` **windowsVerbatimArguments**: `boolean`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[windowsVerbatimArguments](s.child.CommonSpawnOptions.md#windowsverbatimarguments)

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

false

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[windowsHide](s.child.CommonSpawnOptions.md#windowshide)

___

### timeout

• `Optional` **timeout**: `number`

**`Default`**

0

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[timeout](s.child.CommonSpawnOptions.md#timeout)

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[uid](s.child.CommonSpawnOptions.md#uid)

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[gid](s.child.CommonSpawnOptions.md#gid)

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[cwd](s.child.CommonSpawnOptions.md#cwd)

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[env](s.child.CommonSpawnOptions.md#env)

___

### serialization

• `Optional` **serialization**: [`SerializationType`](../modules/s.child.md#serializationtype)

Specify the kind of serialization used for sending messages between processes.

**`Default`**

'json'

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[serialization](s.child.CommonSpawnOptions.md#serialization)

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

**`Default`**

'SIGTERM'

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[killSignal](s.child.CommonSpawnOptions.md#killsignal)

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[signal](s.child.CommonSpawnOptions.md#signal)
