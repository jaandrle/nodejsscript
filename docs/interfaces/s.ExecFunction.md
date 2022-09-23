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

#### Defined in

node_modules/@types/shelljs/index.d.ts:725

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

#### Defined in

node_modules/@types/shelljs/index.d.ts:735

### ExecFunction

▸ **ExecFunction**(`command`, `options`): `ChildProcess`

Executes the given command asynchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `options` | [`ExecOptions`](s.ExecOptions.md) & { `async`: ``true``  } | Silence and synchronous options. |

#### Returns

`ChildProcess`

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:745

### ExecFunction

▸ **ExecFunction**(`command`, `options`): `ChildProcess` \| [`ShellString`](../modules/s.md#shellstring)

Executes the given command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `options` | [`ExecOptions`](s.ExecOptions.md) | Silence and synchronous options. |

#### Returns

`ChildProcess` \| [`ShellString`](../modules/s.md#shellstring)

Returns an object containing the return code and output as string,
               or if `{async: true}` was passed, a `ChildProcess`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:755

### ExecFunction

▸ **ExecFunction**(`command`, `options`, `callback`): `ChildProcess`

Executes the given command synchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `options` | [`ExecOptions`](s.ExecOptions.md) | Silence and synchronous options. |
| `callback` | [`ExecCallback`](../modules/s.md#execcallback) | Receives code and output asynchronously. |

#### Returns

`ChildProcess`

#### Defined in

node_modules/@types/shelljs/index.d.ts:764

### ExecFunction

▸ **ExecFunction**(`command`, `callback`): `ChildProcess`

Executes the given command synchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `callback` | [`ExecCallback`](../modules/s.md#execcallback) | Receives code and output asynchronously. |

#### Returns

`ChildProcess`

#### Defined in

node_modules/@types/shelljs/index.d.ts:772
