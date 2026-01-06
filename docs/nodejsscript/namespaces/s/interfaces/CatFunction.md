[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / CatFunction

# Interface: CatFunction()

## Call Signature

> **CatFunction**(`files`): [`ShellString`](../type-aliases/ShellString.md)

Returns a string containing the given file, or a concatenated string
containing the files if more than one file is given (a new line character
is introduced between each file).

### Parameters

#### files

`string`[]

Files to use. Wildcard `*` accepted.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

A string containing the given file, or a concatenated string
        containing the files if more than one file is given
        (a new line character is introduced between each file).

## Call Signature

> **CatFunction**(...`files`): [`ShellString`](../type-aliases/ShellString.md)

### Parameters

#### files

...`string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)
