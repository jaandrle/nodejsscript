[nodejsscript](../README.md) / [s](../modules/s.md) / DirsFunction

# Interface: DirsFunction

[s](../modules/s.md).DirsFunction

## Callable

### DirsFunction

▸ **DirsFunction**(`options`): [`ShellArray`](../modules/s.md#shellarray)

Clears the directory stack by deleting all of the elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``"-c"`` | Clears the directory stack by deleting all of the elements. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack, or a single path if +N or -N was specified.

### DirsFunction

▸ **DirsFunction**(`options`): [`ShellString`](../modules/s.md#shellstring)

Displays the list of currently remembered directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``"+N"`` | Displays the Nth directory (counting from the left of the list                printed by dirs when invoked without options), starting with zero. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns an array of paths in the stack, or a single path if +N or -N was specified.

### DirsFunction

▸ **DirsFunction**(`options`): [`ShellString`](../modules/s.md#shellstring)

Displays the list of currently remembered directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``"-N"`` | Displays the Nth directory (counting from the right of the list                printed by dirs when invoked without options), starting with zero. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns an array of paths in the stack, or a single path if +N or -N was specified.

### DirsFunction

▸ **DirsFunction**(`options`): [`ShellString`](../modules/s.md#shellstring) \| [`ShellArray`](../modules/s.md#shellarray)

Displays the list of currently remembered directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-c`: Clears the directory stack by deleting all of the elements.        - `-N`: Displays the Nth directory (counting from the right of the list                printed by dirs when invoked without options), starting with zero.        - `+N`: Displays the Nth directory (counting from the left of the list                printed by dirs when invoked without options), starting with zero. |

#### Returns

[`ShellString`](../modules/s.md#shellstring) \| [`ShellArray`](../modules/s.md#shellarray)

Returns an array of paths in the stack, or a single path if +N or -N was specified.
