[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [\_\_fetch](../README.md) / Headers

# Class: Headers

This Fetch API interface allows you to perform various actions on HTTP request and response headers.
These actions include retrieving, setting, adding to, and removing.
A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
You can add to this using methods like append() (see Examples.)
In all methods of this interface, header names are matched by case-insensitive byte sequence.

## Constructors

### Constructor

> **new Headers**(`init?`): `Headers`

#### Parameters

##### init?

[`HeadersInit`](../type-aliases/HeadersInit.md)

#### Returns

`Headers`

## Methods

### append()

> **append**(`name`, `value`): `void`

#### Parameters

##### name

`string`

##### value

`string`

#### Returns

`void`

***

### delete()

> **delete**(`name`): `void`

#### Parameters

##### name

`string`

#### Returns

`void`

***

### get()

> **get**(`name`): `string`

#### Parameters

##### name

`string`

#### Returns

`string`

***

### has()

> **has**(`name`): `boolean`

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### set()

> **set**(`name`, `value`): `void`

#### Parameters

##### name

`string`

##### value

`string`

#### Returns

`void`

***

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

##### callbackfn

(`value`, `key`, `parent`) => `void`

##### thisArg?

`any`

#### Returns

`void`

***

### entries()

> **entries**(): `IterableIterator`\<\[`string`, `string`\]\>

Returns an iterator allowing to go through all key/value pairs contained in this object.

#### Returns

`IterableIterator`\<\[`string`, `string`\]\>

***

### keys()

> **keys**(): `IterableIterator`\<`string`\>

Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.

#### Returns

`IterableIterator`\<`string`\>

***

### values()

> **values**(): `IterableIterator`\<`string`\>

Returns an iterator allowing to go through all values of the key/value pairs contained in this object.

#### Returns

`IterableIterator`\<`string`\>

***

### raw()

> **raw**(): `Record`\<`string`, `string`[]\>

Node-fetch extension

#### Returns

`Record`\<`string`, `string`[]\>

***

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<\[`string`, `string`\]\>

#### Returns

`IterableIterator`\<\[`string`, `string`\]\>
