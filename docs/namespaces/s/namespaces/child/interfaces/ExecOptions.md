[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / ExecOptions

# Interface: ExecOptions

## Extends

- [`CommonOptions`](CommonOptions.md)

## Extended by

- [`ExecOptionsWithStringEncoding`](ExecOptionsWithStringEncoding.md)
- [`ExecOptionsWithBufferEncoding`](ExecOptionsWithBufferEncoding.md)
- [`ExecOptions`](../../../interfaces/ExecOptions.md)

## Properties

### shell?

> `optional` **shell**: `string`

***

### signal?

> `optional` **signal**: `AbortSignal`

***

### maxBuffer?

> `optional` **maxBuffer**: `number`

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

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
