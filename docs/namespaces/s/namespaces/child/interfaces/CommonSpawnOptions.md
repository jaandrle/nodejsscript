[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / CommonSpawnOptions

# Interface: CommonSpawnOptions

## Extends

- [`CommonOptions`](CommonOptions.md).[`MessagingOptions`](MessagingOptions.md).`Abortable`

## Extended by

- [`SpawnOptions`](SpawnOptions.md)
- [`SpawnSyncOptions`](SpawnSyncOptions.md)

## Properties

### argv0?

> `optional` **argv0**: `string`

***

### stdio?

> `optional` **stdio**: [`StdioOptions`](../type-aliases/StdioOptions.md)

Can be set to 'pipe', 'inherit', 'overlapped', or 'ignore', or an array of these strings.
If passed as an array, the first element is used for `stdin`, the second for
`stdout`, and the third for `stderr`. A fourth element can be used to
specify the `stdio` behavior beyond the standard streams. See
[ChildProcess.stdio](../classes/ChildProcess.md#stdio) for more information.

#### Default

```ts
'pipe'
```

***

### shell?

> `optional` **shell**: `string` \| `boolean`

***

### windowsVerbatimArguments?

> `optional` **windowsVerbatimArguments**: `boolean`

***

### windowsHide?

> `optional` **windowsHide**: `boolean`

#### Default

```ts
false
```

#### Inherited from

[`CommonOptions`](CommonOptions.md).[`windowsHide`](CommonOptions.md#windowshide)

***

### timeout?

> `optional` **timeout**: `number`

#### Default

```ts
0
```

#### Inherited from

[`MessagingOptions`](MessagingOptions.md).[`timeout`](MessagingOptions.md#timeout)

***

### uid?

> `optional` **uid**: `number`

#### Inherited from

[`CommonOptions`](CommonOptions.md).[`uid`](CommonOptions.md#uid)

***

### gid?

> `optional` **gid**: `number`

#### Inherited from

[`CommonOptions`](CommonOptions.md).[`gid`](CommonOptions.md#gid)

***

### cwd?

> `optional` **cwd**: `string` \| `URL`

#### Inherited from

[`CommonOptions`](CommonOptions.md).[`cwd`](CommonOptions.md#cwd)

***

### env?

> `optional` **env**: `ProcessEnv`

#### Inherited from

[`CommonOptions`](CommonOptions.md).[`env`](CommonOptions.md#env)

***

### serialization?

> `optional` **serialization**: [`SerializationType`](../type-aliases/SerializationType.md)

Specify the kind of serialization used for sending messages between processes.

#### Default

```ts
'json'
```

#### Inherited from

[`MessagingOptions`](MessagingOptions.md).[`serialization`](MessagingOptions.md#serialization)

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

#### Default

```ts
'SIGTERM'
```

#### Inherited from

[`MessagingOptions`](MessagingOptions.md).[`killSignal`](MessagingOptions.md#killsignal)

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`MessagingOptions`](MessagingOptions.md).[`signal`](MessagingOptions.md#signal)
