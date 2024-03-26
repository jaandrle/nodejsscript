[nodejsscript](../README.md) / [s](../modules/s.md) / ShellReturnValueNJS

# Interface: ShellReturnValueNJS

[s](../modules/s.md).ShellReturnValueNJS

## Hierarchy

- [`ShellReturnValue`](s.ShellReturnValue.md)

  ↳ **`ShellReturnValueNJS`**

## Table of contents

### Properties

- [xargs](s.ShellReturnValueNJS.md#xargs)
- [$](s.ShellReturnValueNJS.md#$)
- [run](s.ShellReturnValueNJS.md#run)
- [runA](s.ShellReturnValueNJS.md#runa)
- [read](s.ShellReturnValueNJS.md#read)
- [cat](s.ShellReturnValueNJS.md#cat)
- [exec](s.ShellReturnValueNJS.md#exec)
- [head](s.ShellReturnValueNJS.md#head)
- [grep](s.ShellReturnValueNJS.md#grep)
- [sed](s.ShellReturnValueNJS.md#sed)
- [sort](s.ShellReturnValueNJS.md#sort)
- [tail](s.ShellReturnValueNJS.md#tail)
- [uniq](s.ShellReturnValueNJS.md#uniq)
- [code](s.ShellReturnValueNJS.md#code)
- [stdout](s.ShellReturnValueNJS.md#stdout)
- [stderr](s.ShellReturnValueNJS.md#stderr)

### Methods

- [to](s.ShellReturnValueNJS.md#to)
- [toEnd](s.ShellReturnValueNJS.md#toend)

## Properties

### xargs

• **xargs**: [`XargsFunction`](s.XargsFunction.md)

___

### $

• **$**: [`DollarFunction`](s.DollarFunction.md)

___

### run

• **run**: [`RunFunction`](s.RunFunction.md)

___

### runA

• **runA**: [`RunAsyncFunction`](s.RunAsyncFunction.md)

___

### read

• **read**: (`options`: [`ReadOptions`](s.ReadOptions.md)) => `Promise`<[`ShellString`](../modules/s.md#shellstring)\>

#### Type declaration

▸ (`options`): `Promise`<[`ShellString`](../modules/s.md#shellstring)\>

This function mimic [`read`](https://phoenixnap.com/kb/bash-read) command.
So, the function purpose is reading from `stdin`.
```js
const answer= await $.read({ "-p": "Question" });
const color= await $.read({ "-p": "Your color", completions: [ "red", "green" ] });
if($.isFIFO(0)) await $.read().then(echo.bind(null, "E.g. for reading received input:"));
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ReadOptions`](s.ReadOptions.md) |

##### Returns

`Promise`<[`ShellString`](../modules/s.md#shellstring)\>

___

### cat

• **cat**: [`CatFunction`](s.CatFunction.md)

Returns a string containing the given pipeline, or a concatenated string
containing the pipelines if more than one input stream is given
(a new line character is introduced between each input).

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[cat](s.ShellReturnValue.md#cat)

___

### exec

• **exec**: [`ExecFunction`](s.ExecFunction.md)

Executes the given command.

**`Param`**

The command to execute.

**`Param`**

Silence and synchronous options.

**`Param`**

Receives code and output asynchronously.

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[exec](s.ShellReturnValue.md#exec)

___

### head

• **head**: [`HeadFunction`](s.HeadFunction.md)

Read the start of a pipeline input.

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[head](s.ShellReturnValue.md#head)

___

### grep

• **grep**: [`GrepFunction`](s.GrepFunction.md)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

**`Param`**

Available options:
       - `-v`: Inverse the sense of the regex and print
               the lines not matching the criteria.
       - `-l`: Print only filenames of matching files

**`Param`**

The regular expression to use.

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[grep](s.ShellReturnValue.md#grep)

___

### sed

• **sed**: [`SedFunction`](s.SedFunction.md)

Reads an input string from pipeline and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

**`Param`**

Available options:
       - `-i`: Replace contents of 'file' in-place. Note that no backups will be created!

**`Param`**

The regular expression to use for search.

**`Param`**

The replacement.

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[sed](s.ShellReturnValue.md#sed)

___

### sort

• **sort**: [`SortFunction`](s.SortFunction.md)

Return the contents of the pipeline, sorted line-by-line.

**`Param`**

Available options:
       - `-r`: Reverse the results
       - `-n`: Compare according to numerical value

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[sort](s.ShellReturnValue.md#sort)

___

### tail

• **tail**: [`TailFunction`](s.TailFunction.md)

Read the end of a pipeline input.

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[tail](s.ShellReturnValue.md#tail)

___

### uniq

• **uniq**: [`UniqFunction`](s.UniqFunction.md)

Filter adjacent matching lines from input.

**`Param`**

Available options:
       - `-i`: Ignore case while comparing
       - `-c`: Prefix lines by the number of occurrences
       - `-d`: Only print duplicate lines, one for each group of identical lines

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[uniq](s.ShellReturnValue.md#uniq)

___

### code

• **code**: `number`

The process exit code.

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[code](s.ShellReturnValue.md#code)

___

### stdout

• **stdout**: `string`

The process standard output.

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[stdout](s.ShellReturnValue.md#stdout)

___

### stderr

• **stderr**: `string`

The process standard error output.

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[stderr](s.ShellReturnValue.md#stderr)

## Methods

### to

▸ **to**(`file`): `void`

Analogous to the redirection operator `>` in Unix, but works with JavaScript strings
(such as those returned by `cat`, `grep`, etc).

Like Unix redirections, `to()` will overwrite any existing file!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | The file to use. |

#### Returns

`void`

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[to](s.ShellReturnValue.md#to)

___

### toEnd

▸ **toEnd**(`file`): `void`

Analogous to the redirect-and-append operator `>>` in Unix, but works with JavaScript strings
(such as those returned by `cat`, `grep`, etc).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | The file to append to. |

#### Returns

`void`

#### Inherited from

[ShellReturnValue](s.ShellReturnValue.md).[toEnd](s.ShellReturnValue.md#toend)
