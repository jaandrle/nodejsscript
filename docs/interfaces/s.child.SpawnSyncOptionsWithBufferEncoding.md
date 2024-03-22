[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / SpawnSyncOptionsWithBufferEncoding

# Interface: SpawnSyncOptionsWithBufferEncoding

[s](../modules/s.md).[child](../modules/s.child.md).SpawnSyncOptionsWithBufferEncoding

## Hierarchy

- [`SpawnSyncOptions`](s.child.SpawnSyncOptions.md)

  ↳ **`SpawnSyncOptionsWithBufferEncoding`**

## Table of contents

### Properties

- [encoding](s.child.SpawnSyncOptionsWithBufferEncoding.md#encoding)
- [input](s.child.SpawnSyncOptionsWithBufferEncoding.md#input)
- [maxBuffer](s.child.SpawnSyncOptionsWithBufferEncoding.md#maxbuffer)
- [argv0](s.child.SpawnSyncOptionsWithBufferEncoding.md#argv0)
- [stdio](s.child.SpawnSyncOptionsWithBufferEncoding.md#stdio)
- [shell](s.child.SpawnSyncOptionsWithBufferEncoding.md#shell)
- [windowsVerbatimArguments](s.child.SpawnSyncOptionsWithBufferEncoding.md#windowsverbatimarguments)
- [windowsHide](s.child.SpawnSyncOptionsWithBufferEncoding.md#windowshide)
- [timeout](s.child.SpawnSyncOptionsWithBufferEncoding.md#timeout)
- [uid](s.child.SpawnSyncOptionsWithBufferEncoding.md#uid)
- [gid](s.child.SpawnSyncOptionsWithBufferEncoding.md#gid)
- [cwd](s.child.SpawnSyncOptionsWithBufferEncoding.md#cwd)
- [env](s.child.SpawnSyncOptionsWithBufferEncoding.md#env)
- [serialization](s.child.SpawnSyncOptionsWithBufferEncoding.md#serialization)
- [killSignal](s.child.SpawnSyncOptionsWithBufferEncoding.md#killsignal)
- [signal](s.child.SpawnSyncOptionsWithBufferEncoding.md#signal)

## Properties

### encoding

• `Optional` **encoding**: ``"buffer"``

#### Overrides

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[encoding](s.child.SpawnSyncOptions.md#encoding)

___

### input

• `Optional` **input**: `string` \| `ArrayBufferView`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[input](s.child.SpawnSyncOptions.md#input)

___

### maxBuffer

• `Optional` **maxBuffer**: `number`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[maxBuffer](s.child.SpawnSyncOptions.md#maxbuffer)

___

### argv0

• `Optional` **argv0**: `string`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[argv0](s.child.SpawnSyncOptions.md#argv0)

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

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[stdio](s.child.SpawnSyncOptions.md#stdio)

___

### shell

• `Optional` **shell**: `string` \| `boolean`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[shell](s.child.SpawnSyncOptions.md#shell)

___

### windowsVerbatimArguments

• `Optional` **windowsVerbatimArguments**: `boolean`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[windowsVerbatimArguments](s.child.SpawnSyncOptions.md#windowsverbatimarguments)

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

false

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[windowsHide](s.child.SpawnSyncOptions.md#windowshide)

___

### timeout

• `Optional` **timeout**: `number`

**`Default`**

0

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[timeout](s.child.SpawnSyncOptions.md#timeout)

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[uid](s.child.SpawnSyncOptions.md#uid)

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[gid](s.child.SpawnSyncOptions.md#gid)

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[cwd](s.child.SpawnSyncOptions.md#cwd)

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[env](s.child.SpawnSyncOptions.md#env)

___

### serialization

• `Optional` **serialization**: [`SerializationType`](../modules/s.child.md#serializationtype)

Specify the kind of serialization used for sending messages between processes.

**`Default`**

'json'

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[serialization](s.child.SpawnSyncOptions.md#serialization)

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

**`Default`**

'SIGTERM'

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[killSignal](s.child.SpawnSyncOptions.md#killsignal)

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[signal](s.child.SpawnSyncOptions.md#signal)
