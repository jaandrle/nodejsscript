[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / SpawnOptionsWithoutStdio

# Interface: SpawnOptionsWithoutStdio

[s](../modules/s.md).[child](../modules/s.child.md).SpawnOptionsWithoutStdio

## Hierarchy

- [`SpawnOptions`](s.child.SpawnOptions.md)

  ↳ **`SpawnOptionsWithoutStdio`**

## Table of contents

### Properties

- [stdio](s.child.SpawnOptionsWithoutStdio.md#stdio)
- [detached](s.child.SpawnOptionsWithoutStdio.md#detached)
- [argv0](s.child.SpawnOptionsWithoutStdio.md#argv0)
- [shell](s.child.SpawnOptionsWithoutStdio.md#shell)
- [windowsVerbatimArguments](s.child.SpawnOptionsWithoutStdio.md#windowsverbatimarguments)
- [windowsHide](s.child.SpawnOptionsWithoutStdio.md#windowshide)
- [timeout](s.child.SpawnOptionsWithoutStdio.md#timeout)
- [uid](s.child.SpawnOptionsWithoutStdio.md#uid)
- [gid](s.child.SpawnOptionsWithoutStdio.md#gid)
- [cwd](s.child.SpawnOptionsWithoutStdio.md#cwd)
- [env](s.child.SpawnOptionsWithoutStdio.md#env)
- [serialization](s.child.SpawnOptionsWithoutStdio.md#serialization)
- [killSignal](s.child.SpawnOptionsWithoutStdio.md#killsignal)
- [signal](s.child.SpawnOptionsWithoutStdio.md#signal)

## Properties

### stdio

• `Optional` **stdio**: [`StdioPipeNamed`](../modules/s.child.md#stdiopipenamed) \| [`StdioPipe`](../modules/s.child.md#stdiopipe)[]

#### Overrides

[SpawnOptions](s.child.SpawnOptions.md).[stdio](s.child.SpawnOptions.md#stdio)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:645

___

### detached

• `Optional` **detached**: `boolean`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[detached](s.child.SpawnOptions.md#detached)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:642

___

### argv0

• `Optional` **argv0**: `string`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[argv0](s.child.SpawnOptions.md#argv0)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:636

___

### shell

• `Optional` **shell**: `string` \| `boolean`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[shell](s.child.SpawnOptions.md#shell)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:638

___

### windowsVerbatimArguments

• `Optional` **windowsVerbatimArguments**: `boolean`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[windowsVerbatimArguments](s.child.SpawnOptions.md#windowsverbatimarguments)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:639

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

true

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[windowsHide](s.child.SpawnOptions.md#windowshide)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:629

___

### timeout

• `Optional` **timeout**: `number`

**`Default`**

0

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[timeout](s.child.SpawnOptions.md#timeout)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:633

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[uid](s.child.SpawnOptions.md#uid)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:620

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[gid](s.child.SpawnOptions.md#gid)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:621

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[cwd](s.child.SpawnOptions.md#cwd)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:622

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[env](s.child.SpawnOptions.md#env)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:623

___

### serialization

• `Optional` **serialization**: [`SerializationType`](../modules/s.child.md#serializationtype)

Specify the kind of serialization used for sending messages between processes.

**`Default`**

'json'

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[serialization](s.child.SpawnOptions.md#serialization)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:608

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

**`Default`**

'SIGTERM'

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[killSignal](s.child.SpawnOptions.md#killsignal)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:613

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[signal](s.child.SpawnOptions.md#signal)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:307
