[nodejsscript](../README.md) / [s](../modules/s.md) / PopDirFunction

# Interface: PopDirFunction

[s](../modules/s.md).PopDirFunction

## Callable

### PopDirFunction

▸ **PopDirFunction**(`options`, `dir`): [`ShellArray`](../modules/s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options: - `-n`: Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated - `-q`: Suppresses output to the console. |
| `dir` | ``"+N"`` | Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.

### PopDirFunction

▸ **PopDirFunction**(`options`, `dir`): [`ShellArray`](../modules/s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options: - `-n`: Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated - `-q`: Suppresses output to the console. |
| `dir` | ``"-N"`` | Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.

### PopDirFunction

▸ **PopDirFunction**(`options`, `dir`): [`ShellArray`](../modules/s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options: - `-n`: Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated - `-q`: Suppresses output to the console. |
| `dir` | `string` | You can only use -N and +N. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.

### PopDirFunction

▸ **PopDirFunction**(`dir`): [`ShellArray`](../modules/s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | ``"+N"`` | Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.

### PopDirFunction

▸ **PopDirFunction**(`dir`): [`ShellArray`](../modules/s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | ``"-N"`` | Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.

### PopDirFunction

▸ **PopDirFunction**(`dir`): [`ShellArray`](../modules/s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | You can only use -N and +N. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.

### PopDirFunction

▸ **PopDirFunction**(): [`ShellArray`](../modules/s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.
