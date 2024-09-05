[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / ln

# Function: ln()

Links source to dest. Use `-f` to force the link, should dest already exist.

## Param

Available options:
       - `-s`: Create a symbolic link, defaults to a hardlink
       - `-f`: Force creation

## Param

The source.

## Param

The destination.

## ln(options, source, dest)

> **ln**(`options`, `source`, `dest`): [`ShellString`](../type-aliases/ShellString.md)

Links source to dest. Use `-f` to force the link, should dest already exist.

### Parameters

• **options**: `string`

Available options:
       - `-s`: Create a symbolic link, defaults to a hardlink
       - `-f`: Force creation

• **source**: `string`

The source.

• **dest**: `string`

The destination.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

Object with shell exit code, stderr and stdout.

### Param

Available options:
       - `-s`: Create a symbolic link, defaults to a hardlink
       - `-f`: Force creation

### Param

The source.

### Param

The destination.

## ln(source, dest)

> **ln**(`source`, `dest`): [`ShellString`](../type-aliases/ShellString.md)

Links source to dest. Use `-f` to force the link, should dest already exist.

### Parameters

• **source**: `string`

The source.

• **dest**: `string`

The destination.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

Object with shell exit code, stderr and stdout.

### Param

Available options:
       - `-s`: Create a symbolic link, defaults to a hardlink
       - `-f`: Force creation

### Param

The source.

### Param

The destination.
