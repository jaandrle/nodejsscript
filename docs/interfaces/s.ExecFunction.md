[nodejsscript](../README.md) / [s](../modules/s.md) / ExecFunction

# Interface: ExecFunction

[s](../modules/s.md).ExecFunction

## Callable

### ExecFunction

▸ **ExecFunction**(`command`): [`ShellString`](../modules/s.md#shellstring)

Executes the given command synchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns an object containing the return code and output as string.

### ExecFunction

▸ **ExecFunction**(`command`, `options`): [`ShellString`](../modules/s.md#shellstring)

Executes the given command synchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `options` | [`ExecOptions`](s.ExecOptions.md) & { `async?`: ``false``  } | Silence and synchronous options. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

### ExecFunction

▸ **ExecFunction**(`command`, `options`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

Executes the given command asynchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `options` | [`ExecOptions`](s.ExecOptions.md) & { `async`: ``true``  } | Silence and synchronous options. |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

### ExecFunction

▸ **ExecFunction**(`command`, `options`): [`ChildProcess`](../classes/s.child.ChildProcess.md) \| [`ShellString`](../modules/s.md#shellstring)

Executes the given command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `options` | [`ExecOptions`](s.ExecOptions.md) | Silence and synchronous options. |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md) \| [`ShellString`](../modules/s.md#shellstring)

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

### ExecFunction

▸ **ExecFunction**(`command`, `options`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

Executes the given command synchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `options` | [`ExecOptions`](s.ExecOptions.md) | Silence and synchronous options. |
| `callback` | [`ExecCallback`](../modules/s.md#execcallback) | Receives code and output asynchronously. |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

### ExecFunction

▸ **ExecFunction**(`command`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

Executes the given command synchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `callback` | [`ExecCallback`](../modules/s.md#execcallback) | Receives code and output asynchronously. |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)
