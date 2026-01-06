[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / ListFunction

# Interface: ListFunction()

## Call Signature

> **ListFunction**(`options`, `paths`): [`ShellArray`](../type-aliases/ShellArray.md)

Returns array of files in the given path, or in current directory if no path provided.

### Parameters

#### options

`string`

Available options:
       - `-R`: recursive
       - `-A`: all files (include files beginning with ., except for . and ..)
       - `-L`: follow symlinks
       - `-d`: list directories themselves, not their contents
       - `-l`: list objects representing each file, each with fields containing
               `ls -l` output fields. See fs.Stats for more info

#### paths

`string`[]

Paths to search.

### Returns

[`ShellArray`](../type-aliases/ShellArray.md)

An array of files in the given path(s).

## Call Signature

> **ListFunction**(`options`, ...`paths`): [`ShellArray`](../type-aliases/ShellArray.md)

### Parameters

#### options

`string`

#### paths

...`string`[]

### Returns

[`ShellArray`](../type-aliases/ShellArray.md)

## Call Signature

> **ListFunction**(`paths`): [`ShellArray`](../type-aliases/ShellArray.md)

Returns array of files in the given path, or in current directory if no path provided.

### Parameters

#### paths

`string`[]

Paths to search.

### Returns

[`ShellArray`](../type-aliases/ShellArray.md)

An array of files in the given path(s).

## Call Signature

> **ListFunction**(...`paths`): [`ShellArray`](../type-aliases/ShellArray.md)

### Parameters

#### paths

...`string`[]

### Returns

[`ShellArray`](../type-aliases/ShellArray.md)
