[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / MoveFunction

# Interface: MoveFunction()

## Call Signature

> **MoveFunction**(`options`, `source`, `dest`): [`ShellString`](../type-aliases/ShellString.md)

Moves files. The wildcard `*` is accepted.

### Parameters

#### options

`string`

Available options:
       - `-f`: force (default behavior)
       - `-n`: no-clobber

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

> **MoveFunction**(`source`, `dest`): [`ShellString`](../type-aliases/ShellString.md)

Moves files. The wildcard `*` is accepted.

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
