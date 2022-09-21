[nodejsscript](../README.md) / [s](../modules/s.md) / XargsFunction

# Interface: XargsFunction

[s](../modules/s.md).XargsFunction

## Callable

### XargsFunction

▸ **XargsFunction**<`T`\>(`options`, `I_arg`, `cmd`, ...`cmd_args`): `ReturnType`<`T`\>

Works as `xargs` in bash, only `-I` option is supported.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:     - `-I`: Next parameter represents to be replaced in `cmd_args`. |
| `I_arg` | `string` | Defaults to `{}` |
| `cmd` | `T` | ShellJS method from [ShellReturnValue](s.ShellReturnValue.md) |
| `...cmd_args` | `Parameters`<`T`\> | Arguments for `cmd` |

#### Returns

`ReturnType`<`T`\>

Result of `cmd`

#### Defined in

[src/shelljs.d.ts:14](https://github.com/jaandrle/nodejsscript/blob/fe6a3a4/src/shelljs.d.ts#L14)

### XargsFunction

▸ **XargsFunction**<`T`\>(`cmd`, ...`cmd_args`): `ReturnType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmd` | `T` |
| `...cmd_args` | `Parameters`<`T`\> |

#### Returns

`ReturnType`<`T`\>

#### Defined in

[src/shelljs.d.ts:15](https://github.com/jaandrle/nodejsscript/blob/fe6a3a4/src/shelljs.d.ts#L15)
