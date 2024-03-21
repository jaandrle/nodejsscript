[nodejsscript](../README.md) / [s](../modules/s.md) / RunFunction

# Interface: RunFunction

[s](../modules/s.md).RunFunction

## Callable

### RunFunction

▸ **RunFunction**(`command`, `vars?`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value. |
| `vars?` | `Object` | Arguments for `command`. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns an object containing the return code and output as [ShellString](../modules/s.md#shellstring).

### RunFunction

▸ **RunFunction**(`command`, `vars`, `options`): [`ShellString`](../modules/s.md#shellstring)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value. |
| `vars` | ``false`` \| {} | Arguments for `command`. |
| `options` | [`RunOptions`](../modules/s.md#runoptions) | Silence and options. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns an object containing the return code and output as [ShellString](../modules/s.md#shellstring).
