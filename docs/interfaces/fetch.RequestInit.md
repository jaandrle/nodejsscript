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

#### Defined in

node_modules/node-fetch/@types/index.d.ts:75

___

### headers

• `Optional` **headers**: [`HeadersInit`](../modules/_fetch.md#headersinit)

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:79

___

### method

• `Optional` **method**: `string`

A string to set request's method.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:83

___

### redirect

• `Optional` **redirect**: [`RequestRedirect`](../modules/_fetch.md#requestredirect)

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:87

___

### signal

• `Optional` **signal**: `AbortSignal`

An AbortSignal to set request's signal.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:91

___

### referrer

• `Optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request’s referrer.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:95

___

### referrerPolicy

• `Optional` **referrerPolicy**: [`ReferrerPolicy`](../modules/_fetch.md#referrerpolicy)

A referrer policy to set request’s referrerPolicy.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:99

___

### agent

• `Optional` **agent**: `boolean` \| `Agent` \| (`parsedUrl`: `URL`) => `boolean` \| `Agent`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:102

___

### compress

• `Optional` **compress**: `boolean`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:103

___

### counter

• `Optional` **counter**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:104

___

### follow

• `Optional` **follow**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:105

___

### hostname

• `Optional` **hostname**: `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:106

___

### port

• `Optional` **port**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:107

___

### protocol

• `Optional` **protocol**: `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:108

___

### size

• `Optional` **size**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:109

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:110

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:111
