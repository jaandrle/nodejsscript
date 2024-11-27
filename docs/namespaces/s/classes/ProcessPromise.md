[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / ProcessPromise

# Class: ProcessPromise

## Extends

- `Promise`\<[`ProcessOutput`](ProcessOutput.md)\>

## Constructors

### new ProcessPromise()

> **new ProcessPromise**(`executor`): [`ProcessPromise`](ProcessPromise.md)

Creates a new Promise.

#### Parameters

• **executor**

A callback used to initialize the promise. This callback is passed two arguments:
a resolve callback used to resolve the promise with a value or the result of another promise,
and a reject callback used to reject the promise with a provided reason or error.

#### Returns

[`ProcessPromise`](ProcessPromise.md)

#### Inherited from

`Promise<ProcessOutput>.constructor`

## Properties

### \[species\]

> `readonly` `static` **\[species\]**: `PromiseConstructor`

#### Inherited from

`Promise.[species]`

***

### child?

> `optional` **child**: [`ChildProcess`](../namespaces/child/classes/ChildProcess.md)

***

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

#### Inherited from

`Promise.[toStringTag]`

## Accessors

### stdin

#### Get Signature

> **get** **stdin**(): `Writable`

##### Returns

`Writable`

***

### stdout

#### Get Signature

> **get** **stdout**(): `Readable`

##### Returns

`Readable`

***

### stderr

#### Get Signature

> **get** **stderr**(): `Readable`

##### Returns

`Readable`

## Methods

### all()

#### all(values)

> `static` **all**\<`T`\>(`values`): `Promise`\<`Awaited`\<`T`\>[]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

##### Type Parameters

• **T**

##### Parameters

• **values**: `Iterable`\<`T` \| `PromiseLike`\<`T`\>, `any`, `any`\>

An iterable of Promises.

##### Returns

`Promise`\<`Awaited`\<`T`\>[]\>

A new Promise.

##### Inherited from

`Promise.all`

#### all(values)

> `static` **all**\<`T`\>(`values`): `Promise`\<\{ -readonly \[P in string \| number \| symbol\]: Awaited\<T\[P\<P\>\]\> \}\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

##### Type Parameters

• **T** *extends* [] \| readonly `unknown`[]

##### Parameters

• **values**: `T`

An array of Promises.

##### Returns

`Promise`\<\{ -readonly \[P in string \| number \| symbol\]: Awaited\<T\[P\<P\>\]\> \}\>

A new Promise.

##### Inherited from

`Promise.all`

***

### race()

#### race(values)

> `static` **race**\<`T`\>(`values`): `Promise`\<`Awaited`\<`T`\>\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

##### Type Parameters

• **T**

##### Parameters

• **values**: `Iterable`\<`T` \| `PromiseLike`\<`T`\>, `any`, `any`\>

An iterable of Promises.

##### Returns

`Promise`\<`Awaited`\<`T`\>\>

A new Promise.

##### Inherited from

`Promise.race`

#### race(values)

> `static` **race**\<`T`\>(`values`): `Promise`\<`Awaited`\<`T`\[`number`\]\>\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

##### Type Parameters

• **T** *extends* [] \| readonly `unknown`[]

##### Parameters

• **values**: `T`

An array of Promises.

##### Returns

`Promise`\<`Awaited`\<`T`\[`number`\]\>\>

A new Promise.

##### Inherited from

`Promise.race`

***

### reject()

> `static` **reject**\<`T`\>(`reason`?): `Promise`\<`T`\>

Creates a new rejected promise for the provided reason.

#### Type Parameters

• **T** = `never`

#### Parameters

• **reason?**: `any`

The reason the promise was rejected.

#### Returns

`Promise`\<`T`\>

A new rejected Promise.

#### Inherited from

`Promise.reject`

***

### resolve()

#### resolve()

> `static` **resolve**(): `Promise`\<`void`\>

Creates a new resolved promise.

##### Returns

`Promise`\<`void`\>

A resolved promise.

##### Inherited from

`Promise.resolve`

#### resolve(value)

> `static` **resolve**\<`T`\>(`value`): `Promise`\<`Awaited`\<`T`\>\>

Creates a new resolved promise for the provided value.

##### Type Parameters

• **T**

##### Parameters

• **value**: `T`

A promise.

##### Returns

`Promise`\<`Awaited`\<`T`\>\>

A promise whose internal state matches the provided promise.

##### Inherited from

`Promise.resolve`

#### resolve(value)

> `static` **resolve**\<`T`\>(`value`): `Promise`\<`Awaited`\<`T`\>\>

Creates a new resolved promise for the provided value.

##### Type Parameters

• **T**

##### Parameters

• **value**: `T` \| `PromiseLike`\<`T`\>

A promise.

##### Returns

`Promise`\<`Awaited`\<`T`\>\>

A promise whose internal state matches the provided promise.

##### Inherited from

`Promise.resolve`

***

### allSettled()

#### allSettled(values)

> `static` **allSettled**\<`T`\>(`values`): `Promise`\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<Awaited\<T\[P\<P\>\]\>\> \}\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

##### Type Parameters

• **T** *extends* [] \| readonly `unknown`[]

##### Parameters

• **values**: `T`

An array of Promises.

##### Returns

`Promise`\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<Awaited\<T\[P\<P\>\]\>\> \}\>

A new Promise.

##### Inherited from

`Promise.allSettled`

#### allSettled(values)

> `static` **allSettled**\<`T`\>(`values`): `Promise`\<`PromiseSettledResult`\<`Awaited`\<`T`\>\>[]\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

##### Type Parameters

• **T**

##### Parameters

• **values**: `Iterable`\<`T` \| `PromiseLike`\<`T`\>, `any`, `any`\>

An array of Promises.

##### Returns

`Promise`\<`PromiseSettledResult`\<`Awaited`\<`T`\>\>[]\>

A new Promise.

##### Inherited from

`Promise.allSettled`

***

### \_run()

> **\_run**(): `void`

#### Returns

`void`

***

### stdio()

> **stdio**(`stdin`, `stdout`?, `stderr`?): `this`

#### Parameters

• **stdin**: [`IO`](../type-aliases/IO.md)

• **stdout?**: [`IO`](../type-aliases/IO.md)

• **stderr?**: [`IO`](../type-aliases/IO.md)

#### Returns

`this`

***

### pipe()

> **pipe**(`dest`): [`ProcessPromise`](ProcessPromise.md)

#### Parameters

• **dest**: `Writable` \| [`ProcessPromise`](ProcessPromise.md) \| (`s`) => `any`

#### Returns

[`ProcessPromise`](ProcessPromise.md)

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled`?, `onrejected`?): `Promise`\<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

• **TResult1** = [`ProcessOutput`](ProcessOutput.md)

• **TResult2** = `never`

#### Parameters

• **onfulfilled?**

The callback to execute when the Promise is resolved.

• **onrejected?**

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

`Promise.then`

***

### catch()

> **catch**\<`TResult`\>(`onrejected`?): `Promise`\<[`ProcessOutput`](ProcessOutput.md) \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

• **TResult** = `never`

#### Parameters

• **onrejected?**

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<[`ProcessOutput`](ProcessOutput.md) \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.catch`

***

### finally()

> **finally**(`onfinally`?): `Promise`\<[`ProcessOutput`](ProcessOutput.md)\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

• **onfinally?**

The callback to execute when the Promise is settled (fulfilled or rejected).

#### Returns

`Promise`\<[`ProcessOutput`](ProcessOutput.md)\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.finally`
