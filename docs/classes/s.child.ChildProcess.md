[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / ChildProcess

# Class: ChildProcess

[s](../modules/s.md).[child](../modules/s.child.md).ChildProcess

Instances of the `ChildProcess` represent spawned child processes.

Instances of `ChildProcess` are not intended to be created directly. Rather,
use the [spawn](../modules/s.child.md#spawn), [exec](../modules/s.child.md#exec),[execFile](../modules/s.child.md#execfile), or [fork](../modules/s.child.md#fork) methods to create
instances of `ChildProcess`.

**`Since`**

v2.2.0

## Hierarchy

- `EventEmitter`

  ↳ **`ChildProcess`**

  ↳↳ [`ChildProcessWithoutNullStreams`](../interfaces/s.child.ChildProcessWithoutNullStreams.md)

  ↳↳ [`ChildProcessByStdio`](../interfaces/s.child.ChildProcessByStdio.md)

## Table of contents

### Methods

- [once](s.child.ChildProcess.md#once)
- [on](s.child.ChildProcess.md#on)
- [listenerCount](s.child.ChildProcess.md#listenercount)
- [getEventListeners](s.child.ChildProcess.md#geteventlisteners)
- [getMaxListeners](s.child.ChildProcess.md#getmaxlisteners)
- [setMaxListeners](s.child.ChildProcess.md#setmaxlisteners)
- [addAbortListener](s.child.ChildProcess.md#addabortlistener)
- [kill](s.child.ChildProcess.md#kill)
- [send](s.child.ChildProcess.md#send)
- [disconnect](s.child.ChildProcess.md#disconnect)
- [unref](s.child.ChildProcess.md#unref)
- [ref](s.child.ChildProcess.md#ref)
- [addListener](s.child.ChildProcess.md#addlistener)
- [emit](s.child.ChildProcess.md#emit)
- [on](s.child.ChildProcess.md#on-1)
- [once](s.child.ChildProcess.md#once-1)
- [prependListener](s.child.ChildProcess.md#prependlistener)
- [prependOnceListener](s.child.ChildProcess.md#prependoncelistener)
- [[dispose]](s.child.ChildProcess.md#[dispose])
- [[captureRejectionSymbol]](s.child.ChildProcess.md#[capturerejectionsymbol])
- [removeListener](s.child.ChildProcess.md#removelistener)
- [off](s.child.ChildProcess.md#off)
- [removeAllListeners](s.child.ChildProcess.md#removealllisteners)
- [setMaxListeners](s.child.ChildProcess.md#setmaxlisteners-1)
- [getMaxListeners](s.child.ChildProcess.md#getmaxlisteners-1)
- [listeners](s.child.ChildProcess.md#listeners)
- [rawListeners](s.child.ChildProcess.md#rawlisteners)
- [listenerCount](s.child.ChildProcess.md#listenercount-1)
- [eventNames](s.child.ChildProcess.md#eventnames)

### Properties

- [errorMonitor](s.child.ChildProcess.md#errormonitor)
- [captureRejectionSymbol](s.child.ChildProcess.md#capturerejectionsymbol)
- [captureRejections](s.child.ChildProcess.md#capturerejections)
- [defaultMaxListeners](s.child.ChildProcess.md#defaultmaxlisteners)
- [stdin](s.child.ChildProcess.md#stdin)
- [stdout](s.child.ChildProcess.md#stdout)
- [stderr](s.child.ChildProcess.md#stderr)
- [channel](s.child.ChildProcess.md#channel)
- [stdio](s.child.ChildProcess.md#stdio)
- [killed](s.child.ChildProcess.md#killed)
- [pid](s.child.ChildProcess.md#pid)
- [connected](s.child.ChildProcess.md#connected)
- [exitCode](s.child.ChildProcess.md#exitcode)
- [signalCode](s.child.ChildProcess.md#signalcode)
- [spawnargs](s.child.ChildProcess.md#spawnargs)
- [spawnfile](s.child.ChildProcess.md#spawnfile)

### Constructors

- [constructor](s.child.ChildProcess.md#constructor)

## Methods

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter`<`DefaultEventMap`\> | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

EventEmitter.on

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter`<`DefaultEventMap`\> | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter`<`DefaultEventMap`\> \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.getEventListeners

___

### getMaxListeners

▸ `Static` **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

**`Since`**

v19.9.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter`<`DefaultEventMap`\> \| `_DOMEventTarget` |

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter`<`DefaultEventMap`\> \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

EventEmitter.setMaxListeners

___

### addAbortListener

▸ `Static` **addAbortListener**(`signal`, `resource`): `Disposable`

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

**`Since`**

v20.5.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |
| `resource` | (`event`: `Event`) => `void` |

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

#### Inherited from

EventEmitter.addAbortListener

___

### kill

▸ **kill**(`signal?`): `boolean`

The `subprocess.kill()` method sends a signal to the child process. If no
argument is given, the process will be sent the `'SIGTERM'` signal. See [`signal(7)`](http://man7.org/linux/man-pages/man7/signal.7.html) for a list of available signals. This function
returns `true` if [`kill(2)`](http://man7.org/linux/man-pages/man2/kill.2.html) succeeds, and `false` otherwise.

```js
const { spawn } = require('node:child_process');
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
const { spawn } = require('node:child_process');

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

**`Since`**

v0.1.90

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal?` | `number` \| `Signals` |

#### Returns

`boolean`

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
const cp = require('node:child_process');
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
const subprocess = require('node:child_process').fork('subprocess.js');

// Open up the server object and send the handle.
const server = require('node:net').createServer();
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

While the example above uses a server created using the `node:net` module,`node:dgram` module servers use exactly the same workflow with the exceptions of
listening on a `'message'` event instead of `'connection'` and using`server.bind()` instead of `server.listen()`. This is, however, only
supported on Unix platforms.

#### Example: sending a socket object

Similarly, the `sendHandler` argument can be used to pass the handle of a
socket to the child process. The example below spawns two children that each
handle connections with "normal" or "special" priority:

```js
const { fork } = require('node:child_process');
const normal = fork('subprocess.js', ['normal']);
const special = fork('subprocess.js', ['special']);

// Open up the server and send sockets to child. Use pauseOnConnect to prevent
// the sockets from being read before they are sent to the child process.
const server = require('node:net').createServer({ pauseOnConnect: true });
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

▸ **send**(`message`, `sendHandle?`, `callback?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Serializable`](../modules/s.child.md#serializable) |
| `sendHandle?` | [`SendHandle`](../modules/s.child.md#sendhandle) |
| `callback?` | (`error`: `Error`) => `void` |

#### Returns

`boolean`

▸ **send**(`message`, `sendHandle?`, `options?`, `callback?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Serializable`](../modules/s.child.md#serializable) |
| `sendHandle?` | [`SendHandle`](../modules/s.child.md#sendhandle) |
| `options?` | [`MessageOptions`](../interfaces/s.child.MessageOptions.md) |
| `callback?` | (`error`: `Error`) => `void` |

#### Returns

`boolean`

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

___

### unref

▸ **unref**(): `void`

By default, the parent will wait for the detached child to exit. To prevent the
parent from waiting for a given `subprocess` to exit, use the`subprocess.unref()` method. Doing so will cause the parent's event loop to not
include the child in its reference count, allowing the parent to exit
independently of the child, unless there is an established IPC channel between
the child and the parent.

```js
const { spawn } = require('node:child_process');

const subprocess = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: 'ignore',
});

subprocess.unref();
```

**`Since`**

v0.7.10

#### Returns

`void`

___

### ref

▸ **ref**(): `void`

Calling `subprocess.ref()` after making a call to `subprocess.unref()` will
restore the removed reference count for the child process, forcing the parent
to wait for the child to exit before exiting itself.

```js
const { spawn } = require('node:child_process');

const subprocess = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: 'ignore',
});

subprocess.unref();
subprocess.ref();
```

**`Since`**

v0.7.10

#### Returns

`void`

___

### addListener

▸ **addListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

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

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`message`: [`Serializable`](../modules/s.child.md#serializable), `sendHandle`: [`SendHandle`](../modules/s.child.md#sendhandle)) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"spawn"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.addListener

___

### emit

▸ **emit**(`event`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `code`, `signal`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `code` | `number` |
| `signal` | `Signals` |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `code`, `signal`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `code` | `number` |
| `signal` | `Signals` |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `message`, `sendHandle`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `message` | [`Serializable`](../modules/s.child.md#serializable) |
| `sendHandle` | [`SendHandle`](../modules/s.child.md#sendhandle) |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"spawn"`` |
| `listener` | () => `void` |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

___

### on

▸ **on**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`message`: [`Serializable`](../modules/s.child.md#serializable), `sendHandle`: [`SendHandle`](../modules/s.child.md#sendhandle)) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"spawn"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.on

___

### once

▸ **once**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`message`: [`Serializable`](../modules/s.child.md#serializable), `sendHandle`: [`SendHandle`](../modules/s.child.md#sendhandle)) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"spawn"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.once

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`message`: [`Serializable`](../modules/s.child.md#serializable), `sendHandle`: [`SendHandle`](../modules/s.child.md#sendhandle)) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"spawn"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | (`code`: `number`, `signal`: `Signals`) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`message`: [`Serializable`](../modules/s.child.md#serializable), `sendHandle`: [`SendHandle`](../modules/s.child.md#sendhandle)) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"spawn"`` |
| `listener` | () => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Overrides

EventEmitter.prependOnceListener

___

### [dispose]

▸ **[dispose]**(): `void`

Calls [kill](s.child.ChildProcess.md#kill) with `'SIGTERM'`.

**`Since`**

v20.5.0

#### Returns

`void`

___

### [captureRejectionSymbol]

▸ `Optional` **[captureRejectionSymbol]**<`K`\>(`error`, `event`, `...args`): `void`

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `event` | `string` \| `symbol` |
| `...args` | `AnyRest` |

#### Returns

`void`

#### Inherited from

EventEmitter.\_\_@captureRejectionSymbol@22931

___

### removeListener

▸ **removeListener**<`K`\>(`eventName`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

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
recently added instance. In the example the `once('ping')`listener is removed:

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

**`Since`**

v0.1.26

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Inherited from

EventEmitter.removeListener

___

### off

▸ **off**<`K`\>(`eventName`, `listener`): [`ChildProcess`](s.child.ChildProcess.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ChildProcess`](s.child.ChildProcess.md)

#### Inherited from

EventEmitter.off

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ChildProcess`](s.child.ChildProcess.md)

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

[`ChildProcess`](s.child.ChildProcess.md)

#### Inherited from

EventEmitter.removeAllListeners

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ChildProcess`](s.child.ChildProcess.md)

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

[`ChildProcess`](s.child.ChildProcess.md)

#### Inherited from

EventEmitter.setMaxListeners

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](s.child.ChildProcess.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

___

### listeners

▸ **listeners**<`K`\>(`eventName`): `Function`[]

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

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.listeners

___

### rawListeners

▸ **rawListeners**<`K`\>(`eventName`): `Function`[]

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

**`Since`**

v9.4.0

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.rawListeners

___

### listenerCount

▸ **listenerCount**<`K`\>(`eventName`, `listener?`): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

**`Since`**

v3.2.0

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

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

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

## Properties

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](s.child.ChildProcess.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`events. Listeners installed using this symbol are called before the regular`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an`'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

**`Since`**

v13.6.0, v12.17.0

#### Inherited from

EventEmitter.errorMonitor

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](s.child.ChildProcess.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

EventEmitter.captureRejectionSymbol

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

EventEmitter.captureRejections

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners`property can be used. If this value is not a positive number, a `RangeError`is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_`EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()`methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

**`Since`**

v0.11.2

#### Inherited from

EventEmitter.defaultMaxListeners

___

### stdin

• **stdin**: `Writable`

A `Writable Stream` that represents the child process's `stdin`.

If a child process waits to read all of its input, the child will not continue
until this stream has been closed via `end()`.

If the child was spawned with `stdio[0]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stdin` is an alias for `subprocess.stdio[0]`. Both properties will
refer to the same value.

The `subprocess.stdin` property can be `null` or `undefined`if the child process could not be successfully spawned.

**`Since`**

v0.1.90

___

### stdout

• **stdout**: `Readable`

A `Readable Stream` that represents the child process's `stdout`.

If the child was spawned with `stdio[1]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stdout` is an alias for `subprocess.stdio[1]`. Both properties will
refer to the same value.

```js
const { spawn } = require('node:child_process');

const subprocess = spawn('ls');

subprocess.stdout.on('data', (data) => {
  console.log(`Received chunk ${data}`);
});
```

The `subprocess.stdout` property can be `null` or `undefined`if the child process could not be successfully spawned.

**`Since`**

v0.1.90

___

### stderr

• **stderr**: `Readable`

A `Readable Stream` that represents the child process's `stderr`.

If the child was spawned with `stdio[2]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stderr` is an alias for `subprocess.stdio[2]`. Both properties will
refer to the same value.

The `subprocess.stderr` property can be `null` or `undefined`if the child process could not be successfully spawned.

**`Since`**

v0.1.90

___

### channel

• `Optional` `Readonly` **channel**: `Pipe`

The `subprocess.channel` property is a reference to the child's IPC channel. If
no IPC channel exists, this property is `undefined`.

**`Since`**

v7.1.0

___

### stdio

• `Readonly` **stdio**: [`Writable`, `Readable`, `Readable`, `Readable` \| `Writable`, `Readable` \| `Writable`]

A sparse array of pipes to the child process, corresponding with positions in
the `stdio` option passed to [spawn](../modules/s.child.md#spawn) that have been set
to the value `'pipe'`. `subprocess.stdio[0]`, `subprocess.stdio[1]`, and`subprocess.stdio[2]` are also available as `subprocess.stdin`,`subprocess.stdout`, and `subprocess.stderr`,
respectively.

In the following example, only the child's fd `1` (stdout) is configured as a
pipe, so only the parent's `subprocess.stdio[1]` is a stream, all other values
in the array are `null`.

```js
const assert = require('node:assert');
const fs = require('node:fs');
const child_process = require('node:child_process');

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

**`Since`**

v0.7.10

___

### killed

• `Readonly` **killed**: `boolean`

The `subprocess.killed` property indicates whether the child process
successfully received a signal from `subprocess.kill()`. The `killed` property
does not indicate that the child process has been terminated.

**`Since`**

v0.5.10

___

### pid

• `Optional` `Readonly` **pid**: `number`

Returns the process identifier (PID) of the child process. If the child process
fails to spawn due to errors, then the value is `undefined` and `error` is
emitted.

```js
const { spawn } = require('node:child_process');
const grep = spawn('grep', ['ssh']);

console.log(`Spawned child pid: ${grep.pid}`);
grep.stdin.end();
```

**`Since`**

v0.1.90

___

### connected

• `Readonly` **connected**: `boolean`

The `subprocess.connected` property indicates whether it is still possible to
send and receive messages from a child process. When `subprocess.connected` is`false`, it is no longer possible to send or receive messages.

**`Since`**

v0.7.2

___

### exitCode

• `Readonly` **exitCode**: `number`

The `subprocess.exitCode` property indicates the exit code of the child process.
If the child process is still running, the field will be `null`.

___

### signalCode

• `Readonly` **signalCode**: `Signals`

The `subprocess.signalCode` property indicates the signal received by
the child process if any, else `null`.

___

### spawnargs

• `Readonly` **spawnargs**: `string`[]

The `subprocess.spawnargs` property represents the full list of command-line
arguments the child process was launched with.

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

## Constructors

### constructor

• **new ChildProcess**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `EventEmitterOptions` |

#### Inherited from

EventEmitter.constructor
