[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [\_\_fetch](../README.md) / Request

# Class: Request

## Extends

- `BodyMixin`

## Constructors

### new Request()

> **new Request**(`input`, `init`?): [`Request`](Request.md)

#### Parameters

• **input**: `URL` \| [`RequestInfo`](../type-aliases/RequestInfo.md)

• **init?**: [`RequestInit`](../interfaces/RequestInit.md)

#### Returns

[`Request`](Request.md)

#### Overrides

`BodyMixin.constructor`

## Properties

### headers

> `readonly` **headers**: [`Headers`](Headers.md)

Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.

***

### method

> `readonly` **method**: `string`

Returns request's HTTP method, which is "GET" by default.

***

### redirect

> `readonly` **redirect**: [`RequestRedirect`](../type-aliases/RequestRedirect.md)

Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.

***

### signal

> `readonly` **signal**: `AbortSignal`

Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.

***

### url

> `readonly` **url**: `string`

Returns the URL of request as a string.

***

### referrer

> `readonly` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request’s referrer.

***

### referrerPolicy

> `readonly` **referrerPolicy**: [`ReferrerPolicy`](../type-aliases/ReferrerPolicy.md)

A referrer policy to set request’s referrerPolicy.

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

### clone()

> **clone**(): [`Request`](Request.md)

#### Returns

[`Request`](Request.md)

***

### ~~buffer()~~

> **buffer**(): `Promise`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

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
