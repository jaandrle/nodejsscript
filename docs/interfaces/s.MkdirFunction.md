[nodejsscript](../README.md) / [s](../modules/s.md) / MkdirFunction

# Interface: MkdirFunction

[s](../modules/s.md).MkdirFunction

## Callable

### MkdirFunction

▸ **MkdirFunction**(`options`, `dir`): [`ShellString`](../modules/s.md#shellstring-1)

Creates directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-p`: full paths, will create intermediate dirs if necessary |
| `dir` | `string`[] | The directories to create. |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:214

### MkdirFunction

▸ **MkdirFunction**(`options`, ...`dir`): [`ShellString`](../modules/s.md#shellstring-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` |
| `...dir` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

#### Defined in

node_modules/@types/shelljs/index.d.ts:215

### MkdirFunction

▸ **MkdirFunction**(`dir`): [`ShellString`](../modules/s.md#shellstring-1)

Creates directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string`[] | Directories to create. |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:223

### MkdirFunction

▸ **MkdirFunction**(...`dir`): [`ShellString`](../modules/s.md#shellstring-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...dir` | `string`[] |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

#### Defined in

node_modules/@types/shelljs/index.d.ts:224
