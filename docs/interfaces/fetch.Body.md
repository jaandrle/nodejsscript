[nodejsscript](../README.md) / [fetch](../modules/fetch.md) / Body

# Interface: Body

[fetch](../modules/fetch.md).Body

## Hierarchy

- `Pick`<`BodyMixin`, keyof `BodyMixin`\>

  ↳ **`Body`**

## Table of contents

### Properties

- [body](fetch.Body.md#body)
- [bodyUsed](fetch.Body.md#bodyused)
- [size](fetch.Body.md#size)

### Methods

- [arrayBuffer](fetch.Body.md#arraybuffer)
- [blob](fetch.Body.md#blob)
- [buffer](fetch.Body.md#buffer)
- [formData](fetch.Body.md#formdata)
- [json](fetch.Body.md#json)
- [text](fetch.Body.md#text)

## Properties

### body

• `Readonly` **body**: `ReadableStream`

#### Inherited from

Pick.body

#### Defined in

node_modules/node-fetch/@types/index.d.ts:130

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Inherited from

Pick.bodyUsed

#### Defined in

node_modules/node-fetch/@types/index.d.ts:131

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Pick.size

#### Defined in

node_modules/node-fetch/@types/index.d.ts:132

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

Pick.arrayBuffer

#### Defined in

node_modules/node-fetch/@types/index.d.ts:136

___

### blob

▸ **blob**(): `Promise`<`Blob`\>

#### Returns

`Promise`<`Blob`\>

#### Inherited from

Pick.blob

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

Pick.buffer

#### Defined in

node_modules/node-fetch/@types/index.d.ts:135

___

### formData

▸ **formData**(): `Promise`<`FormData`\>

#### Returns

`Promise`<`FormData`\>

#### Inherited from

Pick.formData

#### Defined in

node_modules/node-fetch/@types/index.d.ts:137

___

### json

▸ **json**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Inherited from

Pick.json

#### Defined in

node_modules/node-fetch/@types/index.d.ts:139

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

Pick.text

#### Defined in

node_modules/node-fetch/@types/index.d.ts:140
