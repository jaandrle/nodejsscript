[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [\_\_fetch](../README.md) / RequestInit

# Interface: RequestInit

## Properties

### body?

> `optional` **body**: [`BodyInit`](../type-aliases/BodyInit.md)

A BodyInit object or null to set request's body.

***

### headers?

> `optional` **headers**: [`HeadersInit`](../type-aliases/HeadersInit.md)

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

***

### method?

> `optional` **method**: `string`

A string to set request's method.

***

### redirect?

> `optional` **redirect**: [`RequestRedirect`](../type-aliases/RequestRedirect.md)

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

***

### signal?

> `optional` **signal**: `AbortSignal`

An AbortSignal to set request's signal.

***

### referrer?

> `optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request’s referrer.

***

### referrerPolicy?

> `optional` **referrerPolicy**: [`ReferrerPolicy`](../type-aliases/ReferrerPolicy.md)

A referrer policy to set request’s referrerPolicy.

***

### agent?

> `optional` **agent**: `boolean` \| `Agent` \| (`parsedUrl`) => `boolean` \| `Agent`

***

### compress?

> `optional` **compress**: `boolean`

***

### counter?

> `optional` **counter**: `number`

***

### follow?

> `optional` **follow**: `number`

***

### hostname?

> `optional` **hostname**: `string`

***

### port?

> `optional` **port**: `number`

***

### protocol?

> `optional` **protocol**: `string`

***

### size?

> `optional` **size**: `number`

***

### highWaterMark?

> `optional` **highWaterMark**: `number`

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser**: `boolean`
