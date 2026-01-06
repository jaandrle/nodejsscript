[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / ShellReturnValue

# Interface: ShellReturnValue

## Extends

- [`ExecOutputReturnValue`](ExecOutputReturnValue.md)

## Extended by

- [`ShellReturnValueNJS`](ShellReturnValueNJS.md)

## Properties

### cat

> **cat**: [`CatFunction`](CatFunction.md)

Returns a string containing the given pipeline, or a concatenated string
containing the pipelines if more than one input stream is given
(a new line character is introduced between each input).

#### Returns

A string containing the given pipeline, or a concatenated string
        containing the pipelines if more than one input stream is given
        (a new line character is introduced between each input).

***

### exec

> **exec**: [`ExecFunction`](ExecFunction.md)

Executes the given command.

#### Param

The command to execute.

#### Param

Silence and synchronous options.

#### Param

Receives code and output asynchronously.

#### Returns

Returns an object containing the return code and output as string,
        or if `{async: true}` or a `callback` was passed, a `ChildProcess`.

***

### head

> **head**: [`HeadFunction`](HeadFunction.md)

Read the start of a pipeline input.

***

### grep

> **grep**: [`GrepFunction`](GrepFunction.md)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

#### Param

Available options:
       - `-v`: Inverse the sense of the regex and print
               the lines not matching the criteria.
       - `-l`: Print only filenames of matching files

#### Param

The regular expression to use.

#### Returns

Returns a string containing all lines of the file that match the given `regex_filter`.

***

### sed

> **sed**: [`SedFunction`](SedFunction.md)

Reads an input string from pipeline and performs a JavaScript `replace()`
on the input using the given search regex and replacement string or function.

#### Param

Available options:
       - `-i`: Replace contents of 'file' in-place. Note that no backups will be created!

#### Param

The regular expression to use for search.

#### Param

The replacement.

#### Returns

The new string after replacement.

***

### sort

> **sort**: [`SortFunction`](SortFunction.md)

Return the contents of the pipeline, sorted line-by-line.

#### Param

Available options:
       - `-r`: Reverse the results
       - `-n`: Compare according to numerical value

***

### tail

> **tail**: [`TailFunction`](TailFunction.md)

Read the end of a pipeline input.

***

### uniq

> **uniq**: [`UniqFunction`](UniqFunction.md)

Filter adjacent matching lines from input.

#### Param

Available options:
       - `-i`: Ignore case while comparing
       - `-c`: Prefix lines by the number of occurrences
       - `-d`: Only print duplicate lines, one for each group of identical lines

***

### code

> **code**: `number`

The process exit code.

#### Inherited from

[`ExecOutputReturnValue`](ExecOutputReturnValue.md).[`code`](ExecOutputReturnValue.md#code)

***

### stdout

> **stdout**: `string`

The process standard output.

#### Inherited from

[`ExecOutputReturnValue`](ExecOutputReturnValue.md).[`stdout`](ExecOutputReturnValue.md#stdout)

***

### stderr

> **stderr**: `string`

The process standard error output.

#### Inherited from

[`ExecOutputReturnValue`](ExecOutputReturnValue.md).[`stderr`](ExecOutputReturnValue.md#stderr)

## Methods

### to()

> **to**(`file`): `void`

Analogous to the redirection operator `>` in Unix, but works with JavaScript strings
(such as those returned by `cat`, `grep`, etc).

Like Unix redirections, `to()` will overwrite any existing file!

#### Parameters

##### file

`string`

The file to use.

#### Returns

`void`

***

### toEnd()

> **toEnd**(`file`): `void`

Analogous to the redirect-and-append operator `>>` in Unix, but works with JavaScript strings
(such as those returned by `cat`, `grep`, etc).

#### Parameters

##### file

`string`

The file to append to.

#### Returns

`void`
