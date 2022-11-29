[nodejsscript](../README.md) / [\_\_fetch](../modules/_fetch.md) / FetchError

# Class: FetchError

[__fetch](../modules/_fetch.md).FetchError

## Hierarchy

- `Error`

  ↳ **`FetchError`**

## Table of contents

### Methods

- [captureStackTrace](fetch.FetchError.md#capturestacktrace)

### Properties

- [prepareStackTrace](fetch.FetchError.md#preparestacktrace)
- [stackTraceLimit](fetch.FetchError.md#stacktracelimit)
- [name](fetch.FetchError.md#name)
- [type](fetch.FetchError.md#type)
- [code](fetch.FetchError.md#code)
- [errno](fetch.FetchError.md#errno)
- [[toStringTag]](fetch.FetchError.md#[tostringtag])
- [message](fetch.FetchError.md#message)
- [stack](fetch.FetchError.md#stack)

### Constructors

- [constructor](fetch.FetchError.md#constructor)

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

• **name**: ``"FetchError"``

#### Overrides

Error.name

___

### type

• **type**: `string`

___

### code

• `Optional` **code**: `string`

___

### errno

• `Optional` **errno**: `string`

___

### [toStringTag]

• **[toStringTag]**: ``"FetchError"``

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

• **new FetchError**(`message`, `type`, `systemError?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `type` | `string` |
| `systemError?` | `Record`<`string`, `unknown`\> |

#### Overrides

Error.constructor
