[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [\_\_fetch](../README.md) / FetchError

# Class: FetchError

## Extends

- `Error`

## Constructors

### new FetchError()

> **new FetchError**(`message`, `type`, `systemError`?): [`FetchError`](FetchError.md)

#### Parameters

• **message**: `string`

• **type**: `string`

• **systemError?**: `Record`\<`string`, `unknown`\>

#### Returns

[`FetchError`](FetchError.md)

#### Overrides

`Error.constructor`

## Properties

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

***

### name

> **name**: `"FetchError"`

#### Overrides

`Error.name`

***

### type

> **type**: `string`

***

### code?

> `optional` **code**: `string`

***

### errno?

> `optional` **errno**: `string`

***

### \[toStringTag\]

> **\[toStringTag\]**: `"FetchError"`

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
