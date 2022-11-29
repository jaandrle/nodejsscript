[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / ForkOptions

# Interface: ForkOptions

[s](../modules/s.md).[child](../modules/s.child.md).ForkOptions

## Hierarchy

- [`ProcessEnvOptions`](s.child.ProcessEnvOptions.md)

- [`MessagingOptions`](s.child.MessagingOptions.md)

- `Abortable`

  ↳ **`ForkOptions`**

## Table of contents

### Properties

- [execPath](s.child.ForkOptions.md#execpath)
- [execArgv](s.child.ForkOptions.md#execargv)
- [silent](s.child.ForkOptions.md#silent)
- [stdio](s.child.ForkOptions.md#stdio)
- [detached](s.child.ForkOptions.md#detached)
- [windowsVerbatimArguments](s.child.ForkOptions.md#windowsverbatimarguments)
- [uid](s.child.ForkOptions.md#uid)
- [gid](s.child.ForkOptions.md#gid)
- [cwd](s.child.ForkOptions.md#cwd)
- [env](s.child.ForkOptions.md#env)
- [serialization](s.child.ForkOptions.md#serialization)
- [killSignal](s.child.ForkOptions.md#killsignal)
- [timeout](s.child.ForkOptions.md#timeout)
- [signal](s.child.ForkOptions.md#signal)

## Properties

### execPath

• `Optional` **execPath**: `string`

___

### execArgv

• `Optional` **execArgv**: `string`[]

___

### silent

• `Optional` **silent**: `boolean`

___

### stdio

• `Optional` **stdio**: [`StdioOptions`](../modules/s.child.md#stdiooptions)

___

### detached

• `Optional` **detached**: `boolean`

___

### windowsVerbatimArguments

• `Optional` **windowsVerbatimArguments**: `boolean`

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

[ProcessEnvOptions](s.child.ProcessEnvOptions.md).[uid](s.child.ProcessEnvOptions.md#uid)

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

[ProcessEnvOptions](s.child.ProcessEnvOptions.md).[gid](s.child.ProcessEnvOptions.md#gid)

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

[ProcessEnvOptions](s.child.ProcessEnvOptions.md).[cwd](s.child.ProcessEnvOptions.md#cwd)

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

[ProcessEnvOptions](s.child.ProcessEnvOptions.md).[env](s.child.ProcessEnvOptions.md#env)

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

### timeout

• `Optional` **timeout**: `number`

In milliseconds the maximum amount of time the process is allowed to run.

#### Inherited from

[MessagingOptions](s.child.MessagingOptions.md).[timeout](s.child.MessagingOptions.md#timeout)

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[MessagingOptions](s.child.MessagingOptions.md).[signal](s.child.MessagingOptions.md#signal)
