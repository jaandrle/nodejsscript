[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / UniqFunction

# Interface: UniqFunction()

## Call Signature

> **UniqFunction**(`options`, `input`, `output?`): [`ShellString`](../type-aliases/ShellString.md)

Filter adjacent matching lines from input.

### Parameters

#### options

`string`

Available options:
       - `-i`: Ignore case while comparing
       - `-c`: Prefix lines by the number of occurrences
       - `-d`: Only print duplicate lines, one for each group of identical lines

#### input

`string`

#### output?

`string`

### Returns

[`ShellString`](../type-aliases/ShellString.md)

## Call Signature

> **UniqFunction**(`input`, `output?`): [`ShellString`](../type-aliases/ShellString.md)

Filter adjacent matching lines from input.

### Parameters

#### input

`string`

#### output?

`string`

### Returns

[`ShellString`](../type-aliases/ShellString.md)
