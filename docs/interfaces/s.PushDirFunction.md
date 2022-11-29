[nodejsscript](../README.md) / [s](../modules/s.md) / PushDirFunction

# Interface: PushDirFunction

[s](../modules/s.md).PushDirFunction

## Callable

### PushDirFunction

▸ **PushDirFunction**(`options`, `dir`): [`ShellArray`](../modules/s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-n`: Suppresses the normal change of directory when adding directories                to the stack, so that only the stack is manipulated        - `-q`: Suppresses output to the console. |
| `dir` | ``"+N"`` | Brings the Nth directory (counting from the left of the list printed by dirs,                starting with zero) to the top of the list by rotating the stack. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.

### PushDirFunction

▸ **PushDirFunction**(`options`, `dir`): [`ShellArray`](../modules/s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-n`: Suppresses the normal change of directory when adding directories                to the stack, so that only the stack is manipulated        - `-q`: Suppresses output to the console. |
| `dir` | ``"-N"`` | Brings the Nth directory (counting from the right of the list printed by dirs,                starting with zero) to the top of the list by rotating the stack. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.

### PushDirFunction

▸ **PushDirFunction**(`options`, `dir`): [`ShellArray`](../modules/s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-n`: Suppresses the normal change of directory when adding directories                to the stack, so that only the stack is manipulated        - `-q`: Suppresses output to the console. |
| `dir` | `string` | Makes the current working directory be the top of the stack,                and then executes the equivalent of `cd dir`. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.

### PushDirFunction

▸ **PushDirFunction**(`dir`): [`ShellArray`](../modules/s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | ``"+N"`` | Brings the Nth directory (counting from the left of the list printed by dirs,            starting with zero) to the top of the list by rotating the stack. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.

### PushDirFunction

▸ **PushDirFunction**(`dir`): [`ShellArray`](../modules/s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | ``"-N"`` | Brings the Nth directory (counting from the right of the list printed by dirs,            starting with zero) to the top of the list by rotating the stack. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.

### PushDirFunction

▸ **PushDirFunction**(`dir`): [`ShellArray`](../modules/s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Makes the current working directory be the top of the stack,            and then executes the equivalent of cd dir. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.

### PushDirFunction

▸ **PushDirFunction**(): [`ShellArray`](../modules/s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack.
