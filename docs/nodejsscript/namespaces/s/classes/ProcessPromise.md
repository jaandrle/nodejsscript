[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / ProcessPromise

# Class: ProcessPromise

## Extends

- `Promise`\<[`ProcessOutput`](ProcessOutput.md)\>

## Constructors

### Constructor

> **new ProcessPromise**(`executor`): `ProcessPromise`

Creates a new Promise.

#### Parameters

##### executor

(`resolve`, `reject`) => `void`

A callback used to initialize the promise. This callback is passed two arguments:
a resolve callback used to resolve the promise with a value or the result of another promise,
and a reject callback used to reject the promise with a provided reason or error.

#### Returns

`ProcessPromise`

#### Inherited from

`Promise<ProcessOutput>.constructor`

## Properties

### \[species\]

> `readonly` `static` **\[species\]**: `PromiseConstructor`

#### Inherited from

`Promise.[species]`

***

### child?

> `optional` **child**: [`ChildProcess`](../../../../child_process/classes/ChildProcess.md)

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

#### Call Signature

> `static` **all**\<`T`\>(`values`): `Promise`\<`Awaited`\<`T`\>[]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

##### Type Parameters

###### T

`T`

##### Parameters

###### values

`Iterable`\<`T` \| `PromiseLike`\<`T`\>\>

An iterable of Promises.

##### Returns

`Promise`\<`Awaited`\<`T`\>[]\>

A new Promise.

##### Inherited from

`Promise.all`

#### Call Signature

> `static` **all**\<`T`\>(`values`): `Promise`\<\{ -readonly \[P in string \| number \| symbol\]: Awaited\<T\[P\<P\>\]\> \}\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

##### Type Parameters

###### T

`T` *extends* \[\] \| readonly `unknown`[]

##### Parameters

###### values

`T`

An array of Promises.

##### Returns

`Promise`\<\{ -readonly \[P in string \| number \| symbol\]: Awaited\<T\[P\<P\>\]\> \}\>

A new Promise.

##### Inherited from

`Promise.all`

***

### race()

#### Call Signature

> `static` **race**\<`T`\>(`values`): `Promise`\<`Awaited`\<`T`\>\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

##### Type Parameters

###### T

`T`

##### Parameters

###### values

`Iterable`\<`T` \| `PromiseLike`\<`T`\>\>

An iterable of Promises.

##### Returns

`Promise`\<`Awaited`\<`T`\>\>

A new Promise.

##### Inherited from

`Promise.race`

#### Call Signature

> `static` **race**\<`T`\>(`values`): `Promise`\<`Awaited`\<`T`\[`number`\]\>\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

##### Type Parameters

###### T

`T` *extends* \[\] \| readonly `unknown`[]

##### Parameters

###### values

`T`

An array of Promises.

##### Returns

`Promise`\<`Awaited`\<`T`\[`number`\]\>\>

A new Promise.

##### Inherited from

`Promise.race`

***

### reject()

> `static` **reject**\<`T`\>(`reason?`): `Promise`\<`T`\>

Creates a new rejected promise for the provided reason.

#### Type Parameters

##### T

`T` = `never`

#### Parameters

##### reason?

`any`

The reason the promise was rejected.

#### Returns

`Promise`\<`T`\>

A new rejected Promise.

#### Inherited from

`Promise.reject`

***

### resolve()

#### Call Signature

> `static` **resolve**(): `Promise`\<`void`\>

Creates a new resolved promise.

##### Returns

`Promise`\<`void`\>

A resolved promise.

##### Inherited from

`Promise.resolve`

#### Call Signature

> `static` **resolve**\<`T`\>(`value`): `Promise`\<`Awaited`\<`T`\>\>

Creates a new resolved promise for the provided value.

##### Type Parameters

###### T

`T`

##### Parameters

###### value

`T`

A promise.

##### Returns

`Promise`\<`Awaited`\<`T`\>\>

A promise whose internal state matches the provided promise.

##### Inherited from

`Promise.resolve`

#### Call Signature

> `static` **resolve**\<`T`\>(`value`): `Promise`\<`Awaited`\<`T`\>\>

Creates a new resolved promise for the provided value.

##### Type Parameters

###### T

`T`

##### Parameters

###### value

A promise.

`T` | `PromiseLike`\<`T`\>

##### Returns

`Promise`\<`Awaited`\<`T`\>\>

A promise whose internal state matches the provided promise.

##### Inherited from

`Promise.resolve`

***

### allSettled()

#### Call Signature

> `static` **allSettled**\<`T`\>(`values`): `Promise`\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<Awaited\<T\[P\<P\>\]\>\> \}\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

##### Type Parameters

###### T

`T` *extends* \[\] \| readonly `unknown`[]

##### Parameters

###### values

`T`

An array of Promises.

##### Returns

`Promise`\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<Awaited\<T\[P\<P\>\]\>\> \}\>

A new Promise.

##### Inherited from

`Promise.allSettled`

#### Call Signature

> `static` **allSettled**\<`T`\>(`values`): `Promise`\<`PromiseSettledResult`\<`Awaited`\<`T`\>\>[]\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

##### Type Parameters

###### T

`T`

##### Parameters

###### values

`Iterable`\<`T` \| `PromiseLike`\<`T`\>\>

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

> **stdio**(`stdin`, `stdout?`, `stderr?`): `this`

#### Parameters

##### stdin

[`IO`](../type-aliases/IO.md)

##### stdout?

[`IO`](../type-aliases/IO.md)

##### stderr?

[`IO`](../type-aliases/IO.md)

#### Returns

`this`

***

### pipe()

> **pipe**(`dest`): `ProcessPromise`

#### Parameters

##### dest

`Writable` | `ProcessPromise` | (`s`) => `any`

#### Returns

`ProcessPromise`

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`\<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

##### TResult1

`TResult1` = [`ProcessOutput`](ProcessOutput.md)

##### TResult2

`TResult2` = `never`

#### Parameters

##### onfulfilled?

(`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

The callback to execute when the Promise is resolved.

##### onrejected?

(`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

`Promise.then`

***

### catch()

> **catch**\<`TResult`\>(`onrejected?`): `Promise`\<[`ProcessOutput`](ProcessOutput.md) \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

##### TResult

`TResult` = `never`

#### Parameters

##### onrejected?

(`reason`) => `TResult` \| `PromiseLike`\<`TResult`\>

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<[`ProcessOutput`](ProcessOutput.md) \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.catch`

***

### finally()

> **finally**(`onfinally?`): `Promise`\<[`ProcessOutput`](ProcessOutput.md)\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

##### onfinally?

() => `void`

The callback to execute when the Promise is settled (fulfilled or rejected).

#### Returns

`Promise`\<[`ProcessOutput`](ProcessOutput.md)\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.finally`
