[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / ShellStringConstructor

# Interface: ShellStringConstructor()

> **ShellStringConstructor**(`value`): [`ShellString`](../type-aliases/ShellString.md)

Wraps a string (or array) value. This has all the string (or array) methods,
but also exposes extra methods: `.to()`, `.toEnd()`, and all the pipe-able
methods (ex. `.cat()`, `.grep()`, etc.).

This can be easily converted into a string by calling `.toString()`.

This type also exposes the corresponding command's stdout, stderr, and return status
code via the `.stdout` (string), `.stderr` (string), and `.code` (number) properties
respectively.

## Parameters

• **value**: `string`

The string value to wrap.

## Returns

[`ShellString`](../type-aliases/ShellString.md)

A string-like object with special methods.

> **ShellStringConstructor**(`value`): [`ShellArray`](../type-aliases/ShellArray.md)

## Parameters

• **value**: `string`[]

## Returns

[`ShellArray`](../type-aliases/ShellArray.md)

## Constructors

### new ShellStringConstructor()

> **new ShellStringConstructor**(`value`): [`ShellString`](../type-aliases/ShellString.md)

Wraps a string (or array) value. This has all the string (or array) methods,
but also exposes extra methods: `.to()`, `.toEnd()`, and all the pipe-able
methods (ex. `.cat()`, `.grep()`, etc.).

This can be easily converted into a string by calling `.toString()`.

This type also exposes the corresponding command's stdout, stderr, and return status
code via the `.stdout` (string), `.stderr` (string), and `.code` (number) properties
respectively.

Construct signature allows for:

var foo = new ShellString('hello world');

as per example in shelljs docs:
https://github.com/shelljs/shelljs#shellstringstr

#### Parameters

• **value**: `string`

The string value to wrap.

#### Returns

[`ShellString`](../type-aliases/ShellString.md)

A string-like object with special methods.

### new ShellStringConstructor()

> **new ShellStringConstructor**(`value`): [`ShellArray`](../type-aliases/ShellArray.md)

#### Parameters

• **value**: `string`[]

#### Returns

[`ShellArray`](../type-aliases/ShellArray.md)
