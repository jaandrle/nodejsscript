[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / CommonExecOptions

# Interface: CommonExecOptions

[s](../modules/s.md).[child](../modules/s.child.md).CommonExecOptions

## Hierarchy

- [`CommonOptions`](s.child.CommonOptions.md)

  ↳ **`CommonExecOptions`**

  ↳↳ [`ExecSyncOptions`](s.child.ExecSyncOptions.md)

  ↳↳ [`ExecFileSyncOptions`](s.child.ExecFileSyncOptions.md)

## Table of contents

### Properties

- [input](s.child.CommonExecOptions.md#input)
- [stdio](s.child.CommonExecOptions.md#stdio)
- [killSignal](s.child.CommonExecOptions.md#killsignal)
- [maxBuffer](s.child.CommonExecOptions.md#maxbuffer)
- [encoding](s.child.CommonExecOptions.md#encoding)
- [windowsHide](s.child.CommonExecOptions.md#windowshide)
- [timeout](s.child.CommonExecOptions.md#timeout)
- [uid](s.child.CommonExecOptions.md#uid)
- [gid](s.child.CommonExecOptions.md#gid)
- [cwd](s.child.CommonExecOptions.md#cwd)
- [env](s.child.CommonExecOptions.md#env)

## Properties

### input

• `Optional` **input**: `string` \| `ArrayBufferView`

___

### stdio

• `Optional` **stdio**: [`StdioOptions`](../modules/s.child.md#stdiooptions)

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

___

### maxBuffer

• `Optional` **maxBuffer**: `number`

___

### encoding

• `Optional` **encoding**: ``"buffer"`` \| `BufferEncoding`

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
