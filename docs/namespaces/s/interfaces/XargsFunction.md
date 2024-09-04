[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / XargsFunction

# Interface: XargsFunction()

> **XargsFunction**\<`T`\>(`options`, `cmd`, ...`cmd_args`): `ReturnType`\<`T`\>

Works as `xargs` in bash, only `-I` option is supported.
```js
s.run("git branch --show-current").xargs(s.run, "dep deploy --branch={}");
s.run("git branch --show-current").xargs({ "-I": "§" }, s.run, "dep deploy --branch=§");
```
*xarg() by default escapes piped string, this can be off by passing `-R` option.*

## Type Parameters

• **T** *extends* (...`args`) => `any`

## Parameters

• **options**: [`XargsOptions`](XargsOptions.md)

Defaults to `-I {}`

• **cmd**: `T`

ShellJS method from [ShellReturnValue](ShellReturnValue.md)

• ...**cmd\_args**: `Parameters`\<`T`\>

Arguments for `cmd`

## Returns

`ReturnType`\<`T`\>

Result of `cmd`

> **XargsFunction**\<`T`\>(`cmd`, ...`cmd_args`): `ReturnType`\<`T`\>

## Type Parameters

• **T** *extends* (...`args`) => `any`

## Parameters

• **cmd**: `T`

• ...**cmd\_args**: `Parameters`\<`T`\>

## Returns

`ReturnType`\<`T`\>
