[nodejsscript](../README.md) / [s](../modules/s.md) / RunAsyncFunction

# Interface: RunAsyncFunction

[s](../modules/s.md).RunAsyncFunction

## Callable

### RunAsyncFunction

▸ **RunAsyncFunction**(`command`, `vars`): [`ProcessPromise`](../classes/s.ProcessPromise.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value. |
| `vars` | ``false`` \| {} | Arguments for `command`. |

#### Returns

[`ProcessPromise`](../classes/s.ProcessPromise.md)

### RunAsyncFunction

▸ **RunAsyncFunction**(`command`, `vars`, `options`): [`ProcessPromise`](../classes/s.ProcessPromise.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value. |
| `vars` | ``false`` \| {} | Arguments for `command`. |
| `options` | [`RunOptions`](../modules/s.md#runoptions) | Silence and options. |

#### Returns

[`ProcessPromise`](../classes/s.ProcessPromise.md)
