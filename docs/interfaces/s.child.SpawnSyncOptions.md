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

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:1251

___

### maxBuffer

• `Optional` **maxBuffer**: `number`

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:1252

___

### encoding

• `Optional` **encoding**: ``"buffer"`` \| `BufferEncoding`

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:1253

___

### argv0

• `Optional` **argv0**: `string`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[argv0](s.child.CommonSpawnOptions.md#argv0)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:636

___

### stdio

• `Optional` **stdio**: [`StdioOptions`](../modules/s.child.md#stdiooptions)

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[stdio](s.child.CommonSpawnOptions.md#stdio)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:637

___

### shell

• `Optional` **shell**: `string` \| `boolean`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[shell](s.child.CommonSpawnOptions.md#shell)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:638

___

### windowsVerbatimArguments

• `Optional` **windowsVerbatimArguments**: `boolean`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[windowsVerbatimArguments](s.child.CommonSpawnOptions.md#windowsverbatimarguments)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:639

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

true

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[windowsHide](s.child.CommonSpawnOptions.md#windowshide)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:629

___

### timeout

• `Optional` **timeout**: `number`

**`Default`**

0

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[timeout](s.child.CommonSpawnOptions.md#timeout)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:633

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[uid](s.child.CommonSpawnOptions.md#uid)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:620

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[gid](s.child.CommonSpawnOptions.md#gid)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:621

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[cwd](s.child.CommonSpawnOptions.md#cwd)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:622

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[env](s.child.CommonSpawnOptions.md#env)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:623

___

### serialization

• `Optional` **serialization**: [`SerializationType`](../modules/s.child.md#serializationtype)

Specify the kind of serialization used for sending messages between processes.

**`Default`**

'json'

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[serialization](s.child.CommonSpawnOptions.md#serialization)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:608

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

**`Default`**

'SIGTERM'

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[killSignal](s.child.CommonSpawnOptions.md#killsignal)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:613

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[CommonSpawnOptions](s.child.CommonSpawnOptions.md).[signal](s.child.CommonSpawnOptions.md#signal)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:307
