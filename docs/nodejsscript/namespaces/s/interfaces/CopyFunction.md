[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / CopyFunction

# Interface: CopyFunction()

## Call Signature

> **CopyFunction**(`options`, `source`, `dest`): [`ShellString`](../type-aliases/ShellString.md)

Copies files. The wildcard `*` is accepted.

### Parameters

#### options

`string`

Available options:
       - `-f`: force (default behavior)
       - `-n`: no-clobber
       - `-u`: only copy if source is newer than dest
       - `-r`, `-R`: recursive
       - `-L`: follow symlinks
       - `-P`: don't follow symlinks

#### source

The source.

`string` | `string`[]

#### dest

`string`

The destination.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

## Call Signature

> **CopyFunction**(`source`, `dest`): [`ShellString`](../type-aliases/ShellString.md)

Copies files. The wildcard `*` is accepted.

### Parameters

#### source

The source.

`string` | `string`[]

#### dest

`string`

The destination.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.
