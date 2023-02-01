nodejsscript

# nodejsscript

## Table of contents

### Public Functions

- [pipe](README.md#pipe)
- [fetch](README.md#fetch)
- [cyclicLoop](README.md#cyclicloop)
- [echo](README.md#echo)

### Internal Functions

- [\_\_sade](README.md#__sade)
- [\_exit](README.md#_exit)

### Interfaces

- [EchoFunction](interfaces/EchoFunction.md)

### Public Namespaces

- [$](modules/.md)
- [s](modules/s.md)

### Internal Namespaces

- [xdg\_](modules/xdg_.md)
- [\_\_sade](modules/_sade.md)
- [\_\_fetch](modules/_fetch.md)

### Properties

- [\_env](README.md#_env)

## Public Functions

### pipe

▸ **pipe**(`...funs`): (`input`: `any`) => `any`

Function similar to [Ramda `R.pipe`](https://ramdajs.com/docs/#pipe). Provides functional way to combine commands/functions.

```js
pipe(
	Number,
	v=> `Result is: ${v}`,
	echo
)(await question("Choose number:"));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `...funs` | `Function`[] |

#### Returns

`fn`

▸ (`input`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

##### Returns

`any`

___

### fetch

▸ **fetch**(`url`, `init?`): [`Response`](classes/fetch.Response.md)

A wrapper around the [node-fetch](https://www.npmjs.com/package/node-fetch) package.

```js
// BASIC
const response1= await fetch('https://medv.io');
// PROMISE CHAINING
const text1= await fetch('https://github.com/').then(r=> r.text());
// AWAITING
const response2= await fetch('https://api.github.com/users/github');
const json1= await response.json();
// POST METHOD
const json2= await fetch('https://httpbin.org/post', { method: 'POST', body: 'a=1' }).then(r=> r.json());
// POST METHOD WITH JSON
const response3= await fetch('https://httpbin.org/post', {
	method: 'post',
	body: JSON.stringify({ a: 1 }),
	headers: {'Content-Type': 'application/json'}
});
// ERRORS
fetch('https://domain.invalid/').catch(echo);
try{
	await fetch('https://domain.invalid');
} catch(error){
	echo(error);
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` \| [`Request`](classes/fetch.Request.md) | The URL to fetch. |
| `init?` | [`RequestInit`](interfaces/fetch.RequestInit.md) | Request parameters. |

#### Returns

[`Response`](classes/fetch.Response.md)

___

### cyclicLoop

▸ **cyclicLoop**<`T`\>(`items`): `Generator`<`T`[], `any`, `T`\>

Repeatedly loops through the given chars/strings/….
Typical usage is to create a spinner (by default):

```js
import { setTimeout } from "node:timers/promises";
const spinEnd= spinner(); //output=> ⠋ Waiting…
setTimeout(10*750).then(spinEnd);

function spinner(message= "Waiting…"){
	const animation= cyclicLoop();
	const echoSpin= ()=> echo.use("-R", `${animation.next().value} ${message}`);
	const id= setInterval(echoSpin, 750);
	return function(){
		clearInterval(id);
		echo.use("-r");
	};
}
```
…also see [spinner example](../examples/spinner.mjs).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `T`[] |

#### Returns

`Generator`<`T`[], `any`, `T`\>

___

### echo

▸ **echo**(`message?`, `...optionalParams`): [`ShellString`](modules/s.md#shellstring)

This is mixed function between bash’s `echo` and `console.log`.
By default, works more like `console.log` with partial supports
for styling mimic CSS and `console.log` in the web browser. See [echo.css](interfaces/EchoFunction.md#css) (internally uses [css-in-console - npm](https://www.npmjs.com/package/css-in-console)).

The [use](interfaces/EchoFunction.md#use) provides more `echo` way,
the first argument accepts options string starting with `-`:
- `-n`: Don’t append **n**ew line
- `-1`/`-2`: Outputs to `stdout`/`stderr`
- `-c`: Don’t **c**olorize output (e.g. objects)
- `-P`: Outputs objects in **p**rettier format
- `-R`/`-r`: Starts/Ends **r**ewritable mode (for spinners, progress bars, etc.). Mode can be ended with any other `echo` without `-R`.

There is also 

```js
// as console.log
const count = 5;
echo('count: %d', count);
// Prints: count: 5, to stdout
echo('count:', count);
// Prints: count: 5, to stdout
echo({ count });
// Prints: { count: 5 }, to stdout
echo(new Error("Test"));
// Prints: 'Error: Test', when `config.verbose= false`
```
```js
echo.use("-R", "0%");
// …
echo.use("-r", "100%");
// combination
echo.use("-2cP", { a: "A" });
```
```js
echo("Hi").to("./test.txt");
// Prints: 'Hi' & save to file 'test.txt'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message?` | `any` | The text to print. |
| `...optionalParams` | `any`[] | - |

#### Returns

[`ShellString`](modules/s.md#shellstring)

Returns processed string with additional utility methods like .to().

___

## Internal Functions

### \_\_sade

▸ **__sade**(`usage`, `isSingle?`): [`Sade`](interfaces/sade.Sade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `usage` | `string` |
| `isSingle?` | `boolean` |

#### Returns

[`Sade`](interfaces/sade.Sade.md)

___

### \_exit

▸ **_exit**(`code?`): `never`

The `process.exit()` method instructs Node.js to terminate the process
synchronously with an exit status of `code`. If `code` is omitted, exit uses
either the 'success' code `0` or the value of `process.exitCode` if it has been
set. Node.js will not terminate until all the `'exit'` event listeners are
called.

To exit with a 'failure' code:

```js
import { exit } from 'process';

exit(1);
```

The shell that executed Node.js should see the exit code as `1`.

Calling `process.exit()` will force the process to exit as quickly as possible
even if there are still asynchronous operations pending that have not yet
completed fully, including I/O operations to `process.stdout` and`process.stderr`.

In most situations, it is not actually necessary to call `process.exit()`explicitly. The Node.js process will exit on its own _if there is no additional_
_work pending_ in the event loop. The `process.exitCode` property can be set to
tell the process which exit code to use when the process exits gracefully.

For instance, the following example illustrates a _misuse_ of the`process.exit()` method that could lead to data printed to stdout being
truncated and lost:

```js
import { exit } from 'process';

// This is an example of what *not* to do:
if (someConditionNotMet()) {
  printUsageToStdout();
  exit(1);
}
```

The reason this is problematic is because writes to `process.stdout` in Node.js
are sometimes _asynchronous_ and may occur over multiple ticks of the Node.js
event loop. Calling `process.exit()`, however, forces the process to exit _before_ those additional writes to `stdout` can be performed.

Rather than calling `process.exit()` directly, the code _should_ set the`process.exitCode` and allow the process to exit naturally by avoiding
scheduling any additional work for the event loop:

```js
import process from 'process';

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

**`Since`**

v0.1.13

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code?` | `number` | The exit code. |

#### Returns

`never`

## Properties

### \_env

• **\_env**: `ProcessEnv`

The `process.env` property returns an object containing the user environment.
See [`environ(7)`](http://man7.org/linux/man-pages/man7/environ.7.html).

An example of this object looks like:

```js
{
  TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'maciej',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/maciej',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/maciej',
  LOGNAME: 'maciej',
  _: '/usr/local/bin/node'
}
```

It is possible to modify this object, but such modifications will not be
reflected outside the Node.js process, or (unless explicitly requested)
to other `Worker` threads.
In other words, the following example would not work:

```console
$ node -e 'process.env.foo = "bar"' &#x26;&#x26; echo $foo
```

While the following will:

```js
import { env } from 'process';

env.foo = 'bar';
console.log(env.foo);
```

Assigning a property on `process.env` will implicitly convert the value
to a string. **This behavior is deprecated.** Future versions of Node.js may
throw an error when the value is not a string, number, or boolean.

```js
import { env } from 'process';

env.test = null;
console.log(env.test);
// => 'null'
env.test = undefined;
console.log(env.test);
// => 'undefined'
```

Use `delete` to delete a property from `process.env`.

```js
import { env } from 'process';

env.TEST = 1;
delete env.TEST;
console.log(env.TEST);
// => undefined
```

On Windows operating systems, environment variables are case-insensitive.

```js
import { env } from 'process';

env.TEST = 1;
console.log(env.test);
// => 1
```

Unless explicitly specified when creating a `Worker` instance,
each `Worker` thread has its own copy of `process.env`, based on its
parent thread’s `process.env`, or whatever was specified as the `env` option
to the `Worker` constructor. Changes to `process.env` will not be visible
across `Worker` threads, and only the main thread can make changes that
are visible to the operating system or to native add-ons.

**`Since`**

v0.1.27
