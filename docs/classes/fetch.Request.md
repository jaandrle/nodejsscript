[nodejsscript](../README.md) / [\_\_fetch](../modules/_fetch.md) / Request

# Class: Request

[__fetch](../modules/_fetch.md).Request

## Hierarchy

- `BodyMixin`

  ↳ **`Request`**

## Table of contents

### Constructors

- [constructor](fetch.Request.md#constructor)

### Properties

- [headers](fetch.Request.md#headers)
- [method](fetch.Request.md#method)
- [redirect](fetch.Request.md#redirect)
- [signal](fetch.Request.md#signal)
- [url](fetch.Request.md#url)
- [referrer](fetch.Request.md#referrer)
- [referrerPolicy](fetch.Request.md#referrerpolicy)
- [body](fetch.Request.md#body)
- [bodyUsed](fetch.Request.md#bodyused)
- [size](fetch.Request.md#size)

### Methods

- [clone](fetch.Request.md#clone)
- [buffer](fetch.Request.md#buffer)
- [arrayBuffer](fetch.Request.md#arraybuffer)
- [formData](fetch.Request.md#formdata)
- [blob](fetch.Request.md#blob)
- [json](fetch.Request.md#json)
- [text](fetch.Request.md#text)

## Constructors

### constructor

• **new Request**(`input`, `init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`RequestInfo`](../modules/_fetch.md#requestinfo) |
| `init?` | [`RequestInit`](../interfaces/fetch.RequestInit.md) |

#### Overrides

BodyMixin.constructor

#### Defined in

node_modules/node-fetch/@types/index.d.ts:150

## Properties

### headers

• `Readonly` **headers**: [`Headers`](fetch.Headers.md)

Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:155

___

### method

• `Readonly` **method**: `string`

Returns request's HTTP method, which is "GET" by default.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:159

___

### redirect

• `Readonly` **redirect**: [`RequestRedirect`](../modules/_fetch.md#requestredirect)

Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:163

___

### signal

• `Readonly` **signal**: `AbortSignal`

Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:167

___

### url

• `Readonly` **url**: `string`

Returns the URL of request as a string.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:171

___

### referrer

• `Readonly` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request’s referrer.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:175

___

### referrerPolicy

• `Readonly` **referrerPolicy**: [`ReferrerPolicy`](../modules/_fetch.md#referrerpolicy)

A referrer policy to set request’s referrerPolicy.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:179

___

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

### size

• `Readonly` **size**: `number`

#### Inherited from

BodyMixin.size

#### Defined in

node_modules/node-fetch/@types/index.d.ts:132

## Methods

### clone

▸ **clone**(): [`Request`](fetch.Request.md)

#### Returns

[`Request`](fetch.Request.md)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:180

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

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

BodyMixin.arrayBuffer

#### Defined in

node_modules/node-fetch/@types/index.d.ts:136

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

### blob

▸ **blob**(): `Promise`<`Blob`\>

#### Returns

`Promise`<`Blob`\>

#### Inherited from

BodyMixin.blob

#### Defined in

node_modules/node-fetch/@types/index.d.ts:138

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
