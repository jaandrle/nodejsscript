[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / SortFunction

# Interface: SortFunction()

> **SortFunction**(`options`, `files`): [`ShellString`](../type-aliases/ShellString.md)

Return the contents of the files, sorted line-by-line.
Sorting multiple files mixes their content (just as unix sort does).

## Parameters

• **options**: `string`

Available options:
       - `-r`: Reverse the results
       - `-n`: Compare according to numerical value

• **files**: `string`[]

## Returns

[`ShellString`](../type-aliases/ShellString.md)

> **SortFunction**(`options`, ...`files`): [`ShellString`](../type-aliases/ShellString.md)

## Parameters

• **options**: `string`

• ...**files**: `string`[]

## Returns

[`ShellString`](../type-aliases/ShellString.md)

> **SortFunction**(`files`): [`ShellString`](../type-aliases/ShellString.md)

Return the contents of the files, sorted line-by-line.
Sorting multiple files mixes their content (just as unix sort does).

## Parameters

• **files**: `string`[]

## Returns

[`ShellString`](../type-aliases/ShellString.md)

> **SortFunction**(...`files`): [`ShellString`](../type-aliases/ShellString.md)

## Parameters

• ...**files**: `string`[]

## Returns

[`ShellString`](../type-aliases/ShellString.md)
