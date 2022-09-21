[nodejsscript](../README.md) / [s](../modules/s.md) / EchoFunction

# Interface: EchoFunction

[s](../modules/s.md).EchoFunction

## Callable

### EchoFunction

▸ **EchoFunction**(`options`, ...`text`): [`ShellString`](../modules/s.md#shellstring-1)

Prints string to stdout, and returns string with additional utility methods like .to().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-e`: interpret backslash escapes (default)        - `-n`: remove trailing newline from output |
| `...text` | `string`[] | The text to print. |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

Returns the string that was passed as argument.

#### Defined in

node_modules/@types/shelljs/index.d.ts:384

### EchoFunction

▸ **EchoFunction**(...`text`): [`ShellString`](../modules/s.md#shellstring-1)

Prints string to stdout, and returns string with additional utility methods like .to().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...text` | `string`[] | The text to print. |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

Returns the string that was passed as argument.

#### Defined in

node_modules/@types/shelljs/index.d.ts:392
