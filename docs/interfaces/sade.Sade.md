[nodejsscript](../README.md) / [\_\_sade](../modules/_sade.md) / Sade

# Interface: Sade

[__sade](../modules/_sade.md).Sade

## Table of contents

### Methods

- [command](sade.Sade.md#command)
- [option](sade.Sade.md#option)
- [action](sade.Sade.md#action)
- [describe](sade.Sade.md#describe)
- [alias](sade.Sade.md#alias)
- [example](sade.Sade.md#example)
- [parse](sade.Sade.md#parse)
- [version](sade.Sade.md#version)
- [help](sade.Sade.md#help)

## Methods

### command

▸ **command**(`usage`, `description?`, `options?`): [`Sade`](sade.Sade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `usage` | `string` |
| `description?` | `string` |
| `options?` | `Object` |
| `options.alias?` | `Arrayable`<`string`\> |
| `options.default?` | `boolean` |

#### Returns

[`Sade`](sade.Sade.md)

___

### option

▸ **option**(`flag`, `description?`, `value?`): [`Sade`](sade.Sade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `flag` | `string` |
| `description?` | `string` |
| `value?` | [`Value`](../modules/_sade.md#value) |

#### Returns

[`Sade`](sade.Sade.md)

___

### action

▸ **action**(`handler`): [`Sade`](sade.Sade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`Handler`](../modules/_sade.md#handler) |

#### Returns

[`Sade`](sade.Sade.md)

___

### describe

▸ **describe**(`text`): [`Sade`](sade.Sade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `Arrayable`<`string`\> |

#### Returns

[`Sade`](sade.Sade.md)

___

### alias

▸ **alias**(...`names`): [`Sade`](sade.Sade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...names` | `string`[] |

#### Returns

[`Sade`](sade.Sade.md)

___

### example

▸ **example**(`usage`): [`Sade`](sade.Sade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `usage` | `string` |

#### Returns

[`Sade`](sade.Sade.md)

___

### parse

▸ **parse**(`arr`, `opts`): [`LazyOutput`](sade.LazyOutput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `string`[] |
| `opts` | { `lazy`: ``true``  } & `Options` |

#### Returns

[`LazyOutput`](sade.LazyOutput.md)

▸ **parse**(`arr`, `opts?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `string`[] |
| `opts?` | { `lazy?`: `boolean`  } & `Options` |

#### Returns

`void`

___

### version

▸ **version**(`value`): [`Sade`](sade.Sade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Sade`](sade.Sade.md)

___

### help

▸ **help**(`cmd?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmd?` | `string` |

#### Returns

`void`
