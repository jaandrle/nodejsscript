[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / RunAsyncFunction

# Interface: RunAsyncFunction()

> **RunAsyncFunction**(`command`, `vars`): [`ProcessPromise`](../classes/ProcessPromise.md)

## Parameters

• **command**: `string`

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

• **vars**: `false` \| `object`

Arguments for `command`.

## Returns

[`ProcessPromise`](../classes/ProcessPromise.md)

> **RunAsyncFunction**(`command`, `vars`, `options`): [`ProcessPromise`](../classes/ProcessPromise.md)

## Parameters

• **command**: `string`

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

• **vars**: `false` \| `object`

Arguments for `command`.

• **options**: [`RunOptions`](../type-aliases/RunOptions.md)

Silence and options.

## Returns

[`ProcessPromise`](../classes/ProcessPromise.md)
