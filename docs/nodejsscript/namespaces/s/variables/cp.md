[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / cp

# Variable: cp

> `const` **cp**: [`CopyFunction`](../interfaces/CopyFunction.md)

Copies files. The wildcard `*` is accepted.

## Param

**options**

Available options:
       - `-f`: force (default behavior)
       - `-n`: no-clobber
       - `-u`: only copy if source is newer than dest
       - `-r`, -R: recursive
       - `-L`: follow symlinks
       - `-P`: don't follow symlinks

## Param

**source**

The source.

## Param

**dest**

The destination.

## Returns

Object with shell exit code, stderr and stdout.
