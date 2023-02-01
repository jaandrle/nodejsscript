[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / ExecFileSyncOptions

# Interface: ExecFileSyncOptions

[s](../modules/s.md).[child](../modules/s.child.md).ExecFileSyncOptions

## Hierarchy

- [`CommonExecOptions`](s.child.CommonExecOptions.md)

  ↳ **`ExecFileSyncOptions`**

  ↳↳ [`ExecFileSyncOptionsWithStringEncoding`](s.child.ExecFileSyncOptionsWithStringEncoding.md)

  ↳↳ [`ExecFileSyncOptionsWithBufferEncoding`](s.child.ExecFileSyncOptionsWithBufferEncoding.md)

## Table of contents

### Properties

- [shell](s.child.ExecFileSyncOptions.md#shell)
- [input](s.child.ExecFileSyncOptions.md#input)
- [stdio](s.child.ExecFileSyncOptions.md#stdio)
- [killSignal](s.child.ExecFileSyncOptions.md#killsignal)
- [maxBuffer](s.child.ExecFileSyncOptions.md#maxbuffer)
- [encoding](s.child.ExecFileSyncOptions.md#encoding)
- [windowsHide](s.child.ExecFileSyncOptions.md#windowshide)
- [timeout](s.child.ExecFileSyncOptions.md#timeout)
- [uid](s.child.ExecFileSyncOptions.md#uid)
- [gid](s.child.ExecFileSyncOptions.md#gid)
- [cwd](s.child.ExecFileSyncOptions.md#cwd)
- [env](s.child.ExecFileSyncOptions.md#env)

## Properties

### shell

• `Optional` **shell**: `string` \| `boolean`

___

### input

• `Optional` **input**: `string` \| `ArrayBufferView`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[input](s.child.CommonExecOptions.md#input)

___

### stdio

• `Optional` **stdio**: [`StdioOptions`](../modules/s.child.md#stdiooptions)

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[stdio](s.child.CommonExecOptions.md#stdio)

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[killSignal](s.child.CommonExecOptions.md#killsignal)

___

### maxBuffer

• `Optional` **maxBuffer**: `number`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[maxBuffer](s.child.CommonExecOptions.md#maxbuffer)

___

### encoding

• `Optional` **encoding**: ``"buffer"`` \| `BufferEncoding`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[encoding](s.child.CommonExecOptions.md#encoding)

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

false

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[windowsHide](s.child.CommonExecOptions.md#windowshide)

___

### timeout

• `Optional` **timeout**: `number`

**`Default`**

0

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[timeout](s.child.CommonExecOptions.md#timeout)

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[uid](s.child.CommonExecOptions.md#uid)

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[gid](s.child.CommonExecOptions.md#gid)

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[cwd](s.child.CommonExecOptions.md#cwd)

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[env](s.child.CommonExecOptions.md#env)
