[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / ExecOptions

# Interface: ExecOptions

[s](../modules/s.md).[child](../modules/s.child.md).ExecOptions

## Hierarchy

- [`CommonOptions`](s.child.CommonOptions.md)

  ↳ **`ExecOptions`**

  ↳↳ [`ExecOptionsWithStringEncoding`](s.child.ExecOptionsWithStringEncoding.md)

  ↳↳ [`ExecOptionsWithBufferEncoding`](s.child.ExecOptionsWithBufferEncoding.md)

  ↳↳ [`ExecOptions`](s.ExecOptions.md)

## Table of contents

### Properties

- [shell](s.child.ExecOptions.md#shell)
- [signal](s.child.ExecOptions.md#signal)
- [maxBuffer](s.child.ExecOptions.md#maxbuffer)
- [killSignal](s.child.ExecOptions.md#killsignal)
- [windowsHide](s.child.ExecOptions.md#windowshide)
- [timeout](s.child.ExecOptions.md#timeout)
- [uid](s.child.ExecOptions.md#uid)
- [gid](s.child.ExecOptions.md#gid)
- [cwd](s.child.ExecOptions.md#cwd)
- [env](s.child.ExecOptions.md#env)

## Properties

### shell

• `Optional` **shell**: `string`

___

### signal

• `Optional` **signal**: `AbortSignal`

___

### maxBuffer

• `Optional` **maxBuffer**: `number`

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

false

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
