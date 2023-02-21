[nodejsscript](../README.md) / [s](../modules/s.md) / ListFunction

# Interface: ListFunction

[s](../modules/s.md).ListFunction

## Callable

### ListFunction

▸ **ListFunction**(`options`, `paths`): [`ShellArray`](../modules/s.md#shellarray)

Returns array of files in the given path, or in current directory if no path provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options: - `-R`: recursive - `-A`: all files (include files beginning with ., except for . and ..) - `-L`: follow symlinks - `-d`: list directories themselves, not their contents - `-l`: list objects representing each file, each with fields containing `ls -l` output fields. See fs.Stats for more info |
| `paths` | `string`[] | Paths to search. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

An array of files in the given path(s).

### ListFunction

▸ **ListFunction**(`options`, `...paths`): [`ShellArray`](../modules/s.md#shellarray)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` |
| `...paths` | `string`[] |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

### ListFunction

▸ **ListFunction**(`paths`): [`ShellArray`](../modules/s.md#shellarray)

Returns array of files in the given path, or in current directory if no path provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `paths` | `string`[] | Paths to search. |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)

An array of files in the given path(s).

### ListFunction

▸ **ListFunction**(`...paths`): [`ShellArray`](../modules/s.md#shellarray)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

[`ShellArray`](../modules/s.md#shellarray)
