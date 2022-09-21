[nodejsscript](../README.md) / [s](../modules/s.md) / SedFunction

# Interface: SedFunction

[s](../modules/s.md).SedFunction

## Callable

### SedFunction

▸ **SedFunction**(`options`, `searchRegex`, `replacement`, `files`): [`ShellString`](../modules/s.md#shellstring-1)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-i`: Replace contents of 'file' in-place. Note that no backups will be created! |
| `searchRegex` | `string` \| `RegExp` | The regular expression to use for search. |
| `replacement` | `string` | The replacement. |
| `files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

The new string after replacement.

#### Defined in

node_modules/@types/shelljs/index.d.ts:295

### SedFunction

▸ **SedFunction**(`options`, `searchRegex`, `replacement`, ...`files`): [`ShellString`](../modules/s.md#shellstring-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` |
| `searchRegex` | `string` \| `RegExp` |
| `replacement` | `string` |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

#### Defined in

node_modules/@types/shelljs/index.d.ts:296

### SedFunction

▸ **SedFunction**(`searchRegex`, `replacement`, `files`): [`ShellString`](../modules/s.md#shellstring-1)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchRegex` | `string` \| `RegExp` | The regular expression to use for search. |
| `replacement` | `string` | The replacement. |
| `files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

The new string after replacement.

#### Defined in

node_modules/@types/shelljs/index.d.ts:307

### SedFunction

▸ **SedFunction**(`searchRegex`, `replacement`, ...`files`): [`ShellString`](../modules/s.md#shellstring-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchRegex` | `string` \| `RegExp` |
| `replacement` | `string` |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

#### Defined in

node_modules/@types/shelljs/index.d.ts:308
