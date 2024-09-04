[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / SpawnSyncOptions

# Interface: SpawnSyncOptions

## Extends

- [`CommonSpawnOptions`](CommonSpawnOptions.md)

## Extended by

- [`SpawnSyncOptionsWithStringEncoding`](SpawnSyncOptionsWithStringEncoding.md)
- [`SpawnSyncOptionsWithBufferEncoding`](SpawnSyncOptionsWithBufferEncoding.md)

## Properties

### input?

> `optional` **input**: `string` \| `ArrayBufferView`

***

### maxBuffer?

> `optional` **maxBuffer**: `number`

***

### encoding?

> `optional` **encoding**: `"buffer"` \| `BufferEncoding`

***

### argv0?

> `optional` **argv0**: `string`

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`argv0`](CommonSpawnOptions.md#argv0)

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

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`stdio`](CommonSpawnOptions.md#stdio)

***

### shell?

> `optional` **shell**: `string` \| `boolean`

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`shell`](CommonSpawnOptions.md#shell)

***

### windowsVerbatimArguments?

> `optional` **windowsVerbatimArguments**: `boolean`

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`windowsVerbatimArguments`](CommonSpawnOptions.md#windowsverbatimarguments)

***

### windowsHide?

> `optional` **windowsHide**: `boolean`

#### Default

```ts
false
```

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`windowsHide`](CommonSpawnOptions.md#windowshide)

***

### timeout?

> `optional` **timeout**: `number`

#### Default

```ts
0
```

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`timeout`](CommonSpawnOptions.md#timeout)

***

### uid?

> `optional` **uid**: `number`

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`uid`](CommonSpawnOptions.md#uid)

***

### gid?

> `optional` **gid**: `number`

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`gid`](CommonSpawnOptions.md#gid)

***

### cwd?

> `optional` **cwd**: `string` \| `URL`

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`cwd`](CommonSpawnOptions.md#cwd)

***

### env?

> `optional` **env**: `ProcessEnv`

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`env`](CommonSpawnOptions.md#env)

***

### serialization?

> `optional` **serialization**: [`SerializationType`](../type-aliases/SerializationType.md)

Specify the kind of serialization used for sending messages between processes.

#### Default

```ts
'json'
```

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`serialization`](CommonSpawnOptions.md#serialization)

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

#### Default

```ts
'SIGTERM'
```

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`killSignal`](CommonSpawnOptions.md#killsignal)

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`CommonSpawnOptions`](CommonSpawnOptions.md).[`signal`](CommonSpawnOptions.md#signal)
