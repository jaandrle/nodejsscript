[nodejsscript](../README.md) / [s](../modules/s.md) / CatFunction

# Interface: CatFunction

[s](../modules/s.md).CatFunction

## Callable

### CatFunction

▸ **CatFunction**(`files`): [`ShellString`](../modules/s.md#shellstring)

Returns a string containing the given file, or a concatenated string
containing the files if more than one file is given (a new line character
is introduced between each file).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `files` | `string`[] | Files to use. Wildcard `*` accepted. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

A string containing the given file, or a concatenated string
        containing the files if more than one file is given
        (a new line character is introduced between each file).

#### Defined in

node_modules/@types/shelljs/index.d.ts:267

### CatFunction

▸ **CatFunction**(...`files`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:268
