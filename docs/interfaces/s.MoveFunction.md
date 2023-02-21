[nodejsscript](../README.md) / [s](../modules/s.md) / MoveFunction

# Interface: MoveFunction

[s](../modules/s.md).MoveFunction

## Callable

### MoveFunction

▸ **MoveFunction**(`options`, `source`, `dest`): [`ShellString`](../modules/s.md#shellstring)

Moves files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options: - `-f`: force (default behavior) - `-n`: no-clobber |
| `source` | `string` \| `string`[] | The source. |
| `dest` | `string` | The destination. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Object with shell exit code, stderr and stdout.

### MoveFunction

▸ **MoveFunction**(`source`, `dest`): [`ShellString`](../modules/s.md#shellstring)

Moves files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` \| `string`[] | The source. |
| `dest` | `string` | The destination. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Object with shell exit code, stderr and stdout.
