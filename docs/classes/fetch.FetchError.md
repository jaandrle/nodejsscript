[nodejsscript](../README.md) / [fetch](../modules/fetch.md) / FetchError

# Class: FetchError

[fetch](../modules/fetch.md).FetchError

## Hierarchy

- `Error`

  ↳ **`FetchError`**

## Table of contents

### Constructors

- [constructor](fetch.FetchError.md#constructor)

### Properties

- [[toStringTag]](fetch.FetchError.md#[tostringtag])
- [code](fetch.FetchError.md#code)
- [errno](fetch.FetchError.md#errno)
- [message](fetch.FetchError.md#message)
- [name](fetch.FetchError.md#name)
- [stack](fetch.FetchError.md#stack)
- [type](fetch.FetchError.md#type)
- [prepareStackTrace](fetch.FetchError.md#preparestacktrace)
- [stackTraceLimit](fetch.FetchError.md#stacktracelimit)

### Methods

- [captureStackTrace](fetch.FetchError.md#capturestacktrace)

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

#### Defined in

node_modules/node-fetch/@types/index.d.ts:202

## Properties

### [toStringTag]

• **[toStringTag]**: ``"FetchError"``

#### Defined in

node_modules/node-fetch/@types/index.d.ts:205

___

### code

• `Optional` **code**: `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:207

___

### errno

• `Optional` **errno**: `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:208

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: ``"FetchError"``

#### Overrides

Error.name

#### Defined in

node_modules/node-fetch/@types/index.d.ts:204

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

___

### type

• **type**: `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:206

___

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

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

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

node_modules/@types/node/globals.d.ts:4
