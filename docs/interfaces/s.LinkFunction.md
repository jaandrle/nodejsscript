[nodejsscript](../README.md) / [s](../modules/s.md) / LinkFunction

# Interface: LinkFunction

[s](../modules/s.md).LinkFunction

## Callable

### LinkFunction

▸ **LinkFunction**(`options`, `source`, `dest`): [`ShellString`](../modules/s.md#shellstring)

Links source to dest. Use `-f` to force the link, should dest already exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-s`: Create a symbolic link, defaults to a hardlink        - `-f`: Force creation |
| `source` | `string` | The source. |
| `dest` | `string` | The destination. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:680

### LinkFunction

▸ **LinkFunction**(`source`, `dest`): [`ShellString`](../modules/s.md#shellstring)

Links source to dest. Use `-f` to force the link, should dest already exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | The source. |
| `dest` | `string` | The destination. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:689
