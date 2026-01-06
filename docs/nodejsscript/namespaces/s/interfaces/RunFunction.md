[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / RunFunction

# Interface: RunFunction()

## Call Signature

> **RunFunction**(`command`, `vars?`): [`ShellString`](../type-aliases/ShellString.md)

### Parameters

#### command

`string`

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

#### vars?

Arguments for `command`.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as [ShellString](../variables/ShellString.md).

## Call Signature

> **RunFunction**(`command`, `vars`, `options`): [`ShellString`](../type-aliases/ShellString.md)

### Parameters

#### command

`string`

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

#### vars

Arguments for `command`.

`false` | \{ \}

#### options

[`RunOptions`](../type-aliases/RunOptions.md)

Silence and options.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns an object containing the return code and output as [ShellString](../variables/ShellString.md).
