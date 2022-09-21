[nodejsscript](../README.md) / [s](../modules/s.md) / ExecOptions

# Interface: ExecOptions

[s](../modules/s.md).ExecOptions

## Hierarchy

- `ExecOptions`

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

#### Defined in

node_modules/@types/shelljs/index.d.ts:803

___

### fatal

• `Optional` **fatal**: `boolean`

Exit when command return code is non-zero.

**`Default`**

false

#### Defined in

node_modules/@types/shelljs/index.d.ts:810

___

### async

• `Optional` **async**: `boolean`

Asynchronous execution.

If a callback is provided, it will be set to `true`, regardless of the passed value.

**`Default`**

false

#### Defined in

node_modules/@types/shelljs/index.d.ts:819

___

### encoding

• `Optional` **encoding**: `string`

Character encoding to use.

Affects the values returned by `stdout` and `stderr`,
and what is written to `stdout` and `stderr` when not in silent mode

**`Default`**

"utf8"

#### Defined in

node_modules/@types/shelljs/index.d.ts:829

___

### shell

• `Optional` **shell**: `string`

#### Inherited from

child.ExecOptions.shell

#### Defined in

node_modules/@types/node/child_process.d.ts:794

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

child.ExecOptions.signal

#### Defined in

node_modules/@types/node/child_process.d.ts:795

___

### maxBuffer

• `Optional` **maxBuffer**: `number`

#### Inherited from

child.ExecOptions.maxBuffer

#### Defined in

node_modules/@types/node/child_process.d.ts:796

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

#### Inherited from

child.ExecOptions.killSignal

#### Defined in

node_modules/@types/node/child_process.d.ts:797

___

### windowsHide

• `Optional` **windowsHide**: `boolean`

**`Default`**

true

#### Inherited from

child.ExecOptions.windowsHide

#### Defined in

node_modules/@types/node/child_process.d.ts:629

___

### timeout

• `Optional` **timeout**: `number`

**`Default`**

0

#### Inherited from

child.ExecOptions.timeout

#### Defined in

node_modules/@types/node/child_process.d.ts:633

___

### uid

• `Optional` **uid**: `number`

#### Inherited from

child.ExecOptions.uid

#### Defined in

node_modules/@types/node/child_process.d.ts:620

___

### gid

• `Optional` **gid**: `number`

#### Inherited from

child.ExecOptions.gid

#### Defined in

node_modules/@types/node/child_process.d.ts:621

___

### cwd

• `Optional` **cwd**: `string` \| `URL`

#### Inherited from

child.ExecOptions.cwd

#### Defined in

node_modules/@types/node/child_process.d.ts:622

___

### env

• `Optional` **env**: `ProcessEnv`

#### Inherited from

child.ExecOptions.env

#### Defined in

node_modules/@types/node/child_process.d.ts:623
