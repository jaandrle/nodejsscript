[nodejsscript](../README.md) / [s](../modules/s.md) / SedFunction

# Interface: SedFunction

[s](../modules/s.md).SedFunction

## Callable

### SedFunction

▸ **SedFunction**(`options`, `searchRegex`, `replacement`, `files`): [`ShellString`](../modules/s.md#shellstring)

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

[`ShellString`](../modules/s.md#shellstring)

The new string after replacement.

### SedFunction

▸ **SedFunction**(`options`, `searchRegex`, `replacement`, ...`files`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` |
| `searchRegex` | `string` \| `RegExp` |
| `replacement` | `string` |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

### SedFunction

▸ **SedFunction**(`searchRegex`, `replacement`, `files`): [`ShellString`](../modules/s.md#shellstring)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchRegex` | `string` \| `RegExp` | The regular expression to use for search. |
| `replacement` | `string` | The replacement. |
| `files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

The new string after replacement.

### SedFunction

▸ **SedFunction**(`searchRegex`, `replacement`, ...`files`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchRegex` | `string` \| `RegExp` |
| `replacement` | `string` |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring)
