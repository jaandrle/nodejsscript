[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / SpawnOptionsWithStdioTuple

# Interface: SpawnOptionsWithStdioTuple<Stdin, Stdout, Stderr\>

[s](../modules/s.md).[child](../modules/s.child.md).SpawnOptionsWithStdioTuple

## Type parameters

| Name | Type |
| :------ | :------ |
| `Stdin` | extends [`StdioNull`](../modules/s.child.md#stdionull) \| [`StdioPipe`](../modules/s.child.md#stdiopipe) |
| `Stdout` | extends [`StdioNull`](../modules/s.child.md#stdionull) \| [`StdioPipe`](../modules/s.child.md#stdiopipe) |
| `Stderr` | extends [`StdioNull`](../modules/s.child.md#stdionull) \| [`StdioPipe`](../modules/s.child.md#stdiopipe) |

## Hierarchy

- [`SpawnOptions`](s.child.SpawnOptions.md)

  ↳ **`SpawnOptionsWithStdioTuple`**

## Table of contents

### Properties

- [stdio](s.child.SpawnOptionsWithStdioTuple.md#stdio)
- [detached](s.child.SpawnOptionsWithStdioTuple.md#detached)
- [argv0](s.child.SpawnOptionsWithStdioTuple.md#argv0)
- [shell](s.child.SpawnOptionsWithStdioTuple.md#shell)
- [windowsVerbatimArguments](s.child.SpawnOptionsWithStdioTuple.md#windowsverbatimarguments)
- [windowsHide](s.child.SpawnOptionsWithStdioTuple.md#windowshide)
- [timeout](s.child.SpawnOptionsWithStdioTuple.md#timeout)
- [uid](s.child.SpawnOptionsWithStdioTuple.md#uid)
- [gid](s.child.SpawnOptionsWithStdioTuple.md#gid)
- [cwd](s.child.SpawnOptionsWithStdioTuple.md#cwd)
- [env](s.child.SpawnOptionsWithStdioTuple.md#env)
- [serialization](s.child.SpawnOptionsWithStdioTuple.md#serialization)
- [killSignal](s.child.SpawnOptionsWithStdioTuple.md#killsignal)
- [signal](s.child.SpawnOptionsWithStdioTuple.md#signal)

## Properties

### stdio

• **stdio**: [`Stdin`, `Stdout`, `Stderr`]

Can be set to 'pipe', 'inherit', 'overlapped', or 'ignore', or an array of these strings.
If passed as an array, the first element is used for `stdin`, the second for
`stdout`, and the third for `stderr`. A fourth element can be used to
specify the `stdio` behavior beyond the standard streams. See
[stdio](../classes/s.child.ChildProcess.md#stdio) for more information.

**`Default`**

'pipe'

#### Overrides

[SpawnOptions](s.child.SpawnOptions.md).[stdio](s.child.SpawnOptions.md#stdio)

___

### detached

• `Optional` **detached**: `boolean`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[detached](s.child.SpawnOptions.md#detached)

___

### argv0

• `Optional` **argv0**: `string`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[argv0](s.child.SpawnOptions.md#argv0)

___

### shell

• `Optional` **shell**: `string` \| `boolean`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[shell](s.child.SpawnOptions.md#shell)

___

### windowsVerbatimArguments

• `Optional` **windowsVerbatimArguments**: `boolean`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[windowsVerbatimArguments](s.child.SpawnOptions.md#windowsverbatimarguments)

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

false

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[windowsHide](s.child.SpawnOptions.md#windowshide)

___

### timeout

• `Optional` **timeout**: `number`

**`Default`**

0

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[timeout](s.child.SpawnOptions.md#timeout)

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[uid](s.child.SpawnOptions.md#uid)

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[gid](s.child.SpawnOptions.md#gid)

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[cwd](s.child.SpawnOptions.md#cwd)

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[env](s.child.SpawnOptions.md#env)

___

### serialization

• `Optional` **serialization**: [`SerializationType`](../modules/s.child.md#serializationtype)

Specify the kind of serialization used for sending messages between processes.

**`Default`**

'json'

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[serialization](s.child.SpawnOptions.md#serialization)

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

**`Default`**

'SIGTERM'

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[killSignal](s.child.SpawnOptions.md#killsignal)

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[SpawnOptions](s.child.SpawnOptions.md).[signal](s.child.SpawnOptions.md#signal)
