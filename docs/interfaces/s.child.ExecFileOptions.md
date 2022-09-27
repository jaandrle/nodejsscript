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

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:972

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:973

___

### windowsVerbatimArguments

• `Optional` **windowsVerbatimArguments**: `boolean`

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:974

___

### shell

• `Optional` **shell**: `string` \| `boolean`

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:975

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Overrides

Abortable.signal

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:976

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

true

#### Inherited from

[CommonOptions](s.child.CommonOptions.md).[windowsHide](s.child.CommonOptions.md#windowshide)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:629

___

### timeout

• `Optional` **timeout**: `number`

**`Default`**

0

#### Inherited from

[CommonOptions](s.child.CommonOptions.md).[timeout](s.child.CommonOptions.md#timeout)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:633

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

[CommonOptions](s.child.CommonOptions.md).[uid](s.child.CommonOptions.md#uid)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:620

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

[CommonOptions](s.child.CommonOptions.md).[gid](s.child.CommonOptions.md#gid)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:621

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

[CommonOptions](s.child.CommonOptions.md).[cwd](s.child.CommonOptions.md#cwd)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:622

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

[CommonOptions](s.child.CommonOptions.md).[env](s.child.CommonOptions.md#env)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:623
