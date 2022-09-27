[nodejsscript](../README.md) / [s](../modules/s.md) / [child](../modules/s.child.md) / MessagingOptions

# Interface: MessagingOptions

[s](../modules/s.md).[child](../modules/s.child.md).MessagingOptions

## Hierarchy

- `Abortable`

  ↳ **`MessagingOptions`**

  ↳↳ [`CommonSpawnOptions`](s.child.CommonSpawnOptions.md)

  ↳↳ [`ForkOptions`](s.child.ForkOptions.md)

## Table of contents

### Properties

- [serialization](s.child.MessagingOptions.md#serialization)
- [killSignal](s.child.MessagingOptions.md#killsignal)
- [timeout](s.child.MessagingOptions.md#timeout)
- [signal](s.child.MessagingOptions.md#signal)

## Properties

### serialization

• `Optional` **serialization**: [`SerializationType`](../modules/s.child.md#serializationtype)

Specify the kind of serialization used for sending messages between processes.

**`Default`**

'json'

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:608

___

### killSignal

• `Optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

**`Default`**

'SIGTERM'

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:613

___

### timeout

• `Optional` **timeout**: `number`

In milliseconds the maximum amount of time the process is allowed to run.

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:617

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

Abortable.signal

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:307
