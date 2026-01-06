[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / which

# Function: which()

> **which**(`command`): [`ShellString`](../type-aliases/ShellString.md)

Searches for command in the system's PATH. On Windows looks for .exe, .cmd, and .bat extensions.

## Parameters

### command

`string`

The command to search for.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns string containing the absolute path to the command or `null` if it couldn't be found.
