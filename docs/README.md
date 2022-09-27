nodejsscript

# nodejsscript

## Table of contents

### Public Functions

- [pipe](README.md#pipe)
- [fetch](README.md#fetch)
- [cyclicLoop](README.md#cyclicloop)
- [$](README.md#$)
- [echo](README.md#echo)

### Internal Functions

- [\_\_sade](README.md#__sade)
- [xdg](README.md#xdg)

### Public Namespaces

- [cli](modules/cli.md)
- [\_\_sade](modules/_sade.md)
- [s](modules/s.md)
- [style](modules/style.md)

### Internal Namespaces

- [\_\_fetch](modules/_fetch.md)

### Interfaces

- [XdgOptions](interfaces/XdgOptions.md)
- [XdgReturn](interfaces/XdgReturn.md)

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

[_index.d.ts:18](https://github.com/jaandrle/nodejsscript/blob/23d39a7/_index.d.ts#L18)

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

[_index.d.ts:87](https://github.com/jaandrle/nodejsscript/blob/23d39a7/_index.d.ts#L87)

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

[_index.d.ts:112](https://github.com/jaandrle/nodejsscript/blob/23d39a7/_index.d.ts#L112)

___

### $

▸ **$**(`pieces`, ...`args`): `string`

Returns escaped string for using as shell command (typically in [exec](modules/s.md#exec)).
```js
const filenames = glob('Holiday Snaps/*.jpg');
const title     = 'Holiday Snaps';
echo($`compress --title ${title} ${filenames}`)
//=> compress --title 'Holiday Snaps' 'Holiday Snaps/Pic 1.jpg' 'Holiday Snaps/Pic 2.jpg'
```
**You should use this always when the [exec](modules/s.md#exec) runs with uncontrolled input.**
```js
function curlUnsafe(urlToDownload){ return s.exec('curl ' + urlToDownload); }
function curl(urlToDownload){ return s.exec($`curl ${urlToDownload}`); }
curlUnsafe('https://some/url ; rm -rf $HOME'); //=> curl https://some/url ; rm -rf $HOME
curl('https://some/url ; rm -rf $HOME'); //=> curl 'https://some/url ; rm -rf $HOME'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pieces` | `TemplateStringsArray` |
| `...args` | `any`[] |

#### Returns

`string`

#### Defined in

[_index.d.ts:131](https://github.com/jaandrle/nodejsscript/blob/23d39a7/_index.d.ts#L131)

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

[src/echo.d.ts:46](https://github.com/jaandrle/nodejsscript/blob/23d39a7/src/echo.d.ts#L46)

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

___

### xdg

▸ **xdg**(`options?`): [`XdgReturn`](interfaces/XdgReturn.md)

Namespace/function represents [folder/xdg: Get cross-platform XDG Base Directories or their equivalents. Works with Linux, Windows, or MacOS.](https://github.com/folder/xdg).
```js
echo(xdg({ subdir: "TestSubDir" }));
```
…output:
```json
{
	"cache": "/home/jaandrle/.cache/testsubdir",
	"config": "/home/jaandrle/.config/testsubdir",
	"config_dirs": [
		"/home/jaandrle/.config/testsubdir",
		"/home/jaandrle/.config/kdedefaults",
		"/etc/xdg/xdg-plasma",
		"/etc/xdg"
],
	"data": "/home/jaandrle/.local/share/testsubdir",
	"data_dirs": [
		"/home/jaandrle/.local/share/testsubdir",
		"/usr/share/plasma",
		"/home/jaandrle/.local/share/flatpak/exports/share",
		"/var/lib/flatpak/exports/share",
		"/usr/local/share",
		"/usr/share",
		"/var/lib/snapd/desktop"
],
	"runtime": "/run/user/1000/testsubdir",
	"logs": "/home/jaandrle/.cache/testsubdir/logs"
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`XdgOptions`](interfaces/XdgOptions.md) |

#### Returns

[`XdgReturn`](interfaces/XdgReturn.md)

#### Defined in

[src/xdg.d.ts:38](https://github.com/jaandrle/nodejsscript/blob/23d39a7/src/xdg.d.ts#L38)
