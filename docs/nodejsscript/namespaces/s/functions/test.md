[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / test

# Function: test()

> **test**(`option`, `path`): `boolean`

Evaluates expression using the available primaries and returns corresponding value.

## Parameters

### option

[`TestOptions`](../type-aliases/TestOptions.md)

Valid options:
       - `-b`: true if path is a block device;
       - `-c`: true if path is a character device;
       - `-d`: true if path is a directory;
       - `-e`: true if path exists;
       - `-f`: true if path is a regular file;
       - `-L`: true if path is a symbolic link;
       - `-p`: true if path is a pipe (FIFO);
       - `-S`: true if path is a socket

### path

`string`

The path.

## Returns

`boolean`

See option parameter.
