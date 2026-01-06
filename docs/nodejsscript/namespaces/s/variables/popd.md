[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / popd

# Variable: popd

> `const` **popd**: [`PopDirFunction`](../interfaces/PopDirFunction.md)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

## Param

Available options:
       - `-n`: Suppresses the normal change of directory when removing directories
               from the stack, so that only the stack is manipulated
       - `-q`: Suppresses output to the console.

## Param

You can only use -N and +N.

## Returns

Returns an array of paths in the stack.
