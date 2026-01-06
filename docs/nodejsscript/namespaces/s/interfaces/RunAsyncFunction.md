[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / RunAsyncFunction

# Interface: RunAsyncFunction()

## Call Signature

> **RunAsyncFunction**(`command`, `vars`): [`ProcessPromise`](../classes/ProcessPromise.md)

### Parameters

#### command

`string`

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

#### vars

Arguments for `command`.

`false` | \{ \}

### Returns

[`ProcessPromise`](../classes/ProcessPromise.md)

## Call Signature

> **RunAsyncFunction**(`command`, `vars`, `options`): [`ProcessPromise`](../classes/ProcessPromise.md)

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

[`ProcessPromise`](../classes/ProcessPromise.md)
