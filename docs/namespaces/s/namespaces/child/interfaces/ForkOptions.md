[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / ForkOptions

# Interface: ForkOptions

## Extends

- [`ProcessEnvOptions`](ProcessEnvOptions.md).[`MessagingOptions`](MessagingOptions.md).`Abortable`

## Properties

### execPath?

> `optional` **execPath**: `string`

***

### execArgv?

> `optional` **execArgv**: `string`[]

***

### silent?

> `optional` **silent**: `boolean`

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

### detached?

> `optional` **detached**: `boolean`

***

### windowsVerbatimArguments?

> `optional` **windowsVerbatimArguments**: `boolean`

***

### uid?

> `optional` **uid**: `number`

#### Inherited from

[`ProcessEnvOptions`](ProcessEnvOptions.md).[`uid`](ProcessEnvOptions.md#uid)

***

### gid?

> `optional` **gid**: `number`

#### Inherited from

[`ProcessEnvOptions`](ProcessEnvOptions.md).[`gid`](ProcessEnvOptions.md#gid)

***

### cwd?

> `optional` **cwd**: `string` \| `URL`

#### Inherited from

[`ProcessEnvOptions`](ProcessEnvOptions.md).[`cwd`](ProcessEnvOptions.md#cwd)

***

### env?

> `optional` **env**: `ProcessEnv`

#### Inherited from

[`ProcessEnvOptions`](ProcessEnvOptions.md).[`env`](ProcessEnvOptions.md#env)

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

### timeout?

> `optional` **timeout**: `number`

In milliseconds the maximum amount of time the process is allowed to run.

#### Inherited from

[`MessagingOptions`](MessagingOptions.md).[`timeout`](MessagingOptions.md#timeout)

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`MessagingOptions`](MessagingOptions.md).[`signal`](MessagingOptions.md#signal)
