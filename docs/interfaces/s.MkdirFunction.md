[nodejsscript](../README.md) / [s](../modules/s.md) / MkdirFunction

# Interface: MkdirFunction

[s](../modules/s.md).MkdirFunction

## Callable

### MkdirFunction

▸ **MkdirFunction**(`options`, `dir`): [`ShellString`](../modules/s.md#shellstring)

Creates directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-p`: full paths, will create intermediate dirs if necessary |
| `dir` | `string`[] | The directories to create. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Object with shell exit code, stderr and stdout.

### MkdirFunction

▸ **MkdirFunction**(`options`, ...`dir`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` |
| `...dir` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

### MkdirFunction

▸ **MkdirFunction**(`dir`): [`ShellString`](../modules/s.md#shellstring)

Creates directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string`[] | Directories to create. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Object with shell exit code, stderr and stdout.

### MkdirFunction

▸ **MkdirFunction**(...`dir`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...dir` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring)
