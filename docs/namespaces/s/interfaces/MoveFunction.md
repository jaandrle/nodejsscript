[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / MoveFunction

# Interface: MoveFunction()

> **MoveFunction**(`options`, `source`, `dest`): [`ShellString`](../type-aliases/ShellString.md)

Moves files. The wildcard `*` is accepted.

## Parameters

• **options**: `string`

Available options:
       - `-f`: force (default behavior)
       - `-n`: no-clobber

• **source**: `string` \| `string`[]

The source.

• **dest**: `string`

The destination.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

> **MoveFunction**(`source`, `dest`): [`ShellString`](../type-aliases/ShellString.md)

Moves files. The wildcard `*` is accepted.

## Parameters

• **source**: `string` \| `string`[]

The source.

• **dest**: `string`

The destination.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.
