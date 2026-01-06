[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / MkdirFunction

# Interface: MkdirFunction()

## Call Signature

> **MkdirFunction**(`options`, `dir`): [`ShellString`](../type-aliases/ShellString.md)

Creates directories.

### Parameters

#### options

`string`

Available options:
       - `-p`: full paths, will create intermediate dirs if necessary

#### dir

`string`[]

The directories to create.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

## Call Signature

> **MkdirFunction**(`options`, ...`dir`): [`ShellString`](../type-aliases/ShellString.md)

### Parameters

#### options

`string`

#### dir

...`string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)

## Call Signature

> **MkdirFunction**(`dir`): [`ShellString`](../type-aliases/ShellString.md)

Creates directories.

### Parameters

#### dir

`string`[]

Directories to create.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

## Call Signature

> **MkdirFunction**(...`dir`): [`ShellString`](../type-aliases/ShellString.md)

### Parameters

#### dir

...`string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)
