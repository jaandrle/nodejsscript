[nodejsscript](../README.md) / [\_\_fetch](../modules/_fetch.md) / AbortError

# Class: AbortError

[__fetch](../modules/_fetch.md).AbortError

## Hierarchy

- `Error`

  ↳ **`AbortError`**

## Table of contents

### Methods

- [captureStackTrace](fetch.AbortError.md#capturestacktrace)

### Properties

- [prepareStackTrace](fetch.AbortError.md#preparestacktrace)
- [stackTraceLimit](fetch.AbortError.md#stacktracelimit)
- [type](fetch.AbortError.md#type)
- [name](fetch.AbortError.md#name)
- [[toStringTag]](fetch.AbortError.md#[tostringtag])
- [message](fetch.AbortError.md#message)
- [stack](fetch.AbortError.md#stack)

### Constructors

- [constructor](fetch.AbortError.md#constructor)

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

### type

• **type**: `string`

___

### name

• **name**: ``"AbortError"``

#### Overrides

Error.name

___

### [toStringTag]

• **[toStringTag]**: ``"AbortError"``

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

• **new AbortError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor
