[nodejsscript](../README.md) / \_\_fetch

# Namespace: \_\_fetch

## Table of contents

### Functions

- [isRedirect](_fetch.md#isredirect)
- [default](_fetch.md#default)
- [blobFrom](_fetch.md#blobfrom)
- [blobFromSync](_fetch.md#blobfromsync)
- [fileFrom](_fetch.md#filefrom)
- [fileFromSync](_fetch.md#filefromsync)

### Type Aliases

- [HeadersInit](_fetch.md#headersinit)
- [BodyInit](_fetch.md#bodyinit)
- [RequestRedirect](_fetch.md#requestredirect)
- [ReferrerPolicy](_fetch.md#referrerpolicy)
- [RequestInfo](_fetch.md#requestinfo)

### Variables

- [FormData](_fetch.md#formdata)
- [Blob](_fetch.md#blob)
- [File](_fetch.md#file)

### Classes

- [Headers](../classes/fetch.Headers.md)
- [Request](../classes/fetch.Request.md)
- [Response](../classes/fetch.Response.md)
- [FetchError](../classes/fetch.FetchError.md)
- [AbortError](../classes/fetch.AbortError.md)

### Interfaces

- [RequestInit](../interfaces/fetch.RequestInit.md)
- [ResponseInit](../interfaces/fetch.ResponseInit.md)
- [Body](../interfaces/fetch.Body.md)

## Functions

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

___

### default

▸ **default**(`url`, `init?`): `Promise`<[`Response`](../classes/fetch.Response.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | [`RequestInfo`](_fetch.md#requestinfo) |
| `init?` | [`RequestInit`](../interfaces/fetch.RequestInit.md) |

#### Returns

`Promise`<[`Response`](../classes/fetch.Response.md)\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:218

___

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

## Type Aliases

### HeadersInit

Ƭ **HeadersInit**: [`Headers`](../classes/fetch.Headers.md) \| `Record`<`string`, `string`\> \| `Iterable`<readonly [`string`, `string`]\> \| `Iterable`<`Iterable`<`string`\>\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:21

___

### BodyInit

Ƭ **BodyInit**: `Blob` \| `Buffer` \| `URLSearchParams` \| `FormData` \| `NodeJS.ReadableStream` \| `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:120

___

### RequestRedirect

Ƭ **RequestRedirect**: ``"error"`` \| ``"follow"`` \| ``"manual"``

#### Defined in

node_modules/node-fetch/@types/index.d.ts:146

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

## Variables

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

___

### Blob

• `Const` **Blob**: typeof `globalThis.Blob`

#### Defined in

node_modules/fetch-blob/index.d.ts:2

___

### File

• `Const` **File**: typeof `globalThis.File`

#### Defined in

node_modules/fetch-blob/file.d.ts:1
