[**nodejsscript**](../README.md)

***

[nodejsscript](../README.md) / \_exit

# Function: \_exit()

> **\_exit**(`code?`): `never`

The `process.exit()` method instructs Node.js to terminate the process
synchronously with an exit status of `code`. If `code` is omitted, exit uses
either the 'success' code `0` or the value of `process.exitCode` if it has been
set. Node.js will not terminate until all the `'exit'` event listeners are
called.

To exit with a 'failure' code:

```js
import { exit } from 'node:process';

exit(1);
```

The shell that executed Node.js should see the exit code as `1`.

Calling `process.exit()` will force the process to exit as quickly as possible
even if there are still asynchronous operations pending that have not yet
completed fully, including I/O operations to `process.stdout` and `process.stderr`.

In most situations, it is not actually necessary to call `process.exit()` explicitly. The Node.js process will exit on its own _if there is no additional_
_work pending_ in the event loop. The `process.exitCode` property can be set to
tell the process which exit code to use when the process exits gracefully.

For instance, the following example illustrates a _misuse_ of the `process.exit()` method that could lead to data printed to stdout being
truncated and lost:

```js
import { exit } from 'node:process';

// This is an example of what *not* to do:
if (someConditionNotMet()) {
  printUsageToStdout();
  exit(1);
}
```

The reason this is problematic is because writes to `process.stdout` in Node.js
are sometimes _asynchronous_ and may occur over multiple ticks of the Node.js
event loop. Calling `process.exit()`, however, forces the process to exit _before_ those additional writes to `stdout` can be performed.

Rather than calling `process.exit()` directly, the code _should_ set the `process.exitCode` and allow the process to exit naturally by avoiding
scheduling any additional work for the event loop:

```js
import process from 'node:process';

// How to properly set the exit code while letting
// the process exit gracefully.
if (someConditionNotMet()) {
  printUsageToStdout();
  process.exitCode = 1;
}
```

If it is necessary to terminate the Node.js process due to an error condition,
throwing an _uncaught_ error and allowing the process to terminate accordingly
is safer than calling `process.exit()`.

In `Worker` threads, this function stops the current thread rather
than the current process.

## Parameters

### code?

The exit code. For string type, only integer strings (e.g.,'1') are allowed.

`string` | `number`

## Returns

`never`

## Since

v0.1.13
