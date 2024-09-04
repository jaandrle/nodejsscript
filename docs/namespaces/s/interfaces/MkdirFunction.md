[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / MkdirFunction

# Interface: MkdirFunction()

> **MkdirFunction**(`options`, `dir`): [`ShellString`](../type-aliases/ShellString.md)

Creates directories.

## Parameters

• **options**: `string`

Available options:
       - `-p`: full paths, will create intermediate dirs if necessary

• **dir**: `string`[]

The directories to create.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

> **MkdirFunction**(`options`, ...`dir`): [`ShellString`](../type-aliases/ShellString.md)

## Parameters

• **options**: `string`

• ...**dir**: `string`[]

## Returns

[`ShellString`](../type-aliases/ShellString.md)

> **MkdirFunction**(`dir`): [`ShellString`](../type-aliases/ShellString.md)

Creates directories.

## Parameters

• **dir**: `string`[]

Directories to create.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

> **MkdirFunction**(...`dir`): [`ShellString`](../type-aliases/ShellString.md)

## Parameters

• ...**dir**: `string`[]

## Returns

[`ShellString`](../type-aliases/ShellString.md)
