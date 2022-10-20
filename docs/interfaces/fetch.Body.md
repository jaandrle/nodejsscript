[nodejsscript](../README.md) / [\_\_fetch](../modules/_fetch.md) / Body

# Interface: Body

[__fetch](../modules/_fetch.md).Body

## Hierarchy

- `Pick`<`BodyMixin`, keyof `BodyMixin`\>

  ↳ **`Body`**

## Table of contents

### Methods

- [buffer](fetch.Body.md#buffer)
- [formData](fetch.Body.md#formdata)
- [text](fetch.Body.md#text)
- [blob](fetch.Body.md#blob)
- [json](fetch.Body.md#json)
- [arrayBuffer](fetch.Body.md#arraybuffer)

### Properties

- [body](fetch.Body.md#body)
- [size](fetch.Body.md#size)
- [bodyUsed](fetch.Body.md#bodyused)

## Methods

### buffer

▸ **buffer**(): `Promise`<`Buffer`\>

**`Deprecated`**

Use `body.arrayBuffer()` instead.

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

Pick.buffer

___

### formData

▸ **formData**(): `Promise`<`FormData`\>

#### Returns

`Promise`<`FormData`\>

#### Inherited from

Pick.formData

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

Pick.text

___

### blob

▸ **blob**(): `Promise`<`Blob`\>

#### Returns

`Promise`<`Blob`\>

#### Inherited from

Pick.blob

___

### json

▸ **json**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Inherited from

Pick.json

___

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

Pick.arrayBuffer

## Properties

### body

• `Readonly` **body**: `ReadableStream`

#### Inherited from

Pick.body

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Pick.size

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Inherited from

Pick.bodyUsed
