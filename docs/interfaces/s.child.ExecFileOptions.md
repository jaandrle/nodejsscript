[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / ExecFileOptions

# Interface: ExecFileOptions

[s](../modules/s.md).[child](../modules/s.child.md).ExecFileOptions

## Hierarchy

- [`CommonOptions`](s.child.CommonOptions.md)

- `Abortable`

  ↳ **`ExecFileOptions`**

  ↳↳ [`ExecFileOptionsWithStringEncoding`](s.child.ExecFileOptionsWithStringEncoding.md)

  ↳↳ [`ExecFileOptionsWithBufferEncoding`](s.child.ExecFileOptionsWithBufferEncoding.md)

  ↳↳ [`ExecFileOptionsWithOtherEncoding`](s.child.ExecFileOptionsWithOtherEncoding.md)

## Table of contents

### Properties

- [maxBuffer](s.child.ExecFileOptions.md#maxbuffer)
- [killSignal](s.child.ExecFileOptions.md#killsignal)
- [windowsVerbatimArguments](s.child.ExecFileOptions.md#windowsverbatimarguments)
- [shell](s.child.ExecFileOptions.md#shell)
- [signal](s.child.ExecFileOptions.md#signal)
- [windowsHide](s.child.ExecFileOptions.md#windowshide)
- [timeout](s.child.ExecFileOptions.md#timeout)
- [uid](s.child.ExecFileOptions.md#uid)
- [gid](s.child.ExecFileOptions.md#gid)
- [cwd](s.child.ExecFileOptions.md#cwd)
- [env](s.child.ExecFileOptions.md#env)

## Properties

### maxBuffer

• `Optional` **maxBuffer**: `number`

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

___

### windowsVerbatimArguments

• `Optional` **windowsVerbatimArguments**: `boolean`

___

### shell

• `Optional` **shell**: `string` \| `boolean`

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Overrides

Abortable.signal

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

[CommonOptions](s.child.CommonOptions.md).[timeout](s.child.CommonOptions.md#timeout)

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
