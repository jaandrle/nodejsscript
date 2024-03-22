[nodejsscript](../README.md) / [s](../modules/s.md) / ShellReturnValue

# Interface: ShellReturnValue

[s](../modules/s.md).ShellReturnValue

## Hierarchy

- [`ExecOutputReturnValue`](s.ExecOutputReturnValue.md)

  ↳ **`ShellReturnValue`**

  ↳↳ [`ShellReturnValueNJS`](s.ShellReturnValueNJS.md)

## Table of contents

### Methods

- [to](s.ShellReturnValue.md#to)
- [toEnd](s.ShellReturnValue.md#toend)

### Properties

- [cat](s.ShellReturnValue.md#cat)
- [exec](s.ShellReturnValue.md#exec)
- [head](s.ShellReturnValue.md#head)
- [grep](s.ShellReturnValue.md#grep)
- [sed](s.ShellReturnValue.md#sed)
- [sort](s.ShellReturnValue.md#sort)
- [tail](s.ShellReturnValue.md#tail)
- [uniq](s.ShellReturnValue.md#uniq)
- [code](s.ShellReturnValue.md#code)
- [stdout](s.ShellReturnValue.md#stdout)
- [stderr](s.ShellReturnValue.md#stderr)

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

## Properties

### cat

• **cat**: [`CatFunction`](s.CatFunction.md)

Returns a string containing the given pipeline, or a concatenated string
containing the pipelines if more than one input stream is given
(a new line character is introduced between each input).

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

___

### head

• **head**: [`HeadFunction`](s.HeadFunction.md)

Read the start of a pipeline input.

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

___

### sort

• **sort**: [`SortFunction`](s.SortFunction.md)

Return the contents of the pipeline, sorted line-by-line.

**`Param`**

Available options:
       - `-r`: Reverse the results
       - `-n`: Compare according to numerical value

___

### tail

• **tail**: [`TailFunction`](s.TailFunction.md)

Read the end of a pipeline input.

___

### uniq

• **uniq**: [`UniqFunction`](s.UniqFunction.md)

Filter adjacent matching lines from input.

**`Param`**

Available options:
       - `-i`: Ignore case while comparing
       - `-c`: Prefix lines by the number of occurrences
       - `-d`: Only print duplicate lines, one for each group of identical lines

___

### code

• **code**: `number`

The process exit code.

#### Inherited from

[ExecOutputReturnValue](s.ExecOutputReturnValue.md).[code](s.ExecOutputReturnValue.md#code)

___

### stdout

• **stdout**: `string`

The process standard output.

#### Inherited from

[ExecOutputReturnValue](s.ExecOutputReturnValue.md).[stdout](s.ExecOutputReturnValue.md#stdout)

___

### stderr

• **stderr**: `string`

The process standard error output.

#### Inherited from

[ExecOutputReturnValue](s.ExecOutputReturnValue.md).[stderr](s.ExecOutputReturnValue.md#stderr)
