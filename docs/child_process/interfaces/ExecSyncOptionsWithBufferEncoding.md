[**nodejsscript**](../../README.md)

***

[nodejsscript](../../README.md) / [s](../../nodejsscript/namespaces/s/README.md) / [child\_process](../README.md) / ExecSyncOptionsWithBufferEncoding

# Interface: ExecSyncOptionsWithBufferEncoding

## Extends

- [`ExecSyncOptions`](ExecSyncOptions.md)

## Properties

### encoding?

> `optional` **encoding**: `"buffer"`

#### Overrides

[`ExecSyncOptions`](ExecSyncOptions.md).[`encoding`](ExecSyncOptions.md#encoding)

***

### shell?

> `optional` **shell**: `string`

#### Inherited from

[`ExecSyncOptions`](ExecSyncOptions.md).[`shell`](ExecSyncOptions.md#shell)

***

### input?

> `optional` **input**: `string` \| `ArrayBufferView`\<`ArrayBufferLike`\>

#### Inherited from

[`ExecSyncOptions`](ExecSyncOptions.md).[`input`](ExecSyncOptions.md#input)

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

#### Inherited from

[`ExecSyncOptions`](ExecSyncOptions.md).[`stdio`](ExecSyncOptions.md#stdio)

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

#### Inherited from

[`ExecSyncOptions`](ExecSyncOptions.md).[`killSignal`](ExecSyncOptions.md#killsignal)

***

### maxBuffer?

> `optional` **maxBuffer**: `number`

#### Inherited from

[`ExecSyncOptions`](ExecSyncOptions.md).[`maxBuffer`](ExecSyncOptions.md#maxbuffer)

***

### windowsHide?

> `optional` **windowsHide**: `boolean`

#### Default

```ts
false
```

#### Inherited from

[`ExecSyncOptions`](ExecSyncOptions.md).[`windowsHide`](ExecSyncOptions.md#windowshide)

***

### timeout?

> `optional` **timeout**: `number`

#### Default

```ts
0
```

#### Inherited from

[`ExecSyncOptions`](ExecSyncOptions.md).[`timeout`](ExecSyncOptions.md#timeout)

***

### uid?

> `optional` **uid**: `number`

#### Inherited from

[`ExecSyncOptions`](ExecSyncOptions.md).[`uid`](ExecSyncOptions.md#uid)

***

### gid?

> `optional` **gid**: `number`

#### Inherited from

[`ExecSyncOptions`](ExecSyncOptions.md).[`gid`](ExecSyncOptions.md#gid)

***

### cwd?

> `optional` **cwd**: `string` \| `URL`

#### Inherited from

[`ExecSyncOptions`](ExecSyncOptions.md).[`cwd`](ExecSyncOptions.md#cwd)

***

### env?

> `optional` **env**: `ProcessEnv`

#### Inherited from

[`ExecSyncOptions`](ExecSyncOptions.md).[`env`](ExecSyncOptions.md#env)
