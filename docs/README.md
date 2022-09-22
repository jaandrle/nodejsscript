nodejsscript

# nodejsscript

## Table of contents

### Public Functions

- [pipe](README.md#pipe)
- [fetch](README.md#fetch)
- [cli](README.md#cli)
- [question](README.md#question)
- [stdin](README.md#stdin)
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

[index.d.ts:59](https://github.com/jaandrle/nodejsscript/blob/002debc/index.d.ts#L59)

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

[index.d.ts:125](https://github.com/jaandrle/nodejsscript/blob/002debc/index.d.ts#L125)

___

### cli

▸ **cli**(`usage`, `is_single?`): [`Sade`](interfaces/sade.Sade.md)

A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
In addition to the origin, `cli.register()` supports to fill script name from script file name.
This should be good balance between [commander - npm](https://www.npmjs.com/package/commander) and parsing arguments and writing help texts by hand.
For more complex scripts just create full npm package.
```js
cli("", true)
	.version("0.1.0")
	.describe("NodeJS Script cli test")
	.action(echo);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `usage` | `string` | The script name and usage (`[optional]`/`<required>`). If no `name`, then the script file name will be used. |
| `is_single?` | `boolean` | See [__sade](README.md#__sade) |

#### Returns

[`Sade`](interfaces/sade.Sade.md)

#### Defined in

[index.d.ts:145](https://github.com/jaandrle/nodejsscript/blob/002debc/index.d.ts#L145)

___

### question

▸ **question**(`query?`, `options?`): `Promise`<`string`\>

Promt user for answer. A wrapper around the [readline](https://nodejs.org/api/readline.html) package.
```js
const bear= await question('What kind of bear is best?');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query?` | `string` | Question |
| `options?` | `Object` | The optional `completions` is array of options to be suggested when `tab` key is pressed. |
| `options.completions` | `string`[] | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[index.d.ts:155](https://github.com/jaandrle/nodejsscript/blob/002debc/index.d.ts#L155)

___

### stdin

▸ **stdin**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[index.d.ts:158](https://github.com/jaandrle/nodejsscript/blob/002debc/index.d.ts#L158)

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

[index.d.ts:182](https://github.com/jaandrle/nodejsscript/blob/002debc/index.d.ts#L182)

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
- `--`: Off options processing, e.g.: `echo("--", "- the list item.");`

```js
echo.use("-R", "0%");
// …
echo.use("-r", "100%");
// combination
echo.use("-2cP", { a: "A" });
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

[src/echo.d.ts:47](https://github.com/jaandrle/nodejsscript/blob/002debc/src/echo.d.ts#L47)

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
