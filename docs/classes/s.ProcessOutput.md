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

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

___

### [custom]

▸ **[custom]**(): `string`

#### Returns

`string`

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

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

___

### name

• **name**: `string`

#### Inherited from

Error.name

___

### message

• **message**: `string`

#### Inherited from

Error.message

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

## Accessors

### stdout

• `get` **stdout**(): `string`

#### Returns

`string`

___

### stderr

• `get` **stderr**(): `string`

#### Returns

`string`

___

### exitCode

• `get` **exitCode**(): `number`

#### Returns

`number`

___

### signal

• `get` **signal**(): `Signals`

#### Returns

`Signals`
