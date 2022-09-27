[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / SpawnSyncOptionsWithStringEncoding

# Interface: SpawnSyncOptionsWithStringEncoding

[s](../modules/s.md).[child](../modules/s.child.md).SpawnSyncOptionsWithStringEncoding

## Hierarchy

- [`SpawnSyncOptions`](s.child.SpawnSyncOptions.md)

  ↳ **`SpawnSyncOptionsWithStringEncoding`**

## Table of contents

### Properties

- [encoding](s.child.SpawnSyncOptionsWithStringEncoding.md#encoding)
- [input](s.child.SpawnSyncOptionsWithStringEncoding.md#input)
- [maxBuffer](s.child.SpawnSyncOptionsWithStringEncoding.md#maxbuffer)
- [argv0](s.child.SpawnSyncOptionsWithStringEncoding.md#argv0)
- [stdio](s.child.SpawnSyncOptionsWithStringEncoding.md#stdio)
- [shell](s.child.SpawnSyncOptionsWithStringEncoding.md#shell)
- [windowsVerbatimArguments](s.child.SpawnSyncOptionsWithStringEncoding.md#windowsverbatimarguments)
- [windowsHide](s.child.SpawnSyncOptionsWithStringEncoding.md#windowshide)
- [timeout](s.child.SpawnSyncOptionsWithStringEncoding.md#timeout)
- [uid](s.child.SpawnSyncOptionsWithStringEncoding.md#uid)
- [gid](s.child.SpawnSyncOptionsWithStringEncoding.md#gid)
- [cwd](s.child.SpawnSyncOptionsWithStringEncoding.md#cwd)
- [env](s.child.SpawnSyncOptionsWithStringEncoding.md#env)
- [serialization](s.child.SpawnSyncOptionsWithStringEncoding.md#serialization)
- [killSignal](s.child.SpawnSyncOptionsWithStringEncoding.md#killsignal)
- [signal](s.child.SpawnSyncOptionsWithStringEncoding.md#signal)

## Properties

### encoding

• **encoding**: `BufferEncoding`

#### Overrides

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[encoding](s.child.SpawnSyncOptions.md#encoding)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:1256

___

### input

• `Optional` **input**: `string` \| `ArrayBufferView`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[input](s.child.SpawnSyncOptions.md#input)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:1251

___

### maxBuffer

• `Optional` **maxBuffer**: `number`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[maxBuffer](s.child.SpawnSyncOptions.md#maxbuffer)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:1252

___

### argv0

• `Optional` **argv0**: `string`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[argv0](s.child.SpawnSyncOptions.md#argv0)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:636

___

### stdio

• `Optional` **stdio**: [`StdioOptions`](../modules/s.child.md#stdiooptions)

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[stdio](s.child.SpawnSyncOptions.md#stdio)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:637

___

### shell

• `Optional` **shell**: `string` \| `boolean`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[shell](s.child.SpawnSyncOptions.md#shell)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:638

___

### windowsVerbatimArguments

• `Optional` **windowsVerbatimArguments**: `boolean`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[windowsVerbatimArguments](s.child.SpawnSyncOptions.md#windowsverbatimarguments)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:639

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

true

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[windowsHide](s.child.SpawnSyncOptions.md#windowshide)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:629

___

### timeout

• `Optional` **timeout**: `number`

**`Default`**

0

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[timeout](s.child.SpawnSyncOptions.md#timeout)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:633

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[uid](s.child.SpawnSyncOptions.md#uid)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:620

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[gid](s.child.SpawnSyncOptions.md#gid)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:621

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[cwd](s.child.SpawnSyncOptions.md#cwd)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:622

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[env](s.child.SpawnSyncOptions.md#env)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:623

___

### serialization

• `Optional` **serialization**: [`SerializationType`](../modules/s.child.md#serializationtype)

Specify the kind of serialization used for sending messages between processes.

**`Default`**

'json'

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[serialization](s.child.SpawnSyncOptions.md#serialization)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:608

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

**`Default`**

'SIGTERM'

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[killSignal](s.child.SpawnSyncOptions.md#killsignal)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:613

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[SpawnSyncOptions](s.child.SpawnSyncOptions.md).[signal](s.child.SpawnSyncOptions.md#signal)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:307
