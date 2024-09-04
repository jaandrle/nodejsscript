[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / RunFunction

# Interface: RunFunction()

> **RunFunction**(`command`, `vars`?): [`ShellString`](../type-aliases/ShellString.md)

## Parameters

• **command**: `string`

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

• **vars?**

Arguments for `command`.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as [ShellString](../variables/ShellString.md).

> **RunFunction**(`command`, `vars`, `options`): [`ShellString`](../type-aliases/ShellString.md)

## Parameters

• **command**: `string`

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

• **vars**: `false` \| `object`

Arguments for `command`.

• **options**: [`RunOptions`](../type-aliases/RunOptions.md)

Silence and options.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as [ShellString](../variables/ShellString.md).
