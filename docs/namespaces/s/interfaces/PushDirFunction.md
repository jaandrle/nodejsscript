[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / PushDirFunction

# Interface: PushDirFunction()

> **PushDirFunction**(`options`, `dir`): [`ShellArray`](../type-aliases/ShellArray.md)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

## Parameters

• **options**: `string`

Available options:
       - `-n`: Suppresses the normal change of directory when adding directories
               to the stack, so that only the stack is manipulated
       - `-q`: Suppresses output to the console.

• **dir**: `"+N"`

Brings the Nth directory (counting from the left of the list printed by dirs,
               starting with zero) to the top of the list by rotating the stack.

## Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.

> **PushDirFunction**(`options`, `dir`): [`ShellArray`](../type-aliases/ShellArray.md)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

## Parameters

• **options**: `string`

Available options:
       - `-n`: Suppresses the normal change of directory when adding directories
               to the stack, so that only the stack is manipulated
       - `-q`: Suppresses output to the console.

• **dir**: `"-N"`

Brings the Nth directory (counting from the right of the list printed by dirs,
               starting with zero) to the top of the list by rotating the stack.

## Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.

> **PushDirFunction**(`options`, `dir`): [`ShellArray`](../type-aliases/ShellArray.md)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

## Parameters

• **options**: `string`

Available options:
       - `-n`: Suppresses the normal change of directory when adding directories
               to the stack, so that only the stack is manipulated
       - `-q`: Suppresses output to the console.

• **dir**: `string`

Makes the current working directory be the top of the stack,
               and then executes the equivalent of `cd dir`.

## Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.

> **PushDirFunction**(`dir`): [`ShellArray`](../type-aliases/ShellArray.md)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

## Parameters

• **dir**: `"+N"`

Brings the Nth directory (counting from the left of the list printed by dirs,
           starting with zero) to the top of the list by rotating the stack.

## Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.

> **PushDirFunction**(`dir`): [`ShellArray`](../type-aliases/ShellArray.md)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

## Parameters

• **dir**: `"-N"`

Brings the Nth directory (counting from the right of the list printed by dirs,
           starting with zero) to the top of the list by rotating the stack.

## Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.

> **PushDirFunction**(`dir`): [`ShellArray`](../type-aliases/ShellArray.md)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

## Parameters

• **dir**: `string`

Makes the current working directory be the top of the stack,
           and then executes the equivalent of cd dir.

## Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.

> **PushDirFunction**(): [`ShellArray`](../type-aliases/ShellArray.md)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

## Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.