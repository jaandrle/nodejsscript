[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / LinkFunction

# Interface: LinkFunction()

> **LinkFunction**(`options`, `source`, `dest`): [`ShellString`](../type-aliases/ShellString.md)

Links source to dest. Use `-f` to force the link, should dest already exist.

## Parameters

• **options**: `string`

Available options:
       - `-s`: Create a symbolic link, defaults to a hardlink
       - `-f`: Force creation

• **source**: `string`

The source.

• **dest**: `string`

The destination.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

> **LinkFunction**(`source`, `dest`): [`ShellString`](../type-aliases/ShellString.md)

Links source to dest. Use `-f` to force the link, should dest already exist.

## Parameters

• **source**: `string`

The source.

• **dest**: `string`

The destination.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.
