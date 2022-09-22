[nodejsscript](../README.md) / [s](../modules/s.md) / XargsFunction

# Interface: XargsFunction

[s](../modules/s.md).XargsFunction

## Callable

### XargsFunction

▸ **XargsFunction**<`T`\>(`options`, `cmd`, ...`cmd_args`): `ReturnType`<`T`\>

Works as `xargs` in bash, only `-I` option is supported.
```js
s.exec("git branch --show-current").xargs(s.exec, "dep deploy --branch={}");
s.exec("git branch --show-current").xargs({ "-I": "§" }, s.exec, "dep deploy --branch=§");
```
 *

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`XargsOptions`](s.XargsOptions.md) | Defaults to `-I {}`  * |
| `cmd` | `T` | ShellJS method from [ShellReturnValue](s.ShellReturnValue.md)  * |
| `...cmd_args` | `Parameters`<`T`\> | Arguments for `cmd`  * |

#### Returns

`ReturnType`<`T`\>

Result of `cmd`

#### Defined in

[src/shelljs.d.ts:20](https://github.com/jaandrle/nodejsscript/blob/002debc/src/shelljs.d.ts#L20)

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

[src/shelljs.d.ts:21](https://github.com/jaandrle/nodejsscript/blob/002debc/src/shelljs.d.ts#L21)
