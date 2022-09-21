[nodejsscript](../README.md) / [fetch](../modules/fetch.md) / Response

# Class: Response

[fetch](../modules/fetch.md).Response

## Hierarchy

- `BodyMixin`

  ↳ **`Response`**

## Table of contents

### Constructors

- [constructor](fetch.Response.md#constructor)

### Properties

- [body](fetch.Response.md#body)
- [bodyUsed](fetch.Response.md#bodyused)
- [headers](fetch.Response.md#headers)
- [ok](fetch.Response.md#ok)
- [redirected](fetch.Response.md#redirected)
- [size](fetch.Response.md#size)
- [status](fetch.Response.md#status)
- [statusText](fetch.Response.md#statustext)
- [type](fetch.Response.md#type)
- [url](fetch.Response.md#url)

### Methods

- [arrayBuffer](fetch.Response.md#arraybuffer)
- [blob](fetch.Response.md#blob)
- [buffer](fetch.Response.md#buffer)
- [clone](fetch.Response.md#clone)
- [formData](fetch.Response.md#formdata)
- [json](fetch.Response.md#json)
- [text](fetch.Response.md#text)
- [error](fetch.Response.md#error)
- [redirect](fetch.Response.md#redirect)

## Constructors

### constructor

• **new Response**(`body?`, `init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`BodyInit`](../modules/fetch.md#bodyinit) |
| `init?` | [`ResponseInit`](../interfaces/fetch.ResponseInit.md) |

#### Overrides

BodyMixin.constructor

#### Defined in

node_modules/node-fetch/@types/index.d.ts:186

## Properties

### body

• `Readonly` **body**: `ReadableStream`

#### Inherited from

BodyMixin.body

#### Defined in

node_modules/node-fetch/@types/index.d.ts:130

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Inherited from

BodyMixin.bodyUsed

#### Defined in

node_modules/node-fetch/@types/index.d.ts:131

___

### headers

• `Readonly` **headers**: [`Headers`](fetch.Headers.md)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:188

___

### ok

• `Readonly` **ok**: `boolean`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:189

___

### redirected

• `Readonly` **redirected**: `boolean`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:190

___

### size

• `Readonly` **size**: `number`

#### Inherited from

BodyMixin.size

#### Defined in

node_modules/node-fetch/@types/index.d.ts:132

___

### status

• `Readonly` **status**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:191

___

### statusText

• `Readonly` **statusText**: `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:192

___

### type

• `Readonly` **type**: `ResponseType`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:193

___

### url

• `Readonly` **url**: `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:194

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

BodyMixin.arrayBuffer

#### Defined in

node_modules/node-fetch/@types/index.d.ts:136

___

### blob

▸ **blob**(): `Promise`<`Blob`\>

#### Returns

`Promise`<`Blob`\>

#### Inherited from

BodyMixin.blob

#### Defined in

node_modules/node-fetch/@types/index.d.ts:138

___

### buffer

▸ **buffer**(): `Promise`<`Buffer`\>

**`Deprecated`**

Use `body.arrayBuffer()` instead.

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

BodyMixin.buffer

#### Defined in

node_modules/node-fetch/@types/index.d.ts:135

___

### clone

▸ **clone**(): [`Response`](fetch.Response.md)

#### Returns

[`Response`](fetch.Response.md)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:195

___

### formData

▸ **formData**(): `Promise`<`FormData`\>

#### Returns

`Promise`<`FormData`\>

#### Inherited from

BodyMixin.formData

#### Defined in

node_modules/node-fetch/@types/index.d.ts:137

___

### json

▸ **json**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Inherited from

BodyMixin.json

#### Defined in

node_modules/node-fetch/@types/index.d.ts:139

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

BodyMixin.text

#### Defined in

node_modules/node-fetch/@types/index.d.ts:140

___

### error

▸ `Static` **error**(): [`Response`](fetch.Response.md)

#### Returns

[`Response`](fetch.Response.md)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:197

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

#### Defined in

node_modules/node-fetch/@types/index.d.ts:198
