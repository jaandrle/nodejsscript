[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / SpawnOptionsWithoutStdio

# Interface: SpawnOptionsWithoutStdio

## Extends

- [`SpawnOptions`](SpawnOptions.md)

## Properties

### stdio?

> `optional` **stdio**: [`StdioPipeNamed`](../type-aliases/StdioPipeNamed.md) \| [`StdioPipe`](../type-aliases/StdioPipe.md)[]

Can be set to 'pipe', 'inherit', 'overlapped', or 'ignore', or an array of these strings.
If passed as an array, the first element is used for `stdin`, the second for
`stdout`, and the third for `stderr`. A fourth element can be used to
specify the `stdio` behavior beyond the standard streams. See
[ChildProcess.stdio](../classes/ChildProcess.md#stdio) for more information.

#### Default

```ts
'pipe'
```

#### Overrides

[`SpawnOptions`](SpawnOptions.md).[`stdio`](SpawnOptions.md#stdio)

***

### detached?

> `optional` **detached**: `boolean`

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`detached`](SpawnOptions.md#detached)

***

### argv0?

> `optional` **argv0**: `string`

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`argv0`](SpawnOptions.md#argv0)

***

### shell?

> `optional` **shell**: `string` \| `boolean`

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`shell`](SpawnOptions.md#shell)

***

### windowsVerbatimArguments?

> `optional` **windowsVerbatimArguments**: `boolean`

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`windowsVerbatimArguments`](SpawnOptions.md#windowsverbatimarguments)

***

### windowsHide?

> `optional` **windowsHide**: `boolean`

#### Default

```ts
false
```

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`windowsHide`](SpawnOptions.md#windowshide)

***

### timeout?

> `optional` **timeout**: `number`

#### Default

```ts
0
```

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`timeout`](SpawnOptions.md#timeout)

***

### uid?

> `optional` **uid**: `number`

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`uid`](SpawnOptions.md#uid)

***

### gid?

> `optional` **gid**: `number`

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`gid`](SpawnOptions.md#gid)

***

### cwd?

> `optional` **cwd**: `string` \| `URL`

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`cwd`](SpawnOptions.md#cwd)

***

### env?

> `optional` **env**: `ProcessEnv`

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`env`](SpawnOptions.md#env)

***

### serialization?

> `optional` **serialization**: [`SerializationType`](../type-aliases/SerializationType.md)

Specify the kind of serialization used for sending messages between processes.

#### Default

```ts
'json'
```

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`serialization`](SpawnOptions.md#serialization)

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

The signal value to be used when the spawned process will be killed by the abort signal.

#### Default

```ts
'SIGTERM'
```

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`killSignal`](SpawnOptions.md#killsignal)

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`SpawnOptions`](SpawnOptions.md).[`signal`](SpawnOptions.md#signal)
