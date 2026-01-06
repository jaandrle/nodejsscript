[**nodejsscript**](../../README.md)

***

[nodejsscript](../../README.md) / [s](../../nodejsscript/namespaces/s/README.md) / [child\_process](../README.md) / CommonExecOptions

# Interface: CommonExecOptions

## Extends

- [`CommonOptions`](CommonOptions.md)

## Extended by

- [`ExecSyncOptions`](ExecSyncOptions.md)
- [`ExecFileSyncOptions`](ExecFileSyncOptions.md)

## Properties

### input?

> `optional` **input**: `string` \| `ArrayBufferView`\<`ArrayBufferLike`\>

***

### stdio?

> `optional` **stdio**: [`StdioOptions`](../type-aliases/StdioOptions.md)

Can be set to 'pipe', 'inherit, or 'ignore', or an array of these strings.
If passed as an array, the first element is used for `stdin`, the second for
`stdout`, and the third for `stderr`. A fourth element can be used to
specify the `stdio` behavior beyond the standard streams. See
[ChildProcess.stdio](../classes/ChildProcess.md#stdio) for more information.

#### Default

```ts
'pipe'
```

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

***

### maxBuffer?

> `optional` **maxBuffer**: `number`

***

### encoding?

> `optional` **encoding**: `"buffer"` \| `BufferEncoding`

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
