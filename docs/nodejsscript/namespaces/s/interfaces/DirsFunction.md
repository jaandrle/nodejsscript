[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / DirsFunction

# Interface: DirsFunction()

## Call Signature

> **DirsFunction**(`options`): [`ShellArray`](../type-aliases/ShellArray.md)

Clears the directory stack by deleting all of the elements.

### Parameters

#### options

`"-c"`

Clears the directory stack by deleting all of the elements.

### Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack, or a single path if +N or -N was specified.

## Call Signature

> **DirsFunction**(`options`): [`ShellString`](../type-aliases/ShellString.md)

Displays the list of currently remembered directories.

### Parameters

#### options

`"+N"`

Displays the Nth directory (counting from the left of the list
               printed by dirs when invoked without options), starting with zero.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns an array of paths in the stack, or a single path if +N or -N was specified.

## Call Signature

> **DirsFunction**(`options`): [`ShellString`](../type-aliases/ShellString.md)

Displays the list of currently remembered directories.

### Parameters

#### options

`"-N"`

Displays the Nth directory (counting from the right of the list
               printed by dirs when invoked without options), starting with zero.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns an array of paths in the stack, or a single path if +N or -N was specified.

## Call Signature

> **DirsFunction**(`options`): [`ShellString`](../type-aliases/ShellString.md) \| [`ShellArray`](../type-aliases/ShellArray.md)

Displays the list of currently remembered directories.

### Parameters

#### options

`string`

Available options:
       - `-c`: Clears the directory stack by deleting all of the elements.
       - `-N`: Displays the Nth directory (counting from the right of the list
               printed by dirs when invoked without options), starting with zero.
       - `+N`: Displays the Nth directory (counting from the left of the list
               printed by dirs when invoked without options), starting with zero.

### Returns

[`ShellString`](../type-aliases/ShellString.md) \| [`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack, or a single path if +N or -N was specified.
