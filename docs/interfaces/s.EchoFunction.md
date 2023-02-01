[nodejsscript](../README.md) / [s](../modules/s.md) / EchoFunction

# Interface: EchoFunction

[s](../modules/s.md).EchoFunction

## Callable

### EchoFunction

▸ **EchoFunction**(`options`, `...text`): [`ShellString`](../modules/s.md#shellstring)

Prints string to stdout, and returns string with additional utility methods like .to().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options: - `-e`: interpret backslash escapes (default) - `-n`: remove trailing newline from output |
| `...text` | `string`[] | The text to print. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns the string that was passed as argument.

### EchoFunction

▸ **EchoFunction**(`...text`): [`ShellString`](../modules/s.md#shellstring)

Prints string to stdout, and returns string with additional utility methods like .to().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...text` | `string`[] | The text to print. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns the string that was passed as argument.
