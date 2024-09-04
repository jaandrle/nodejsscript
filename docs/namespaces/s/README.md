[**nodejsscript**](../../README.md) • **Docs**

***

[nodejsscript](../../README.md) / s

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
- ['run()'](functions/run.md)
- ['runA()'](functions/runA.md)
- ['xargs()'](interfaces/XargsFunction.md)
- ['$()'](interfaces/DollarFunction.md)
- ['read()'](functions/read.md)

**Changes/recommenctions:**
- use [echo](functions/echo.md) instead of `s.echo`, this was changed to `s.ShellString` for easy file writing without logging to console `s.echo("Data").to("file.txt")`.
- use ['run()'](functions/run.md)/['runA()'](functions/runA.md) instead of `s.exec`, because of options for passing arguments in secure way.
- use ['$()'](interfaces/DollarFunction.md) instead of `s.set()`, because `$()` allows chaining (you can also access config with [$](functions/$.md)s `.is_*` keys).
- use [$.xdg](../$/variables/xdg.md)`.temp` instead of `s.tempdir()` – the `$.xdg.*` provides more paths than just temp directory.

## Index

### Namespaces

- [child](namespaces/child/README.md)

### Classes

- [ProcessOutput](classes/ProcessOutput.md)
- [ProcessPromise](classes/ProcessPromise.md)

### Interfaces

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

### Type Aliases

- [RunOptions](type-aliases/RunOptions.md)
- [IO](type-aliases/IO.md)
- [TestOptions](type-aliases/TestOptions.md)
- [ExecCallback](type-aliases/ExecCallback.md)
- [ShellString](type-aliases/ShellString.md)
- [ShellArray](type-aliases/ShellArray.md)
- [TouchOptionsLiteral](type-aliases/TouchOptionsLiteral.md)

### Variables

- [env](variables/env.md)
- [ShellString](variables/ShellString.md)
- [config](variables/config.md)

### Functions

- [read](functions/read.md)
- [$](functions/$.md)
- [run](functions/run.md)
- [runA](functions/runA.md)
- [cd](functions/cd.md)
- [pwd](functions/pwd.md)
- [test](functions/test.md)
- [which](functions/which.md)
- [exit](functions/exit.md)
- [tempdir](functions/tempdir.md)
- [error](functions/error.md)
- [set](functions/set.md)
- [ls](functions/ls.md)
- [find](functions/find.md)
- [cp](functions/cp.md)
- [rm](functions/rm.md)
- [mv](functions/mv.md)
- [mkdir](functions/mkdir.md)
- [cat](functions/cat.md)
- [sed](functions/sed.md)
- [grep](functions/grep.md)
- [echo](functions/echo.md)
- [pushd](functions/pushd.md)
- [popd](functions/popd.md)
- [dirs](functions/dirs.md)
- [ln](functions/ln.md)
- [exec](functions/exec.md)
- [chmod](functions/chmod.md)
- [touch](functions/touch.md)
- [head](functions/head.md)
- [sort](functions/sort.md)
- [tail](functions/tail.md)
- [uniq](functions/uniq.md)
