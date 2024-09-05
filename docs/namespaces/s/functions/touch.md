[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / touch

# Function: touch()

Update the access and modification times of each FILE to the current time.
A FILE argument that does not exist is created empty, unless `-c` is supplied

## touch(options, files)

> **touch**(`options`, `files`): [`ShellString`](../type-aliases/ShellString.md)

Update the access and modification times of each FILE to the current time.
A FILE argument that does not exist is created empty, unless `-c` is supplied

### Parameters

• **options**: [`TouchOptionsLiteral`](../type-aliases/TouchOptionsLiteral.md) \| [`TouchOptionsArray`](../interfaces/TouchOptionsArray.md)

• **files**: `string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)

## touch(options, files)

> **touch**(`options`, ...`files`): [`ShellString`](../type-aliases/ShellString.md)

Update the access and modification times of each FILE to the current time.
A FILE argument that does not exist is created empty, unless `-c` is supplied

### Parameters

• **options**: [`TouchOptionsLiteral`](../type-aliases/TouchOptionsLiteral.md) \| [`TouchOptionsArray`](../interfaces/TouchOptionsArray.md)

• ...**files**: `string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)

## touch(files)

> **touch**(`files`): [`ShellString`](../type-aliases/ShellString.md)

Update the access and modification times of each FILE to the current time.
A FILE argument that does not exist is created empty, unless `-c` is supplied

### Parameters

• **files**: `string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)

## touch(files)

> **touch**(...`files`): [`ShellString`](../type-aliases/ShellString.md)

Update the access and modification times of each FILE to the current time.
A FILE argument that does not exist is created empty, unless `-c` is supplied

### Parameters

• ...**files**: `string`[]

### Returns

[`ShellString`](../type-aliases/ShellString.md)
