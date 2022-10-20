[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / PromiseWithChild

# Interface: PromiseWithChild<T\>

[s](../modules/s.md).[child](../modules/s.child.md).PromiseWithChild

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Promise`<`T`\>

  ↳ **`PromiseWithChild`**

## Table of contents

### Properties

- [child](s.child.PromiseWithChild.md#child)
- [[toStringTag]](s.child.PromiseWithChild.md#[tostringtag])

### Methods

- [then](s.child.PromiseWithChild.md#then)
- [catch](s.child.PromiseWithChild.md#catch)
- [finally](s.child.PromiseWithChild.md#finally)

## Properties

### child

• **child**: [`ChildProcess`](../classes/s.child.ChildProcess.md)

___

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Promise.\_\_@toStringTag@23

## Methods

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | (`value`: `T`) => `TResult1` \| `PromiseLike`<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

Promise.then

___

### catch

▸ **catch**<`TResult`\>(`onrejected?`): `Promise`<`T` \| `TResult`\>

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

`Promise`<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.catch

___

### finally

▸ **finally**(`onfinally?`): `Promise`<`T`\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfinally?` | () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

`Promise`<`T`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.finally
