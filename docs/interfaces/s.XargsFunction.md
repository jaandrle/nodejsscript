[nodejsscript](../README.md) / [s](../modules/s.md) / XargsFunction

# Interface: XargsFunction

[s](../modules/s.md).XargsFunction

## Callable

### XargsFunction

▸ **XargsFunction**<`T`\>(`options`, `cmd`, `...cmd_args`): `ReturnType`<`T`\>

Works as `xargs` in bash, only `-I` option is supported.
```js
s.run("git branch --show-current").xargs(s.run, "dep deploy --branch={}");
s.run("git branch --show-current").xargs({ "-I": "§" }, s.run, "dep deploy --branch=§");
```
*xarg() by default escapes piped string, this can be off by passing `-R` option.*

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`XargsOptions`](s.XargsOptions.md) | Defaults to `-I {}` |
| `cmd` | `T` | ShellJS method from [ShellReturnValue](s.ShellReturnValue.md) |
| `...cmd_args` | `Parameters`<`T`\> | Arguments for `cmd` |

#### Returns

`ReturnType`<`T`\>

Result of `cmd`

### XargsFunction

▸ **XargsFunction**<`T`\>(`cmd`, `...cmd_args`): `ReturnType`<`T`\>

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
