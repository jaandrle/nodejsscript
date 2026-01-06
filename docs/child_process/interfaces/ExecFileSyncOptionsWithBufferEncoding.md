[**nodejsscript**](../../README.md)

***

[nodejsscript](../../README.md) / [s](../../nodejsscript/namespaces/s/README.md) / [child\_process](../README.md) / ExecFileSyncOptionsWithBufferEncoding

# Interface: ExecFileSyncOptionsWithBufferEncoding

## Extends

- [`ExecFileSyncOptions`](ExecFileSyncOptions.md)

## Properties

### encoding?

> `optional` **encoding**: `"buffer"`

#### Overrides

[`ExecFileSyncOptions`](ExecFileSyncOptions.md).[`encoding`](ExecFileSyncOptions.md#encoding)

***

### shell?

> `optional` **shell**: `string` \| `boolean`

#### Inherited from

[`ExecFileSyncOptions`](ExecFileSyncOptions.md).[`shell`](ExecFileSyncOptions.md#shell)

***

### input?

> `optional` **input**: `string` \| `ArrayBufferView`\<`ArrayBufferLike`\>

#### Inherited from

[`ExecFileSyncOptions`](ExecFileSyncOptions.md).[`input`](ExecFileSyncOptions.md#input)

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

[`ExecFileSyncOptions`](ExecFileSyncOptions.md).[`stdio`](ExecFileSyncOptions.md#stdio)

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

#### Inherited from

[`ExecFileSyncOptions`](ExecFileSyncOptions.md).[`killSignal`](ExecFileSyncOptions.md#killsignal)

***

### maxBuffer?

> `optional` **maxBuffer**: `number`

#### Inherited from

[`ExecFileSyncOptions`](ExecFileSyncOptions.md).[`maxBuffer`](ExecFileSyncOptions.md#maxbuffer)

***

### windowsHide?

> `optional` **windowsHide**: `boolean`

#### Default

```ts
false
```

#### Inherited from

[`ExecFileSyncOptions`](ExecFileSyncOptions.md).[`windowsHide`](ExecFileSyncOptions.md#windowshide)

***

### timeout?

> `optional` **timeout**: `number`

#### Default

```ts
0
```

#### Inherited from

[`ExecFileSyncOptions`](ExecFileSyncOptions.md).[`timeout`](ExecFileSyncOptions.md#timeout)

***

### uid?

> `optional` **uid**: `number`

#### Inherited from

[`ExecFileSyncOptions`](ExecFileSyncOptions.md).[`uid`](ExecFileSyncOptions.md#uid)

***

### gid?

> `optional` **gid**: `number`

#### Inherited from

[`ExecFileSyncOptions`](ExecFileSyncOptions.md).[`gid`](ExecFileSyncOptions.md#gid)

***

### cwd?

> `optional` **cwd**: `string` \| `URL`

#### Inherited from

[`ExecFileSyncOptions`](ExecFileSyncOptions.md).[`cwd`](ExecFileSyncOptions.md#cwd)

***

### env?

> `optional` **env**: `ProcessEnv`

#### Inherited from

[`ExecFileSyncOptions`](ExecFileSyncOptions.md).[`env`](ExecFileSyncOptions.md#env)
