[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [\_\_fetch](../README.md) / AbortError

# Class: AbortError

## Extends

- `Error`

## Constructors

### new AbortError()

> **new AbortError**(`message`?): [`AbortError`](AbortError.md)

#### Parameters

• **message?**: `string`

#### Returns

[`AbortError`](AbortError.md)

#### Inherited from

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

### type

> **type**: `string`

***

### name

> **name**: `"AbortError"`

#### Overrides

`Error.name`

***

### \[toStringTag\]

> **\[toStringTag\]**: `"AbortError"`

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
