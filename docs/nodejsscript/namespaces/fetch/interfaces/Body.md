[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [\_\_fetch](../README.md) / Body

# Interface: Body

## Extends

- `Pick`\<`BodyMixin`, keyof `BodyMixin`\>

## Properties

### body

> `readonly` **body**: `ReadableStream`

#### Inherited from

[`Request`](../classes/Request.md).[`body`](../classes/Request.md#body)

***

### size

> `readonly` **size**: `number`

#### Inherited from

[`Request`](../classes/Request.md).[`size`](../classes/Request.md#size)

***

### bodyUsed

> `readonly` **bodyUsed**: `boolean`

#### Inherited from

[`Request`](../classes/Request.md).[`bodyUsed`](../classes/Request.md#bodyused)

## Methods

### ~~buffer()~~

> **buffer**(): `Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

#### Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

#### Deprecated

Use `body.arrayBuffer()` instead.

#### Inherited from

[`Request`](../classes/Request.md).[`buffer`](../classes/Request.md#buffer)

***

### formData()

> **formData**(): `Promise`\<`FormData`\>

#### Returns

`Promise`\<`FormData`\>

#### Inherited from

[`Request`](../classes/Request.md).[`formData`](../classes/Request.md#formdata)

***

### text()

> **text**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`Request`](../classes/Request.md).[`text`](../classes/Request.md#text)

***

### blob()

> **blob**(): `Promise`\<`Blob`\>

#### Returns

`Promise`\<`Blob`\>

#### Inherited from

[`Request`](../classes/Request.md).[`blob`](../classes/Request.md#blob)

***

### json()

> **json**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`Request`](../classes/Request.md).[`json`](../classes/Request.md#json)

***

### arrayBuffer()

> **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

#### Returns

`Promise`\<`ArrayBuffer`\>

#### Inherited from

[`Request`](../classes/Request.md).[`arrayBuffer`](../classes/Request.md#arraybuffer)
