[nodejsscript](../README.md) / [\_\_fetch](../modules/_fetch.md) / Headers

# Class: Headers

[__fetch](../modules/_fetch.md).Headers

This Fetch API interface allows you to perform various actions on HTTP request and response headers.
These actions include retrieving, setting, adding to, and removing.
A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
You can add to this using methods like append() (see Examples.)
In all methods of this interface, header names are matched by case-insensitive byte sequence.

## Table of contents

### Constructors

- [constructor](fetch.Headers.md#constructor)

### Methods

- [append](fetch.Headers.md#append)
- [delete](fetch.Headers.md#delete)
- [get](fetch.Headers.md#get)
- [has](fetch.Headers.md#has)
- [set](fetch.Headers.md#set)
- [forEach](fetch.Headers.md#foreach)
- [entries](fetch.Headers.md#entries)
- [keys](fetch.Headers.md#keys)
- [values](fetch.Headers.md#values)
- [raw](fetch.Headers.md#raw)
- [[iterator]](fetch.Headers.md#[iterator])

## Constructors

### constructor

• **new Headers**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | [`HeadersInit`](../modules/_fetch.md#headersinit) |

## Methods

### append

▸ **append**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

___

### delete

▸ **delete**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

___

### get

▸ **get**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

___

### set

▸ **set**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`Headers`](fetch.Headers.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, `string`]\>

Returns an iterator allowing to go through all key/value pairs contained in this object.

#### Returns

`IterableIterator`<[`string`, `string`]\>

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.

#### Returns

`IterableIterator`<`string`\>

___

### values

▸ **values**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all values of the key/value pairs contained in this object.

#### Returns

`IterableIterator`<`string`\>

___

### raw

▸ **raw**(): `Record`<`string`, `string`[]\>

Node-fetch extension

#### Returns

`Record`<`string`, `string`[]\>

___

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, `string`]\>

#### Returns

`IterableIterator`<[`string`, `string`]\>
