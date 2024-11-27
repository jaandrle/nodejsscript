[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / ProcessOutput

# Class: ProcessOutput

## Extends

- `Error`

## Constructors

### new ProcessOutput()

> **new ProcessOutput**(`code`, `signal`, `stdout`, `stderr`, `combined`, `message`): [`ProcessOutput`](ProcessOutput.md)

#### Parameters

• **code**: `number`

• **signal**: `Signals`

• **stdout**: `string`

• **stderr**: `string`

• **combined**: `string`

• **message**: `string`

#### Returns

[`ProcessOutput`](ProcessOutput.md)

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

> **name**: `string`

#### Inherited from

`Error.name`

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

## Accessors

### stdout

#### Get Signature

> **get** **stdout**(): `string`

##### Returns

`string`

***

### stderr

#### Get Signature

> **get** **stderr**(): `string`

##### Returns

`string`

***

### exitCode

#### Get Signature

> **get** **exitCode**(): `number`

##### Returns

`number`

***

### signal

#### Get Signature

> **get** **signal**(): `Signals`

##### Returns

`Signals`

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

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

***

### \[custom\]()

> **\[custom\]**(): `string`

#### Returns

`string`
