[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [$](../README.md) / STDIN

# Interface: STDIN

## Properties

### text()

> **text**: \<`T`\>(`_default`) => `string` \| `T`

Returns stdin as a text.

#### Type Parameters

• **T**

#### Parameters

• **\_default**: `T`

Default value when no stdin.

#### Returns

`string` \| `T`

***

### json()

> **json**: \<`T`\>(`_default`) => `string` \| `T`

Returns stdin processed by `JSON.parse`.

#### Type Parameters

• **T**

#### Parameters

• **\_default**: `T`

Default value when no stdin.

#### Returns

`string` \| `T`

***

### lines()

> **lines**: \<`T`\>(`_default`) => `string`[] \| `T`

Returns stdin as an array of lines.

#### Type Parameters

• **T**

#### Parameters

• **\_default**: `T`

Default value when no stdin.

#### Returns

`string`[] \| `T`
