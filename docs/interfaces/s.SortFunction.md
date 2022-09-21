[nodejsscript](../README.md) / [s](../modules/s.md) / SortFunction

# Interface: SortFunction

[s](../modules/s.md).SortFunction

## Callable

### SortFunction

▸ **SortFunction**(`options`, `files`): [`ShellString`](../modules/s.md#shellstring-1)

Return the contents of the files, sorted line-by-line.
Sorting multiple files mixes their content (just as unix sort does).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-r`: Reverse the results        - `-n`: Compare according to numerical value |
| `files` | `string`[] | - |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1111

### SortFunction

▸ **SortFunction**(`options`, ...`files`): [`ShellString`](../modules/s.md#shellstring-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1112

### SortFunction

▸ **SortFunction**(`files`): [`ShellString`](../modules/s.md#shellstring-1)

Return the contents of the files, sorted line-by-line.
Sorting multiple files mixes their content (just as unix sort does).

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1118

### SortFunction

▸ **SortFunction**(...`files`): [`ShellString`](../modules/s.md#shellstring-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1119
