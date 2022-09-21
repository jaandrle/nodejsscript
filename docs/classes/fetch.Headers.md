[nodejsscript](../README.md) / [fetch](../modules/fetch.md) / Headers

# Class: Headers

[fetch](../modules/fetch.md).Headers

This Fetch API interface allows you to perform various actions on HTTP request and response headers.
These actions include retrieving, setting, adding to, and removing.
A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
You can add to this using methods like append() (see Examples.)
In all methods of this interface, header names are matched by case-insensitive byte sequence.

## Table of contents

### Constructors

- [constructor](fetch.Headers.md#constructor)

### Methods

- [[iterator]](fetch.Headers.md#[iterator])
- [append](fetch.Headers.md#append)
- [delete](fetch.Headers.md#delete)
- [entries](fetch.Headers.md#entries)
- [forEach](fetch.Headers.md#foreach)
- [get](fetch.Headers.md#get)
- [has](fetch.Headers.md#has)
- [keys](fetch.Headers.md#keys)
- [raw](fetch.Headers.md#raw)
- [set](fetch.Headers.md#set)
- [values](fetch.Headers.md#values)

## Constructors

### constructor

• **new Headers**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | [`HeadersInit`](../modules/fetch.md#headersinit) |

#### Defined in

node_modules/node-fetch/@types/index.d.ts:41

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, `string`]\>

#### Returns

`IterableIterator`<[`string`, `string`]\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:53

___

### append

▸ **append**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:43

___

### delete

▸ **delete**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:44

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, `string`]\>

Returns an iterator allowing to go through all key/value pairs contained in this object.

#### Returns

`IterableIterator`<[`string`, `string`]\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:57

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

#### Defined in

node_modules/node-fetch/@types/index.d.ts:48

___

### get

▸ **get**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:45

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:46

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.

#### Returns

`IterableIterator`<`string`\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:61

___

### raw

▸ **raw**(): `Record`<`string`, `string`[]\>

Node-fetch extension

#### Returns

`Record`<`string`, `string`[]\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:68

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

#### Defined in

node_modules/node-fetch/@types/index.d.ts:47

___

### values

▸ **values**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all values of the key/value pairs contained in this object.

#### Returns

`IterableIterator`<`string`\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:65
