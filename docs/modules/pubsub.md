[nodejsscript](../README.md) / pubsub

# Namespace: pubsub

Handles async code with [Publish–subscribe pattern - Wikipedia](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern).
```js
import { setTimeout } from "node:timers/promises";
const topic= pubsub.topic();
pubsub.subscribe(topic, echo.bind(null, "1"));
setTimeout(750).then(pubsub.publish.bind(null, "Message"));
pubsub.subscribe(topic, echo.bind(null, "2"));
// output 750ms later
// 1 Message
// 2 Message
```

## Table of contents

### Functions

- [topic](pubsub.md#topic)
- [topicFromAbort](pubsub.md#topicfromabort)
- [topicFromInterval](pubsub.md#topicfrominterval)
- [publish](pubsub.md#publish)
- [subscribe](pubsub.md#subscribe)
- [publishClose](pubsub.md#publishclose)
- [subscribeClose](pubsub.md#subscribeclose)

### Type Aliases

- [Topic\_info](pubsub.md#topic_info)
- [Topic](pubsub.md#topic-1)
- [Listener](pubsub.md#listener)

### References

- [pub](pubsub.md#pub)
- [sub](pubsub.md#sub)
- [pubC](pubsub.md#pubc)
- [subC](pubsub.md#subc)

## Functions

### topic

▸ **topic**<`T`\>(`options`): `T`

Creates topic to be used in subscribe/publish/… functions.

It is recommended to add JSDoc/Typescript property **DATA** to specify
expected data format/type (see [publish](pubsub.md#publish)/[Listener](pubsub.md#listener))
– see *example*.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Topic`](pubsub.md#topic-1) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `T` | See [Topic](pubsub.md#topic-1) ```js /**  * Test  * \@property {string} DATA  */ const ontest= pubsub.topic({ cached: true }); ``` |

#### Returns

`T`

#### Defined in

src/pubsub.d.ts:47

___

### topicFromAbort

▸ **topicFromAbort**(): `AbortController`

Creates topic as [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).

#### Returns

`AbortController`

#### Defined in

src/pubsub.d.ts:51

___

### topicFromInterval

▸ **topicFromInterval**(`interval`, `options?`): [`Topic`](pubsub.md#topic-1)

Creates topic from `setInterval`.
```js
// original
const id= setInterval(echo, 750);
// …
clearInterval(id);
// now
const topic= pubsub.topicFromInterval(750);
pubsub.subscribe(topic, echo);
// …
pubsub.publishClose(topic);
```
real live:
```js
let iteration= 1;
const topic= pubsub.topicFromInterval(750, { mapper: ()=> iteration++ });
cli.rewritable({ topic });
// wordy/explicit
const topic_interval= pubsub.topicFromInterval(750);
const topic_log= cli.rewritable();
const { sub, pub }= pubsub;
sub(topic_interval, ()=> pub(topic_log, iteration++));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |
| `options?` | [`Topic`](pubsub.md#topic-1) |

#### Returns

[`Topic`](pubsub.md#topic-1)

#### Defined in

src/pubsub.d.ts:77

___

### publish

▸ **publish**(`topic`, `data`): `Promise`<``0`` \| ``1``\>

Publishes `data` for given `topic`.

**`Throws`**

Unregistered `topic`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | [`Topic`](pubsub.md#topic-1) | - |
| `data` | `any` | It is recommended to use `Topic.DATA` in Typescript/JSDoc to provide info about data type. |

#### Returns

`Promise`<``0`` \| ``1``\>

`0`= success / `1`= ‘once’ topic already published / error elsewhere.

#### Defined in

src/pubsub.d.ts:85

___

### subscribe

▸ **subscribe**(`topic`, `listener`, `options?`): [`Topic`](pubsub.md#topic-1)

Register `listener` function (subscriber) to be called when `topic` will be emitted.

**`Throws`**

Unregistered `topic`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | [`Topic`](pubsub.md#topic-1) |
| `listener` | [`Listener`](pubsub.md#listener) |
| `options?` | `Object` |
| `options.once?` | `boolean` |

#### Returns

[`Topic`](pubsub.md#topic-1)

#### Defined in

src/pubsub.d.ts:94

___

### publishClose

▸ **publishClose**(`topic`, `exit`): `Promise`<``0`` \| ``1``\>

Publishes ‘close’ event. All subscribers will be removed except those that was created by [subscribeClose](pubsub.md#subscribeclose).

**`Throws`**

Unregistered `topic`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | [`Topic`](pubsub.md#topic-1) | - |
| `exit` | ``0`` \| ``1`` | `0`= just close, `1`= imply error. |

#### Returns

`Promise`<``0`` \| ``1``\>

`0`= success / `1`= ‘once’ topic already published / error elsewhere.

#### Defined in

src/pubsub.d.ts:103

___

### subscribeClose

▸ **subscribeClose**(`topic`, `listener`): [`Topic`](pubsub.md#topic-1)

Register `listener` function (subscriber) to be called when `topic` will be close via [publishClose](pubsub.md#publishclose).

**`Throws`**

Unregistered `topic`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | [`Topic`](pubsub.md#topic-1) |
| `listener` | (`exit`: ``0`` \| ``1``) => `void` |

#### Returns

[`Topic`](pubsub.md#topic-1)

#### Defined in

src/pubsub.d.ts:110

## Type Aliases

### Topic\_info

Ƭ **Topic\_info**: `Object`

Event info shared across multiple `publish` calls (e.g. topic name).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Event name/identification. |

#### Defined in

src/pubsub.d.ts:4

___

### Topic

Ƭ **Topic**: `Object`

Topic(s) options and topic **reference** to be used in subscribe/publish/… functions.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | [`Topic_info`](pubsub.md#topic_info) | Event info shared across multiple `publish` calls (e.g. topic name). |
| `cache?` | `boolean` | Keep last published data and when new listener is registered call this function with kept data.  **`Default`**  false |
| `mapper?` | `Function` | Converts topic `data` from `publish` function to what listeners are expecting. (recommendation to use DATA_IN, DATA – see [Topic](pubsub.md#topic-1)) |
| `once?` | `boolean` | Topic can be published only one time.  **`Default`**  false |
| `DATA_IN?` | `any` | Use **only in documentation** to describe publish/subscribe data |
| `DATA?` | `any` | Use **only in documentation** to describe publish/subscribe data |

#### Defined in

src/pubsub.d.ts:11

___

### Listener

Ƭ **Listener**: (`info`: [`Topic_info`](pubsub.md#topic_info), `data`: `any`) => `void` \| `Promise`<`void`\>

#### Type declaration

▸ (`info`, `data`): `void` \| `Promise`<`void`\>

Register `listener` function to be called when `topic` will be emitted.

##### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`Topic_info`](pubsub.md#topic_info) |
| `data` | `any` |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

src/pubsub.d.ts:89

## References

### pub

Renames and re-exports [publish](pubsub.md#publish)

___

### sub

Renames and re-exports [subscribe](pubsub.md#subscribe)

___

### pubC

Renames and re-exports [publishClose](pubsub.md#publishclose)

___

### subC

Renames and re-exports [subscribeClose](pubsub.md#subscribeclose)
