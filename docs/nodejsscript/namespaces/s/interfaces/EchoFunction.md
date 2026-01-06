[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / EchoFunction

# Interface: EchoFunction()

## Call Signature

> **EchoFunction**(`options`, ...`text`): [`ShellString`](../type-aliases/ShellString.md)

Prints string to stdout, and returns string with additional utility methods like .to().

### Parameters

#### options

`string`

Available options:
       - `-e`: interpret backslash escapes (default)
       - `-n`: remove trailing newline from output

#### text

...`string`[]

The text to print.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns the string that was passed as argument.

## Call Signature

> **EchoFunction**(...`text`): [`ShellString`](../type-aliases/ShellString.md)

Prints string to stdout, and returns string with additional utility methods like .to().

### Parameters

#### text

...`string`[]

The text to print.

### Returns

[`ShellString`](../type-aliases/ShellString.md)

Returns the string that was passed as argument.
