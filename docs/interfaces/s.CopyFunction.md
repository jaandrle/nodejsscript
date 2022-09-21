[nodejsscript](../README.md) / [s](../modules/s.md) / CopyFunction

# Interface: CopyFunction

[s](../modules/s.md).CopyFunction

## Callable

### CopyFunction

▸ **CopyFunction**(`options`, `source`, `dest`): [`ShellString`](../modules/s.md#shellstring-1)

Copies files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-f`: force (default behavior)        - `-n`: no-clobber        - `-u`: only copy if source is newer than dest        - `-r`, `-R`: recursive        - `-L`: follow symlinks        - `-P`: don't follow symlinks |
| `source` | `string` \| `string`[] | The source. |
| `dest` | `string` | The destination. |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:108

### CopyFunction

▸ **CopyFunction**(`source`, `dest`): [`ShellString`](../modules/s.md#shellstring-1)

Copies files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` \| `string`[] | The source. |
| `dest` | `string` | The destination. |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:117
