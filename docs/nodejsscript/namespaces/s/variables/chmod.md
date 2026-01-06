[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / chmod

# Variable: chmod

> `const` **chmod**: [`ChmodFunction`](../interfaces/ChmodFunction.md)

Alters the permissions of a file or directory by either specifying the absolute
permissions in octal form or expressing the changes in symbols.

This command tries to mimic the POSIX behavior as much as possible.

Notable exceptions:
- In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
- There is no "quiet" option since default behavior is to run silent.

## Param

Available options:
       - `-v`: output a diagnostic for every file processed
       - `-c`: like -v but report only when a change is made
       - `-R`: change files and directories recursively

## Param

The access mode. Can be an octal string or a symbolic mode string.

## Param

The file to use.

## Returns

Object with shell exit code, stderr and stdout.
