[nodejsscript](../README.md) / [s](../modules/s.md) / ProcessPromise

# Class: ProcessPromise

[s](../modules/s.md).ProcessPromise

## Hierarchy

- `Promise`<[`ProcessOutput`](s.ProcessOutput.md)\>

  ↳ **`ProcessPromise`**

## Table of contents

### Methods

- [all](s.ProcessPromise.md#all)
- [race](s.ProcessPromise.md#race)
- [reject](s.ProcessPromise.md#reject)
- [resolve](s.ProcessPromise.md#resolve)
- [allSettled](s.ProcessPromise.md#allsettled)
- [\_run](s.ProcessPromise.md#_run)
- [stdio](s.ProcessPromise.md#stdio)
- [pipe](s.ProcessPromise.md#pipe)
- [then](s.ProcessPromise.md#then)
- [catch](s.ProcessPromise.md#catch)
- [finally](s.ProcessPromise.md#finally)

### Properties

- [[species]](s.ProcessPromise.md#[species])
- [child](s.ProcessPromise.md#child)
- [[toStringTag]](s.ProcessPromise.md#[tostringtag])

### Constructors

- [constructor](s.ProcessPromise.md#constructor)

### Accessors

- [stdin](s.ProcessPromise.md#stdin)
- [stdout](s.ProcessPromise.md#stdout)
- [stderr](s.ProcessPromise.md#stderr)

## Methods

### all

▸ `Static` **all**<`T`\>(`values`): `Promise`<`Awaited`<`T`\>[]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `Iterable`<`T` \| `PromiseLike`<`T`\>\> | An iterable of Promises. |

#### Returns

`Promise`<`Awaited`<`T`\>[]\>

A new Promise.

#### Inherited from

Promise.all

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:227

▸ `Static` **all**<`T`\>(`values`): `Promise`<{ -readonly [P in string \| number \| symbol]: Awaited<T[P]\> }\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [] \| readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

`Promise`<{ -readonly [P in string \| number \| symbol]: Awaited<T[P]\> }\>

A new Promise.

#### Inherited from

Promise.all

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:41

___

### race

▸ `Static` **race**<`T`\>(`values`): `Promise`<`Awaited`<`T`\>\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `Iterable`<`T` \| `PromiseLike`<`T`\>\> | An iterable of Promises. |

#### Returns

`Promise`<`Awaited`<`T`\>\>

A new Promise.

#### Inherited from

Promise.race

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:235

▸ `Static` **race**<`T`\>(`values`): `Promise`<`Awaited`<`T`[`number`]\>\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [] \| readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

`Promise`<`Awaited`<`T`[`number`]\>\>

A new Promise.

#### Inherited from

Promise.race

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:52

___

### reject

▸ `Static` **reject**<`T`\>(`reason?`): `Promise`<`T`\>

Creates a new rejected promise for the provided reason.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason?` | `any` | The reason the promise was rejected. |

#### Returns

`Promise`<`T`\>

A new rejected Promise.

#### Inherited from

Promise.reject

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:62

___

### resolve

▸ `Static` **resolve**(): `Promise`<`void`\>

Creates a new resolved promise.

#### Returns

`Promise`<`void`\>

A resolved promise.

#### Inherited from

Promise.resolve

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:68

▸ `Static` **resolve**<`T`\>(`value`): `Promise`<`T`\>

Creates a new resolved promise for the provided value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` \| `PromiseLike`<`T`\> | A promise. |

#### Returns

`Promise`<`T`\>

A promise whose internal state matches the provided promise.

#### Inherited from

Promise.resolve

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:75

___

### allSettled

▸ `Static` **allSettled**<`T`\>(`values`): `Promise`<{ -readonly [P in string \| number \| symbol]: PromiseSettledResult<Awaited<T[P]\>\> }\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [] \| readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

`Promise`<{ -readonly [P in string \| number \| symbol]: PromiseSettledResult<Awaited<T[P]\>\> }\>

A new Promise.

#### Inherited from

Promise.allSettled

#### Defined in

node_modules/typescript/lib/lib.es2020.promise.d.ts:40

▸ `Static` **allSettled**<`T`\>(`values`): `Promise`<`PromiseSettledResult`<`Awaited`<`T`\>\>[]\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `Iterable`<`T` \| `PromiseLike`<`T`\>\> | An array of Promises. |

#### Returns

`Promise`<`PromiseSettledResult`<`Awaited`<`T`\>\>[]\>

A new Promise.

#### Inherited from

Promise.allSettled

#### Defined in

node_modules/typescript/lib/lib.es2020.promise.d.ts:48

___

### \_run

▸ **_run**(): `void`

#### Returns

`void`

#### Defined in

[src/shelljs.d.ts:121](https://github.com/jaandrle/nodejsscript/blob/8f362e5/src/shelljs.d.ts#L121)

___

### stdio

▸ **stdio**(`stdin`, `stdout?`, `stderr?`): [`ProcessPromise`](s.ProcessPromise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stdin` | [`IO`](../modules/s.md#io) |
| `stdout?` | [`IO`](../modules/s.md#io) |
| `stderr?` | [`IO`](../modules/s.md#io) |

#### Returns

[`ProcessPromise`](s.ProcessPromise.md)

#### Defined in

[src/shelljs.d.ts:125](https://github.com/jaandrle/nodejsscript/blob/8f362e5/src/shelljs.d.ts#L125)

___

### pipe

▸ **pipe**(`dest`): [`ProcessPromise`](s.ProcessPromise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `Writable` \| [`ProcessPromise`](s.ProcessPromise.md) \| (`s`: [`ShellString`](../modules/s.md#shellstring)) => `any` |

#### Returns

[`ProcessPromise`](s.ProcessPromise.md)

#### Defined in

[src/shelljs.d.ts:126](https://github.com/jaandrle/nodejsscript/blob/8f362e5/src/shelljs.d.ts#L126)

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | [`ProcessOutput`](s.ProcessOutput.md) |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | (`value`: [`ProcessOutput`](s.ProcessOutput.md)) => `TResult1` \| `PromiseLike`<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

Promise.then

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1520

___

### catch

▸ **catch**<`TResult`\>(`onrejected?`): `Promise`<[`ProcessOutput`](s.ProcessOutput.md) \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onrejected?` | (`reason`: `any`) => `TResult` \| `PromiseLike`<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<[`ProcessOutput`](s.ProcessOutput.md) \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.catch

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1527

___

### finally

▸ **finally**(`onfinally?`): `Promise`<[`ProcessOutput`](s.ProcessOutput.md)\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfinally?` | () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

`Promise`<[`ProcessOutput`](s.ProcessOutput.md)\>

A Promise for the completion of the callback.

#### Inherited from

Promise.finally

#### Defined in

node_modules/typescript/lib/lib.es2018.promise.d.ts:31

## Properties

### [species]

▪ `Static` `Readonly` **[species]**: `PromiseConstructor`

#### Inherited from

Promise.\_\_@species@596

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:178

___

### child

• `Optional` **child**: [`ChildProcess`](s.child.ChildProcess.md)

#### Defined in

[src/shelljs.d.ts:120](https://github.com/jaandrle/nodejsscript/blob/8f362e5/src/shelljs.d.ts#L120)

___

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Promise.\_\_@toStringTag@23

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:174

## Constructors

### constructor

• **new ProcessPromise**(`executor`)

Creates a new Promise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executor` | (`resolve`: (`value`: [`ProcessOutput`](s.ProcessOutput.md) \| `PromiseLike`<[`ProcessOutput`](s.ProcessOutput.md)\>) => `void`, `reject`: (`reason?`: `any`) => `void`) => `void` | A callback used to initialize the promise. This callback is passed two arguments:  a resolve callback used to resolve the promise with a value or the result of another promise,  and a reject callback used to reject the promise with a provided reason or error. |

#### Inherited from

Promise<ProcessOutput\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:33

## Accessors

### stdin

• `get` **stdin**(): `Writable`

#### Returns

`Writable`

#### Defined in

[src/shelljs.d.ts:122](https://github.com/jaandrle/nodejsscript/blob/8f362e5/src/shelljs.d.ts#L122)

___

### stdout

• `get` **stdout**(): `Readable`

#### Returns

`Readable`

#### Defined in

[src/shelljs.d.ts:123](https://github.com/jaandrle/nodejsscript/blob/8f362e5/src/shelljs.d.ts#L123)

___

### stderr

• `get` **stderr**(): `Readable`

#### Returns

`Readable`

#### Defined in

[src/shelljs.d.ts:124](https://github.com/jaandrle/nodejsscript/blob/8f362e5/src/shelljs.d.ts#L124)
