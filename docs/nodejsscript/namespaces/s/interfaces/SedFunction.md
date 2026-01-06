[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / SedFunction

# Interface: SedFunction()

## Call Signature

> **SedFunction**(`options`, `searchRegex`, `replacement`, `files`): [`ShellString`](../type-aliases/ShellString.md)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

### Parameters

#### options

`string`

Available options:
       - `-i`: Replace contents of 'file' in-place. Note that no backups will be created!

#### searchRegex

The regular expression to use for search.

`string` | `RegExp`

#### replacement

`string`

The replacement.

#### files

`string`[]

The files to process.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

The new string after replacement.

## Call Signature

> **SedFunction**(`options`, `searchRegex`, `replacement`, ...`files`): [`ShellString`](../type-aliases/ShellString.md)

### Parameters

#### options

`string`

#### searchRegex

`string` | `RegExp`

#### replacement

`string`

#### files

...`string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)

## Call Signature

> **SedFunction**(`searchRegex`, `replacement`, `files`): [`ShellString`](../type-aliases/ShellString.md)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

### Parameters

#### searchRegex

The regular expression to use for search.

`string` | `RegExp`

#### replacement

`string`

The replacement.

#### files

`string`[]

The files to process.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

The new string after replacement.

## Call Signature

> **SedFunction**(`searchRegex`, `replacement`, ...`files`): [`ShellString`](../type-aliases/ShellString.md)

### Parameters

#### searchRegex

`string` | `RegExp`

#### replacement

`string`

#### files

...`string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)
