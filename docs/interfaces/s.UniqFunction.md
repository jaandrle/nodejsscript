[nodejsscript](../README.md) / [s](../modules/s.md) / UniqFunction

# Interface: UniqFunction

[s](../modules/s.md).UniqFunction

## Callable

### UniqFunction

▸ **UniqFunction**(`options`, `input`, `output?`): [`ShellString`](../modules/s.md#shellstring)

Filter adjacent matching lines from input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options: - `-i`: Ignore case while comparing - `-c`: Prefix lines by the number of occurrences - `-d`: Only print duplicate lines, one for each group of identical lines |
| `input` | `string` | - |
| `output?` | `string` | - |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

### UniqFunction

▸ **UniqFunction**(`input`, `output?`): [`ShellString`](../modules/s.md#shellstring)

Filter adjacent matching lines from input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `output?` | `string` |

#### Returns

[`ShellString`](../modules/s.md#shellstring)
