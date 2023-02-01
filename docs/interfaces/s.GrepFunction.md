[nodejsscript](../README.md) / [s](../modules/s.md) / GrepFunction

# Interface: GrepFunction

[s](../modules/s.md).GrepFunction

## Callable

### GrepFunction

▸ **GrepFunction**(`options`, `regex_filter`, `files`): [`ShellString`](../modules/s.md#shellstring)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options: - `-v`: Inverse the sense of the regex and print the lines not matching the criteria. - `-l`: Print only filenames of matching files |
| `regex_filter` | `string` \| `RegExp` | The regular expression to use. |
| `files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns a string containing all lines of the file that match the given regex_filter.

### GrepFunction

▸ **GrepFunction**(`options`, `regex_filter`, `...files`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` |
| `regex_filter` | `string` \| `RegExp` |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

### GrepFunction

▸ **GrepFunction**(`regex_filter`, `files`): [`ShellString`](../modules/s.md#shellstring)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regex_filter` | `string` \| `RegExp` | The regular expression to use. |
| `files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns a string containing all lines of the file that match the given `regex_filter`.

### GrepFunction

▸ **GrepFunction**(`regex_filter`, `...files`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex_filter` | `string` \| `RegExp` |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring)
