[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / ChildProcessByStdio

# Interface: ChildProcessByStdio<I, O, E\>

[s](../modules/s.md).[child](../modules/s.child.md).ChildProcessByStdio

Instances of the `ChildProcess` represent spawned child processes.

Instances of `ChildProcess` are not intended to be created directly. Rather,
use the [spawn](../modules/s.child.md#spawn), [exec](../modules/s.child.md#exec),[execFile](../modules/s.child.md#execfile), or [fork](../modules/s.child.md#fork) methods to create
instances of `ChildProcess`.

**`Since`**

v2.2.0

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends ``null`` \| `Writable` |
| `O` | extends ``null`` \| `Readable` |
| `E` | extends ``null`` \| `Readable` |

## Hierarchy

- [`ChildProcess`](../classes/s.child.ChildProcess.md)

  ↳ **`ChildProcessByStdio`**

## Table of contents

### Properties

- [stdin](s.child.ChildProcessByStdio.md#stdin)
- [stdout](s.child.ChildProcessByStdio.md#stdout)
- [stderr](s.child.ChildProcessByStdio.md#stderr)
- [stdio](s.child.ChildProcessByStdio.md#stdio)
- [channel](s.child.ChildProcessByStdio.md#channel)
- [killed](s.child.ChildProcessByStdio.md#killed)
- [pid](s.child.ChildProcessByStdio.md#pid)
- [connected](s.child.ChildProcessByStdio.md#connected)
- [exitCode](s.child.ChildProcessByStdio.md#exitcode)
- [signalCode](s.child.ChildProcessByStdio.md#signalcode)
- [spawnargs](s.child.ChildProcessByStdio.md#spawnargs)
- [spawnfile](s.child.ChildProcessByStdio.md#spawnfile)

### Methods

- [kill](s.child.ChildProcessByStdio.md#kill)
- [send](s.child.ChildProcessByStdio.md#send)
- [disconnect](s.child.ChildProcessByStdio.md#disconnect)
- [unref](s.child.ChildProcessByStdio.md#unref)
- [ref](s.child.ChildProcessByStdio.md#ref)
- [addListener](s.child.ChildProcessByStdio.md#addlistener)
- [emit](s.child.ChildProcessByStdio.md#emit)
- [on](s.child.ChildProcessByStdio.md#on)
- [once](s.child.ChildProcessByStdio.md#once)
- [prependListener](s.child.ChildProcessByStdio.md#prependlistener)
- [prependOnceListener](s.child.ChildProcessByStdio.md#prependoncelistener)
- [removeListener](s.child.ChildProcessByStdio.md#removelistener)
- [off](s.child.ChildProcessByStdio.md#off)
- [removeAllListeners](s.child.ChildProcessByStdio.md#removealllisteners)
- [setMaxListeners](s.child.ChildProcessByStdio.md#setmaxlisteners)
- [getMaxListeners](s.child.ChildProcessByStdio.md#getmaxlisteners)
- [listeners](s.child.ChildProcessByStdio.md#listeners)
- [rawListeners](s.child.ChildProcessByStdio.md#rawlisteners)
- [listenerCount](s.child.ChildProcessByStdio.md#listenercount)
- [eventNames](s.child.ChildProcessByStdio.md#eventnames)

## Properties

### stdin

• **stdin**: `I`

A `Writable Stream` that represents the child process's `stdin`.

If a child process waits to read all of its input, the child will not continue
until this stream has been closed via `end()`.

If the child was spawned with `stdio[0]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stdin` is an alias for `subprocess.stdio[0]`. Both properties will
refer to the same value.

The `subprocess.stdin` property can be `undefined` if the child process could
not be successfully spawned.

**`Since`**

v0.1.90

#### Overrides

[ChildProcess](../classes/s.child.ChildProcess.md).[stdin](../classes/s.child.ChildProcess.md#stdin)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:585

___

### stdout

• **stdout**: `O`

A `Readable Stream` that represents the child process's `stdout`.

If the child was spawned with `stdio[1]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stdout` is an alias for `subprocess.stdio[1]`. Both properties will
refer to the same value.

```js
const { spawn } = require('child_process');

const subprocess = spawn('ls');

subprocess.stdout.on('data', (data) => {
  console.log(`Received chunk ${data}`);
});
```

The `subprocess.stdout` property can be `null` if the child process could
not be successfully spawned.

**`Since`**

v0.1.90

#### Overrides

[ChildProcess](../classes/s.child.ChildProcess.md).[stdout](../classes/s.child.ChildProcess.md#stdout)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:586

___

### stderr

• **stderr**: `E`

A `Readable Stream` that represents the child process's `stderr`.

If the child was spawned with `stdio[2]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stderr` is an alias for `subprocess.stdio[2]`. Both properties will
refer to the same value.

The `subprocess.stderr` property can be `null` if the child process could
not be successfully spawned.

**`Since`**

v0.1.90

#### Overrides

[ChildProcess](../classes/s.child.ChildProcess.md).[stderr](../classes/s.child.ChildProcess.md#stderr)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:587

___

### stdio

• `Readonly` **stdio**: [`I`, `O`, `E`, `Writable` \| `Readable`, `Writable` \| `Readable`]

A sparse array of pipes to the child process, corresponding with positions in
the `stdio` option passed to [spawn](../modules/s.child.md#spawn) that have been set
to the value `'pipe'`. `subprocess.stdio[0]`, `subprocess.stdio[1]`, and`subprocess.stdio[2]` are also available as `subprocess.stdin`,`subprocess.stdout`, and `subprocess.stderr`,
respectively.

In the following example, only the child's fd `1` (stdout) is configured as a
pipe, so only the parent's `subprocess.stdio[1]` is a stream, all other values
in the array are `null`.

```js
const assert = require('assert');
const fs = require('fs');
const child_process = require('child_process');

const subprocess = child_process.spawn('ls', {
  stdio: [
    0, // Use parent's stdin for child.
    'pipe', // Pipe child's stdout to parent.
    fs.openSync('err.out', 'w'), // Direct child's stderr to a file.
  ]
});

assert.strictEqual(subprocess.stdio[0], null);
assert.strictEqual(subprocess.stdio[0], subprocess.stdin);

assert(subprocess.stdout);
assert.strictEqual(subprocess.stdio[1], subprocess.stdout);

assert.strictEqual(subprocess.stdio[2], null);
assert.strictEqual(subprocess.stdio[2], subprocess.stderr);
```

The `subprocess.stdio` property can be `undefined` if the child process could
not be successfully spawned.

**`Since`**

v0.7.10

#### Overrides

[ChildProcess](../classes/s.child.ChildProcess.md).[stdio](../classes/s.child.ChildProcess.md#stdio)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:588

___

### channel

• `Optional` `Readonly` **channel**: `Pipe`

The `subprocess.channel` property is a reference to the child's IPC channel. If
no IPC channel currently exists, this property is `undefined`.

**`Since`**

v7.1.0

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[channel](../classes/s.child.ChildProcess.md#channel)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:145

___

### killed

• `Readonly` **killed**: `boolean`

The `subprocess.killed` property indicates whether the child process
successfully received a signal from `subprocess.kill()`. The `killed` property
does not indicate that the child process has been terminated.

**`Since`**

v0.5.10

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[killed](../classes/s.child.ChildProcess.md#killed)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:200

___

### pid

• `Optional` `Readonly` **pid**: `number`

Returns the process identifier (PID) of the child process. If the child process
fails to spawn due to errors, then the value is `undefined` and `error` is
emitted.

```js
const { spawn } = require('child_process');
const grep = spawn('grep', ['ssh']);

console.log(`Spawned child pid: ${grep.pid}`);
grep.stdin.end();
```

**`Since`**

v0.1.90

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[pid](../classes/s.child.ChildProcess.md#pid)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:215

___

### connected

• `Readonly` **connected**: `boolean`

The `subprocess.connected` property indicates whether it is still possible to
send and receive messages from a child process. When `subprocess.connected` is`false`, it is no longer possible to send or receive messages.

**`Since`**

v0.7.2

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[connected](../classes/s.child.ChildProcess.md#connected)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:221

___

### exitCode

• `Readonly` **exitCode**: `number`

The `subprocess.exitCode` property indicates the exit code of the child process.
If the child process is still running, the field will be `null`.

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[exitCode](../classes/s.child.ChildProcess.md#exitcode)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:226

___

### signalCode

• `Readonly` **signalCode**: `Signals`

The `subprocess.signalCode` property indicates the signal received by
the child process if any, else `null`.

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[signalCode](../classes/s.child.ChildProcess.md#signalcode)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:231

___

### spawnargs

• `Readonly` **spawnargs**: `string`[]

The `subprocess.spawnargs` property represents the full list of command-line
arguments the child process was launched with.

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[spawnargs](../classes/s.child.ChildProcess.md#spawnargs)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:236

___

### spawnfile

• `Readonly` **spawnfile**: `string`

The `subprocess.spawnfile` property indicates the executable file name of
the child process that is launched.

For [fork](../modules/s.child.md#fork), its value will be equal to `process.execPath`.
For [spawn](../modules/s.child.md#spawn), its value will be the name of
the executable file.
For [exec](../modules/s.child.md#exec),  its value will be the name of the shell
in which the child process is launched.

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[spawnfile](../classes/s.child.ChildProcess.md#spawnfile)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:247

## Methods

### kill

▸ **kill**(`signal?`): `boolean`

The `subprocess.kill()` method sends a signal to the child process. If no
argument is given, the process will be sent the `'SIGTERM'` signal. See [`signal(7)`](http://man7.org/linux/man-pages/man7/signal.7.html) for a list of available signals. This function
returns `true` if [`kill(2)`](http://man7.org/linux/man-pages/man2/kill.2.html) succeeds, and `false` otherwise.

```js
const { spawn } = require('child_process');
const grep = spawn('grep', ['ssh']);

grep.on('close', (code, signal) => {
  console.log(
    `child process terminated due to receipt of signal ${signal}`);
});

// Send SIGHUP to process.
grep.kill('SIGHUP');
```

The `ChildProcess` object may emit an `'error'` event if the signal
cannot be delivered. Sending a signal to a child process that has already exited
is not an error but may have unforeseen consequences. Specifically, if the
process identifier (PID) has been reassigned to another process, the signal will
be delivered to that process instead which can have unexpected results.

While the function is called `kill`, the signal delivered to the child process
may not actually terminate the process.

See [`kill(2)`](http://man7.org/linux/man-pages/man2/kill.2.html) for reference.

On Windows, where POSIX signals do not exist, the `signal` argument will be
ignored, and the process will be killed forcefully and abruptly (similar to`'SIGKILL'`).
See `Signal Events` for more details.

On Linux, child processes of child processes will not be terminated
when attempting to kill their parent. This is likely to happen when running a
new process in a shell or with the use of the `shell` option of `ChildProcess`:

```js
'use strict';
const { spawn } = require('child_process');

const subprocess = spawn(
  'sh',
  [
    '-c',
    `node -e "setInterval(() => {
      console.log(process.pid, 'is alive')
    }, 500);"`,
  ], {
    stdio: ['inherit', 'inherit', 'inherit']
  }
);

setTimeout(() => {
  subprocess.kill(); // Does not terminate the Node.js process in the shell.
}, 2000);
```

**`Since`**

v0.1.90

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal?` | `number` \| `Signals` |

#### Returns

`boolean`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[kill](../classes/s.child.ChildProcess.md#kill)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:307

___

### send

▸ **send**(`message`, `callback?`): `boolean`

When an IPC channel has been established between the parent and child (
i.e. when using [fork](../modules/s.child.md#fork)), the `subprocess.send()` method can
be used to send messages to the child process. When the child process is a
Node.js instance, these messages can be received via the `'message'` event.

The message goes through serialization and parsing. The resulting
message might not be the same as what is originally sent.

For example, in the parent script:

```js
const cp = require('child_process');
const n = cp.fork(`${__dirname}/sub.js`);

n.on('message', (m) => {
  console.log('PARENT got message:', m);
});

// Causes the child to print: CHILD got message: { hello: 'world' }
n.send({ hello: 'world' });
```

And then the child script, `'sub.js'` might look like this:

```js
process.on('message', (m) => {
  console.log('CHILD got message:', m);
});

// Causes the parent to print: PARENT got message: { foo: 'bar', baz: null }
process.send({ foo: 'bar', baz: NaN });
```

Child Node.js processes will have a `process.send()` method of their own
that allows the child to send messages back to the parent.

There is a special case when sending a `{cmd: 'NODE_foo'}` message. Messages
containing a `NODE_` prefix in the `cmd` property are reserved for use within
Node.js core and will not be emitted in the child's `'message'` event. Rather, such messages are emitted using the`'internalMessage'` event and are consumed internally by Node.js.
Applications should avoid using such messages or listening for`'internalMessage'` events as it is subject to change without notice.

The optional `sendHandle` argument that may be passed to `subprocess.send()` is
for passing a TCP server or socket object to the child process. The child will
receive the object as the second argument passed to the callback function
registered on the `'message'` event. Any data that is received
and buffered in the socket will not be sent to the child.

The optional `callback` is a function that is invoked after the message is
sent but before the child may have received it. The function is called with a
single argument: `null` on success, or an `Error` object on failure.

If no `callback` function is provided and the message cannot be sent, an`'error'` event will be emitted by the `ChildProcess` object. This can
happen, for instance, when the child process has already exited.

`subprocess.send()` will return `false` if the channel has closed or when the
backlog of unsent messages exceeds a threshold that makes it unwise to send
more. Otherwise, the method returns `true`. The `callback` function can be
used to implement flow control.

#### Example: sending a server object

The `sendHandle` argument can be used, for instance, to pass the handle of
a TCP server object to the child process as illustrated in the example below:

```js
const subprocess = require('child_process').fork('subprocess.js');

// Open up the server object and send the handle.
const server = require('net').createServer();
server.on('connection', (socket) => {
  socket.end('handled by parent');
});
server.listen(1337, () => {
  subprocess.send('server', server);
});
```

The child would then receive the server object as:

```js
process.on('message', (m, server) => {
  if (m === 'server') {
    server.on('connection', (socket) => {
      socket.end('handled by child');
    });
  }
});
```

Once the server is now shared between the parent and child, some connections
can be handled by the parent and some by the child.

While the example above uses a server created using the `net` module, `dgram`module servers use exactly the same workflow with the exceptions of listening on
a `'message'` event instead of `'connection'` and using `server.bind()` instead
of `server.listen()`. This is, however, currently only supported on Unix
platforms.

#### Example: sending a socket object

Similarly, the `sendHandler` argument can be used to pass the handle of a
socket to the child process. The example below spawns two children that each
handle connections with "normal" or "special" priority:

```js
const { fork } = require('child_process');
const normal = fork('subprocess.js', ['normal']);
const special = fork('subprocess.js', ['special']);

// Open up the server and send sockets to child. Use pauseOnConnect to prevent
// the sockets from being read before they are sent to the child process.
const server = require('net').createServer({ pauseOnConnect: true });
server.on('connection', (socket) => {

  // If this is special priority...
  if (socket.remoteAddress === '74.125.127.100') {
    special.send('socket', socket);
    return;
  }
  // This is normal priority.
  normal.send('socket', socket);
});
server.listen(1337);
```

The `subprocess.js` would receive the socket handle as the second argument
passed to the event callback function:

```js
process.on('message', (m, socket) => {
  if (m === 'socket') {
    if (socket) {
      // Check that the client socket exists.
      // It is possible for the socket to be closed between the time it is
      // sent and the time it is received in the child process.
      socket.end(`Request handled with ${process.argv[2]} priority`);
    }
  }
});
```

Do not use `.maxConnections` on a socket that has been passed to a subprocess.
The parent cannot track when the socket is destroyed.

Any `'message'` handlers in the subprocess should verify that `socket` exists,
as the connection may have been closed during the time it takes to send the
connection to the child.

**`Since`**

v0.5.9

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Serializable`](../modules/s.child.md#serializable) |
| `callback?` | (`error`: `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[send](../classes/s.child.ChildProcess.md#send)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:458

▸ **send**(`message`, `sendHandle?`, `callback?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Serializable`](../modules/s.child.md#serializable) |
| `sendHandle?` | [`SendHandle`](../modules/s.child.md#sendhandle) |
| `callback?` | (`error`: `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[send](../classes/s.child.ChildProcess.md#send)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:459

▸ **send**(`message`, `sendHandle?`, `options?`, `callback?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Serializable`](../modules/s.child.md#serializable) |
| `sendHandle?` | [`SendHandle`](../modules/s.child.md#sendhandle) |
| `options?` | [`MessageOptions`](s.child.MessageOptions.md) |
| `callback?` | (`error`: `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[send](../classes/s.child.ChildProcess.md#send)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:460

___

### disconnect

▸ **disconnect**(): `void`

Closes the IPC channel between parent and child, allowing the child to exit
gracefully once there are no other connections keeping it alive. After calling
this method the `subprocess.connected` and `process.connected` properties in
both the parent and child (respectively) will be set to `false`, and it will be
no longer possible to pass messages between the processes.

The `'disconnect'` event will be emitted when there are no messages in the
process of being received. This will most often be triggered immediately after
calling `subprocess.disconnect()`.

When the child process is a Node.js instance (e.g. spawned using [fork](../modules/s.child.md#fork)), the `process.disconnect()` method can be invoked
within the child process to close the IPC channel as well.

**`Since`**

v0.7.2

#### Returns

`void`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[disconnect](../classes/s.child.ChildProcess.md#disconnect)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:476

___

### unref

▸ **unref**(): `void`

By default, the parent will wait for the detached child to exit. To prevent the
parent from waiting for a given `subprocess` to exit, use the`subprocess.unref()` method. Doing so will cause the parent's event loop to not
include the child in its reference count, allowing the parent to exit
independently of the child, unless there is an established IPC channel between
the child and the parent.

```js
const { spawn } = require('child_process');

const subprocess = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: 'ignore'
});

subprocess.unref();
```

**`Since`**

v0.7.10

#### Returns

`void`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[unref](../classes/s.child.ChildProcess.md#unref)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:496

___

### ref

▸ **ref**(): `void`

Calling `subprocess.ref()` after making a call to `subprocess.unref()` will
restore the removed reference count for the child process, forcing the parent
to wait for the child to exit before exiting itself.

```js
const { spawn } = require('child_process');

const subprocess = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: 'ignore'
});

subprocess.unref();
subprocess.ref();
```

**`Since`**

v0.7.10

#### Returns

`void`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[ref](../classes/s.child.ChildProcess.md#ref)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:515

___

### addListener

▸ **addListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

events.EventEmitter
1. close
2. disconnect
3. error
4. exit
5. message
6. spawn

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[addListener](../classes/s.child.ChildProcess.md#addlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:525

▸ **addListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[addListener](../classes/s.child.ChildProcess.md#addlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:526

▸ **addListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[addListener](../classes/s.child.ChildProcess.md#addlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:527

▸ **addListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[addListener](../classes/s.child.ChildProcess.md#addlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:528

▸ **addListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[addListener](../classes/s.child.ChildProcess.md#addlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:529

▸ **addListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`message`: [`Serializable`](../modules/s.child.md#serializable), `sendHandle`: [`SendHandle`](../modules/s.child.md#sendhandle)) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[addListener](../classes/s.child.ChildProcess.md#addlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:530

▸ **addListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"spawn"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[addListener](../classes/s.child.ChildProcess.md#addlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:531

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[emit](../classes/s.child.ChildProcess.md#emit)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:532

▸ **emit**(`event`, `code`, `signal`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `code` | `number` |
| `signal` | `Signals` |

#### Returns

`boolean`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[emit](../classes/s.child.ChildProcess.md#emit)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:533

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |

#### Returns

`boolean`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[emit](../classes/s.child.ChildProcess.md#emit)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:534

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[emit](../classes/s.child.ChildProcess.md#emit)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:535

▸ **emit**(`event`, `code`, `signal`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `code` | `number` |
| `signal` | `Signals` |

#### Returns

`boolean`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[emit](../classes/s.child.ChildProcess.md#emit)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:536

▸ **emit**(`event`, `message`, `sendHandle`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `message` | [`Serializable`](../modules/s.child.md#serializable) |
| `sendHandle` | [`SendHandle`](../modules/s.child.md#sendhandle) |

#### Returns

`boolean`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[emit](../classes/s.child.ChildProcess.md#emit)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:537

▸ **emit**(`event`, `listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"spawn"`` |
| `listener` | () => `void` |

#### Returns

`boolean`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[emit](../classes/s.child.ChildProcess.md#emit)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:538

___

### on

▸ **on**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[on](../classes/s.child.ChildProcess.md#on-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:539

▸ **on**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[on](../classes/s.child.ChildProcess.md#on-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:540

▸ **on**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[on](../classes/s.child.ChildProcess.md#on-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:541

▸ **on**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[on](../classes/s.child.ChildProcess.md#on-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:542

▸ **on**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[on](../classes/s.child.ChildProcess.md#on-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:543

▸ **on**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`message`: [`Serializable`](../modules/s.child.md#serializable), `sendHandle`: [`SendHandle`](../modules/s.child.md#sendhandle)) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[on](../classes/s.child.ChildProcess.md#on-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:544

▸ **on**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"spawn"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[on](../classes/s.child.ChildProcess.md#on-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:545

___

### once

▸ **once**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[once](../classes/s.child.ChildProcess.md#once-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:546

▸ **once**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[once](../classes/s.child.ChildProcess.md#once-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:547

▸ **once**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[once](../classes/s.child.ChildProcess.md#once-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:548

▸ **once**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[once](../classes/s.child.ChildProcess.md#once-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:549

▸ **once**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[once](../classes/s.child.ChildProcess.md#once-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:550

▸ **once**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`message`: [`Serializable`](../modules/s.child.md#serializable), `sendHandle`: [`SendHandle`](../modules/s.child.md#sendhandle)) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[once](../classes/s.child.ChildProcess.md#once-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:551

▸ **once**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"spawn"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[once](../classes/s.child.ChildProcess.md#once-1)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:552

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependListener](../classes/s.child.ChildProcess.md#prependlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:553

▸ **prependListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependListener](../classes/s.child.ChildProcess.md#prependlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:554

▸ **prependListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependListener](../classes/s.child.ChildProcess.md#prependlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:555

▸ **prependListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependListener](../classes/s.child.ChildProcess.md#prependlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:556

▸ **prependListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependListener](../classes/s.child.ChildProcess.md#prependlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:557

▸ **prependListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`message`: [`Serializable`](../modules/s.child.md#serializable), `sendHandle`: [`SendHandle`](../modules/s.child.md#sendhandle)) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependListener](../classes/s.child.ChildProcess.md#prependlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:558

▸ **prependListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"spawn"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependListener](../classes/s.child.ChildProcess.md#prependlistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:559

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependOnceListener](../classes/s.child.ChildProcess.md#prependoncelistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:560

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependOnceListener](../classes/s.child.ChildProcess.md#prependoncelistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:561

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependOnceListener](../classes/s.child.ChildProcess.md#prependoncelistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:562

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependOnceListener](../classes/s.child.ChildProcess.md#prependoncelistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:563

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependOnceListener](../classes/s.child.ChildProcess.md#prependoncelistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:564

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`message`: [`Serializable`](../modules/s.child.md#serializable), `sendHandle`: [`SendHandle`](../modules/s.child.md#sendhandle)) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependOnceListener](../classes/s.child.ChildProcess.md#prependoncelistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:565

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"spawn"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[prependOnceListener](../classes/s.child.ChildProcess.md#prependoncelistener)

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:566

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[removeListener](../classes/s.child.ChildProcess.md#removelistener)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:457

___

### off

▸ **off**(`eventName`, `listener`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[off](../classes/s.child.ChildProcess.md#off)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:462

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[removeAllListeners](../classes/s.child.ChildProcess.md#removealllisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:473

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`ChildProcessByStdio`](s.child.ChildProcessByStdio.md)<`I`, `O`, `E`\>

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[setMaxListeners](../classes/s.child.ChildProcess.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:483

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[getMaxListeners](../classes/s.child.ChildProcess.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:489

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[listeners](../classes/s.child.ChildProcess.md#listeners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:502

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[rawListeners](../classes/s.child.ChildProcess.md#rawlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:532

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[listenerCount](../classes/s.child.ChildProcess.md#listenercount-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:579

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[ChildProcess](../classes/s.child.ChildProcess.md).[eventNames](../classes/s.child.ChildProcess.md#eventnames)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:632