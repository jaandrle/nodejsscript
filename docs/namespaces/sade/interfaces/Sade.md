[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [\_\_sade](../README.md) / Sade

# Interface: Sade

## Methods

### command()

> **command**(`usage`, `description`?, `options`?): [`Sade`](Sade.md)

#### Parameters

• **usage**: `string`

• **description?**: `string`

• **options?**

• **options.alias?**: `Arrayable`\<`string`\>

• **options.default?**: `boolean`

#### Returns

[`Sade`](Sade.md)

***

### option()

> **option**(`flag`, `description`?, `value`?): [`Sade`](Sade.md)

#### Parameters

• **flag**: `string`

• **description?**: `string`

• **value?**: [`Value`](../type-aliases/Value.md)

#### Returns

[`Sade`](Sade.md)

***

### action()

> **action**(`handler`): [`Sade`](Sade.md)

#### Parameters

• **handler**: [`Handler`](../type-aliases/Handler.md)

#### Returns

[`Sade`](Sade.md)

***

### describe()

> **describe**(`text`): [`Sade`](Sade.md)

#### Parameters

• **text**: `Arrayable`\<`string`\>

#### Returns

[`Sade`](Sade.md)

***

### alias()

> **alias**(...`names`): [`Sade`](Sade.md)

#### Parameters

• ...**names**: `string`[]

#### Returns

[`Sade`](Sade.md)

***

### example()

> **example**(`usage`): [`Sade`](Sade.md)

#### Parameters

• **usage**: `string`

#### Returns

[`Sade`](Sade.md)

***

### parse()

#### parse(arr, opts)

> **parse**(`arr`, `opts`): [`LazyOutput`](LazyOutput.md)

##### Parameters

• **arr**: `string`[]

• **opts**: `object` & `Options`

##### Returns

[`LazyOutput`](LazyOutput.md)

#### parse(arr, opts)

> **parse**(`arr`, `opts`?): `void`

##### Parameters

• **arr**: `string`[]

• **opts?**: `object` & `Options`

##### Returns

`void`

***

### version()

> **version**(`value`): [`Sade`](Sade.md)

#### Parameters

• **value**: `string`

#### Returns

[`Sade`](Sade.md)

***

### help()

> **help**(`cmd`?): `void`

#### Parameters

• **cmd?**: `string`

#### Returns

`void`
