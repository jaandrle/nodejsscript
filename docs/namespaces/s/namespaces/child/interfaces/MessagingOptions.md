[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / MessagingOptions

# Interface: MessagingOptions

## Extends

- `Abortable`

## Extended by

- [`CommonSpawnOptions`](CommonSpawnOptions.md)
- [`ForkOptions`](ForkOptions.md)

## Properties

### serialization?

> `optional` **serialization**: [`SerializationType`](../type-aliases/SerializationType.md)

Specify the kind of serialization used for sending messages between processes.

#### Default

```ts
'json'
```

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

#### Default

```ts
'SIGTERM'
```

***

### timeout?

> `optional` **timeout**: `number`

In milliseconds the maximum amount of time the process is allowed to run.

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

`Abortable.signal`
