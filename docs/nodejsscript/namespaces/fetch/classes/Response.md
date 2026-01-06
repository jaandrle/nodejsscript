[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [\_\_fetch](../README.md) / Response

# Class: Response

## Extends

- `BodyMixin`

## Constructors

### Constructor

> **new Response**(`body?`, `init?`): `Response`

#### Parameters

##### body?

[`BodyInit`](../type-aliases/BodyInit.md)

##### init?

[`ResponseInit`](../interfaces/ResponseInit.md)

#### Returns

`Response`

#### Overrides

`BodyMixin.constructor`

## Properties

### headers

> `readonly` **headers**: [`Headers`](Headers.md)

***

### ok

> `readonly` **ok**: `boolean`

***

### redirected

> `readonly` **redirected**: `boolean`

***

### status

> `readonly` **status**: `number`

***

### statusText

> `readonly` **statusText**: `string`

***

### type

> `readonly` **type**: `ResponseType`

***

### url

> `readonly` **url**: `string`

***

### body

> `readonly` **body**: `ReadableStream`

#### Inherited from

`BodyMixin.body`

***

### bodyUsed

> `readonly` **bodyUsed**: `boolean`

#### Inherited from

`BodyMixin.bodyUsed`

***

### size

> `readonly` **size**: `number`

#### Inherited from

`BodyMixin.size`

## Methods

### error()

> `static` **error**(): `Response`

#### Returns

`Response`

***

### redirect()

> `static` **redirect**(`url`, `status?`): `Response`

#### Parameters

##### url

`string`

##### status?

`number`

#### Returns

`Response`

***

### json()

> `static` **json**(`data`, `init?`): `Response`

#### Parameters

##### data

`any`

##### init?

[`ResponseInit`](../interfaces/ResponseInit.md)

#### Returns

`Response`

***

### clone()

> **clone**(): `Response`

#### Returns

`Response`

***

### ~~buffer()~~

> **buffer**(): `Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

#### Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

#### Deprecated

Use `body.arrayBuffer()` instead.

#### Inherited from

`BodyMixin.buffer`

***

### arrayBuffer()

> **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

#### Returns

`Promise`\<`ArrayBuffer`\>

#### Inherited from

`BodyMixin.arrayBuffer`

***

### formData()

> **formData**(): `Promise`\<`FormData`\>

#### Returns

`Promise`\<`FormData`\>

#### Inherited from

`BodyMixin.formData`

***

### blob()

> **blob**(): `Promise`\<`Blob`\>

#### Returns

`Promise`\<`Blob`\>

#### Inherited from

`BodyMixin.blob`

***

### json()

> **json**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`BodyMixin.json`

***

### text()

> **text**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`BodyMixin.text`
