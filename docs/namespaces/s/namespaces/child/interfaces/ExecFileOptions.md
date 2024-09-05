[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / ExecFileOptions

# Interface: ExecFileOptions

## Extends

- [`CommonOptions`](CommonOptions.md).`Abortable`

## Extended by

- [`ExecFileOptionsWithStringEncoding`](ExecFileOptionsWithStringEncoding.md)
- [`ExecFileOptionsWithBufferEncoding`](ExecFileOptionsWithBufferEncoding.md)
- [`ExecFileOptionsWithOtherEncoding`](ExecFileOptionsWithOtherEncoding.md)

## Properties

### maxBuffer?

> `optional` **maxBuffer**: `number`

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

***

### windowsVerbatimArguments?

> `optional` **windowsVerbatimArguments**: `boolean`

***

### shell?

> `optional` **shell**: `string` \| `boolean`

***

### signal?

> `optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Overrides

`Abortable.signal`

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

[`CommonOptions`](CommonOptions.md).[`timeout`](CommonOptions.md#timeout)

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
