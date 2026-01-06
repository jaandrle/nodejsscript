[**nodejsscript**](../../../README.md)

***

[nodejsscript](../../../README.md) / s

# s

This namespace refers to `shelljs`, for docs visits [shelljs/shelljs](https://github.com/shelljs/shelljs).
You can pipe commands when make sense by chaining, see [**Pipes**](https://github.com/shelljs/shelljs#pipes).

Available commands:
   [cat](https://github.com/shelljs/shelljs#catoptions-file--file-)
 · [cd](https://github.com/shelljs/shelljs#cddir)
 · [chmod](https://github.com/shelljs/shelljs#chmodoptions-octal_mode--octal_string-file)
 · [cp](https://github.com/shelljs/shelljs#cpoptions-source--source--dest)
 · [pushd](https://github.com/shelljs/shelljs#pushdoptions-dir---n--n)
 · [popd](https://github.com/shelljs/shelljs#popdoptions--n--n)
 · [dirs](https://github.com/shelljs/shelljs#dirsoptions--n---n)
 · [find](https://github.com/shelljs/shelljs#findpath--path-)
 · [grep](https://github.com/shelljs/shelljs#grepoptions-regex_filter-file--file-)
 · [head](https://github.com/shelljs/shelljs#head-n-num-file--file-)
 · [ln](https://github.com/shelljs/shelljs#lnoptions-source-dest)
 · [ls](https://github.com/shelljs/shelljs#lsoptions-path-)
 · [mkdir](https://github.com/shelljs/shelljs#mkdiroptions-dir--dir-)
 · [mv](https://github.com/shelljs/shelljs#mvoptions--source--source--dest)
 · [pwd](https://github.com/shelljs/shelljs#pwd)
 · [rm](https://github.com/shelljs/shelljs#rmoptions-file--file-)
 · [sed](https://github.com/shelljs/shelljs#sedoptions-search_regex-replacement-file--file-)
 · [sort](https://github.com/shelljs/shelljs#sortoptions-file--file-)
 · [tail](https://github.com/shelljs/shelljs#tail-n-num-file--file-)
 · [test](https://github.com/shelljs/shelljs#testexpression)
 · [touch](https://github.com/shelljs/shelljs#touchoptions-file--file-)
 · [uniq](https://github.com/shelljs/shelljs#uniqoptions-input-output)
 · [which](https://github.com/shelljs/shelljs#whichcommand)
 · [error](https://github.com/shelljs/shelljs#error)
 · [errorCode](https://github.com/shelljs/shelljs#errorcode) 

```js
s.cat("./package.json").grep("version");
```
… this library adds:
- ['run()'](variables/run.md)
- ['runA()'](variables/runA.md)
- ['xargs()'](interfaces/XargsFunction.md)
- ['$()'](interfaces/DollarFunction.md)
- ['read()'](functions/read.md)

**Changes/recommenctions:**
- use [echo](variables/echo.md) instead of `s.echo`, this was changed to `s.ShellString` for easy file writing without logging to console `s.echo("Data").to("file.txt")`.
- use ['run()'](variables/run.md)/['runA()'](variables/runA.md) instead of `s.exec`, because of options for passing arguments in secure way.
- use ['$()'](interfaces/DollarFunction.md) instead of `s.set()`, because `$()` allows chaining (you can also access config with [$](variables/$.md)s `.is_*` keys).
- use [$.xdg](../$/variables/xdg.md)`.temp` instead of `s.tempdir()` – the `$.xdg.*` provides more paths than just temp directory.

## Modules

- [child\_process](../../../child_process/README.md)

## Classes

- [ProcessOutput](classes/ProcessOutput.md)
- [ProcessPromise](classes/ProcessPromise.md)

## Interfaces

- [XargsOptions](interfaces/XargsOptions.md)
- [XargsFunction](interfaces/XargsFunction.md)
- [DollarFunction](interfaces/DollarFunction.md)
- [RunFunction](interfaces/RunFunction.md)
- [RunAsyncFunction](interfaces/RunAsyncFunction.md)
- [ReadOptions](interfaces/ReadOptions.md)
- [ShellReturnValueNJS](interfaces/ShellReturnValueNJS.md)
- [ListFunction](interfaces/ListFunction.md)
- [FindFunction](interfaces/FindFunction.md)
- [CopyFunction](interfaces/CopyFunction.md)
- [RemoveFunction](interfaces/RemoveFunction.md)
- [MoveFunction](interfaces/MoveFunction.md)
- [MkdirFunction](interfaces/MkdirFunction.md)
- [CatFunction](interfaces/CatFunction.md)
- [SedFunction](interfaces/SedFunction.md)
- [GrepFunction](interfaces/GrepFunction.md)
- [EchoFunction](interfaces/EchoFunction.md)
- [PushDirFunction](interfaces/PushDirFunction.md)
- [PopDirFunction](interfaces/PopDirFunction.md)
- [DirsFunction](interfaces/DirsFunction.md)
- [LinkFunction](interfaces/LinkFunction.md)
- [ExecFunction](interfaces/ExecFunction.md)
- [ExecOptions](interfaces/ExecOptions.md)
- [ExecOutputReturnValue](interfaces/ExecOutputReturnValue.md)
- [CmdFunction](interfaces/CmdFunction.md)
- [CmdOptions](interfaces/CmdOptions.md)
- [ShellReturnValue](interfaces/ShellReturnValue.md)
- [ShellStringConstructor](interfaces/ShellStringConstructor.md)
- [ChmodFunction](interfaces/ChmodFunction.md)
- [TouchOptionsArray](interfaces/TouchOptionsArray.md)
- [TouchFunction](interfaces/TouchFunction.md)
- [HeadOptions](interfaces/HeadOptions.md)
- [HeadFunction](interfaces/HeadFunction.md)
- [SortFunction](interfaces/SortFunction.md)
- [TailOptions](interfaces/TailOptions.md)
- [TailFunction](interfaces/TailFunction.md)
- [UniqFunction](interfaces/UniqFunction.md)
- [ShellConfig](interfaces/ShellConfig.md)

## Type Aliases

- [RunOptions](type-aliases/RunOptions.md)
- [IO](type-aliases/IO.md)
- [TestOptions](type-aliases/TestOptions.md)
- [ExecCallback](type-aliases/ExecCallback.md)
- [ShellString](type-aliases/ShellString.md)
- [ShellArray](type-aliases/ShellArray.md)
- [TouchOptionsLiteral](type-aliases/TouchOptionsLiteral.md)

## Variables

- [$](variables/$.md)
- [run](variables/run.md)
- [runA](variables/runA.md)
- [ls](variables/ls.md)
- [find](variables/find.md)
- [cp](variables/cp.md)
- [rm](variables/rm.md)
- [mv](variables/mv.md)
- [mkdir](variables/mkdir.md)
- [cat](variables/cat.md)
- [sed](variables/sed.md)
- [grep](variables/grep.md)
- [echo](variables/echo.md)
- [pushd](variables/pushd.md)
- [popd](variables/popd.md)
- [dirs](variables/dirs.md)
- [ln](variables/ln.md)
- [env](variables/env.md)
- [exec](variables/exec.md)
- [cmd](variables/cmd.md)
- [ShellString](variables/ShellString.md)
- [chmod](variables/chmod.md)
- [touch](variables/touch.md)
- [head](variables/head.md)
- [sort](variables/sort.md)
- [tail](variables/tail.md)
- [uniq](variables/uniq.md)
- [config](variables/config.md)

## Functions

- [read](functions/read.md)
- [cd](functions/cd.md)
- [pwd](functions/pwd.md)
- [test](functions/test.md)
- [which](functions/which.md)
- [exit](functions/exit.md)
- [tempdir](functions/tempdir.md)
- [error](functions/error.md)
- [set](functions/set.md)
