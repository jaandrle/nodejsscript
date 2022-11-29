[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / CommonSpawnOptions

# Interface: CommonSpawnOptions

[s](../modules/s.md).[child](../modules/s.child.md).CommonSpawnOptions

## Hierarchy

- [`CommonOptions`](s.child.CommonOptions.md)

- [`MessagingOptions`](s.child.MessagingOptions.md)

- `Abortable`

  ↳ **`CommonSpawnOptions`**

  ↳↳ [`SpawnOptions`](s.child.SpawnOptions.md)

  ↳↳ [`SpawnSyncOptions`](s.child.SpawnSyncOptions.md)

## Table of contents

### Properties

- [argv0](s.child.CommonSpawnOptions.md#argv0)
- [stdio](s.child.CommonSpawnOptions.md#stdio)
- [shell](s.child.CommonSpawnOptions.md#shell)
- [windowsVerbatimArguments](s.child.CommonSpawnOptions.md#windowsverbatimarguments)
- [windowsHide](s.child.CommonSpawnOptions.md#windowshide)
- [timeout](s.child.CommonSpawnOptions.md#timeout)
- [uid](s.child.CommonSpawnOptions.md#uid)
- [gid](s.child.CommonSpawnOptions.md#gid)
- [cwd](s.child.CommonSpawnOptions.md#cwd)
- [env](s.child.CommonSpawnOptions.md#env)
- [serialization](s.child.CommonSpawnOptions.md#serialization)
- [killSignal](s.child.CommonSpawnOptions.md#killsignal)
- [signal](s.child.CommonSpawnOptions.md#signal)

## Properties

### argv0

• `Optional` **argv0**: `string`

___

### stdio

• `Optional` **stdio**: [`StdioOptions`](../modules/s.child.md#stdiooptions)

___

### shell

• `Optional` **shell**: `string` \| `boolean`

___

### windowsVerbatimArguments

• `Optional` **windowsVerbatimArguments**: `boolean`

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

true

#### Inherited from

[CommonOptions](s.child.CommonOptions.md).[windowsHide](s.child.CommonOptions.md#windowshide)

___

### timeout

• `Optional` **timeout**: `number`

**`Default`**

0

#### Inherited from

[MessagingOptions](s.child.MessagingOptions.md).[timeout](s.child.MessagingOptions.md#timeout)

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

[CommonOptions](s.child.CommonOptions.md).[uid](s.child.CommonOptions.md#uid)

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

[CommonOptions](s.child.CommonOptions.md).[gid](s.child.CommonOptions.md#gid)

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

[CommonOptions](s.child.CommonOptions.md).[cwd](s.child.CommonOptions.md#cwd)

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

[CommonOptions](s.child.CommonOptions.md).[env](s.child.CommonOptions.md#env)

___

### serialization

• `Optional` **serialization**: [`SerializationType`](../modules/s.child.md#serializationtype)

Specify the kind of serialization used for sending messages between processes.

**`Default`**

'json'

#### Inherited from

[MessagingOptions](s.child.MessagingOptions.md).[serialization](s.child.MessagingOptions.md#serialization)

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

**`Default`**

'SIGTERM'

#### Inherited from

[MessagingOptions](s.child.MessagingOptions.md).[killSignal](s.child.MessagingOptions.md#killsignal)

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[MessagingOptions](s.child.MessagingOptions.md).[signal](s.child.MessagingOptions.md#signal)
