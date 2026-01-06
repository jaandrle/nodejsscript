[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / RemoveFunction

# Interface: RemoveFunction()

## Call Signature

> **RemoveFunction**(`options`, `files`): [`ShellString`](../type-aliases/ShellString.md)

Removes files. The wildcard `*` is accepted.

### Parameters

#### options

`string`

Available options:
       - `-f`: force
       - `-r`, `-R`: recursive

#### files

`string`[]

Files to remove.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

## Call Signature

> **RemoveFunction**(`options`, ...`files`): [`ShellString`](../type-aliases/ShellString.md)

### Parameters

#### options

`string`

#### files

...`string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)

## Call Signature

> **RemoveFunction**(`files`): [`ShellString`](../type-aliases/ShellString.md)

Removes files. The wildcard `*` is accepted.

### Parameters

#### files

`string`[]

Files to remove.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

## Call Signature

> **RemoveFunction**(...`files`): [`ShellString`](../type-aliases/ShellString.md)

### Parameters

#### files

...`string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)
