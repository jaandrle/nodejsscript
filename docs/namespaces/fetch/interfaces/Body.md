[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [\_\_fetch](../README.md) / Body

# Interface: Body

## Extends

- `Pick`\<`BodyMixin`, keyof `BodyMixin`\>

## Properties

### body

> `readonly` **body**: `ReadableStream`

#### Inherited from

`Pick.body`

***

### size

> `readonly` **size**: `number`

#### Inherited from

`Pick.size`

***

### bodyUsed

> `readonly` **bodyUsed**: `boolean`

#### Inherited from

`Pick.bodyUsed`

## Methods

### ~~buffer()~~

> **buffer**(): `Promise`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Deprecated

Use `body.arrayBuffer()` instead.

#### Inherited from

`Pick.buffer`

***

### formData()

> **formData**(): `Promise`\<`FormData`\>

#### Returns

`Promise`\<`FormData`\>

#### Inherited from

`Pick.formData`

***

### text()

> **text**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Pick.text`

***

### blob()

> **blob**(): `Promise`\<`Blob`\>

#### Returns

`Promise`\<`Blob`\>

#### Inherited from

`Pick.blob`

***

### json()

> **json**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Pick.json`

***

### arrayBuffer()

> **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

#### Returns

`Promise`\<`ArrayBuffer`\>

#### Inherited from

`Pick.arrayBuffer`
