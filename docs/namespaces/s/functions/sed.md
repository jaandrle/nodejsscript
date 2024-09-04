[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / sed

# Function: sed()

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

## Param

Available options:
       - `-i`: Replace contents of 'file' in-place. Note that no backups will be created!

## Param

The regular expression to use for search.

## Param

The replacement.

## Param

The files to process.

## sed(options, searchRegex, replacement, files)

> **sed**(`options`, `searchRegex`, `replacement`, `files`): [`ShellString`](../type-aliases/ShellString.md)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

### Parameters

• **options**: `string`

Available options:
       - `-i`: Replace contents of 'file' in-place. Note that no backups will be created!

• **searchRegex**: `string` \| `RegExp`

The regular expression to use for search.

• **replacement**: `string`

The replacement.

• **files**: `string`[]

The files to process.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

The new string after replacement.

The new string after replacement.

### Param

Available options:
       - `-i`: Replace contents of 'file' in-place. Note that no backups will be created!

### Param

The regular expression to use for search.

### Param

The replacement.

### Param

The files to process.

## sed(options, searchRegex, replacement, files)

> **sed**(`options`, `searchRegex`, `replacement`, ...`files`): [`ShellString`](../type-aliases/ShellString.md)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

### Parameters

• **options**: `string`

• **searchRegex**: `string` \| `RegExp`

• **replacement**: `string`

• ...**files**: `string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)

### Param

Available options:
       - `-i`: Replace contents of 'file' in-place. Note that no backups will be created!

### Param

The regular expression to use for search.

### Param

The replacement.

### Param

The files to process.

## sed(searchRegex, replacement, files)

> **sed**(`searchRegex`, `replacement`, `files`): [`ShellString`](../type-aliases/ShellString.md)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

### Parameters

• **searchRegex**: `string` \| `RegExp`

The regular expression to use for search.

• **replacement**: `string`

The replacement.

• **files**: `string`[]

The files to process.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

The new string after replacement.

The new string after replacement.

### Param

Available options:
       - `-i`: Replace contents of 'file' in-place. Note that no backups will be created!

### Param

The regular expression to use for search.

### Param

The replacement.

### Param

The files to process.

## sed(searchRegex, replacement, files)

> **sed**(`searchRegex`, `replacement`, ...`files`): [`ShellString`](../type-aliases/ShellString.md)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

### Parameters

• **searchRegex**: `string` \| `RegExp`

• **replacement**: `string`

• ...**files**: `string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)

### Param

Available options:
       - `-i`: Replace contents of 'file' in-place. Note that no backups will be created!

### Param

The regular expression to use for search.

### Param

The replacement.

### Param

The files to process.
