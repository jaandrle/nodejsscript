[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / ShellReturnValueNJS

# Interface: ShellReturnValueNJS

## Extends

- [`ShellReturnValue`](ShellReturnValue.md)

## Properties

### xargs

> **xargs**: [`XargsFunction`](XargsFunction.md)

***

### $

> **$**: [`DollarFunction`](DollarFunction.md)

***

### run

> **run**: [`RunFunction`](RunFunction.md)

***

### runA

> **runA**: [`RunAsyncFunction`](RunAsyncFunction.md)

***

### read()

> **read**: (`options`) => `Promise`\<[`ShellString`](../type-aliases/ShellString.md)\>

This function mimic [`read`](https://phoenixnap.com/kb/bash-read) command.
So, the function purpose is reading from `stdin`.
```js
const answer= await $.read({ "-p": "Question" });
const color= await $.read({ "-p": "Your color", completions: [ "red", "green" ] });
if($.isFIFO(0)) await $.read().then(echo.bind(null, "E.g. for reading received input:"));
```

#### Parameters

• **options**: [`ReadOptions`](ReadOptions.md)

#### Returns

`Promise`\<[`ShellString`](../type-aliases/ShellString.md)\>

***

### cat

> **cat**: [`CatFunction`](CatFunction.md)

Returns a string containing the given pipeline, or a concatenated string
containing the pipelines if more than one input stream is given
(a new line character is introduced between each input).

#### Returns

A string containing the given pipeline, or a concatenated string
        containing the pipelines if more than one input stream is given
        (a new line character is introduced between each input).

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`cat`](ShellReturnValue.md#cat)

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

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`exec`](ShellReturnValue.md#exec)

***

### head

> **head**: [`HeadFunction`](HeadFunction.md)

Read the start of a pipeline input.

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`head`](ShellReturnValue.md#head)

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

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`grep`](ShellReturnValue.md#grep)

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

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`sed`](ShellReturnValue.md#sed)

***

### sort

> **sort**: [`SortFunction`](SortFunction.md)

Return the contents of the pipeline, sorted line-by-line.

#### Param

Available options:
       - `-r`: Reverse the results
       - `-n`: Compare according to numerical value

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`sort`](ShellReturnValue.md#sort)

***

### tail

> **tail**: [`TailFunction`](TailFunction.md)

Read the end of a pipeline input.

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`tail`](ShellReturnValue.md#tail)

***

### uniq

> **uniq**: [`UniqFunction`](UniqFunction.md)

Filter adjacent matching lines from input.

#### Param

Available options:
       - `-i`: Ignore case while comparing
       - `-c`: Prefix lines by the number of occurrences
       - `-d`: Only print duplicate lines, one for each group of identical lines

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`uniq`](ShellReturnValue.md#uniq)

***

### code

> **code**: `number`

The process exit code.

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`code`](ShellReturnValue.md#code)

***

### stdout

> **stdout**: `string`

The process standard output.

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`stdout`](ShellReturnValue.md#stdout)

***

### stderr

> **stderr**: `string`

The process standard error output.

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`stderr`](ShellReturnValue.md#stderr)

## Methods

### to()

> **to**(`file`): `void`

Analogous to the redirection operator `>` in Unix, but works with JavaScript strings
(such as those returned by `cat`, `grep`, etc).

Like Unix redirections, `to()` will overwrite any existing file!

#### Parameters

• **file**: `string`

The file to use.

#### Returns

`void`

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`to`](ShellReturnValue.md#to)

***

### toEnd()

> **toEnd**(`file`): `void`

Analogous to the redirect-and-append operator `>>` in Unix, but works with JavaScript strings
(such as those returned by `cat`, `grep`, etc).

#### Parameters

• **file**: `string`

The file to append to.

#### Returns

`void`

#### Inherited from

[`ShellReturnValue`](ShellReturnValue.md).[`toEnd`](ShellReturnValue.md#toend)
