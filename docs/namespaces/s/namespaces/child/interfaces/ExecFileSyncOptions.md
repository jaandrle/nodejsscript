[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [s](../../../README.md) / [child](../README.md) / ExecFileSyncOptions

# Interface: ExecFileSyncOptions

## Extends

- [`CommonExecOptions`](CommonExecOptions.md)

## Extended by

- [`ExecFileSyncOptionsWithStringEncoding`](ExecFileSyncOptionsWithStringEncoding.md)
- [`ExecFileSyncOptionsWithBufferEncoding`](ExecFileSyncOptionsWithBufferEncoding.md)

## Properties

### shell?

> `optional` **shell**: `string` \| `boolean`

***

### input?

> `optional` **input**: `string` \| `ArrayBufferView`

#### Inherited from

[`CommonExecOptions`](CommonExecOptions.md).[`input`](CommonExecOptions.md#input)

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

[`CommonExecOptions`](CommonExecOptions.md).[`stdio`](CommonExecOptions.md#stdio)

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

#### Inherited from

[`CommonExecOptions`](CommonExecOptions.md).[`killSignal`](CommonExecOptions.md#killsignal)

***

### maxBuffer?

> `optional` **maxBuffer**: `number`

#### Inherited from

[`CommonExecOptions`](CommonExecOptions.md).[`maxBuffer`](CommonExecOptions.md#maxbuffer)

***

### encoding?

> `optional` **encoding**: `"buffer"` \| `BufferEncoding`

#### Inherited from

[`CommonExecOptions`](CommonExecOptions.md).[`encoding`](CommonExecOptions.md#encoding)

***

### windowsHide?

> `optional` **windowsHide**: `boolean`

#### Default

```ts
false
```

#### Inherited from

[`CommonExecOptions`](CommonExecOptions.md).[`windowsHide`](CommonExecOptions.md#windowshide)

***

### timeout?

> `optional` **timeout**: `number`

#### Default

```ts
0
```

#### Inherited from

[`CommonExecOptions`](CommonExecOptions.md).[`timeout`](CommonExecOptions.md#timeout)

***

### uid?

> `optional` **uid**: `number`

#### Inherited from

[`CommonExecOptions`](CommonExecOptions.md).[`uid`](CommonExecOptions.md#uid)

***

### gid?

> `optional` **gid**: `number`

#### Inherited from

[`CommonExecOptions`](CommonExecOptions.md).[`gid`](CommonExecOptions.md#gid)

***

### cwd?

> `optional` **cwd**: `string` \| `URL`

#### Inherited from

[`CommonExecOptions`](CommonExecOptions.md).[`cwd`](CommonExecOptions.md#cwd)

***

### env?

> `optional` **env**: `ProcessEnv`

#### Inherited from

[`CommonExecOptions`](CommonExecOptions.md).[`env`](CommonExecOptions.md#env)
