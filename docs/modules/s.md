[nodejsscript](../README.md) / s

# Namespace: s

This namespace refers to `shelljs`, for docs visits [shelljs/shelljs](https://github.com/shelljs/shelljs).
You can pipe commands when make sense by chaining, see [**Pipes**](https://github.com/shelljs/shelljs#pipes).

Available commands: [cat](https://github.com/shelljs/shelljs#catoptions-file--file-) · [cd](https://github.com/shelljs/shelljs#cddir) · [chmod](https://github.com/shelljs/shelljs#chmodoptions-octal_mode--octal_string-file) · [cp](https://github.com/shelljs/shelljs#cpoptions-source--source--dest)
 · [pushd](https://github.com/shelljs/shelljs#pushdoptions-dir---n--n) · [popd](https://github.com/shelljs/shelljs#popdoptions--n--n) · [dirs](https://github.com/shelljs/shelljs#dirsoptions--n---n) · [exec](https://github.com/shelljs/shelljs#execcommand--options--callback)
 · [find](https://github.com/shelljs/shelljs#findpath--path-) · [grep](https://github.com/shelljs/shelljs#grepoptions-regex_filter-file--file-) · [head](https://github.com/shelljs/shelljs#head-n-num-file--file-) · [ln](https://github.com/shelljs/shelljs#lnoptions-source-dest)
 · [ls](https://github.com/shelljs/shelljs#lsoptions-path-) · [mkdir](https://github.com/shelljs/shelljs#mkdiroptions-dir--dir-) · [mv](https://github.com/shelljs/shelljs#mvoptions--source--source--dest) · [pwd](https://github.com/shelljs/shelljs#pwd)
 · [rm](https://github.com/shelljs/shelljs#rmoptions-file--file-) · [sed](https://github.com/shelljs/shelljs#sedoptions-search_regex-replacement-file--file-) · [sort](https://github.com/shelljs/shelljs#sortoptions-file--file-)
 · [tail](https://github.com/shelljs/shelljs#tail-n-num-file--file-) · [tempdir](https://github.com/shelljs/shelljs#tempdir) · [test](https://github.com/shelljs/shelljs#testexpression) · [touch](https://github.com/shelljs/shelljs#touchoptions-file--file-)
 · [uniq](https://github.com/shelljs/shelljs#uniqoptions-input-output) · [which](https://github.com/shelljs/shelljs#whichcommand) · [exit](https://github.com/shelljs/shelljs#exitcode) · [error](https://github.com/shelljs/shelljs#error) · [errorCode](https://github.com/shelljs/shelljs#errorcode) 

```js
s.cat("./package.json").grep("version");
```
… this library adds two function ['xargs()'](../interfaces/s.XargsFunction.md) and ['$()'](../interfaces/s.DollarFunction.md).

## Table of contents

### Interfaces

- [XargsOptions](../interfaces/s.XargsOptions.md)
- [XargsFunction](../interfaces/s.XargsFunction.md)
- [DollarFunction](../interfaces/s.DollarFunction.md)
- [ShellReturnValue](../interfaces/s.ShellReturnValue.md)
- [ListFunction](../interfaces/s.ListFunction.md)
- [FindFunction](../interfaces/s.FindFunction.md)
- [CopyFunction](../interfaces/s.CopyFunction.md)
- [RemoveFunction](../interfaces/s.RemoveFunction.md)
- [MoveFunction](../interfaces/s.MoveFunction.md)
- [MkdirFunction](../interfaces/s.MkdirFunction.md)
- [CatFunction](../interfaces/s.CatFunction.md)
- [SedFunction](../interfaces/s.SedFunction.md)
- [GrepFunction](../interfaces/s.GrepFunction.md)
- [EchoFunction](../interfaces/s.EchoFunction.md)
- [PushDirFunction](../interfaces/s.PushDirFunction.md)
- [PopDirFunction](../interfaces/s.PopDirFunction.md)
- [DirsFunction](../interfaces/s.DirsFunction.md)
- [LinkFunction](../interfaces/s.LinkFunction.md)
- [ExecFunction](../interfaces/s.ExecFunction.md)
- [ExecOptions](../interfaces/s.ExecOptions.md)
- [ExecOutputReturnValue](../interfaces/s.ExecOutputReturnValue.md)
- [ShellStringConstructor](../interfaces/s.ShellStringConstructor.md)
- [ChmodFunction](../interfaces/s.ChmodFunction.md)
- [TouchOptionsArray](../interfaces/s.TouchOptionsArray.md)
- [TouchFunction](../interfaces/s.TouchFunction.md)
- [HeadOptions](../interfaces/s.HeadOptions.md)
- [HeadFunction](../interfaces/s.HeadFunction.md)
- [SortFunction](../interfaces/s.SortFunction.md)
- [TailOptions](../interfaces/s.TailOptions.md)
- [TailFunction](../interfaces/s.TailFunction.md)
- [UniqFunction](../interfaces/s.UniqFunction.md)
- [ShellConfig](../interfaces/s.ShellConfig.md)

### Functions

- [$](s.md#$)
- [cd](s.md#cd)
- [pwd](s.md#pwd)
- [test](s.md#test)
- [which](s.md#which)
- [exit](s.md#exit)
- [tempdir](s.md#tempdir)
- [error](s.md#error)
- [set](s.md#set)
- [ls](s.md#ls)
- [find](s.md#find)
- [cp](s.md#cp)
- [rm](s.md#rm)
- [mv](s.md#mv)
- [mkdir](s.md#mkdir)
- [cat](s.md#cat)
- [sed](s.md#sed)
- [grep](s.md#grep)
- [echo](s.md#echo)
- [pushd](s.md#pushd)
- [popd](s.md#popd)
- [dirs](s.md#dirs)
- [ln](s.md#ln)
- [exec](s.md#exec)
- [ShellString](s.md#shellstring)
- [chmod](s.md#chmod)
- [touch](s.md#touch)
- [head](s.md#head)
- [sort](s.md#sort)
- [tail](s.md#tail)
- [uniq](s.md#uniq)

### Type Aliases

- [TestOptions](s.md#testoptions)
- [ExecCallback](s.md#execcallback)
- [ShellString](s.md#shellstring-1)
- [ShellArray](s.md#shellarray)
- [TouchOptionsLiteral](s.md#touchoptionsliteral)

### Variables

- [env](s.md#env)
- [config](s.md#config)

## Functions

### $

▸ **$**(`options`): [`ShellString`](s.md#shellstring)

Modifies [config](s.md#config) for next command in chain. The `$()` runs next command in silent mode:
```bash
// comapre bash
var=$(echo Hi)
echo $var
// with
const var= s.$().echo("Hi");
echo(var);
```
…examples:
```js
const branch= s.$().exec("git branch --show-current");
echo(branch);

s.$("-vf").exec("gyt branch --show-current");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``"-f"`` \| ``"-v"`` \| ``"-s"`` | Options  - "-v":  verbose  - "-s": silent (default)  - "-f": fatal |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

[src/shelljs.d.ts:46](https://github.com/jaandrle/nodejsscript/blob/574f62d/src/shelljs.d.ts#L46)

▸ **$**(): [`ShellString`](s.md#shellstring)

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

[src/shelljs.d.ts:47](https://github.com/jaandrle/nodejsscript/blob/574f62d/src/shelljs.d.ts#L47)

___

### cd

▸ **cd**(`dir?`): [`ShellString`](s.md#shellstring)

Changes the current working directory dir for the duration of the script.
Changes to the home directory if no argument is supplied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir?` | `string` | Directory to change to. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:24

___

### pwd

▸ **pwd**(): [`ShellString`](s.md#shellstring)

Returns the current directory.

#### Returns

[`ShellString`](s.md#shellstring)

The current directory.

#### Defined in

node_modules/@types/shelljs/index.d.ts:30

___

### test

▸ **test**(`option`, `path`): `boolean`

Evaluates expression using the available primaries and returns corresponding value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option` | [`TestOptions`](s.md#testoptions) | Valid options:        - `-b`: true if path is a block device;        - `-c`: true if path is a character device;        - `-d`: true if path is a directory;        - `-e`: true if path exists;        - `-f`: true if path is a regular file;        - `-L`: true if path is a symbolic link;        - `-p`: true if path is a pipe (FIFO);        - `-S`: true if path is a socket |
| `path` | `string` | The path. |

#### Returns

`boolean`

See option parameter.

#### Defined in

node_modules/@types/shelljs/index.d.ts:252

___

### which

▸ **which**(`command`): [`ShellString`](s.md#shellstring) \| ``null``

Searches for command in the system's PATH. On Windows looks for .exe, .cmd, and .bat extensions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to search for. |

#### Returns

[`ShellString`](s.md#shellstring) \| ``null``

Returns string containing the absolute path to the command or `null` if it couldn't be found.

#### Defined in

node_modules/@types/shelljs/index.d.ts:372

___

### exit

▸ **exit**(`code?`): `never`

Exits the current process with the given exit code.

Equivalent to calling `process.exit(code)`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code?` | `number` | The exit code. |

#### Returns

`never`

#### Defined in

node_modules/@types/shelljs/index.d.ts:711

___

### tempdir

▸ **tempdir**(): [`ShellString`](s.md#shellstring)

Searches and returns string containing a writeable, platform-dependent temporary directory.
Follows Python's tempfile algorithm.

#### Returns

[`ShellString`](s.md#shellstring)

The temp file path.

#### Defined in

node_modules/@types/shelljs/index.d.ts:1054

___

### error

▸ **error**(): [`ShellString`](s.md#shellstring)

Tests if error occurred in the last command.

#### Returns

[`ShellString`](s.md#shellstring)

Returns null if no error occurred, otherwise returns string explaining the error

#### Defined in

node_modules/@types/shelljs/index.d.ts:1061

___

### set

▸ **set**(`options`): `void`

Sets global configuration variables

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `+/-e`: exit upon error (`config.fatal`),        - `+/-v`: verbose: show all commands (`config.verbose`),        - `+/-f`: disable filename expansion (globbing) |

#### Returns

`void`

#### Defined in

node_modules/@types/shelljs/index.d.ts:1184

___

### ls

▸ **ls**(`options`, `paths`): [`ShellArray`](s.md#shellarray)

Returns array of files in the given path, or in current directory if no path provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-R`: recursive        - `-A`: all files (include files beginning with ., except for . and ..)        - `-L`: follow symlinks        - `-d`: list directories themselves, not their contents        - `-l`: list objects representing each file, each with fields containing                `ls -l` output fields. See fs.Stats for more info |
| `paths` | `string`[] | Paths to search. |

#### Returns

[`ShellArray`](s.md#shellarray)

An array of files in the given path(s).

#### Defined in

node_modules/@types/shelljs/index.d.ts:46

▸ **ls**(`options`, ...`paths`): [`ShellArray`](s.md#shellarray)

Returns array of files in the given path, or in current directory if no path provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-R`: recursive        - `-A`: all files (include files beginning with ., except for . and ..)        - `-L`: follow symlinks        - `-d`: list directories themselves, not their contents        - `-l`: list objects representing each file, each with fields containing                `ls -l` output fields. See fs.Stats for more info |
| `...paths` | `string`[] | Paths to search. |

#### Returns

[`ShellArray`](s.md#shellarray)

An array of files in the given path(s).

#### Defined in

node_modules/@types/shelljs/index.d.ts:47

▸ **ls**(`paths`): [`ShellArray`](s.md#shellarray)

Returns array of files in the given path, or in current directory if no path provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `paths` | `string`[] | Paths to search. |

#### Returns

[`ShellArray`](s.md#shellarray)

An array of files in the given path(s).

#### Defined in

node_modules/@types/shelljs/index.d.ts:55

▸ **ls**(...`paths`): [`ShellArray`](s.md#shellarray)

Returns array of files in the given path, or in current directory if no path provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | Paths to search. |

#### Returns

[`ShellArray`](s.md#shellarray)

An array of files in the given path(s).

#### Defined in

node_modules/@types/shelljs/index.d.ts:56

___

### find

▸ **find**(`path`): [`ShellArray`](s.md#shellarray)

Returns array of all files (however deep) in the given paths.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string`[] | The path(s) to search. |

#### Returns

[`ShellArray`](s.md#shellarray)

An array of all files (however deep) in the given path(s).

#### Defined in

node_modules/@types/shelljs/index.d.ts:81

▸ **find**(...`path`): [`ShellArray`](s.md#shellarray)

Returns array of all files (however deep) in the given paths.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...path` | `string`[] | The path(s) to search. |

#### Returns

[`ShellArray`](s.md#shellarray)

An array of all files (however deep) in the given path(s).

#### Defined in

node_modules/@types/shelljs/index.d.ts:82

___

### cp

▸ **cp**(`options`, `source`, `dest`): [`ShellString`](s.md#shellstring)

Copies files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-f`: force (default behavior)        - `-n`: no-clobber        - `-u`: only copy if source is newer than dest        - `-r`, -R: recursive        - `-L`: follow symlinks        - `-P`: don't follow symlinks |
| `source` | `string` \| `string`[] | The source. |
| `dest` | `string` | The destination. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:108

▸ **cp**(`source`, `dest`): [`ShellString`](s.md#shellstring)

Copies files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` \| `string`[] | The source. |
| `dest` | `string` | The destination. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:117

___

### rm

▸ **rm**(`options`, `files`): [`ShellString`](s.md#shellstring)

Removes files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-f` (force),        - `-r`, `-R` (recursive) |
| `files` | `string`[] | Files to remove. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:146

▸ **rm**(`options`, ...`files`): [`ShellString`](s.md#shellstring)

Removes files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-f` (force),        - `-r`, `-R` (recursive) |
| `...files` | `string`[] | Files to remove. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:147

▸ **rm**(`files`): [`ShellString`](s.md#shellstring)

Removes files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `files` | `string`[] | Files to remove. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:155

▸ **rm**(...`files`): [`ShellString`](s.md#shellstring)

Removes files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...files` | `string`[] | Files to remove. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:156

___

### mv

▸ **mv**(`options`, `source`, `dest`): [`ShellString`](s.md#shellstring)

Moves files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-f`: force (default behavior)        - `-n`: no-clobber |
| `source` | `string` \| `string`[] | The source. |
| `dest` | `string` | The destination. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:181

▸ **mv**(`source`, `dest`): [`ShellString`](s.md#shellstring)

Moves files. The wildcard `*` is accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` \| `string`[] | The source. |
| `dest` | `string` | The destination. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:190

___

### mkdir

▸ **mkdir**(`options`, `dir`): [`ShellString`](s.md#shellstring)

Creates directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-p`: full paths, will create intermediate dirs if necessary |
| `dir` | `string`[] | The directories to create. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:214

▸ **mkdir**(`options`, ...`dir`): [`ShellString`](s.md#shellstring)

Creates directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-p`: full paths, will create intermediate dirs if necessary |
| `...dir` | `string`[] | The directories to create. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:215

▸ **mkdir**(`dir`): [`ShellString`](s.md#shellstring)

Creates directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string`[] | The directories to create. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:223

▸ **mkdir**(...`dir`): [`ShellString`](s.md#shellstring)

Creates directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...dir` | `string`[] | The directories to create. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:224

___

### cat

▸ **cat**(`files`): [`ShellString`](s.md#shellstring)

Returns a string containing the given file, or a concatenated string
containing the files if more than one file is given (a new line character
is introduced between each file).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `files` | `string`[] | Files to use. Wildcard `*` accepted. |

#### Returns

[`ShellString`](s.md#shellstring)

A string containing the given file, or a concatenated string
        containing the files if more than one file is given
        (a new line character is introduced between each file).

#### Defined in

node_modules/@types/shelljs/index.d.ts:267

▸ **cat**(...`files`): [`ShellString`](s.md#shellstring)

Returns a string containing the given file, or a concatenated string
containing the files if more than one file is given (a new line character
is introduced between each file).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...files` | `string`[] | Files to use. Wildcard `*` accepted. |

#### Returns

[`ShellString`](s.md#shellstring)

A string containing the given file, or a concatenated string
        containing the files if more than one file is given
        (a new line character is introduced between each file).

#### Defined in

node_modules/@types/shelljs/index.d.ts:268

___

### sed

▸ **sed**(`options`, `searchRegex`, `replacement`, `files`): [`ShellString`](s.md#shellstring)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-i`: Replace contents of 'file' in-place. Note that no backups will be created! |
| `searchRegex` | `string` \| `RegExp` | The regular expression to use for search. |
| `replacement` | `string` | The replacement. |
| `files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](s.md#shellstring)

The new string after replacement.

#### Defined in

node_modules/@types/shelljs/index.d.ts:295

▸ **sed**(`options`, `searchRegex`, `replacement`, ...`files`): [`ShellString`](s.md#shellstring)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-i`: Replace contents of 'file' in-place. Note that no backups will be created! |
| `searchRegex` | `string` \| `RegExp` | The regular expression to use for search. |
| `replacement` | `string` | The replacement. |
| `...files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](s.md#shellstring)

The new string after replacement.

#### Defined in

node_modules/@types/shelljs/index.d.ts:296

▸ **sed**(`searchRegex`, `replacement`, `files`): [`ShellString`](s.md#shellstring)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchRegex` | `string` \| `RegExp` | The regular expression to use for search. |
| `replacement` | `string` | The replacement. |
| `files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](s.md#shellstring)

The new string after replacement.

#### Defined in

node_modules/@types/shelljs/index.d.ts:307

▸ **sed**(`searchRegex`, `replacement`, ...`files`): [`ShellString`](s.md#shellstring)

Reads an input string from file and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchRegex` | `string` \| `RegExp` | The regular expression to use for search. |
| `replacement` | `string` | The replacement. |
| `...files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](s.md#shellstring)

The new string after replacement.

#### Defined in

node_modules/@types/shelljs/index.d.ts:308

___

### grep

▸ **grep**(`options`, `regex_filter`, `files`): [`ShellString`](s.md#shellstring)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-v`: Inverse the sense of the regex and print                the lines not matching the criteria.        - `-l`: Print only filenames of matching files |
| `regex_filter` | `string` \| `RegExp` | The regular expression to use. |
| `files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](s.md#shellstring)

Returns a string containing all lines of the file that match the given `regex_filter`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:337

▸ **grep**(`options`, `regex_filter`, ...`files`): [`ShellString`](s.md#shellstring)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-v`: Inverse the sense of the regex and print                the lines not matching the criteria.        - `-l`: Print only filenames of matching files |
| `regex_filter` | `string` \| `RegExp` | The regular expression to use. |
| `...files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](s.md#shellstring)

Returns a string containing all lines of the file that match the given `regex_filter`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:338

▸ **grep**(`regex_filter`, `files`): [`ShellString`](s.md#shellstring)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regex_filter` | `string` \| `RegExp` | The regular expression to use. |
| `files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](s.md#shellstring)

Returns a string containing all lines of the file that match the given `regex_filter`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:348

▸ **grep**(`regex_filter`, ...`files`): [`ShellString`](s.md#shellstring)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regex_filter` | `string` \| `RegExp` | The regular expression to use. |
| `...files` | `string`[] | The files to process. |

#### Returns

[`ShellString`](s.md#shellstring)

Returns a string containing all lines of the file that match the given `regex_filter`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:349

___

### echo

▸ **echo**(`options`, ...`text`): [`ShellString`](s.md#shellstring)

Prints string to stdout, and returns string with additional utility methods like .to().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-e`: interpret backslash escapes (default)        - `-n`: remove trailing newline from output |
| `...text` | `string`[] | The text to print. |

#### Returns

[`ShellString`](s.md#shellstring)

Returns the string that was passed as argument.

#### Defined in

node_modules/@types/shelljs/index.d.ts:384

▸ **echo**(...`text`): [`ShellString`](s.md#shellstring)

Prints string to stdout, and returns string with additional utility methods like .to().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...text` | `string`[] | The text to print. |

#### Returns

[`ShellString`](s.md#shellstring)

Returns the string that was passed as argument.

#### Defined in

node_modules/@types/shelljs/index.d.ts:392

___

### pushd

▸ **pushd**(`options`, `dir`): [`ShellArray`](s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-n`: Suppresses the normal change of directory when adding directories                to the stack, so that only the stack is manipulated        - `-q`: Suppresses output to the console. |
| `dir` | ``"+N"`` | Makes the current working directory be the top of the stack,                and then executes the equivalent of `cd dir`. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:419

▸ **pushd**(`options`, `dir`): [`ShellArray`](s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-n`: Suppresses the normal change of directory when adding directories                to the stack, so that only the stack is manipulated        - `-q`: Suppresses output to the console. |
| `dir` | ``"-N"`` | Makes the current working directory be the top of the stack,                and then executes the equivalent of `cd dir`. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:433

▸ **pushd**(`options`, `dir`): [`ShellArray`](s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-n`: Suppresses the normal change of directory when adding directories                to the stack, so that only the stack is manipulated        - `-q`: Suppresses output to the console. |
| `dir` | `string` | Makes the current working directory be the top of the stack,                and then executes the equivalent of `cd dir`. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:447

▸ **pushd**(`dir`): [`ShellArray`](s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | ``"+N"`` | Makes the current working directory be the top of the stack,                and then executes the equivalent of `cd dir`. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:457

▸ **pushd**(`dir`): [`ShellArray`](s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | ``"-N"`` | Makes the current working directory be the top of the stack,                and then executes the equivalent of `cd dir`. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:467

▸ **pushd**(`dir`): [`ShellArray`](s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Makes the current working directory be the top of the stack,                and then executes the equivalent of `cd dir`. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:477

▸ **pushd**(): [`ShellArray`](s.md#shellarray)

Saves the current directory on the top of the directory stack and then cd to dir.
With no arguments, `pushd` exchanges the top two directories.

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:485

___

### popd

▸ **popd**(`options`, `dir`): [`ShellArray`](s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-n`: Suppresses the normal change of directory when removing directories                from the stack, so that only the stack is manipulated        - `-q`: Suppresses output to the console. |
| `dir` | ``"+N"`` | You can only use -N and +N. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:517

▸ **popd**(`options`, `dir`): [`ShellArray`](s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-n`: Suppresses the normal change of directory when removing directories                from the stack, so that only the stack is manipulated        - `-q`: Suppresses output to the console. |
| `dir` | ``"-N"`` | You can only use -N and +N. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:533

▸ **popd**(`options`, `dir`): [`ShellArray`](s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-n`: Suppresses the normal change of directory when removing directories                from the stack, so that only the stack is manipulated        - `-q`: Suppresses output to the console. |
| `dir` | `string` | You can only use -N and +N. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:549

▸ **popd**(`dir`): [`ShellArray`](s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | ``"+N"`` | You can only use -N and +N. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:561

▸ **popd**(`dir`): [`ShellArray`](s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | ``"-N"`` | You can only use -N and +N. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:573

▸ **popd**(`dir`): [`ShellArray`](s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | You can only use -N and +N. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:585

▸ **popd**(): [`ShellArray`](s.md#shellarray)

When no arguments are given, popd removes the top directory from the stack
and performs a `cd` to the new top directory.

The elements are numbered from 0 starting at the first directory listed with dirs;
i.e., `popd` is equivalent to `popd +0`. Returns an array of paths in the stack.

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack.

#### Defined in

node_modules/@types/shelljs/index.d.ts:596

___

### dirs

▸ **dirs**(`options`): [`ShellArray`](s.md#shellarray)

Displays the list of currently remembered directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``"-c"`` | Available options:        - `-c`: Clears the directory stack by deleting all of the elements.        - `-N`: Displays the Nth directory (counting from the right of the list                printed by dirs when invoked without options), starting with zero.        - `+N`: Displays the Nth directory (counting from the left of the list                printed by dirs when invoked without options), starting with zero. |

#### Returns

[`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack, or a single path if +N or -N was specified.

#### Defined in

node_modules/@types/shelljs/index.d.ts:622

▸ **dirs**(`options`): [`ShellString`](s.md#shellstring)

Displays the list of currently remembered directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``"+N"`` | Available options:        - `-c`: Clears the directory stack by deleting all of the elements.        - `-N`: Displays the Nth directory (counting from the right of the list                printed by dirs when invoked without options), starting with zero.        - `+N`: Displays the Nth directory (counting from the left of the list                printed by dirs when invoked without options), starting with zero. |

#### Returns

[`ShellString`](s.md#shellstring)

Returns an array of paths in the stack, or a single path if +N or -N was specified.

#### Defined in

node_modules/@types/shelljs/index.d.ts:631

▸ **dirs**(`options`): [`ShellString`](s.md#shellstring)

Displays the list of currently remembered directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``"-N"`` | Available options:        - `-c`: Clears the directory stack by deleting all of the elements.        - `-N`: Displays the Nth directory (counting from the right of the list                printed by dirs when invoked without options), starting with zero.        - `+N`: Displays the Nth directory (counting from the left of the list                printed by dirs when invoked without options), starting with zero. |

#### Returns

[`ShellString`](s.md#shellstring)

Returns an array of paths in the stack, or a single path if +N or -N was specified.

#### Defined in

node_modules/@types/shelljs/index.d.ts:640

▸ **dirs**(`options`): [`ShellString`](s.md#shellstring) \| [`ShellArray`](s.md#shellarray)

Displays the list of currently remembered directories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-c`: Clears the directory stack by deleting all of the elements.        - `-N`: Displays the Nth directory (counting from the right of the list                printed by dirs when invoked without options), starting with zero.        - `+N`: Displays the Nth directory (counting from the left of the list                printed by dirs when invoked without options), starting with zero. |

#### Returns

[`ShellString`](s.md#shellstring) \| [`ShellArray`](s.md#shellarray)

Returns an array of paths in the stack, or a single path if +N or -N was specified.

#### Defined in

node_modules/@types/shelljs/index.d.ts:653

___

### ln

▸ **ln**(`options`, `source`, `dest`): [`ShellString`](s.md#shellstring)

Links source to dest. Use `-f` to force the link, should dest already exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-s`: Create a symbolic link, defaults to a hardlink        - `-f`: Force creation |
| `source` | `string` | The source. |
| `dest` | `string` | The destination. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:680

▸ **ln**(`source`, `dest`): [`ShellString`](s.md#shellstring)

Links source to dest. Use `-f` to force the link, should dest already exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | The source. |
| `dest` | `string` | The destination. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:689

___

### exec

▸ **exec**(`command`): [`ShellString`](s.md#shellstring)

Executes the given command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |

#### Returns

[`ShellString`](s.md#shellstring)

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:725

▸ **exec**(`command`, `options`): [`ShellString`](s.md#shellstring)

Executes the given command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `options` | [`ExecOptions`](../interfaces/s.ExecOptions.md) & { `async?`: ``false``  } | Silence and synchronous options. |

#### Returns

[`ShellString`](s.md#shellstring)

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:735

▸ **exec**(`command`, `options`): `ChildProcess`

Executes the given command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `options` | [`ExecOptions`](../interfaces/s.ExecOptions.md) & { `async`: ``true``  } | Silence and synchronous options. |

#### Returns

`ChildProcess`

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:745

▸ **exec**(`command`, `options`): `ChildProcess` \| [`ShellString`](s.md#shellstring)

Executes the given command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `options` | [`ExecOptions`](../interfaces/s.ExecOptions.md) | Silence and synchronous options. |

#### Returns

`ChildProcess` \| [`ShellString`](s.md#shellstring)

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:755

▸ **exec**(`command`, `options`, `callback`): `ChildProcess`

Executes the given command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `options` | [`ExecOptions`](../interfaces/s.ExecOptions.md) | Silence and synchronous options. |
| `callback` | [`ExecCallback`](s.md#execcallback) | Receives code and output asynchronously. |

#### Returns

`ChildProcess`

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:764

▸ **exec**(`command`, `callback`): `ChildProcess`

Executes the given command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute. |
| `callback` | [`ExecCallback`](s.md#execcallback) | Receives code and output asynchronously. |

#### Returns

`ChildProcess`

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:772

___

### ShellString

▸ **ShellString**(`value`): [`ShellString`](s.md#shellstring)

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

[`ShellString`](s.md#shellstring)

A string-like object with special methods.

#### Defined in

node_modules/@types/shelljs/index.d.ts:982

▸ **ShellString**(`value`): [`ShellArray`](s.md#shellarray)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string`[] |

#### Returns

[`ShellArray`](s.md#shellarray)

#### Defined in

node_modules/@types/shelljs/index.d.ts:983

___

### chmod

▸ **chmod**(`options`, `mode`, `file`): [`ShellString`](s.md#shellstring)

Alters the permissions of a file or directory by either specifying the absolute
permissions in octal form or expressing the changes in symbols.

This command tries to mimic the POSIX behavior as much as possible.

Notable exceptions:
- In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
- There is no "quiet" option since default behavior is to run silent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-v`: output a diagnostic for every file processed        - `-c`: like -v but report only when a change is made        - `-R`: change files and directories recursively |
| `mode` | `string` \| `number` | The access mode. Can be an octal string or a symbolic mode string. |
| `file` | `string` | The file to use. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:1007

▸ **chmod**(`mode`, `file`): [`ShellString`](s.md#shellstring)

Alters the permissions of a file or directory by either specifying the absolute
permissions in octal form or expressing the changes in symbols.

This command tries to mimic the POSIX behavior as much as possible.

Notable exceptions:
- In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
- There is no "quiet" option since default behavior is to run silent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | `string` \| `number` | The access mode. Can be an octal string or a symbolic mode string. |
| `file` | `string` | The file to use. |

#### Returns

[`ShellString`](s.md#shellstring)

Object with shell exit code, stderr and stdout.

#### Defined in

node_modules/@types/shelljs/index.d.ts:1023

___

### touch

▸ **touch**(`options`, `files`): [`ShellString`](s.md#shellstring)

Update the access and modification times of each FILE to the current time.
A FILE argument that does not exist is created empty, unless `-c` is supplied

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TouchOptionsLiteral`](s.md#touchoptionsliteral) \| [`TouchOptionsArray`](../interfaces/s.TouchOptionsArray.md) |
| `files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1071

▸ **touch**(`options`, ...`files`): [`ShellString`](s.md#shellstring)

Update the access and modification times of each FILE to the current time.
A FILE argument that does not exist is created empty, unless `-c` is supplied

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TouchOptionsLiteral`](s.md#touchoptionsliteral) \| [`TouchOptionsArray`](../interfaces/s.TouchOptionsArray.md) |
| `...files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1072

▸ **touch**(`files`): [`ShellString`](s.md#shellstring)

Update the access and modification times of each FILE to the current time.
A FILE argument that does not exist is created empty, unless `-c` is supplied

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1074

▸ **touch**(...`files`): [`ShellString`](s.md#shellstring)

Update the access and modification times of each FILE to the current time.
A FILE argument that does not exist is created empty, unless `-c` is supplied

#### Parameters

| Name | Type |
| :------ | :------ |
| `...files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1075

___

### head

▸ **head**(`options`, `files`): [`ShellString`](s.md#shellstring)

Read the start of a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HeadOptions`](../interfaces/s.HeadOptions.md) |
| `files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1090

▸ **head**(`options`, ...`files`): [`ShellString`](s.md#shellstring)

Read the start of a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HeadOptions`](../interfaces/s.HeadOptions.md) |
| `...files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1091

▸ **head**(`files`): [`ShellString`](s.md#shellstring)

Read the start of a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1093

▸ **head**(...`files`): [`ShellString`](s.md#shellstring)

Read the start of a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1094

___

### sort

▸ **sort**(`options`, `files`): [`ShellString`](s.md#shellstring)

Return the contents of the files, sorted line-by-line.
Sorting multiple files mixes their content (just as unix sort does).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-r`: Reverse the results        - `-n`: Compare according to numerical value |
| `files` | `string`[] | - |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1111

▸ **sort**(`options`, ...`files`): [`ShellString`](s.md#shellstring)

Return the contents of the files, sorted line-by-line.
Sorting multiple files mixes their content (just as unix sort does).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-r`: Reverse the results        - `-n`: Compare according to numerical value |
| `...files` | `string`[] | - |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1112

▸ **sort**(`files`): [`ShellString`](s.md#shellstring)

Return the contents of the files, sorted line-by-line.
Sorting multiple files mixes their content (just as unix sort does).

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1118

▸ **sort**(...`files`): [`ShellString`](s.md#shellstring)

Return the contents of the files, sorted line-by-line.
Sorting multiple files mixes their content (just as unix sort does).

#### Parameters

| Name | Type |
| :------ | :------ |
| `...files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1119

___

### tail

▸ **tail**(`options`, `files`): [`ShellString`](s.md#shellstring)

Read the end of a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TailOptions`](../interfaces/s.TailOptions.md) |
| `files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1138

▸ **tail**(`options`, ...`files`): [`ShellString`](s.md#shellstring)

Read the end of a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TailOptions`](../interfaces/s.TailOptions.md) |
| `...files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1139

▸ **tail**(`files`): [`ShellString`](s.md#shellstring)

Read the end of a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1141

▸ **tail**(...`files`): [`ShellString`](s.md#shellstring)

Read the end of a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...files` | `string`[] |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1142

___

### uniq

▸ **uniq**(`options`, `input`, `output?`): [`ShellString`](s.md#shellstring)

Filter adjacent matching lines from input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` | Available options:        - `-i`: Ignore case while comparing        - `-c`: Prefix lines by the number of occurrences        - `-d`: Only print duplicate lines, one for each group of identical lines |
| `input` | `string` | - |
| `output?` | `string` | - |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1159

▸ **uniq**(`input`, `output?`): [`ShellString`](s.md#shellstring)

Filter adjacent matching lines from input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `output?` | `string` |

#### Returns

[`ShellString`](s.md#shellstring)

#### Defined in

node_modules/@types/shelljs/index.d.ts:1164

## Type Aliases

### TestOptions

Ƭ **TestOptions**: ``"-b"`` \| ``"-c"`` \| ``"-d"`` \| ``"-e"`` \| ``"-f"`` \| ``"-L"`` \| ``"-p"`` \| ``"-S"``

#### Defined in

node_modules/@types/shelljs/index.d.ts:254

___

### ExecCallback

Ƭ **ExecCallback**: (`code`: `number`, `stdout`: `string`, `stderr`: `string`) => `any`

#### Type declaration

▸ (`code`, `stdout`, `stderr`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `stdout` | `string` |
| `stderr` | `string` |

##### Returns

`any`

#### Defined in

node_modules/@types/shelljs/index.d.ts:786

___

### ShellString

Ƭ **ShellString**: `string` & `ShellReturnValue`

#### Defined in

node_modules/@types/shelljs/index.d.ts:939

node_modules/@types/shelljs/index.d.ts:986

___

### ShellArray

Ƭ **ShellArray**: `string`[] & `ShellReturnValue`

#### Defined in

node_modules/@types/shelljs/index.d.ts:941

___

### TouchOptionsLiteral

Ƭ **TouchOptionsLiteral**: ``"-a"`` \| ``"-c"`` \| ``"-m"`` \| ``"-d"`` \| ``"-r"``

#### Defined in

node_modules/@types/shelljs/index.d.ts:1063

## Variables

### env

• `Const` **env**: `NodeJS.ProcessEnv`

Object containing environment variables (both getter and setter). Shortcut to `process.env`.

#### Defined in

node_modules/@types/shelljs/index.d.ts:716

___

### config

• `Const` **config**: [`ShellConfig`](../interfaces/s.ShellConfig.md)

The shelljs configuration.

#### Defined in

node_modules/@types/shelljs/index.d.ts:1225
