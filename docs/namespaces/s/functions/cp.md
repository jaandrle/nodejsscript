[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / cp

# Function: cp()

Copies files. The wildcard `*` is accepted.

## Param

Available options:
       - `-f`: force (default behavior)
       - `-n`: no-clobber
       - `-u`: only copy if source is newer than dest
       - `-r`, -R: recursive
       - `-L`: follow symlinks
       - `-P`: don't follow symlinks

## Param

The source.

## Param

The destination.

## cp(options, source, dest)

> **cp**(`options`, `source`, `dest`): [`ShellString`](../type-aliases/ShellString.md)

Copies files. The wildcard `*` is accepted.

### Parameters

• **options**: `string`

Available options:
       - `-f`: force (default behavior)
       - `-n`: no-clobber
       - `-u`: only copy if source is newer than dest
       - `-r`, `-R`: recursive
       - `-L`: follow symlinks
       - `-P`: don't follow symlinks

• **source**: `string` \| `string`[]

The source.

• **dest**: `string`

The destination.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

Object with shell exit code, stderr and stdout.

### Param

Available options:
       - `-f`: force (default behavior)
       - `-n`: no-clobber
       - `-u`: only copy if source is newer than dest
       - `-r`, -R: recursive
       - `-L`: follow symlinks
       - `-P`: don't follow symlinks

### Param

The source.

### Param

The destination.

## cp(source, dest)

> **cp**(`source`, `dest`): [`ShellString`](../type-aliases/ShellString.md)

Copies files. The wildcard `*` is accepted.

### Parameters

• **source**: `string` \| `string`[]

The source.

• **dest**: `string`

The destination.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Object with shell exit code, stderr and stdout.

Object with shell exit code, stderr and stdout.

### Param

Available options:
       - `-f`: force (default behavior)
       - `-n`: no-clobber
       - `-u`: only copy if source is newer than dest
       - `-r`, -R: recursive
       - `-L`: follow symlinks
       - `-P`: don't follow symlinks

### Param

The source.

### Param

The destination.
