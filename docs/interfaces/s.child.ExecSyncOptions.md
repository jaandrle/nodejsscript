[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / ExecSyncOptions

# Interface: ExecSyncOptions

[s](../modules/s.md).[child](../modules/s.child.md).ExecSyncOptions

## Hierarchy

- [`CommonExecOptions`](s.child.CommonExecOptions.md)

  ↳ **`ExecSyncOptions`**

  ↳↳ [`ExecSyncOptionsWithStringEncoding`](s.child.ExecSyncOptionsWithStringEncoding.md)

  ↳↳ [`ExecSyncOptionsWithBufferEncoding`](s.child.ExecSyncOptionsWithBufferEncoding.md)

## Table of contents

### Properties

- [shell](s.child.ExecSyncOptions.md#shell)
- [input](s.child.ExecSyncOptions.md#input)
- [stdio](s.child.ExecSyncOptions.md#stdio)
- [killSignal](s.child.ExecSyncOptions.md#killsignal)
- [maxBuffer](s.child.ExecSyncOptions.md#maxbuffer)
- [encoding](s.child.ExecSyncOptions.md#encoding)
- [windowsHide](s.child.ExecSyncOptions.md#windowshide)
- [timeout](s.child.ExecSyncOptions.md#timeout)
- [uid](s.child.ExecSyncOptions.md#uid)
- [gid](s.child.ExecSyncOptions.md#gid)
- [cwd](s.child.ExecSyncOptions.md#cwd)
- [env](s.child.ExecSyncOptions.md#env)

## Properties

### shell

• `Optional` **shell**: `string`

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:1301

___

### input

• `Optional` **input**: `string` \| `ArrayBufferView`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[input](s.child.CommonExecOptions.md#input)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:1294

___

### stdio

• `Optional` **stdio**: [`StdioOptions`](../modules/s.child.md#stdiooptions)

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[stdio](s.child.CommonExecOptions.md#stdio)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:1295

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[killSignal](s.child.CommonExecOptions.md#killsignal)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:1296

___

### maxBuffer

• `Optional` **maxBuffer**: `number`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[maxBuffer](s.child.CommonExecOptions.md#maxbuffer)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:1297

___

### encoding

• `Optional` **encoding**: ``"buffer"`` \| `BufferEncoding`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[encoding](s.child.CommonExecOptions.md#encoding)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:1298

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

true

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[windowsHide](s.child.CommonExecOptions.md#windowshide)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:629

___

### timeout

• `Optional` **timeout**: `number`

**`Default`**

0

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[timeout](s.child.CommonExecOptions.md#timeout)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:633

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[uid](s.child.CommonExecOptions.md#uid)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:620

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[gid](s.child.CommonExecOptions.md#gid)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:621

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[cwd](s.child.CommonExecOptions.md#cwd)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:622

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

[CommonExecOptions](s.child.CommonExecOptions.md).[env](s.child.CommonExecOptions.md#env)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:623