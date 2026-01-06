[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / pushd

# Variable: pushd

> `const` **pushd**: [`PushDirFunction`](../interfaces/PushDirFunction.md)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

## Param

Available options:
       - `-n`: Suppresses the normal change of directory when adding directories
               to the stack, so that only the stack is manipulated
       - `-q`: Suppresses output to the console.

## Param

Makes the current working directory be the top of the stack,
               and then executes the equivalent of `cd dir`.

## Returns

Returns an array of paths in the stack.
