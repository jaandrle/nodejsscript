[nodejsscript](../README.md) / [s](../modules/s.md) / ShellStringConstructor

# Interface: ShellStringConstructor

[s](../modules/s.md).ShellStringConstructor

## Callable

### ShellStringConstructor

▸ **ShellStringConstructor**(`value`): [`ShellString`](../modules/s.md#shellstring-1)

Wraps a string (or array) value. This has all the string (or array) methods,
but also exposes extra methods: `.to()`, `.toEnd()`, and all the pipe-able
methods (ex. `.cat()`, `.grep()`, etc.).

This can be easily converted into a string by calling `.toString()`.

This type also exposes the corresponding command's stdout, stderr, and return status
code via the `.stdout` (string), `.stderr` (string), and `.code` (number) properties
respectively.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The string value to wrap. |

#### Returns

[`ShellString`](../modules/s.md#shellstring-1)

A string-like object with special methods.

#### Defined in

node_modules/@types/shelljs/index.d.ts:982

### ShellStringConstructor

▸ **ShellStringConstructor**(`value`): [`ShellArray`](../modules/s.md#shellarray)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string`[] |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

#### Defined in

node_modules/@types/shelljs/index.d.ts:983

## Table of contents

### Constructors

- [constructor](s.ShellStringConstructor.md#constructor)

## Constructors

### constructor

• **new ShellStringConstructor**(`value`)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The string value to wrap. |

#### Defined in

node_modules/@types/shelljs/index.d.ts:965

• **new ShellStringConstructor**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string`[] |

#### Defined in

node_modules/@types/shelljs/index.d.ts:966
