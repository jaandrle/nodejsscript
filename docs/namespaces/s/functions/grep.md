[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / grep

# Function: grep()

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

## Param

Available options:
       - `-v`: Inverse the sense of the regex and print
               the lines not matching the criteria.
       - `-l`: Print only filenames of matching files

## Param

The regular expression to use.

## Param

The files to process.

## grep(options, regex_filter, files)

> **grep**(`options`, `regex_filter`, `files`): [`ShellString`](../type-aliases/ShellString.md)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

### Parameters

• **options**: `string`

Available options:
       - `-v`: Inverse the sense of the regex and print
               the lines not matching the criteria.
       - `-l`: Print only filenames of matching files

• **regex\_filter**: `string` \| `RegExp`

The regular expression to use.

• **files**: `string`[]

The files to process.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns a string containing all lines of the file that match the given `regex_filter`.

Returns a string containing all lines of the file that match the given regex_filter.

### Param

Available options:
       - `-v`: Inverse the sense of the regex and print
               the lines not matching the criteria.
       - `-l`: Print only filenames of matching files

### Param

The regular expression to use.

### Param

The files to process.

## grep(options, regex_filter, files)

> **grep**(`options`, `regex_filter`, ...`files`): [`ShellString`](../type-aliases/ShellString.md)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

### Parameters

• **options**: `string`

• **regex\_filter**: `string` \| `RegExp`

• ...**files**: `string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)

### Param

Available options:
       - `-v`: Inverse the sense of the regex and print
               the lines not matching the criteria.
       - `-l`: Print only filenames of matching files

### Param

The regular expression to use.

### Param

The files to process.

## grep(regex_filter, files)

> **grep**(`regex_filter`, `files`): [`ShellString`](../type-aliases/ShellString.md)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

### Parameters

• **regex\_filter**: `string` \| `RegExp`

The regular expression to use.

• **files**: `string`[]

The files to process.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns a string containing all lines of the file that match the given `regex_filter`.

Returns a string containing all lines of the file that match the given `regex_filter`.

### Param

Available options:
       - `-v`: Inverse the sense of the regex and print
               the lines not matching the criteria.
       - `-l`: Print only filenames of matching files

### Param

The regular expression to use.

### Param

The files to process.

## grep(regex_filter, files)

> **grep**(`regex_filter`, ...`files`): [`ShellString`](../type-aliases/ShellString.md)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

### Parameters

• **regex\_filter**: `string` \| `RegExp`

• ...**files**: `string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)

### Param

Available options:
       - `-v`: Inverse the sense of the regex and print
               the lines not matching the criteria.
       - `-l`: Print only filenames of matching files

### Param

The regular expression to use.

### Param

The files to process.
