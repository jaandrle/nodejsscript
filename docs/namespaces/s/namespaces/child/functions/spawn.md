[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / spawn

# Function: spawn()

## spawn(command, options)

> **spawn**(`command`, `options`?): [`ChildProcessWithoutNullStreams`](../interfaces/ChildProcessWithoutNullStreams.md)

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`. If omitted, `args` defaults
to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options, with these defaults:

```js
const defaults = {
  cwd: undefined,
  env: process.env,
};
```

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Use `env` to specify environment variables that will be visible to the new
process, the default is `process.env`.

`undefined` values in `env` will be ignored.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('node:child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('node:child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

Node.js overwrites `argv[0]` with `process.execPath` on startup, so `process.argv[0]` in a Node.js child process will not match the `argv0` parameter passed to `spawn` from the parent. Retrieve
it with the `process.argv0` property instead.

If the `signal` option is enabled, calling `.abort()` on the corresponding `AbortController` is similar to calling `.kill()` on the child process except
the error passed to the callback will be an `AbortError`:

```js
const { spawn } = require('node:child_process');
const controller = new AbortController();
const { signal } = controller;
const grep = spawn('grep', ['ssh'], { signal });
grep.on('error', (err) => {
  // This will be called with err being an AbortError if the controller aborts
});
controller.abort(); // Stops the child process
```

### Parameters

• **command**: `string`

The command to run.

• **options?**: [`SpawnOptionsWithoutStdio`](../interfaces/SpawnOptionsWithoutStdio.md)

### Returns

[`ChildProcessWithoutNullStreams`](../interfaces/ChildProcessWithoutNullStreams.md)

### Since

v0.1.90

## spawn(command, options)

> **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `Readable`, `Readable`\>

### Parameters

• **command**: `string`

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioPipe`](../type-aliases/StdioPipe.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `Readable`, `Readable`\>

## spawn(command, options)

> **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `Readable`, `null`\>

### Parameters

• **command**: `string`

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioNull`](../type-aliases/StdioNull.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `Readable`, `null`\>

## spawn(command, options)

> **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `null`, `Readable`\>

### Parameters

• **command**: `string`

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioNull`](../type-aliases/StdioNull.md), [`StdioPipe`](../type-aliases/StdioPipe.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `null`, `Readable`\>

## spawn(command, options)

> **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `Readable`, `Readable`\>

### Parameters

• **command**: `string`

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioNull`](../type-aliases/StdioNull.md), [`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioPipe`](../type-aliases/StdioPipe.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `Readable`, `Readable`\>

## spawn(command, options)

> **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `null`, `null`\>

### Parameters

• **command**: `string`

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioNull`](../type-aliases/StdioNull.md), [`StdioNull`](../type-aliases/StdioNull.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `null`, `null`\>

## spawn(command, options)

> **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `Readable`, `null`\>

### Parameters

• **command**: `string`

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioNull`](../type-aliases/StdioNull.md), [`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioNull`](../type-aliases/StdioNull.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `Readable`, `null`\>

## spawn(command, options)

> **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `null`, `Readable`\>

### Parameters

• **command**: `string`

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioNull`](../type-aliases/StdioNull.md), [`StdioNull`](../type-aliases/StdioNull.md), [`StdioPipe`](../type-aliases/StdioPipe.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `null`, `Readable`\>

## spawn(command, options)

> **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `null`, `null`\>

### Parameters

• **command**: `string`

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioNull`](../type-aliases/StdioNull.md), [`StdioNull`](../type-aliases/StdioNull.md), [`StdioNull`](../type-aliases/StdioNull.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `null`, `null`\>

## spawn(command, options)

> **spawn**(`command`, `options`): [`ChildProcess`](../classes/ChildProcess.md)

### Parameters

• **command**: `string`

• **options**: [`SpawnOptions`](../interfaces/SpawnOptions.md)

### Returns

[`ChildProcess`](../classes/ChildProcess.md)

## spawn(command, args, options)

> **spawn**(`command`, `args`?, `options`?): [`ChildProcessWithoutNullStreams`](../interfaces/ChildProcessWithoutNullStreams.md)

### Parameters

• **command**: `string`

• **args?**: readonly `string`[]

• **options?**: [`SpawnOptionsWithoutStdio`](../interfaces/SpawnOptionsWithoutStdio.md)

### Returns

[`ChildProcessWithoutNullStreams`](../interfaces/ChildProcessWithoutNullStreams.md)

## spawn(command, args, options)

> **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `Readable`, `Readable`\>

### Parameters

• **command**: `string`

• **args**: readonly `string`[]

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioPipe`](../type-aliases/StdioPipe.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `Readable`, `Readable`\>

## spawn(command, args, options)

> **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `Readable`, `null`\>

### Parameters

• **command**: `string`

• **args**: readonly `string`[]

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioNull`](../type-aliases/StdioNull.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `Readable`, `null`\>

## spawn(command, args, options)

> **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `null`, `Readable`\>

### Parameters

• **command**: `string`

• **args**: readonly `string`[]

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioNull`](../type-aliases/StdioNull.md), [`StdioPipe`](../type-aliases/StdioPipe.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `null`, `Readable`\>

## spawn(command, args, options)

> **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `Readable`, `Readable`\>

### Parameters

• **command**: `string`

• **args**: readonly `string`[]

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioNull`](../type-aliases/StdioNull.md), [`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioPipe`](../type-aliases/StdioPipe.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `Readable`, `Readable`\>

## spawn(command, args, options)

> **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `null`, `null`\>

### Parameters

• **command**: `string`

• **args**: readonly `string`[]

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioNull`](../type-aliases/StdioNull.md), [`StdioNull`](../type-aliases/StdioNull.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`Writable`, `null`, `null`\>

## spawn(command, args, options)

> **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `Readable`, `null`\>

### Parameters

• **command**: `string`

• **args**: readonly `string`[]

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioNull`](../type-aliases/StdioNull.md), [`StdioPipe`](../type-aliases/StdioPipe.md), [`StdioNull`](../type-aliases/StdioNull.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `Readable`, `null`\>

## spawn(command, args, options)

> **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `null`, `Readable`\>

### Parameters

• **command**: `string`

• **args**: readonly `string`[]

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioNull`](../type-aliases/StdioNull.md), [`StdioNull`](../type-aliases/StdioNull.md), [`StdioPipe`](../type-aliases/StdioPipe.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `null`, `Readable`\>

## spawn(command, args, options)

> **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `null`, `null`\>

### Parameters

• **command**: `string`

• **args**: readonly `string`[]

• **options**: [`SpawnOptionsWithStdioTuple`](../interfaces/SpawnOptionsWithStdioTuple.md)\<[`StdioNull`](../type-aliases/StdioNull.md), [`StdioNull`](../type-aliases/StdioNull.md), [`StdioNull`](../type-aliases/StdioNull.md)\>

### Returns

[`ChildProcessByStdio`](../interfaces/ChildProcessByStdio.md)\<`null`, `null`, `null`\>

## spawn(command, args, options)

> **spawn**(`command`, `args`, `options`): [`ChildProcess`](../classes/ChildProcess.md)

### Parameters

• **command**: `string`

• **args**: readonly `string`[]

• **options**: [`SpawnOptions`](../interfaces/SpawnOptions.md)

### Returns

[`ChildProcess`](../classes/ChildProcess.md)