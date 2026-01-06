[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / PopDirFunction

# Interface: PopDirFunction()

## Call Signature

> **PopDirFunction**(`options`, `dir`): [`ShellArray`](../type-aliases/ShellArray.md)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

### Parameters

#### options

`string`

Available options:
       - `-n`: Suppresses the normal change of directory when removing directories
               from the stack, so that only the stack is manipulated
       - `-q`: Suppresses output to the console.

#### dir

`"+N"`

Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.

### Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.

## Call Signature

> **PopDirFunction**(`options`, `dir`): [`ShellArray`](../type-aliases/ShellArray.md)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

### Parameters

#### options

`string`

Available options:
       - `-n`: Suppresses the normal change of directory when removing directories
               from the stack, so that only the stack is manipulated
       - `-q`: Suppresses output to the console.

#### dir

`"-N"`

Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.

### Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.

## Call Signature

> **PopDirFunction**(`options`, `dir`): [`ShellArray`](../type-aliases/ShellArray.md)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

### Parameters

#### options

`string`

Available options:
       - `-n`: Suppresses the normal change of directory when removing directories
               from the stack, so that only the stack is manipulated
       - `-q`: Suppresses output to the console.

#### dir

`string`

You can only use -N and +N.

### Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.

## Call Signature

> **PopDirFunction**(`dir`): [`ShellArray`](../type-aliases/ShellArray.md)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.

### Parameters

#### dir

`"+N"`

Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.

### Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.

## Call Signature

> **PopDirFunction**(`dir`): [`ShellArray`](../type-aliases/ShellArray.md)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

### Parameters

#### dir

`"-N"`

Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.

### Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.

## Call Signature

> **PopDirFunction**(`dir`): [`ShellArray`](../type-aliases/ShellArray.md)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

### Parameters

#### dir

`string`

You can only use -N and +N.

### Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.

## Call Signature

> **PopDirFunction**(): [`ShellArray`](../type-aliases/ShellArray.md)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

### Returns

[`ShellArray`](../type-aliases/ShellArray.md)

Returns an array of paths in the stack.
