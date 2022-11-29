[nodejsscript](../README.md) / [\_\_fetch](../modules/_fetch.md) / RequestInit

# Interface: RequestInit

[__fetch](../modules/_fetch.md).RequestInit

## Table of contents

### Properties

- [body](fetch.RequestInit.md#body)
- [headers](fetch.RequestInit.md#headers)
- [method](fetch.RequestInit.md#method)
- [redirect](fetch.RequestInit.md#redirect)
- [signal](fetch.RequestInit.md#signal)
- [referrer](fetch.RequestInit.md#referrer)
- [referrerPolicy](fetch.RequestInit.md#referrerpolicy)
- [agent](fetch.RequestInit.md#agent)
- [compress](fetch.RequestInit.md#compress)
- [counter](fetch.RequestInit.md#counter)
- [follow](fetch.RequestInit.md#follow)
- [hostname](fetch.RequestInit.md#hostname)
- [port](fetch.RequestInit.md#port)
- [protocol](fetch.RequestInit.md#protocol)
- [size](fetch.RequestInit.md#size)
- [highWaterMark](fetch.RequestInit.md#highwatermark)
- [insecureHTTPParser](fetch.RequestInit.md#insecurehttpparser)

## Properties

### body

• `Optional` **body**: [`BodyInit`](../modules/_fetch.md#bodyinit)

A BodyInit object or null to set request's body.

___

### headers

• `Optional` **headers**: [`HeadersInit`](../modules/_fetch.md#headersinit)

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

___

### method

• `Optional` **method**: `string`

A string to set request's method.

___

### redirect

• `Optional` **redirect**: [`RequestRedirect`](../modules/_fetch.md#requestredirect)

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

___

### signal

• `Optional` **signal**: `AbortSignal`

An AbortSignal to set request's signal.

___

### referrer

• `Optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request’s referrer.

___

### referrerPolicy

• `Optional` **referrerPolicy**: [`ReferrerPolicy`](../modules/_fetch.md#referrerpolicy)

A referrer policy to set request’s referrerPolicy.

___

### agent

• `Optional` **agent**: `boolean` \| `Agent` \| (`parsedUrl`: `URL`) => `boolean` \| `Agent`

___

### compress

• `Optional` **compress**: `boolean`

___

### counter

• `Optional` **counter**: `number`

___

### follow

• `Optional` **follow**: `number`

___

### hostname

• `Optional` **hostname**: `string`

___

### port

• `Optional` **port**: `number`

___

### protocol

• `Optional` **protocol**: `string`

___

### size

• `Optional` **size**: `number`

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`
