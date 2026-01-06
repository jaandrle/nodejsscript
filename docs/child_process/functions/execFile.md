[**nodejsscript**](../../README.md)

***

[nodejsscript](../../README.md) / [s](../../nodejsscript/namespaces/s/README.md) / [child\_process](../README.md) / execFile

# Function: execFile()

## Call Signature

> **execFile**(`file`, `callback?`): [`ChildProcess`](../classes/ChildProcess.md)

The `child_process.execFile()` function is similar to [exec](exec.md) except that it does not spawn a shell by default. Rather, the specified
executable `file` is spawned directly as a new process making it slightly more
efficient than [exec](exec.md).

The same options as [exec](exec.md) are supported. Since a shell is
not spawned, behaviors such as I/O redirection and file globbing are not
supported.

```js
import { execFile } from 'node:child_process';
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
a `Promise` for an `Object` with `stdout` and `stderr` properties. The returned `ChildProcess` instance is attached to the `Promise` as a `child` property. In
case of an error (including any error resulting in an exit code other than 0), a
rejected promise is returned, with the same `error` object given in the
callback, but with two additional properties `stdout` and `stderr`.

```js
import util from 'node:util';
import child_process from 'node:child_process';
const execFile = util.promisify(child_process.execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();
```

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

If the `signal` option is enabled, calling `.abort()` on the corresponding `AbortController` is similar to calling `.kill()` on the child process except
the error passed to the callback will be an `AbortError`:

```js
import { execFile } from 'node:child_process';
const controller = new AbortController();
const { signal } = controller;
const child = execFile('node', ['--version'], { signal }, (error) => {
  console.error(error); // an AbortError
});
controller.abort();
```

### Parameters

#### file

`string`

The name or path of the executable file to run.

#### callback?

(`error`, `stdout`, `stderr`) => `void`

Called with the output when process terminates.

### Returns

[`ChildProcess`](../classes/ChildProcess.md)

### Since

v0.1.91

## Call Signature

> **execFile**(`file`, `args`, `callback?`): [`ChildProcess`](../classes/ChildProcess.md)

The `child_process.execFile()` function is similar to [exec](exec.md) except that it does not spawn a shell by default. Rather, the specified
executable `file` is spawned directly as a new process making it slightly more
efficient than [exec](exec.md).

The same options as [exec](exec.md) are supported. Since a shell is
not spawned, behaviors such as I/O redirection and file globbing are not
supported.

```js
import { execFile } from 'node:child_process';
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
a `Promise` for an `Object` with `stdout` and `stderr` properties. The returned `ChildProcess` instance is attached to the `Promise` as a `child` property. In
case of an error (including any error resulting in an exit code other than 0), a
rejected promise is returned, with the same `error` object given in the
callback, but with two additional properties `stdout` and `stderr`.

```js
import util from 'node:util';
import child_process from 'node:child_process';
const execFile = util.promisify(child_process.execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();
```

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

If the `signal` option is enabled, calling `.abort()` on the corresponding `AbortController` is similar to calling `.kill()` on the child process except
the error passed to the callback will be an `AbortError`:

```js
import { execFile } from 'node:child_process';
const controller = new AbortController();
const { signal } = controller;
const child = execFile('node', ['--version'], { signal }, (error) => {
  console.error(error); // an AbortError
});
controller.abort();
```

### Parameters

#### file

`string`

The name or path of the executable file to run.

#### args

readonly `string`[]

List of string arguments.

#### callback?

(`error`, `stdout`, `stderr`) => `void`

Called with the output when process terminates.

### Returns

[`ChildProcess`](../classes/ChildProcess.md)

### Since

v0.1.91

## Call Signature

> **execFile**(`file`, `options`, `callback?`): [`ChildProcess`](../classes/ChildProcess.md)

The `child_process.execFile()` function is similar to [exec](exec.md) except that it does not spawn a shell by default. Rather, the specified
executable `file` is spawned directly as a new process making it slightly more
efficient than [exec](exec.md).

The same options as [exec](exec.md) are supported. Since a shell is
not spawned, behaviors such as I/O redirection and file globbing are not
supported.

```js
import { execFile } from 'node:child_process';
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
a `Promise` for an `Object` with `stdout` and `stderr` properties. The returned `ChildProcess` instance is attached to the `Promise` as a `child` property. In
case of an error (including any error resulting in an exit code other than 0), a
rejected promise is returned, with the same `error` object given in the
callback, but with two additional properties `stdout` and `stderr`.

```js
import util from 'node:util';
import child_process from 'node:child_process';
const execFile = util.promisify(child_process.execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();
```

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

If the `signal` option is enabled, calling `.abort()` on the corresponding `AbortController` is similar to calling `.kill()` on the child process except
the error passed to the callback will be an `AbortError`:

```js
import { execFile } from 'node:child_process';
const controller = new AbortController();
const { signal } = controller;
const child = execFile('node', ['--version'], { signal }, (error) => {
  console.error(error); // an AbortError
});
controller.abort();
```

### Parameters

#### file

`string`

The name or path of the executable file to run.

#### options

[`ExecFileOptionsWithBufferEncoding`](../interfaces/ExecFileOptionsWithBufferEncoding.md)

#### callback?

(`error`, `stdout`, `stderr`) => `void`

Called with the output when process terminates.

### Returns

[`ChildProcess`](../classes/ChildProcess.md)

### Since

v0.1.91

## Call Signature

> **execFile**(`file`, `args`, `options`, `callback?`): [`ChildProcess`](../classes/ChildProcess.md)

The `child_process.execFile()` function is similar to [exec](exec.md) except that it does not spawn a shell by default. Rather, the specified
executable `file` is spawned directly as a new process making it slightly more
efficient than [exec](exec.md).

The same options as [exec](exec.md) are supported. Since a shell is
not spawned, behaviors such as I/O redirection and file globbing are not
supported.

```js
import { execFile } from 'node:child_process';
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
a `Promise` for an `Object` with `stdout` and `stderr` properties. The returned `ChildProcess` instance is attached to the `Promise` as a `child` property. In
case of an error (including any error resulting in an exit code other than 0), a
rejected promise is returned, with the same `error` object given in the
callback, but with two additional properties `stdout` and `stderr`.

```js
import util from 'node:util';
import child_process from 'node:child_process';
const execFile = util.promisify(child_process.execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();
```

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

If the `signal` option is enabled, calling `.abort()` on the corresponding `AbortController` is similar to calling `.kill()` on the child process except
the error passed to the callback will be an `AbortError`:

```js
import { execFile } from 'node:child_process';
const controller = new AbortController();
const { signal } = controller;
const child = execFile('node', ['--version'], { signal }, (error) => {
  console.error(error); // an AbortError
});
controller.abort();
```

### Parameters

#### file

`string`

The name or path of the executable file to run.

#### args

readonly `string`[]

List of string arguments.

#### options

[`ExecFileOptionsWithBufferEncoding`](../interfaces/ExecFileOptionsWithBufferEncoding.md)

#### callback?

(`error`, `stdout`, `stderr`) => `void`

Called with the output when process terminates.

### Returns

[`ChildProcess`](../classes/ChildProcess.md)

### Since

v0.1.91

## Call Signature

> **execFile**(`file`, `options`, `callback?`): [`ChildProcess`](../classes/ChildProcess.md)

The `child_process.execFile()` function is similar to [exec](exec.md) except that it does not spawn a shell by default. Rather, the specified
executable `file` is spawned directly as a new process making it slightly more
efficient than [exec](exec.md).

The same options as [exec](exec.md) are supported. Since a shell is
not spawned, behaviors such as I/O redirection and file globbing are not
supported.

```js
import { execFile } from 'node:child_process';
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
a `Promise` for an `Object` with `stdout` and `stderr` properties. The returned `ChildProcess` instance is attached to the `Promise` as a `child` property. In
case of an error (including any error resulting in an exit code other than 0), a
rejected promise is returned, with the same `error` object given in the
callback, but with two additional properties `stdout` and `stderr`.

```js
import util from 'node:util';
import child_process from 'node:child_process';
const execFile = util.promisify(child_process.execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();
```

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

If the `signal` option is enabled, calling `.abort()` on the corresponding `AbortController` is similar to calling `.kill()` on the child process except
the error passed to the callback will be an `AbortError`:

```js
import { execFile } from 'node:child_process';
const controller = new AbortController();
const { signal } = controller;
const child = execFile('node', ['--version'], { signal }, (error) => {
  console.error(error); // an AbortError
});
controller.abort();
```

### Parameters

#### file

`string`

The name or path of the executable file to run.

#### options

[`ExecFileOptionsWithStringEncoding`](../interfaces/ExecFileOptionsWithStringEncoding.md)

#### callback?

(`error`, `stdout`, `stderr`) => `void`

Called with the output when process terminates.

### Returns

[`ChildProcess`](../classes/ChildProcess.md)

### Since

v0.1.91

## Call Signature

> **execFile**(`file`, `args`, `options`, `callback?`): [`ChildProcess`](../classes/ChildProcess.md)

The `child_process.execFile()` function is similar to [exec](exec.md) except that it does not spawn a shell by default. Rather, the specified
executable `file` is spawned directly as a new process making it slightly more
efficient than [exec](exec.md).

The same options as [exec](exec.md) are supported. Since a shell is
not spawned, behaviors such as I/O redirection and file globbing are not
supported.

```js
import { execFile } from 'node:child_process';
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
a `Promise` for an `Object` with `stdout` and `stderr` properties. The returned `ChildProcess` instance is attached to the `Promise` as a `child` property. In
case of an error (including any error resulting in an exit code other than 0), a
rejected promise is returned, with the same `error` object given in the
callback, but with two additional properties `stdout` and `stderr`.

```js
import util from 'node:util';
import child_process from 'node:child_process';
const execFile = util.promisify(child_process.execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();
```

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

If the `signal` option is enabled, calling `.abort()` on the corresponding `AbortController` is similar to calling `.kill()` on the child process except
the error passed to the callback will be an `AbortError`:

```js
import { execFile } from 'node:child_process';
const controller = new AbortController();
const { signal } = controller;
const child = execFile('node', ['--version'], { signal }, (error) => {
  console.error(error); // an AbortError
});
controller.abort();
```

### Parameters

#### file

`string`

The name or path of the executable file to run.

#### args

readonly `string`[]

List of string arguments.

#### options

[`ExecFileOptionsWithStringEncoding`](../interfaces/ExecFileOptionsWithStringEncoding.md)

#### callback?

(`error`, `stdout`, `stderr`) => `void`

Called with the output when process terminates.

### Returns

[`ChildProcess`](../classes/ChildProcess.md)

### Since

v0.1.91

## Call Signature

> **execFile**(`file`, `options`, `callback`): [`ChildProcess`](../classes/ChildProcess.md)

The `child_process.execFile()` function is similar to [exec](exec.md) except that it does not spawn a shell by default. Rather, the specified
executable `file` is spawned directly as a new process making it slightly more
efficient than [exec](exec.md).

The same options as [exec](exec.md) are supported. Since a shell is
not spawned, behaviors such as I/O redirection and file globbing are not
supported.

```js
import { execFile } from 'node:child_process';
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
a `Promise` for an `Object` with `stdout` and `stderr` properties. The returned `ChildProcess` instance is attached to the `Promise` as a `child` property. In
case of an error (including any error resulting in an exit code other than 0), a
rejected promise is returned, with the same `error` object given in the
callback, but with two additional properties `stdout` and `stderr`.

```js
import util from 'node:util';
import child_process from 'node:child_process';
const execFile = util.promisify(child_process.execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();
```

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

If the `signal` option is enabled, calling `.abort()` on the corresponding `AbortController` is similar to calling `.kill()` on the child process except
the error passed to the callback will be an `AbortError`:

```js
import { execFile } from 'node:child_process';
const controller = new AbortController();
const { signal } = controller;
const child = execFile('node', ['--version'], { signal }, (error) => {
  console.error(error); // an AbortError
});
controller.abort();
```

### Parameters

#### file

`string`

The name or path of the executable file to run.

#### options

[`ExecFileOptions`](../interfaces/ExecFileOptions.md)

#### callback

(`error`, `stdout`, `stderr`) => `void`

Called with the output when process terminates.

### Returns

[`ChildProcess`](../classes/ChildProcess.md)

### Since

v0.1.91

## Call Signature

> **execFile**(`file`, `args`, `options`, `callback`): [`ChildProcess`](../classes/ChildProcess.md)

The `child_process.execFile()` function is similar to [exec](exec.md) except that it does not spawn a shell by default. Rather, the specified
executable `file` is spawned directly as a new process making it slightly more
efficient than [exec](exec.md).

The same options as [exec](exec.md) are supported. Since a shell is
not spawned, behaviors such as I/O redirection and file globbing are not
supported.

```js
import { execFile } from 'node:child_process';
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
a `Promise` for an `Object` with `stdout` and `stderr` properties. The returned `ChildProcess` instance is attached to the `Promise` as a `child` property. In
case of an error (including any error resulting in an exit code other than 0), a
rejected promise is returned, with the same `error` object given in the
callback, but with two additional properties `stdout` and `stderr`.

```js
import util from 'node:util';
import child_process from 'node:child_process';
const execFile = util.promisify(child_process.execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();
```

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

If the `signal` option is enabled, calling `.abort()` on the corresponding `AbortController` is similar to calling `.kill()` on the child process except
the error passed to the callback will be an `AbortError`:

```js
import { execFile } from 'node:child_process';
const controller = new AbortController();
const { signal } = controller;
const child = execFile('node', ['--version'], { signal }, (error) => {
  console.error(error); // an AbortError
});
controller.abort();
```

### Parameters

#### file

`string`

The name or path of the executable file to run.

#### args

readonly `string`[]

List of string arguments.

#### options

[`ExecFileOptions`](../interfaces/ExecFileOptions.md)

#### callback

(`error`, `stdout`, `stderr`) => `void`

Called with the output when process terminates.

### Returns

[`ChildProcess`](../classes/ChildProcess.md)

### Since

v0.1.91
