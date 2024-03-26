[nodejsscript](../README.md) / [s](s.md) / child

# Namespace: child

[s](s.md).child

The `node:child_process` module provides the ability to spawn subprocesses in
a manner that is similar, but not identical, to [`popen(3)`](http://man7.org/linux/man-pages/man3/popen.3.html). This capability
is primarily provided by the [spawn](s.child.md#spawn) function:

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

By default, pipes for `stdin`, `stdout`, and `stderr` are established between
the parent Node.js process and the spawned subprocess. These pipes have
limited (and platform-specific) capacity. If the subprocess writes to
stdout in excess of that limit without the output being captured, the
subprocess blocks waiting for the pipe buffer to accept more data. This is
identical to the behavior of pipes in the shell. Use the `{ stdio: 'ignore' }`option if the output will not be consumed.

The command lookup is performed using the `options.env.PATH` environment
variable if `env` is in the `options` object. Otherwise, `process.env.PATH` is
used. If `options.env` is set without `PATH`, lookup on Unix is performed
on a default search path search of `/usr/bin:/bin` (see your operating system's
manual for execvpe/execvp), on Windows the current processes environment
variable `PATH` is used.

On Windows, environment variables are case-insensitive. Node.js
lexicographically sorts the `env` keys and uses the first one that
case-insensitively matches. Only first (in lexicographic order) entry will be
passed to the subprocess. This might lead to issues on Windows when passing
objects to the `env` option that have multiple variants of the same key, such as`PATH` and `Path`.

The [spawn](s.child.md#spawn) method spawns the child process asynchronously,
without blocking the Node.js event loop. The [spawnSync](s.child.md#spawnsync) function provides equivalent functionality in a synchronous manner that blocks
the event loop until the spawned process either exits or is terminated.

For convenience, the `node:child_process` module provides a handful of
synchronous and asynchronous alternatives to [spawn](s.child.md#spawn) and [spawnSync](s.child.md#spawnsync). Each of these alternatives are implemented on
top of [spawn](s.child.md#spawn) or [spawnSync](s.child.md#spawnsync).

* [exec](s.child.md#exec): spawns a shell and runs a command within that
shell, passing the `stdout` and `stderr` to a callback function when
complete.
* [execFile](s.child.md#execfile): similar to [exec](s.child.md#exec) except
that it spawns the command directly without first spawning a shell by
default.
* [fork](s.child.md#fork): spawns a new Node.js process and invokes a
specified module with an IPC communication channel established that allows
sending messages between parent and child.
* [execSync](s.child.md#execsync): a synchronous version of [exec](s.child.md#exec) that will block the Node.js event loop.
* [execFileSync](s.child.md#execfilesync): a synchronous version of [execFile](s.child.md#execfile) that will block the Node.js event loop.

For certain use cases, such as automating shell scripts, the `synchronous counterparts` may be more convenient. In many cases, however,
the synchronous methods can have significant impact on performance due to
stalling the event loop while spawned processes complete.

**`See`**

[source](https://github.com/nodejs/node/blob/v20.2.0/lib/child_process.js)

## Table of contents

### Functions

- [spawn](s.child.md#spawn)
- [exec](s.child.md#exec)
- [execFile](s.child.md#execfile)
- [fork](s.child.md#fork)
- [spawnSync](s.child.md#spawnsync)
- [execSync](s.child.md#execsync)
- [execFileSync](s.child.md#execfilesync)

### Namespaces

- [exec](s.child.exec.md)
- [execFile](s.child.execFile.md)

### Type Aliases

- [Serializable](s.child.md#serializable)
- [SendHandle](s.child.md#sendhandle)
- [IOType](s.child.md#iotype)
- [StdioOptions](s.child.md#stdiooptions)
- [SerializationType](s.child.md#serializationtype)
- [StdioNull](s.child.md#stdionull)
- [StdioPipeNamed](s.child.md#stdiopipenamed)
- [StdioPipe](s.child.md#stdiopipe)
- [ExecFileException](s.child.md#execfileexception)

### Classes

- [ChildProcess](../classes/s.child.ChildProcess.md)

### Interfaces

- [ChildProcessWithoutNullStreams](../interfaces/s.child.ChildProcessWithoutNullStreams.md)
- [ChildProcessByStdio](../interfaces/s.child.ChildProcessByStdio.md)
- [MessageOptions](../interfaces/s.child.MessageOptions.md)
- [MessagingOptions](../interfaces/s.child.MessagingOptions.md)
- [ProcessEnvOptions](../interfaces/s.child.ProcessEnvOptions.md)
- [CommonOptions](../interfaces/s.child.CommonOptions.md)
- [CommonSpawnOptions](../interfaces/s.child.CommonSpawnOptions.md)
- [SpawnOptions](../interfaces/s.child.SpawnOptions.md)
- [SpawnOptionsWithoutStdio](../interfaces/s.child.SpawnOptionsWithoutStdio.md)
- [SpawnOptionsWithStdioTuple](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)
- [ExecOptions](../interfaces/s.child.ExecOptions.md)
- [ExecOptionsWithStringEncoding](../interfaces/s.child.ExecOptionsWithStringEncoding.md)
- [ExecOptionsWithBufferEncoding](../interfaces/s.child.ExecOptionsWithBufferEncoding.md)
- [ExecException](../interfaces/s.child.ExecException.md)
- [PromiseWithChild](../interfaces/s.child.PromiseWithChild.md)
- [ExecFileOptions](../interfaces/s.child.ExecFileOptions.md)
- [ExecFileOptionsWithStringEncoding](../interfaces/s.child.ExecFileOptionsWithStringEncoding.md)
- [ExecFileOptionsWithBufferEncoding](../interfaces/s.child.ExecFileOptionsWithBufferEncoding.md)
- [ExecFileOptionsWithOtherEncoding](../interfaces/s.child.ExecFileOptionsWithOtherEncoding.md)
- [ForkOptions](../interfaces/s.child.ForkOptions.md)
- [SpawnSyncOptions](../interfaces/s.child.SpawnSyncOptions.md)
- [SpawnSyncOptionsWithStringEncoding](../interfaces/s.child.SpawnSyncOptionsWithStringEncoding.md)
- [SpawnSyncOptionsWithBufferEncoding](../interfaces/s.child.SpawnSyncOptionsWithBufferEncoding.md)
- [SpawnSyncReturns](../interfaces/s.child.SpawnSyncReturns.md)
- [CommonExecOptions](../interfaces/s.child.CommonExecOptions.md)
- [ExecSyncOptions](../interfaces/s.child.ExecSyncOptions.md)
- [ExecSyncOptionsWithStringEncoding](../interfaces/s.child.ExecSyncOptionsWithStringEncoding.md)
- [ExecSyncOptionsWithBufferEncoding](../interfaces/s.child.ExecSyncOptionsWithBufferEncoding.md)
- [ExecFileSyncOptions](../interfaces/s.child.ExecFileSyncOptions.md)
- [ExecFileSyncOptionsWithStringEncoding](../interfaces/s.child.ExecFileSyncOptionsWithStringEncoding.md)
- [ExecFileSyncOptionsWithBufferEncoding](../interfaces/s.child.ExecFileSyncOptionsWithBufferEncoding.md)

## Functions

### spawn

▸ **spawn**(`command`, `options?`): [`ChildProcessWithoutNullStreams`](../interfaces/s.child.ChildProcessWithoutNullStreams.md)

The `child_process.spawn()` method spawns a new process using the given`command`, with command-line arguments in `args`. If omitted, `args` defaults
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

Node.js overwrites `argv[0]` with `process.execPath` on startup, so`process.argv[0]` in a Node.js child process will not match the `argv0`parameter passed to `spawn` from the parent. Retrieve
it with the`process.argv0` property instead.

If the `signal` option is enabled, calling `.abort()` on the corresponding`AbortController` is similar to calling `.kill()` on the child process except
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

**`Since`**

v0.1.90

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to run. |
| `options?` | [`SpawnOptionsWithoutStdio`](../interfaces/s.child.SpawnOptionsWithoutStdio.md) | - |

#### Returns

[`ChildProcessWithoutNullStreams`](../interfaces/s.child.ChildProcessWithoutNullStreams.md)

▸ **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, `Readable`, `Readable`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioPipe`](s.child.md#stdiopipe), [`StdioPipe`](s.child.md#stdiopipe), [`StdioPipe`](s.child.md#stdiopipe)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, `Readable`, `Readable`\>

▸ **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, `Readable`, ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioPipe`](s.child.md#stdiopipe), [`StdioPipe`](s.child.md#stdiopipe), [`StdioNull`](s.child.md#stdionull)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, `Readable`, ``null``\>

▸ **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, ``null``, `Readable`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioPipe`](s.child.md#stdiopipe), [`StdioNull`](s.child.md#stdionull), [`StdioPipe`](s.child.md#stdiopipe)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, ``null``, `Readable`\>

▸ **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, `Readable`, `Readable`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioNull`](s.child.md#stdionull), [`StdioPipe`](s.child.md#stdiopipe), [`StdioPipe`](s.child.md#stdiopipe)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, `Readable`, `Readable`\>

▸ **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, ``null``, ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioPipe`](s.child.md#stdiopipe), [`StdioNull`](s.child.md#stdionull), [`StdioNull`](s.child.md#stdionull)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, ``null``, ``null``\>

▸ **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, `Readable`, ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioNull`](s.child.md#stdionull), [`StdioPipe`](s.child.md#stdiopipe), [`StdioNull`](s.child.md#stdionull)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, `Readable`, ``null``\>

▸ **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, ``null``, `Readable`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioNull`](s.child.md#stdionull), [`StdioNull`](s.child.md#stdionull), [`StdioPipe`](s.child.md#stdiopipe)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, ``null``, `Readable`\>

▸ **spawn**(`command`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, ``null``, ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioNull`](s.child.md#stdionull), [`StdioNull`](s.child.md#stdionull), [`StdioNull`](s.child.md#stdionull)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, ``null``, ``null``\>

▸ **spawn**(`command`, `options`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`SpawnOptions`](../interfaces/s.child.SpawnOptions.md) |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **spawn**(`command`, `args?`, `options?`): [`ChildProcessWithoutNullStreams`](../interfaces/s.child.ChildProcessWithoutNullStreams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args?` | readonly `string`[] |
| `options?` | [`SpawnOptionsWithoutStdio`](../interfaces/s.child.SpawnOptionsWithoutStdio.md) |

#### Returns

[`ChildProcessWithoutNullStreams`](../interfaces/s.child.ChildProcessWithoutNullStreams.md)

▸ **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, `Readable`, `Readable`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args` | readonly `string`[] |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioPipe`](s.child.md#stdiopipe), [`StdioPipe`](s.child.md#stdiopipe), [`StdioPipe`](s.child.md#stdiopipe)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, `Readable`, `Readable`\>

▸ **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, `Readable`, ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args` | readonly `string`[] |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioPipe`](s.child.md#stdiopipe), [`StdioPipe`](s.child.md#stdiopipe), [`StdioNull`](s.child.md#stdionull)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, `Readable`, ``null``\>

▸ **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, ``null``, `Readable`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args` | readonly `string`[] |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioPipe`](s.child.md#stdiopipe), [`StdioNull`](s.child.md#stdionull), [`StdioPipe`](s.child.md#stdiopipe)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, ``null``, `Readable`\>

▸ **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, `Readable`, `Readable`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args` | readonly `string`[] |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioNull`](s.child.md#stdionull), [`StdioPipe`](s.child.md#stdiopipe), [`StdioPipe`](s.child.md#stdiopipe)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, `Readable`, `Readable`\>

▸ **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, ``null``, ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args` | readonly `string`[] |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioPipe`](s.child.md#stdiopipe), [`StdioNull`](s.child.md#stdionull), [`StdioNull`](s.child.md#stdionull)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<`Writable`, ``null``, ``null``\>

▸ **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, `Readable`, ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args` | readonly `string`[] |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioNull`](s.child.md#stdionull), [`StdioPipe`](s.child.md#stdiopipe), [`StdioNull`](s.child.md#stdionull)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, `Readable`, ``null``\>

▸ **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, ``null``, `Readable`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args` | readonly `string`[] |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioNull`](s.child.md#stdionull), [`StdioNull`](s.child.md#stdionull), [`StdioPipe`](s.child.md#stdiopipe)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, ``null``, `Readable`\>

▸ **spawn**(`command`, `args`, `options`): [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, ``null``, ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args` | readonly `string`[] |
| `options` | [`SpawnOptionsWithStdioTuple`](../interfaces/s.child.SpawnOptionsWithStdioTuple.md)<[`StdioNull`](s.child.md#stdionull), [`StdioNull`](s.child.md#stdionull), [`StdioNull`](s.child.md#stdionull)\> |

#### Returns

[`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)<``null``, ``null``, ``null``\>

▸ **spawn**(`command`, `args`, `options`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args` | readonly `string`[] |
| `options` | [`SpawnOptions`](../interfaces/s.child.SpawnOptions.md) |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

___

### exec

▸ **exec**(`command`, `callback?`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

Spawns a shell then executes the `command` within that shell, buffering any
generated output. The `command` string passed to the exec function is processed
directly by the shell and special characters (vary based on [shell](https://en.wikipedia.org/wiki/List_of_command-line_interpreters))
need to be dealt with accordingly:

```js
const { exec } = require('node:child_process');

exec('"/path/to/test file/test.sh" arg1 arg2');
// Double quotes are used so that the space in the path is not interpreted as
// a delimiter of multiple arguments.

exec('echo "The \\$HOME variable is $HOME"');
// The $HOME variable is escaped in the first instance, but not in the second.
```

**Never pass unsanitized user input to this function. Any input containing shell**
**metacharacters may be used to trigger arbitrary command execution.**

If a `callback` function is provided, it is called with the arguments`(error, stdout, stderr)`. On success, `error` will be `null`. On error,`error` will be an instance of `Error`. The
`error.code` property will be
the exit code of the process. By convention, any exit code other than `0`indicates an error. `error.signal` will be the signal that terminated the
process.

The `stdout` and `stderr` arguments passed to the callback will contain the
stdout and stderr output of the child process. By default, Node.js will decode
the output as UTF-8 and pass strings to the callback. The `encoding` option
can be used to specify the character encoding used to decode the stdout and
stderr output. If `encoding` is `'buffer'`, or an unrecognized character
encoding, `Buffer` objects will be passed to the callback instead.

```js
const { exec } = require('node:child_process');
exec('cat *.js missing_file | wc -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
```

If `timeout` is greater than `0`, the parent will send the signal
identified by the `killSignal` property (the default is `'SIGTERM'`) if the
child runs longer than `timeout` milliseconds.

Unlike the [`exec(3)`](http://man7.org/linux/man-pages/man3/exec.3.html) POSIX system call, `child_process.exec()` does not replace
the existing process and uses a shell to execute the command.

If this method is invoked as its `util.promisify()` ed version, it returns
a `Promise` for an `Object` with `stdout` and `stderr` properties. The returned`ChildProcess` instance is attached to the `Promise` as a `child` property. In
case of an error (including any error resulting in an exit code other than 0), a
rejected promise is returned, with the same `error` object given in the
callback, but with two additional properties `stdout` and `stderr`.

```js
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

async function lsExample() {
  const { stdout, stderr } = await exec('ls');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}
lsExample();
```

If the `signal` option is enabled, calling `.abort()` on the corresponding`AbortController` is similar to calling `.kill()` on the child process except
the error passed to the callback will be an `AbortError`:

```js
const { exec } = require('node:child_process');
const controller = new AbortController();
const { signal } = controller;
const child = exec('grep ssh', { signal }, (error) => {
  console.error(error); // an AbortError
});
controller.abort();
```

**`Since`**

v0.1.90

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to run, with space-separated arguments. |
| `callback?` | (`error`: [`ExecException`](../interfaces/s.child.ExecException.md), `stdout`: `string`, `stderr`: `string`) => `void` | called with the output when process terminates. |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **exec**(`command`, `options`, `callback?`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | { `encoding`: ``"buffer"``  } & [`ExecOptions`](../interfaces/s.child.ExecOptions.md) |
| `callback?` | (`error`: [`ExecException`](../interfaces/s.child.ExecException.md), `stdout`: `Buffer`, `stderr`: `Buffer`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **exec**(`command`, `options`, `callback?`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | { `encoding`: `BufferEncoding`  } & [`ExecOptions`](../interfaces/s.child.ExecOptions.md) |
| `callback?` | (`error`: [`ExecException`](../interfaces/s.child.ExecException.md), `stdout`: `string`, `stderr`: `string`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **exec**(`command`, `options`, `callback?`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | { `encoding`: `BufferEncoding`  } & [`ExecOptions`](../interfaces/s.child.ExecOptions.md) |
| `callback?` | (`error`: [`ExecException`](../interfaces/s.child.ExecException.md), `stdout`: `string` \| `Buffer`, `stderr`: `string` \| `Buffer`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **exec**(`command`, `options`, `callback?`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`ExecOptions`](../interfaces/s.child.ExecOptions.md) |
| `callback?` | (`error`: [`ExecException`](../interfaces/s.child.ExecException.md), `stdout`: `string`, `stderr`: `string`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **exec**(`command`, `options`, `callback?`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | `ObjectEncodingOptions` & [`ExecOptions`](../interfaces/s.child.ExecOptions.md) |
| `callback?` | (`error`: [`ExecException`](../interfaces/s.child.ExecException.md), `stdout`: `string` \| `Buffer`, `stderr`: `string` \| `Buffer`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

___

### execFile

▸ **execFile**(`file`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

The `child_process.execFile()` function is similar to [exec](s.child.md#exec) except that it does not spawn a shell by default. Rather, the specified
executable `file` is spawned directly as a new process making it slightly more
efficient than [exec](s.child.md#exec).

The same options as [exec](s.child.md#exec) are supported. Since a shell is
not spawned, behaviors such as I/O redirection and file globbing are not
supported.

```js
const { execFile } = require('node:child_process');
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
```

The `stdout` and `stderr` arguments passed to the callback will contain the
stdout and stderr output of the child process. By default, Node.js will decode
the output as UTF-8 and pass strings to the callback. The `encoding` option
can be used to specify the character encoding used to decode the stdout and
stderr output. If `encoding` is `'buffer'`, or an unrecognized character
encoding, `Buffer` objects will be passed to the callback instead.

If this method is invoked as its `util.promisify()` ed version, it returns
a `Promise` for an `Object` with `stdout` and `stderr` properties. The returned`ChildProcess` instance is attached to the `Promise` as a `child` property. In
case of an error (including any error resulting in an exit code other than 0), a
rejected promise is returned, with the same `error` object given in the
callback, but with two additional properties `stdout` and `stderr`.

```js
const util = require('node:util');
const execFile = util.promisify(require('node:child_process').execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();
```

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

If the `signal` option is enabled, calling `.abort()` on the corresponding`AbortController` is similar to calling `.kill()` on the child process except
the error passed to the callback will be an `AbortError`:

```js
const { execFile } = require('node:child_process');
const controller = new AbortController();
const { signal } = controller;
const child = execFile('node', ['--version'], { signal }, (error) => {
  console.error(error); // an AbortError
});
controller.abort();
```

**`Since`**

v0.1.91

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | The name or path of the executable file to run. |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `options`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | `ObjectEncodingOptions` & [`ExecFileOptions`](../interfaces/s.child.ExecFileOptions.md) |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `args?`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args?` | readonly `string`[] |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `args`, `options`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | `ObjectEncodingOptions` & [`ExecFileOptions`](../interfaces/s.child.ExecFileOptions.md) |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `callback` | (`error`: [`ExecFileException`](s.child.md#execfileexception), `stdout`: `string`, `stderr`: `string`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `args`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `callback` | (`error`: [`ExecFileException`](s.child.md#execfileexception), `stdout`: `string`, `stderr`: `string`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `options`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`ExecFileOptionsWithBufferEncoding`](../interfaces/s.child.ExecFileOptionsWithBufferEncoding.md) |
| `callback` | (`error`: [`ExecFileException`](s.child.md#execfileexception), `stdout`: `Buffer`, `stderr`: `Buffer`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `args`, `options`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | [`ExecFileOptionsWithBufferEncoding`](../interfaces/s.child.ExecFileOptionsWithBufferEncoding.md) |
| `callback` | (`error`: [`ExecFileException`](s.child.md#execfileexception), `stdout`: `Buffer`, `stderr`: `Buffer`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `options`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`ExecFileOptionsWithStringEncoding`](../interfaces/s.child.ExecFileOptionsWithStringEncoding.md) |
| `callback` | (`error`: [`ExecFileException`](s.child.md#execfileexception), `stdout`: `string`, `stderr`: `string`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `args`, `options`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | [`ExecFileOptionsWithStringEncoding`](../interfaces/s.child.ExecFileOptionsWithStringEncoding.md) |
| `callback` | (`error`: [`ExecFileException`](s.child.md#execfileexception), `stdout`: `string`, `stderr`: `string`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `options`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`ExecFileOptionsWithOtherEncoding`](../interfaces/s.child.ExecFileOptionsWithOtherEncoding.md) |
| `callback` | (`error`: [`ExecFileException`](s.child.md#execfileexception), `stdout`: `string` \| `Buffer`, `stderr`: `string` \| `Buffer`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `args`, `options`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | [`ExecFileOptionsWithOtherEncoding`](../interfaces/s.child.ExecFileOptionsWithOtherEncoding.md) |
| `callback` | (`error`: [`ExecFileException`](s.child.md#execfileexception), `stdout`: `string` \| `Buffer`, `stderr`: `string` \| `Buffer`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `options`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`ExecFileOptions`](../interfaces/s.child.ExecFileOptions.md) |
| `callback` | (`error`: [`ExecFileException`](s.child.md#execfileexception), `stdout`: `string`, `stderr`: `string`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `args`, `options`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | [`ExecFileOptions`](../interfaces/s.child.ExecFileOptions.md) |
| `callback` | (`error`: [`ExecFileException`](s.child.md#execfileexception), `stdout`: `string`, `stderr`: `string`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `options`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | `ObjectEncodingOptions` & [`ExecFileOptions`](../interfaces/s.child.ExecFileOptions.md) |
| `callback` | (`error`: [`ExecFileException`](s.child.md#execfileexception), `stdout`: `string` \| `Buffer`, `stderr`: `string` \| `Buffer`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **execFile**(`file`, `args`, `options`, `callback`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | `ObjectEncodingOptions` & [`ExecFileOptions`](../interfaces/s.child.ExecFileOptions.md) |
| `callback` | (`error`: [`ExecFileException`](s.child.md#execfileexception), `stdout`: `string` \| `Buffer`, `stderr`: `string` \| `Buffer`) => `void` |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

___

### fork

▸ **fork**(`modulePath`, `options?`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

The `child_process.fork()` method is a special case of [spawn](s.child.md#spawn) used specifically to spawn new Node.js processes.
Like [spawn](s.child.md#spawn), a `ChildProcess` object is returned. The
returned `ChildProcess` will have an additional communication channel
built-in that allows messages to be passed back and forth between the parent and
child. See `subprocess.send()` for details.

Keep in mind that spawned Node.js child processes are
independent of the parent with exception of the IPC communication channel
that is established between the two. Each process has its own memory, with
their own V8 instances. Because of the additional resource allocations
required, spawning a large number of child Node.js processes is not
recommended.

By default, `child_process.fork()` will spawn new Node.js instances using the `process.execPath` of the parent process. The `execPath` property in the`options` object allows for an alternative
execution path to be used.

Node.js processes launched with a custom `execPath` will communicate with the
parent process using the file descriptor (fd) identified using the
environment variable `NODE_CHANNEL_FD` on the child process.

Unlike the [`fork(2)`](http://man7.org/linux/man-pages/man2/fork.2.html) POSIX system call, `child_process.fork()` does not clone the
current process.

The `shell` option available in [spawn](s.child.md#spawn) is not supported by`child_process.fork()` and will be ignored if set.

If the `signal` option is enabled, calling `.abort()` on the corresponding`AbortController` is similar to calling `.kill()` on the child process except
the error passed to the callback will be an `AbortError`:

```js
if (process.argv[2] === 'child') {
  setTimeout(() => {
    console.log(`Hello from ${process.argv[2]}!`);
  }, 1_000);
} else {
  const { fork } = require('node:child_process');
  const controller = new AbortController();
  const { signal } = controller;
  const child = fork(__filename, ['child'], { signal });
  child.on('error', (err) => {
    // This will be called with err being an AbortError if the controller aborts
  });
  controller.abort(); // Stops the child process
}
```

**`Since`**

v0.5.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modulePath` | `string` | The module to run in the child. |
| `options?` | [`ForkOptions`](../interfaces/s.child.ForkOptions.md) | - |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

▸ **fork**(`modulePath`, `args?`, `options?`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modulePath` | `string` |
| `args?` | readonly `string`[] |
| `options?` | [`ForkOptions`](../interfaces/s.child.ForkOptions.md) |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

___

### spawnSync

▸ **spawnSync**(`command`): [`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`Buffer`\>

The `child_process.spawnSync()` method is generally identical to [spawn](s.child.md#spawn) with the exception that the function will not return
until the child process has fully closed. When a timeout has been encountered
and `killSignal` is sent, the method won't return until the process has
completely exited. If the process intercepts and handles the `SIGTERM` signal
and doesn't exit, the parent process will wait until the child process has
exited.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

**`Since`**

v0.11.12

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to run. |

#### Returns

[`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`Buffer`\>

▸ **spawnSync**(`command`, `options`): [`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`SpawnSyncOptionsWithStringEncoding`](../interfaces/s.child.SpawnSyncOptionsWithStringEncoding.md) |

#### Returns

[`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`string`\>

▸ **spawnSync**(`command`, `options`): [`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`SpawnSyncOptionsWithBufferEncoding`](../interfaces/s.child.SpawnSyncOptionsWithBufferEncoding.md) |

#### Returns

[`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`Buffer`\>

▸ **spawnSync**(`command`, `options?`): [`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`string` \| `Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options?` | [`SpawnSyncOptions`](../interfaces/s.child.SpawnSyncOptions.md) |

#### Returns

[`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`string` \| `Buffer`\>

▸ **spawnSync**(`command`, `args`): [`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args` | readonly `string`[] |

#### Returns

[`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`Buffer`\>

▸ **spawnSync**(`command`, `args`, `options`): [`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args` | readonly `string`[] |
| `options` | [`SpawnSyncOptionsWithStringEncoding`](../interfaces/s.child.SpawnSyncOptionsWithStringEncoding.md) |

#### Returns

[`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`string`\>

▸ **spawnSync**(`command`, `args`, `options`): [`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args` | readonly `string`[] |
| `options` | [`SpawnSyncOptionsWithBufferEncoding`](../interfaces/s.child.SpawnSyncOptionsWithBufferEncoding.md) |

#### Returns

[`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`Buffer`\>

▸ **spawnSync**(`command`, `args?`, `options?`): [`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`string` \| `Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `args?` | readonly `string`[] |
| `options?` | [`SpawnSyncOptions`](../interfaces/s.child.SpawnSyncOptions.md) |

#### Returns

[`SpawnSyncReturns`](../interfaces/s.child.SpawnSyncReturns.md)<`string` \| `Buffer`\>

___

### execSync

▸ **execSync**(`command`): `Buffer`

The `child_process.execSync()` method is generally identical to [exec](s.child.md#exec) with the exception that the method will not return
until the child process has fully closed. When a timeout has been encountered
and `killSignal` is sent, the method won't return until the process has
completely exited. If the child process intercepts and handles the `SIGTERM`signal and doesn't exit, the parent process will wait until the child process
has exited.

If the process times out or has a non-zero exit code, this method will throw.
The `Error` object will contain the entire result from [spawnSync](s.child.md#spawnsync).

**Never pass unsanitized user input to this function. Any input containing shell**
**metacharacters may be used to trigger arbitrary command execution.**

**`Since`**

v0.11.12

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to run. |

#### Returns

`Buffer`

The stdout from the command.

▸ **execSync**(`command`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`ExecSyncOptionsWithStringEncoding`](../interfaces/s.child.ExecSyncOptionsWithStringEncoding.md) |

#### Returns

`string`

▸ **execSync**(`command`, `options`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`ExecSyncOptionsWithBufferEncoding`](../interfaces/s.child.ExecSyncOptionsWithBufferEncoding.md) |

#### Returns

`Buffer`

▸ **execSync**(`command`, `options?`): `string` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options?` | [`ExecSyncOptions`](../interfaces/s.child.ExecSyncOptions.md) |

#### Returns

`string` \| `Buffer`

___

### execFileSync

▸ **execFileSync**(`file`): `Buffer`

The `child_process.execFileSync()` method is generally identical to [execFile](s.child.md#execfile) with the exception that the method will not
return until the child process has fully closed. When a timeout has been
encountered and `killSignal` is sent, the method won't return until the process
has completely exited.

If the child process intercepts and handles the `SIGTERM` signal and
does not exit, the parent process will still wait until the child process has
exited.

If the process times out or has a non-zero exit code, this method will throw an `Error` that will include the full result of the underlying [spawnSync](s.child.md#spawnsync).

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

**`Since`**

v0.11.12

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | The name or path of the executable file to run. |

#### Returns

`Buffer`

The stdout from the command.

▸ **execFileSync**(`file`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`ExecFileSyncOptionsWithStringEncoding`](../interfaces/s.child.ExecFileSyncOptionsWithStringEncoding.md) |

#### Returns

`string`

▸ **execFileSync**(`file`, `options`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`ExecFileSyncOptionsWithBufferEncoding`](../interfaces/s.child.ExecFileSyncOptionsWithBufferEncoding.md) |

#### Returns

`Buffer`

▸ **execFileSync**(`file`, `options?`): `string` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options?` | [`ExecFileSyncOptions`](../interfaces/s.child.ExecFileSyncOptions.md) |

#### Returns

`string` \| `Buffer`

▸ **execFileSync**(`file`, `args`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |

#### Returns

`Buffer`

▸ **execFileSync**(`file`, `args`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | [`ExecFileSyncOptionsWithStringEncoding`](../interfaces/s.child.ExecFileSyncOptionsWithStringEncoding.md) |

#### Returns

`string`

▸ **execFileSync**(`file`, `args`, `options`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | [`ExecFileSyncOptionsWithBufferEncoding`](../interfaces/s.child.ExecFileSyncOptionsWithBufferEncoding.md) |

#### Returns

`Buffer`

▸ **execFileSync**(`file`, `args?`, `options?`): `string` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args?` | readonly `string`[] |
| `options?` | [`ExecFileSyncOptions`](../interfaces/s.child.ExecFileSyncOptions.md) |

#### Returns

`string` \| `Buffer`

## Type Aliases

### Serializable

Ƭ **Serializable**: `string` \| `object` \| `number` \| `boolean` \| `bigint`

___

### SendHandle

Ƭ **SendHandle**: `net.Socket` \| `net.Server`

___

### IOType

Ƭ **IOType**: ``"overlapped"`` \| ``"pipe"`` \| ``"ignore"`` \| ``"inherit"``

___

### StdioOptions

Ƭ **StdioOptions**: [`IOType`](s.child.md#iotype) \| ([`IOType`](s.child.md#iotype) \| ``"ipc"`` \| `Stream` \| `number` \| ``null`` \| `undefined`)[]

___

### SerializationType

Ƭ **SerializationType**: ``"json"`` \| ``"advanced"``

___

### StdioNull

Ƭ **StdioNull**: ``"inherit"`` \| ``"ignore"`` \| `Stream`

___

### StdioPipeNamed

Ƭ **StdioPipeNamed**: ``"pipe"`` \| ``"overlapped"``

___

### StdioPipe

Ƭ **StdioPipe**: `undefined` \| ``null`` \| [`StdioPipeNamed`](s.child.md#stdiopipenamed)

___

### ExecFileException

Ƭ **ExecFileException**: `Omit`<[`ExecException`](../interfaces/s.child.ExecException.md), ``"code"``\> & `Omit`<`NodeJS.ErrnoException`, ``"code"``\> & { `code?`: `string` \| `number` \| ``null``  }
