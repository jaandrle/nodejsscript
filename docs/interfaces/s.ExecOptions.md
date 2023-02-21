[nodejsscript](../README.md) / [s](../modules/s.md) / ExecOptions

# Interface: ExecOptions

[s](../modules/s.md).ExecOptions

## Hierarchy

- [`ExecOptions`](s.child.ExecOptions.md)

  ↳ **`ExecOptions`**

## Table of contents

### Properties

- [silent](s.ExecOptions.md#silent)
- [fatal](s.ExecOptions.md#fatal)
- [async](s.ExecOptions.md#async)
- [encoding](s.ExecOptions.md#encoding)
- [shell](s.ExecOptions.md#shell)
- [signal](s.ExecOptions.md#signal)
- [maxBuffer](s.ExecOptions.md#maxbuffer)
- [killSignal](s.ExecOptions.md#killsignal)
- [windowsHide](s.ExecOptions.md#windowshide)
- [timeout](s.ExecOptions.md#timeout)
- [uid](s.ExecOptions.md#uid)
- [gid](s.ExecOptions.md#gid)
- [cwd](s.ExecOptions.md#cwd)
- [env](s.ExecOptions.md#env)

## Properties

### silent

• `Optional` **silent**: `boolean`

Do not echo program output to the console.

**`Default`**

false

___

### fatal

• `Optional` **fatal**: `boolean`

Exit when command return code is non-zero.

**`Default`**

false

___

### async

• `Optional` **async**: `boolean`

Asynchronous execution.

If a callback is provided, it will be set to `true`, regardless of the passed value.

**`Default`**

false

___

### encoding

• `Optional` **encoding**: `string`

Character encoding to use.

Affects the values returned by `stdout` and `stderr`,
and what is written to `stdout` and `stderr` when not in silent mode

**`Default`**

"utf8"

___

### shell

• `Optional` **shell**: `string`

#### Inherited from

[ExecOptions](s.child.ExecOptions.md).[shell](s.child.ExecOptions.md#shell)

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

[ExecOptions](s.child.ExecOptions.md).[signal](s.child.ExecOptions.md#signal)

___

### maxBuffer

• `Optional` **maxBuffer**: `number`

#### Inherited from

[ExecOptions](s.child.ExecOptions.md).[maxBuffer](s.child.ExecOptions.md#maxbuffer)

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

#### Inherited from

[ExecOptions](s.child.ExecOptions.md).[killSignal](s.child.ExecOptions.md#killsignal)

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

false

#### Inherited from

[ExecOptions](s.child.ExecOptions.md).[windowsHide](s.child.ExecOptions.md#windowshide)

___

### timeout

• `Optional` **timeout**: `number`

**`Default`**

0

#### Inherited from

[ExecOptions](s.child.ExecOptions.md).[timeout](s.child.ExecOptions.md#timeout)

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

[ExecOptions](s.child.ExecOptions.md).[uid](s.child.ExecOptions.md#uid)

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

[ExecOptions](s.child.ExecOptions.md).[gid](s.child.ExecOptions.md#gid)

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

[ExecOptions](s.child.ExecOptions.md).[cwd](s.child.ExecOptions.md#cwd)

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

[ExecOptions](s.child.ExecOptions.md).[env](s.child.ExecOptions.md#env)
