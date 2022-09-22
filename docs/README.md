nodejsscript

# nodejsscript

## Table of contents

### Public Functions

- [pipe](README.md#pipe)
- [fetch](README.md#fetch)
- [cli](README.md#cli)
- [read](README.md#read)
- [cyclicLoop](README.md#cyclicloop)
- [echo](README.md#echo)

### Internal Functions

- [\_\_sade](README.md#__sade)

### Public Namespaces

- [config](modules/config.md)
- [s](modules/s.md)
- [style](modules/style.md)

### Internal Namespaces

- [\_\_fetch](modules/_fetch.md)
- [\_\_sade](modules/_sade.md)

### Interfaces

- [ReadOptions](interfaces/ReadOptions.md)

### Public Variables

- [is\_piped](README.md#is_piped)

## Public Functions

### pipe

▸ **pipe**(...`funs`): (`input`: `any`) => `any`

Function similar to [Ramda `R.pipe`](https://ramdajs.com/docs/#pipe). Provides functional way to combine commands/functions.

```js
pipe(
	Number,
	v=> style.greenBright(v+1),
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

#### Defined in

[index.d.ts:59](https://github.com/jaandrle/nodejsscript/blob/2dce906/index.d.ts#L59)

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

#### Defined in

[index.d.ts:125](https://github.com/jaandrle/nodejsscript/blob/2dce906/index.d.ts#L125)

___

### cli

▸ **cli**(`usage`, `is_single?`): [`Sade`](interfaces/sade.Sade.md)

A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
In addition to the origin, `cli()` supports to fill script name from script file name.
This should be good balance between [commander - npm](https://www.npmjs.com/package/commander) and parsing arguments and writing help texts by hand.
For more complex scripts just create full npm package.
```js
cli("", true)
.version("0.1.0")
.describe("NodeJS Script cli test")
.action(echo)
.parse(process.argv);
```
	
```js
cli("copy <file> <destination>", true)
.version("0.1.0")
.describe("copy file simpulation")
.option("--force", "Overwrite file in destination.")
.action(function(file, destination, { force }){
	// copy file logic
})
.parse(process.argv);
```

```js
const prog= cli('my-cli');
prog
  .version('1.0.5')
  .option('--global, -g', 'An example global flag')
  .option('-c, --config', 'Provide path to custom config', 'foo.config.js');
prog
  .command('build <src> <dest>')
  .describe('Build the source directory. Expects an `index.js` entry file.')
  .option('-o, --output', 'Change the name of the output file', 'bundle.js')
  .example('build src build --global --config my-conf.js')
  .example('build app public -o main.js')
  .action((src, dest, opts) => {
    echo(`> building from ${src} to ${dest}`);
    echo('> these are extra opts', opts);
  });
prog.parse(process.argv);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `usage` | `string` | The script name and usage (`[optional]`/`<required>`). If no `name`, then the script file name will be used. |
| `is_single?` | `boolean` | See [__sade](README.md#__sade) |

#### Returns

[`Sade`](interfaces/sade.Sade.md)

#### Defined in

[index.d.ts:176](https://github.com/jaandrle/nodejsscript/blob/2dce906/index.d.ts#L176)

___

### read

▸ **read**(`options`): `Promise`<`string`\>

This function mimic [`read`](https://phoenixnap.com/kb/bash-read) command.
So, the function purpose is reading from `stdin`.
```js
const answer= await read({ "-p": "Question" });
const color= await read({ "-p": "Your color", completions: [ "red", "green" ] });
if(is_piped.left) await read().then(echo.bind(null, "E.g. for reading received input:"));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ReadOptions`](interfaces/ReadOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[index.d.ts:199](https://github.com/jaandrle/nodejsscript/blob/2dce906/index.d.ts#L199)

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

#### Defined in

[index.d.ts:232](https://github.com/jaandrle/nodejsscript/blob/2dce906/index.d.ts#L232)

___

### echo

▸ **echo**(`message?`, ...`optionalParams`): [`ShellString`](modules/s.md#shellstring)

The `console.log` alternative with method `use` similar to [echo](modules/s.md#echo),
 the first argument accepts options string starting with `-`:
- `-n`: Don’t append **n**ew line
- `-1`/`-2`: Outputs to `stdout`/`stderr`
- `-c`: Don’t **c**olorize output (e.g. objects)
- `-P`: Outputs objects in **p**rettier format
- `-R`/`-r`: Starts/Ends **r**ewritable mode (for spinners, progress bars, etc.). Mode can be ended with any other `echo` without `-R`.

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

#### Defined in

[src/echo.d.ts:46](https://github.com/jaandrle/nodejsscript/blob/2dce906/src/echo.d.ts#L46)

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

#### Defined in

node_modules/sade/index.d.ts:5

## Public Variables

### is\_piped

• `Const` **is\_piped**: `Object`

Contains `true`/`false` values to find out if script is running through a shell pipe.
```bash
node pipes.js | … # — test by is_piped.right
… | node pipes.js # — test by is_piped.left
```

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left` | `boolean` |
| `right` | `boolean` |

#### Defined in

[index.d.ts:209](https://github.com/jaandrle/nodejsscript/blob/2dce906/index.d.ts#L209)
