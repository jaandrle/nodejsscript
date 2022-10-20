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

___

### resolve

▸ `Static` **resolve**(): `Promise`<`void`\>

Creates a new resolved promise.

#### Returns

`Promise`<`void`\>

A resolved promise.

#### Inherited from

Promise.resolve

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

___

### \_run

▸ **_run**(): `void`

#### Returns

`void`

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

___

### pipe

▸ **pipe**(`dest`): [`ProcessPromise`](s.ProcessPromise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `Writable` \| [`ProcessPromise`](s.ProcessPromise.md) \| (`s`: [`ShellString`](../modules/s.md#shellstring)) => `any` |

#### Returns

[`ProcessPromise`](s.ProcessPromise.md)

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

## Properties

### [species]

▪ `Static` `Readonly` **[species]**: `PromiseConstructor`

#### Inherited from

Promise.\_\_@species@596

___

### child

• `Optional` **child**: [`ChildProcess`](s.child.ChildProcess.md)

___

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Promise.\_\_@toStringTag@23

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

## Accessors

### stdin

• `get` **stdin**(): `Writable`

#### Returns

`Writable`

___

### stdout

• `get` **stdout**(): `Readable`

#### Returns

`Readable`

___

### stderr

• `get` **stderr**(): `Readable`

#### Returns

`Readable`
