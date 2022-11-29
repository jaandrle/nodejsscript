[nodejsscript](../README.md) / [\_\_fetch](../modules/_fetch.md) / Response

# Class: Response

[__fetch](../modules/_fetch.md).Response

## Hierarchy

- `BodyMixin`

  ↳ **`Response`**

## Table of contents

### Methods

- [error](fetch.Response.md#error)
- [redirect](fetch.Response.md#redirect)
- [clone](fetch.Response.md#clone)
- [buffer](fetch.Response.md#buffer)
- [arrayBuffer](fetch.Response.md#arraybuffer)
- [formData](fetch.Response.md#formdata)
- [blob](fetch.Response.md#blob)
- [json](fetch.Response.md#json)
- [text](fetch.Response.md#text)

### Constructors

- [constructor](fetch.Response.md#constructor)

### Properties

- [headers](fetch.Response.md#headers)
- [ok](fetch.Response.md#ok)
- [redirected](fetch.Response.md#redirected)
- [status](fetch.Response.md#status)
- [statusText](fetch.Response.md#statustext)
- [type](fetch.Response.md#type)
- [url](fetch.Response.md#url)
- [body](fetch.Response.md#body)
- [bodyUsed](fetch.Response.md#bodyused)
- [size](fetch.Response.md#size)

## Methods

### error

▸ `Static` **error**(): [`Response`](fetch.Response.md)

#### Returns

[`Response`](fetch.Response.md)

___

### redirect

▸ `Static` **redirect**(`url`, `status?`): [`Response`](fetch.Response.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `status?` | `number` |

#### Returns

[`Response`](fetch.Response.md)

___

### clone

▸ **clone**(): [`Response`](fetch.Response.md)

#### Returns

[`Response`](fetch.Response.md)

___

### buffer

▸ **buffer**(): `Promise`<`Buffer`\>

**`Deprecated`**

Use `body.arrayBuffer()` instead.

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

BodyMixin.buffer

___

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

BodyMixin.arrayBuffer

___

### formData

▸ **formData**(): `Promise`<`FormData`\>

#### Returns

`Promise`<`FormData`\>

#### Inherited from

BodyMixin.formData

___

### blob

▸ **blob**(): `Promise`<`Blob`\>

#### Returns

`Promise`<`Blob`\>

#### Inherited from

BodyMixin.blob

___

### json

▸ **json**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Inherited from

BodyMixin.json

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

BodyMixin.text

## Constructors

### constructor

• **new Response**(`body?`, `init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`BodyInit`](../modules/_fetch.md#bodyinit) |
| `init?` | [`ResponseInit`](../interfaces/fetch.ResponseInit.md) |

#### Overrides

BodyMixin.constructor

## Properties

### headers

• `Readonly` **headers**: [`Headers`](fetch.Headers.md)

___

### ok

• `Readonly` **ok**: `boolean`

___

### redirected

• `Readonly` **redirected**: `boolean`

___

### status

• `Readonly` **status**: `number`

___

### statusText

• `Readonly` **statusText**: `string`

___

### type

• `Readonly` **type**: `ResponseType`

___

### url

• `Readonly` **url**: `string`

___

### body

• `Readonly` **body**: `ReadableStream`

#### Inherited from

BodyMixin.body

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Inherited from

BodyMixin.bodyUsed

___

### size

• `Readonly` **size**: `number`

#### Inherited from

BodyMixin.size
