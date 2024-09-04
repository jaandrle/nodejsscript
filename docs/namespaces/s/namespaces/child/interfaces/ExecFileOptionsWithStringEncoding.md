[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / ExecFileOptionsWithStringEncoding

# Interface: ExecFileOptionsWithStringEncoding

## Extends

- [`ExecFileOptions`](ExecFileOptions.md)

## Properties

### encoding

> **encoding**: `BufferEncoding`

***

### maxBuffer?

> `optional` **maxBuffer**: `number`

#### Inherited from

[`ExecFileOptions`](ExecFileOptions.md).[`maxBuffer`](ExecFileOptions.md#maxbuffer)

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

#### Inherited from

[`ExecFileOptions`](ExecFileOptions.md).[`killSignal`](ExecFileOptions.md#killsignal)

***

### windowsVerbatimArguments?

> `optional` **windowsVerbatimArguments**: `boolean`

#### Inherited from

[`ExecFileOptions`](ExecFileOptions.md).[`windowsVerbatimArguments`](ExecFileOptions.md#windowsverbatimarguments)

***

### shell?

> `optional` **shell**: `string` \| `boolean`

#### Inherited from

[`ExecFileOptions`](ExecFileOptions.md).[`shell`](ExecFileOptions.md#shell)

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[`ExecFileOptions`](ExecFileOptions.md).[`signal`](ExecFileOptions.md#signal)

***

### windowsHide?

> `optional` **windowsHide**: `boolean`

#### Default

```ts
false
```

#### Inherited from

[`ExecFileOptions`](ExecFileOptions.md).[`windowsHide`](ExecFileOptions.md#windowshide)

***

### timeout?

> `optional` **timeout**: `number`

#### Default

```ts
0
```

#### Inherited from

[`ExecFileOptions`](ExecFileOptions.md).[`timeout`](ExecFileOptions.md#timeout)

***

### uid?

> `optional` **uid**: `number`

#### Inherited from

[`ExecFileOptions`](ExecFileOptions.md).[`uid`](ExecFileOptions.md#uid)

***

### gid?

> `optional` **gid**: `number`

#### Inherited from

[`ExecFileOptions`](ExecFileOptions.md).[`gid`](ExecFileOptions.md#gid)

***

### cwd?

> `optional` **cwd**: `string` \| `URL`

#### Inherited from

[`ExecFileOptions`](ExecFileOptions.md).[`cwd`](ExecFileOptions.md#cwd)

***

### env?

> `optional` **env**: `ProcessEnv`

#### Inherited from

[`ExecFileOptions`](ExecFileOptions.md).[`env`](ExecFileOptions.md#env)
