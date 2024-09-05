[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / SpawnSyncOptionsWithStringEncoding

# Interface: SpawnSyncOptionsWithStringEncoding

## Extends

- [`SpawnSyncOptions`](SpawnSyncOptions.md)

## Properties

### encoding

> **encoding**: `BufferEncoding`

#### Overrides

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`encoding`](SpawnSyncOptions.md#encoding)

***

### input?

> `optional` **input**: `string` \| `ArrayBufferView`

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`input`](SpawnSyncOptions.md#input)

***

### maxBuffer?

> `optional` **maxBuffer**: `number`

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`maxBuffer`](SpawnSyncOptions.md#maxbuffer)

***

### argv0?

> `optional` **argv0**: `string`

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`argv0`](SpawnSyncOptions.md#argv0)

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

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`stdio`](SpawnSyncOptions.md#stdio)

***

### shell?

> `optional` **shell**: `string` \| `boolean`

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`shell`](SpawnSyncOptions.md#shell)

***

### windowsVerbatimArguments?

> `optional` **windowsVerbatimArguments**: `boolean`

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`windowsVerbatimArguments`](SpawnSyncOptions.md#windowsverbatimarguments)

***

### windowsHide?

> `optional` **windowsHide**: `boolean`

#### Default

```ts
false
```

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`windowsHide`](SpawnSyncOptions.md#windowshide)

***

### timeout?

> `optional` **timeout**: `number`

#### Default

```ts
0
```

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`timeout`](SpawnSyncOptions.md#timeout)

***

### uid?

> `optional` **uid**: `number`

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`uid`](SpawnSyncOptions.md#uid)

***

### gid?

> `optional` **gid**: `number`

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`gid`](SpawnSyncOptions.md#gid)

***

### cwd?

> `optional` **cwd**: `string` \| `URL`

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`cwd`](SpawnSyncOptions.md#cwd)

***

### env?

> `optional` **env**: `ProcessEnv`

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`env`](SpawnSyncOptions.md#env)

***

### serialization?

> `optional` **serialization**: [`SerializationType`](../type-aliases/SerializationType.md)

Specify the kind of serialization used for sending messages between processes.

#### Default

```ts
'json'
```

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`serialization`](SpawnSyncOptions.md#serialization)

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

#### Default

```ts
'SIGTERM'
```

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`killSignal`](SpawnSyncOptions.md#killsignal)

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`SpawnSyncOptions`](SpawnSyncOptions.md).[`signal`](SpawnSyncOptions.md#signal)
