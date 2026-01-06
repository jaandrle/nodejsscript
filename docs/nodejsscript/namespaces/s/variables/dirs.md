[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / dirs

# Variable: dirs

> `const` **dirs**: [`DirsFunction`](../interfaces/DirsFunction.md)

Displays the list of currently remembered directories.

## Param

Available options:
       - `-c`: Clears the directory stack by deleting all of the elements.
       - `-N`: Displays the Nth directory (counting from the right of the list
               printed by dirs when invoked without options), starting with zero.
       - `+N`: Displays the Nth directory (counting from the left of the list
               printed by dirs when invoked without options), starting with zero.

## Returns

Returns an array of paths in the stack, or a single path if +N or -N was specified.
