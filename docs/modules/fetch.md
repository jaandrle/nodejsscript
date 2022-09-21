[nodejsscript](../README.md) / fetch

# Namespace: fetch

## Table of contents

### Classes

- [AbortError](../classes/fetch.AbortError.md)
- [FetchError](../classes/fetch.FetchError.md)
- [Headers](../classes/fetch.Headers.md)
- [Request](../classes/fetch.Request.md)
- [Response](../classes/fetch.Response.md)

### Interfaces

- [Body](../interfaces/fetch.Body.md)
- [RequestInit](../interfaces/fetch.RequestInit.md)
- [ResponseInit](../interfaces/fetch.ResponseInit.md)

### Type Aliases

- [BodyInit](fetch.md#bodyinit)
- [HeadersInit](fetch.md#headersinit)
- [ReferrerPolicy](fetch.md#referrerpolicy)
- [RequestInfo](fetch.md#requestinfo)
- [RequestRedirect](fetch.md#requestredirect)

### Variables

- [Blob](fetch.md#blob)
- [File](fetch.md#file)
- [FormData](fetch.md#formdata)

### Functions

- [blobFrom](fetch.md#blobfrom)
- [blobFromSync](fetch.md#blobfromsync)
- [default](fetch.md#default)
- [fileFrom](fetch.md#filefrom)
- [fileFromSync](fetch.md#filefromsync)
- [isRedirect](fetch.md#isredirect)

## Type Aliases

### BodyInit

Ƭ **BodyInit**: `Blob` \| `Buffer` \| `URLSearchParams` \| `FormData` \| `NodeJS.ReadableStream` \| `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:120

___

### HeadersInit

Ƭ **HeadersInit**: [`Headers`](../classes/fetch.Headers.md) \| `Record`<`string`, `string`\> \| `Iterable`<readonly [`string`, `string`]\> \| `Iterable`<`Iterable`<`string`\>\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:21

___

### ReferrerPolicy

Ƭ **ReferrerPolicy**: ``""`` \| ``"no-referrer"`` \| ``"no-referrer-when-downgrade"`` \| ``"same-origin"`` \| ``"origin"`` \| ``"strict-origin"`` \| ``"origin-when-cross-origin"`` \| ``"strict-origin-when-cross-origin"`` \| ``"unsafe-url"``

#### Defined in

node_modules/node-fetch/@types/index.d.ts:147

___

### RequestInfo

Ƭ **RequestInfo**: `string` \| [`Request`](../classes/fetch.Request.md)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:148

___

### RequestRedirect

Ƭ **RequestRedirect**: ``"error"`` \| ``"follow"`` \| ``"manual"``

#### Defined in

node_modules/node-fetch/@types/index.d.ts:146

## Variables

### Blob

• `Const` **Blob**: typeof `globalThis.Blob`

#### Defined in

node_modules/fetch-blob/index.d.ts:2

___

### File

• `Const` **File**: typeof `globalThis.File`

#### Defined in

node_modules/fetch-blob/file.d.ts:1

___

### FormData

• `Const` **FormData**: `Object`

#### Call signature

• **new FormData**(): `FormData`

##### Returns

`FormData`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | `FormData` |

#### Defined in

node_modules/formdata-polyfill/esm.min.d.ts:1

## Functions

### blobFrom

▸ **blobFrom**(`path`, `type?`): `Promise`<`Blob`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | filepath on the disk |
| `type?` | `string` | mimetype to use |

#### Returns

`Promise`<`Blob`\>

#### Defined in

node_modules/fetch-blob/from.d.ts:14

___

### blobFromSync

▸ **blobFromSync**(`path`, `type?`): `Blob`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | filepath on the disk |
| `type?` | `string` | mimetype to use |

#### Returns

`Blob`

#### Defined in

node_modules/fetch-blob/from.d.ts:6

___

### default

▸ **default**(`url`, `init?`): `Promise`<[`Response`](../classes/fetch.Response.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | [`RequestInfo`](fetch.md#requestinfo) |
| `init?` | [`RequestInit`](../interfaces/fetch.RequestInit.md) |

#### Returns

`Promise`<[`Response`](../classes/fetch.Response.md)\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:218

___

### fileFrom

▸ **fileFrom**(`path`, `type?`): `Promise`<`File`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | filepath on the disk |
| `type?` | `string` | mimetype to use |

#### Returns

`Promise`<`File`\>

#### Defined in

node_modules/fetch-blob/from.d.ts:20

___

### fileFromSync

▸ **fileFromSync**(`path`, `type?`): `File`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | filepath on the disk |
| `type?` | `string` | mimetype to use |

#### Returns

`File`

#### Defined in

node_modules/fetch-blob/from.d.ts:25

___

### isRedirect

▸ **isRedirect**(`code`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:217
