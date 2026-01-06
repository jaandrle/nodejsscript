[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [\_\_sade](../README.md) / Sade

# Interface: Sade

## Methods

### command()

> **command**(`usage`, `description?`, `options?`): `Sade`

#### Parameters

##### usage

`string`

##### description?

`string`

##### options?

###### alias?

`Arrayable`\<`string`\>

###### default?

`boolean`

#### Returns

`Sade`

***

### option()

> **option**(`flag`, `description?`, `value?`): `Sade`

#### Parameters

##### flag

`string`

##### description?

`string`

##### value?

[`Value`](../type-aliases/Value.md)

#### Returns

`Sade`

***

### action()

> **action**(`handler`): `Sade`

#### Parameters

##### handler

[`Handler`](../type-aliases/Handler.md)

#### Returns

`Sade`

***

### describe()

> **describe**(`text`): `Sade`

#### Parameters

##### text

`Arrayable`\<`string`\>

#### Returns

`Sade`

***

### alias()

> **alias**(...`names`): `Sade`

#### Parameters

##### names

...`string`[]

#### Returns

`Sade`

***

### example()

> **example**(`usage`): `Sade`

#### Parameters

##### usage

`string`

#### Returns

`Sade`

***

### parse()

#### Call Signature

> **parse**(`arr`, `opts`): [`LazyOutput`](LazyOutput.md)

##### Parameters

###### arr

`string`[]

###### opts

`object` & `Options`

##### Returns

[`LazyOutput`](LazyOutput.md)

#### Call Signature

> **parse**(`arr`, `opts?`): `void`

##### Parameters

###### arr

`string`[]

###### opts?

`object` & `Options`

##### Returns

`void`

***

### version()

> **version**(`value`): `Sade`

#### Parameters

##### value

`string`

#### Returns

`Sade`

***

### help()

> **help**(`cmd?`): `void`

#### Parameters

##### cmd?

`string`

#### Returns

`void`
