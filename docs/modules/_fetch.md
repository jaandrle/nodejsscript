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

## Type Aliases

### HeadersInit

Ƭ **HeadersInit**: [`Headers`](../classes/fetch.Headers.md) \| `Record`<`string`, `string`\> \| `Iterable`<readonly [`string`, `string`]\> \| `Iterable`<`Iterable`<`string`\>\>

___

### BodyInit

Ƭ **BodyInit**: `Blob` \| `Buffer` \| `URLSearchParams` \| `FormData` \| `NodeJS.ReadableStream` \| `string`

___

### RequestRedirect

Ƭ **RequestRedirect**: ``"error"`` \| ``"follow"`` \| ``"manual"``

___

### ReferrerPolicy

Ƭ **ReferrerPolicy**: ``""`` \| ``"no-referrer"`` \| ``"no-referrer-when-downgrade"`` \| ``"same-origin"`` \| ``"origin"`` \| ``"strict-origin"`` \| ``"origin-when-cross-origin"`` \| ``"strict-origin-when-cross-origin"`` \| ``"unsafe-url"``

___

### RequestInfo

Ƭ **RequestInfo**: `string` \| [`Request`](../classes/fetch.Request.md)

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

___

### Blob

• `Const` **Blob**: typeof `globalThis.Blob`

___

### File

• `Const` **File**: typeof `globalThis.File`
