[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / ChildProcessByStdio

# Interface: ChildProcessByStdio\<I, O, E\>

Instances of the `ChildProcess` represent spawned child processes.

Instances of `ChildProcess` are not intended to be created directly. Rather,
use the [spawn](../functions/spawn.md), [exec](../functions/exec.md),[execFile](../functions/execFile.md), or [fork](../functions/fork.md) methods to create
instances of `ChildProcess`.

## Since

v2.2.0

## Extends

- [`ChildProcess`](../classes/ChildProcess.md)

## Type Parameters

• **I** *extends* `null` \| `Writable`

• **O** *extends* `null` \| `Readable`

• **E** *extends* `null` \| `Readable`

## Properties

### stdin

> **stdin**: `I`

A `Writable Stream` that represents the child process's `stdin`.

If a child process waits to read all of its input, the child will not continue
until this stream has been closed via `end()`.

If the child was spawned with `stdio[0]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stdin` is an alias for `subprocess.stdio[0]`. Both properties will
refer to the same value.

The `subprocess.stdin` property can be `null` or `undefined` if the child process could not be successfully spawned.

#### Since

v0.1.90

#### Overrides

[`ChildProcess`](../classes/ChildProcess.md).[`stdin`](../classes/ChildProcess.md#stdin)

***

### stdout

> **stdout**: `O`

A `Readable Stream` that represents the child process's `stdout`.

If the child was spawned with `stdio[1]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stdout` is an alias for `subprocess.stdio[1]`. Both properties will
refer to the same value.

```js
import { spawn } from 'node:child_process';

const subprocess = spawn('ls');

subprocess.stdout.on('data', (data) => {
  console.log(`Received chunk ${data}`);
});
```

The `subprocess.stdout` property can be `null` or `undefined` if the child process could not be successfully spawned.

#### Since

v0.1.90

#### Overrides

[`ChildProcess`](../classes/ChildProcess.md).[`stdout`](../classes/ChildProcess.md#stdout)

***

### stderr

> **stderr**: `E`

A `Readable Stream` that represents the child process's `stderr`.

If the child was spawned with `stdio[2]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stderr` is an alias for `subprocess.stdio[2]`. Both properties will
refer to the same value.

The `subprocess.stderr` property can be `null` or `undefined` if the child process could not be successfully spawned.

#### Since

v0.1.90

#### Overrides

[`ChildProcess`](../classes/ChildProcess.md).[`stderr`](../classes/ChildProcess.md#stderr)

***

### stdio

> `readonly` **stdio**: [`I`, `O`, `E`, `Readable` \| `Writable`, `Readable` \| `Writable`]

A sparse array of pipes to the child process, corresponding with positions in
the `stdio` option passed to [spawn](../functions/spawn.md) that have been set
to the value `'pipe'`. `subprocess.stdio[0]`, `subprocess.stdio[1]`, and `subprocess.stdio[2]` are also available as `subprocess.stdin`, `subprocess.stdout`, and `subprocess.stderr`,
respectively.

In the following example, only the child's fd `1` (stdout) is configured as a
pipe, so only the parent's `subprocess.stdio[1]` is a stream, all other values
in the array are `null`.

```js
import assert from 'node:assert';
import fs from 'node:fs';
import child_process from 'node:child_process';

const subprocess = child_process.spawn('ls', {
  stdio: [
    0, // Use parent's stdin for child.
    'pipe', // Pipe child's stdout to parent.
    fs.openSync('err.out', 'w'), // Direct child's stderr to a file.
  ],
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

#### Since

v0.7.10

#### Overrides

[`ChildProcess`](../classes/ChildProcess.md).[`stdio`](../classes/ChildProcess.md#stdio)

***

### channel?

> `readonly` `optional` **channel**: `Pipe`

The `subprocess.channel` property is a reference to the child's IPC channel. If
no IPC channel exists, this property is `undefined`.

#### Since

v7.1.0

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`channel`](../classes/ChildProcess.md#channel)

***

### killed

> `readonly` **killed**: `boolean`

The `subprocess.killed` property indicates whether the child process
successfully received a signal from `subprocess.kill()`. The `killed` property
does not indicate that the child process has been terminated.

#### Since

v0.5.10

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`killed`](../classes/ChildProcess.md#killed)

***

### pid?

> `readonly` `optional` **pid**: `number`

Returns the process identifier (PID) of the child process. If the child process
fails to spawn due to errors, then the value is `undefined` and `error` is
emitted.

```js
import { spawn } from 'node:child_process';
const grep = spawn('grep', ['ssh']);

console.log(`Spawned child pid: ${grep.pid}`);
grep.stdin.end();
```

#### Since

v0.1.90

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`pid`](../classes/ChildProcess.md#pid)

***

### connected

> `readonly` **connected**: `boolean`

The `subprocess.connected` property indicates whether it is still possible to
send and receive messages from a child process. When `subprocess.connected` is `false`, it is no longer possible to send or receive messages.

#### Since

v0.7.2

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`connected`](../classes/ChildProcess.md#connected)

***

### exitCode

> `readonly` **exitCode**: `number`

The `subprocess.exitCode` property indicates the exit code of the child process.
If the child process is still running, the field will be `null`.

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`exitCode`](../classes/ChildProcess.md#exitcode)

***

### signalCode

> `readonly` **signalCode**: `Signals`

The `subprocess.signalCode` property indicates the signal received by
the child process if any, else `null`.

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`signalCode`](../classes/ChildProcess.md#signalcode)

***

### spawnargs

> `readonly` **spawnargs**: `string`[]

The `subprocess.spawnargs` property represents the full list of command-line
arguments the child process was launched with.

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`spawnargs`](../classes/ChildProcess.md#spawnargs)

***

### spawnfile

> `readonly` **spawnfile**: `string`

The `subprocess.spawnfile` property indicates the executable file name of
the child process that is launched.

For [fork](../functions/fork.md), its value will be equal to `process.execPath`.
For [spawn](../functions/spawn.md), its value will be the name of
the executable file.
For [exec](../functions/exec.md),  its value will be the name of the shell
in which the child process is launched.

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`spawnfile`](../classes/ChildProcess.md#spawnfile)

## Methods

### kill()

> **kill**(`signal`?): `boolean`

The `subprocess.kill()` method sends a signal to the child process. If no
argument is given, the process will be sent the `'SIGTERM'` signal. See [`signal(7)`](http://man7.org/linux/man-pages/man7/signal.7.html) for a list of available signals. This function
returns `true` if [`kill(2)`](http://man7.org/linux/man-pages/man2/kill.2.html) succeeds, and `false` otherwise.

```js
import { spawn } from 'node:child_process';
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
ignored, and the process will be killed forcefully and abruptly (similar to `'SIGKILL'`).
See `Signal Events` for more details.

On Linux, child processes of child processes will not be terminated
when attempting to kill their parent. This is likely to happen when running a
new process in a shell or with the use of the `shell` option of `ChildProcess`:

```js
'use strict';
import { spawn } from 'node:child_process';

const subprocess = spawn(
  'sh',
  [
    '-c',
    `node -e "setInterval(() => {
      console.log(process.pid, 'is alive')
    }, 500);"`,
  ], {
    stdio: ['inherit', 'inherit', 'inherit'],
  },
);

setTimeout(() => {
  subprocess.kill(); // Does not terminate the Node.js process in the shell.
}, 2000);
```

#### Parameters

• **signal?**: `number` \| `Signals`

#### Returns

`boolean`

#### Since

v0.1.90

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`kill`](../classes/ChildProcess.md#kill)

***

### send()

#### send(message, callback)

> **send**(`message`, `callback`?): `boolean`

When an IPC channel has been established between the parent and child (
i.e. when using [fork](../functions/fork.md)), the `subprocess.send()` method can
be used to send messages to the child process. When the child process is a
Node.js instance, these messages can be received via the `'message'` event.

The message goes through serialization and parsing. The resulting
message might not be the same as what is originally sent.

For example, in the parent script:

```js
import cp from 'node:child_process';
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
Node.js core and will not be emitted in the child's `'message'` event. Rather, such messages are emitted using the `'internalMessage'` event and are consumed internally by Node.js.
Applications should avoid using such messages or listening for `'internalMessage'` events as it is subject to change without notice.

The optional `sendHandle` argument that may be passed to `subprocess.send()` is
for passing a TCP server or socket object to the child process. The child will
receive the object as the second argument passed to the callback function
registered on the `'message'` event. Any data that is received and buffered in
the socket will not be sent to the child. Sending IPC sockets is not supported on Windows.

The optional `callback` is a function that is invoked after the message is
sent but before the child may have received it. The function is called with a
single argument: `null` on success, or an `Error` object on failure.

If no `callback` function is provided and the message cannot be sent, an `'error'` event will be emitted by the `ChildProcess` object. This can
happen, for instance, when the child process has already exited.

`subprocess.send()` will return `false` if the channel has closed or when the
backlog of unsent messages exceeds a threshold that makes it unwise to send
more. Otherwise, the method returns `true`. The `callback` function can be
used to implement flow control.

#### Example: sending a server object

The `sendHandle` argument can be used, for instance, to pass the handle of
a TCP server object to the child process as illustrated in the example below:

```js
import { createServer } from 'node:net';
import { fork } from 'node:child_process';
const subprocess = fork('subprocess.js');

// Open up the server object and send the handle.
const server = createServer();
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

While the example above uses a server created using the `node:net` module, `node:dgram` module servers use exactly the same workflow with the exceptions of
listening on a `'message'` event instead of `'connection'` and using `server.bind()` instead of `server.listen()`. This is, however, only
supported on Unix platforms.

#### Example: sending a socket object

Similarly, the `sendHandler` argument can be used to pass the handle of a
socket to the child process. The example below spawns two children that each
handle connections with "normal" or "special" priority:

```js
import { createServer } from 'node:net';
import { fork } from 'node:child_process';
const normal = fork('subprocess.js', ['normal']);
const special = fork('subprocess.js', ['special']);

// Open up the server and send sockets to child. Use pauseOnConnect to prevent
// the sockets from being read before they are sent to the child process.
const server = createServer({ pauseOnConnect: true });
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

##### Parameters

• **message**: [`Serializable`](../type-aliases/Serializable.md)

• **callback?**

##### Returns

`boolean`

##### Since

v0.5.9

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`send`](../classes/ChildProcess.md#send)

#### send(message, sendHandle, callback)

> **send**(`message`, `sendHandle`?, `callback`?): `boolean`

##### Parameters

• **message**: [`Serializable`](../type-aliases/Serializable.md)

• **sendHandle?**: [`SendHandle`](../type-aliases/SendHandle.md)

• **callback?**

##### Returns

`boolean`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`send`](../classes/ChildProcess.md#send)

#### send(message, sendHandle, options, callback)

> **send**(`message`, `sendHandle`?, `options`?, `callback`?): `boolean`

##### Parameters

• **message**: [`Serializable`](../type-aliases/Serializable.md)

• **sendHandle?**: [`SendHandle`](../type-aliases/SendHandle.md)

• **options?**: [`MessageOptions`](MessageOptions.md)

• **callback?**

##### Returns

`boolean`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`send`](../classes/ChildProcess.md#send)

***

### disconnect()

> **disconnect**(): `void`

Closes the IPC channel between parent and child, allowing the child to exit
gracefully once there are no other connections keeping it alive. After calling
this method the `subprocess.connected` and `process.connected` properties in
both the parent and child (respectively) will be set to `false`, and it will be
no longer possible to pass messages between the processes.

The `'disconnect'` event will be emitted when there are no messages in the
process of being received. This will most often be triggered immediately after
calling `subprocess.disconnect()`.

When the child process is a Node.js instance (e.g. spawned using [fork](../functions/fork.md)), the `process.disconnect()` method can be invoked
within the child process to close the IPC channel as well.

#### Returns

`void`

#### Since

v0.7.2

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`disconnect`](../classes/ChildProcess.md#disconnect)

***

### unref()

> **unref**(): `void`

By default, the parent will wait for the detached child to exit. To prevent the
parent from waiting for a given `subprocess` to exit, use the `subprocess.unref()` method. Doing so will cause the parent's event loop to not
include the child in its reference count, allowing the parent to exit
independently of the child, unless there is an established IPC channel between
the child and the parent.

```js
import { spawn } from 'node:child_process';

const subprocess = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: 'ignore',
});

subprocess.unref();
```

#### Returns

`void`

#### Since

v0.7.10

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`unref`](../classes/ChildProcess.md#unref)

***

### ref()

> **ref**(): `void`

Calling `subprocess.ref()` after making a call to `subprocess.unref()` will
restore the removed reference count for the child process, forcing the parent
to wait for the child to exit before exiting itself.

```js
import { spawn } from 'node:child_process';

const subprocess = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: 'ignore',
});

subprocess.unref();
subprocess.ref();
```

#### Returns

`void`

#### Since

v0.7.10

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`ref`](../classes/ChildProcess.md#ref)

***

### addListener()

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

events.EventEmitter
1. close
2. disconnect
3. error
4. exit
5. message
6. spawn

##### Parameters

• **event**: `string`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`addListener`](../classes/ChildProcess.md#addlistener)

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`addListener`](../classes/ChildProcess.md#addlistener)

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"disconnect"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`addListener`](../classes/ChildProcess.md#addlistener)

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`addListener`](../classes/ChildProcess.md#addlistener)

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"exit"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`addListener`](../classes/ChildProcess.md#addlistener)

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"message"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`addListener`](../classes/ChildProcess.md#addlistener)

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"spawn"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`addListener`](../classes/ChildProcess.md#addlistener)

***

### emit()

#### emit(event, args)

> **emit**(`event`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Parameters

• **event**: `string` \| `symbol`

• ...**args**: `any`[]

##### Returns

`boolean`

##### Since

v0.1.26

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`emit`](../classes/ChildProcess.md#emit)

#### emit(event, code, signal)

> **emit**(`event`, `code`, `signal`): `boolean`

##### Parameters

• **event**: `"close"`

• **code**: `number`

• **signal**: `Signals`

##### Returns

`boolean`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`emit`](../classes/ChildProcess.md#emit)

#### emit(event)

> **emit**(`event`): `boolean`

##### Parameters

• **event**: `"disconnect"`

##### Returns

`boolean`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`emit`](../classes/ChildProcess.md#emit)

#### emit(event, err)

> **emit**(`event`, `err`): `boolean`

##### Parameters

• **event**: `"error"`

• **err**: `Error`

##### Returns

`boolean`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`emit`](../classes/ChildProcess.md#emit)

#### emit(event, code, signal)

> **emit**(`event`, `code`, `signal`): `boolean`

##### Parameters

• **event**: `"exit"`

• **code**: `number`

• **signal**: `Signals`

##### Returns

`boolean`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`emit`](../classes/ChildProcess.md#emit)

#### emit(event, message, sendHandle)

> **emit**(`event`, `message`, `sendHandle`): `boolean`

##### Parameters

• **event**: `"message"`

• **message**: [`Serializable`](../type-aliases/Serializable.md)

• **sendHandle**: [`SendHandle`](../type-aliases/SendHandle.md)

##### Returns

`boolean`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`emit`](../classes/ChildProcess.md#emit)

#### emit(event, listener)

> **emit**(`event`, `listener`): `boolean`

##### Parameters

• **event**: `"spawn"`

• **listener**

##### Returns

`boolean`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`emit`](../classes/ChildProcess.md#emit)

***

### on()

#### on(event, listener)

> **on**(`event`, `listener`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `string`

• **listener**

The callback function

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`on`](../classes/ChildProcess.md#on-1)

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`on`](../classes/ChildProcess.md#on-1)

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"disconnect"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`on`](../classes/ChildProcess.md#on-1)

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`on`](../classes/ChildProcess.md#on-1)

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"exit"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`on`](../classes/ChildProcess.md#on-1)

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"message"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`on`](../classes/ChildProcess.md#on-1)

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"spawn"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`on`](../classes/ChildProcess.md#on-1)

***

### once()

#### once(event, listener)

> **once**(`event`, `listener`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `string`

• **listener**

The callback function

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`once`](../classes/ChildProcess.md#once-1)

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`once`](../classes/ChildProcess.md#once-1)

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"disconnect"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`once`](../classes/ChildProcess.md#once-1)

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`once`](../classes/ChildProcess.md#once-1)

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"exit"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`once`](../classes/ChildProcess.md#once-1)

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"message"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`once`](../classes/ChildProcess.md#once-1)

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"spawn"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`once`](../classes/ChildProcess.md#once-1)

***

### prependListener()

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

• **event**: `string`

• **listener**

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependListener`](../classes/ChildProcess.md#prependlistener)

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependListener`](../classes/ChildProcess.md#prependlistener)

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"disconnect"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependListener`](../classes/ChildProcess.md#prependlistener)

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependListener`](../classes/ChildProcess.md#prependlistener)

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"exit"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependListener`](../classes/ChildProcess.md#prependlistener)

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"message"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependListener`](../classes/ChildProcess.md#prependlistener)

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"spawn"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependListener`](../classes/ChildProcess.md#prependlistener)

***

### prependOnceListener()

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

• **event**: `string`

• **listener**

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependOnceListener`](../classes/ChildProcess.md#prependoncelistener)

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependOnceListener`](../classes/ChildProcess.md#prependoncelistener)

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"disconnect"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependOnceListener`](../classes/ChildProcess.md#prependoncelistener)

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependOnceListener`](../classes/ChildProcess.md#prependoncelistener)

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"exit"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependOnceListener`](../classes/ChildProcess.md#prependoncelistener)

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"message"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependOnceListener`](../classes/ChildProcess.md#prependoncelistener)

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"spawn"`

• **listener**

##### Returns

`this`

##### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`prependOnceListener`](../classes/ChildProcess.md#prependoncelistener)

***

### \[dispose\]()

> **\[dispose\]**(): `void`

Calls [ChildProcess.kill](../classes/ChildProcess.md#kill) with `'SIGTERM'`.

#### Returns

`void`

#### Since

v20.5.0

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`[dispose]`](../classes/ChildProcess.md#%5Bdispose%5D)

***

### \[captureRejectionSymbol\]()?

> `optional` **\[captureRejectionSymbol\]**\<`K`\>(`error`, `event`, ...`args`): `void`

#### Type Parameters

• **K**

#### Parameters

• **error**: `Error`

• **event**: `string` \| `symbol`

• ...**args**: `AnyRest`

#### Returns

`void`

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`[captureRejectionSymbol]`](../classes/ChildProcess.md#%5Bcapturerejectionsymbol%5D)

***

### removeListener()

> **removeListener**\<`K`\>(`eventName`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

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
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
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
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
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

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`removeListener`](../classes/ChildProcess.md#removelistener)

***

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

Alias for `emitter.removeListener()`.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Since

v10.0.0

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`off`](../classes/ChildProcess.md#off)

***

### removeAllListeners()

> **removeAllListeners**(`eventName`?): `this`

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **eventName?**: `string` \| `symbol`

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`removeAllListeners`](../classes/ChildProcess.md#removealllisteners)

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **n**: `number`

#### Returns

`this`

#### Since

v0.3.5

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`setMaxListeners`](../classes/ChildProcess.md#setmaxlisteners-1)

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

#### Returns

`number`

#### Since

v1.0.0

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`getMaxListeners`](../classes/ChildProcess.md#getmaxlisteners-1)

***

### listeners()

> **listeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

#### Returns

`Function`[]

#### Since

v0.1.26

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`listeners`](../classes/ChildProcess.md#listeners)

***

### rawListeners()

> **rawListeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
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

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

#### Returns

`Function`[]

#### Since

v9.4.0

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`rawListeners`](../classes/ChildProcess.md#rawlisteners)

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`, `listener`?): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event being listened for

• **listener?**: `Function`

The event handler function

#### Returns

`number`

#### Since

v3.2.0

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`listenerCount`](../classes/ChildProcess.md#listenercount-1)

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Since

v6.0.0

#### Inherited from

[`ChildProcess`](../classes/ChildProcess.md).[`eventNames`](../classes/ChildProcess.md#eventnames)
