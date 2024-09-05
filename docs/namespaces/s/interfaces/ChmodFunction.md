[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / ChmodFunction

# Interface: ChmodFunction()

> **ChmodFunction**(`options`, `mode`, `file`): [`ShellString`](../type-aliases/ShellString.md)

Alters the permissions of a file or directory by either specifying the absolute
permissions in octal form or expressing the changes in symbols.

This command tries to mimic the POSIX behavior as much as possible.

Notable exceptions:
- In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
- There is no "quiet" option since default behavior is to run silent.

## Parameters

• **options**: `string`

Available options:
       - `-v`: output a diagnostic for every file processed
       - `-c`: like -v but report only when a change is made
       - `-R`: change files and directories recursively

• **mode**: `string` \| `number`

The access mode. Can be an octal string or a symbolic mode string.

• **file**: `string`

The file to use.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

> **ChmodFunction**(`mode`, `file`): [`ShellString`](../type-aliases/ShellString.md)

Alters the permissions of a file or directory by either specifying the absolute
permissions in octal form or expressing the changes in symbols.

This command tries to mimic the POSIX behavior as much as possible.

Notable exceptions:
- In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
- There is no "quiet" option since default behavior is to run silent.

## Parameters

• **mode**: `string` \| `number`

The access mode. Can be an octal string or a symbolic mode string.

• **file**: `string`

The file to use.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.
