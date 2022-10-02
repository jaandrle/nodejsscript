[nodejsscript](../README.md) / [s](../modules/s.md) / ProcessOutput

# Class: ProcessOutput

[s](../modules/s.md).ProcessOutput

## Hierarchy

- `Error`

  ↳ **`ProcessOutput`**

## Table of contents

### Methods

- [captureStackTrace](s.ProcessOutput.md#capturestacktrace)
- [toString](s.ProcessOutput.md#tostring)
- [[custom]](s.ProcessOutput.md#[custom])

### Properties

- [prepareStackTrace](s.ProcessOutput.md#preparestacktrace)
- [stackTraceLimit](s.ProcessOutput.md#stacktracelimit)
- [name](s.ProcessOutput.md#name)
- [message](s.ProcessOutput.md#message)
- [stack](s.ProcessOutput.md#stack)

### Constructors

- [constructor](s.ProcessOutput.md#constructor)

### Accessors

- [stdout](s.ProcessOutput.md#stdout)
- [stderr](s.ProcessOutput.md#stderr)
- [exitCode](s.ProcessOutput.md#exitcode)
- [signal](s.ProcessOutput.md#signal)

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:4

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/shelljs.d.ts:110](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/shelljs.d.ts#L110)

___

### [custom]

▸ **[custom]**(): `string`

#### Returns

`string`

#### Defined in

[src/shelljs.d.ts:115](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/shelljs.d.ts#L115)

## Properties

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:13

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

## Constructors

### constructor

• **new ProcessOutput**(`code`, `signal`, `stdout`, `stderr`, `combined`, `message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `signal` | `Signals` |
| `stdout` | `string` |
| `stderr` | `string` |
| `combined` | `string` |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/shelljs.d.ts:109](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/shelljs.d.ts#L109)

## Accessors

### stdout

• `get` **stdout**(): `string`

#### Returns

`string`

#### Defined in

[src/shelljs.d.ts:111](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/shelljs.d.ts#L111)

___

### stderr

• `get` **stderr**(): `string`

#### Returns

`string`

#### Defined in

[src/shelljs.d.ts:112](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/shelljs.d.ts#L112)

___

### exitCode

• `get` **exitCode**(): `number`

#### Returns

`number`

#### Defined in

[src/shelljs.d.ts:113](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/shelljs.d.ts#L113)

___

### signal

• `get` **signal**(): `Signals`

#### Returns

`Signals`

#### Defined in

[src/shelljs.d.ts:114](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/shelljs.d.ts#L114)
