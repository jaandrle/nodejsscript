[nodejsscript](../README.md) / [s](../modules/s.md) / RemoveFunction

# Interface: RemoveFunction

[s](../modules/s.md).RemoveFunction

## Callable

### RemoveFunction

▸ **RemoveFunction**(`options`, `files`): [`ShellString`](../modules/s.md#shellstring)

Removes files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-f`: force        - `-r`, `-R`: recursive |
| `files` | `string`[] | Files to remove. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Object with shell exit code, stderr and stdout.

### RemoveFunction

▸ **RemoveFunction**(`options`, ...`files`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

### RemoveFunction

▸ **RemoveFunction**(`files`): [`ShellString`](../modules/s.md#shellstring)

Removes files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `files` | `string`[] | Files to remove. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Object with shell exit code, stderr and stdout.

### RemoveFunction

▸ **RemoveFunction**(...`files`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...files` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring)
