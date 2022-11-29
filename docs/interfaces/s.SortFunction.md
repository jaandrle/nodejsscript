[nodejsscript](../README.md) / [s](../modules/s.md) / SortFunction

# Interface: SortFunction

[s](../modules/s.md).SortFunction

## Callable

### SortFunction

▸ **SortFunction**(`options`, `files`): [`ShellString`](../modules/s.md#shellstring)

Return the contents of the files, sorted line-by-line.
Sorting multiple files mixes their content (just as unix sort does).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-r`: Reverse the results        - `-n`: Compare according to numerical value |
| `files` | `string`[] | - |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

### SortFunction

▸ **SortFunction**(`options`, ...`files`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

### SortFunction

▸ **SortFunction**(`files`): [`ShellString`](../modules/s.md#shellstring)

Return the contents of the files, sorted line-by-line.
Sorting multiple files mixes their content (just as unix sort does).

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

### SortFunction

▸ **SortFunction**(...`files`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring)
