nodejsscript

# nodejsscript

## Table of contents

### Public Functions

- [pipe](README.md#pipe)
- [fetch](README.md#fetch)
- [echo](README.md#echo)

### Internal Functions

- [log](README.md#log)
- [\_\_sade](README.md#__sade)

### Public Namespaces

- [cli](modules/cli.md)
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

[index.d.ts:14](https://github.com/jaandrle/nodejsscript/blob/0f08352/index.d.ts#L14)

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

[index.d.ts:80](https://github.com/jaandrle/nodejsscript/blob/0f08352/index.d.ts#L80)

___

### echo

▸ **echo**(`message?`, ...`optionalParams`): `void`

Prints to `stdout` with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html) (the arguments are all passed to `util.format()`).
Internally uses [log](README.md#log). Stringifies inputs except objects and errors in case of config.verbose.

```js
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

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

[index.d.ts:103](https://github.com/jaandrle/nodejsscript/blob/0f08352/index.d.ts#L103)

___

## Internal Functions

### log

▸ **log**(...`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17095

▸ **log**(`message?`, ...`optionalParams`): `void`

Prints to `stdout` with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html) (the arguments are all passed to `util.format()`).

```js
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.

**`Since`**

v0.1.100

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

node_modules/@types/node/console.d.ts:221

___

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
