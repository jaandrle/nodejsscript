[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / ExecOptions

# Interface: ExecOptions

## Extends

- [`ExecOptions`](../namespaces/child/interfaces/ExecOptions.md)

## Properties

### silent?

> `optional` **silent**: `boolean`

Do not echo program output to the console.

#### Default

```ts
false
```

***

### fatal?

> `optional` **fatal**: `boolean`

Exit when command return code is non-zero.

#### Default

```ts
false
```

***

### async?

> `optional` **async**: `boolean`

Asynchronous execution.

If a callback is provided, it will be set to `true`, regardless of the passed value.

#### Default

```ts
false
```

***

### encoding?

> `optional` **encoding**: `string`

Character encoding to use.

Affects the values returned by `stdout` and `stderr`,
and what is written to `stdout` and `stderr` when not in silent mode

#### Default

```ts
"utf8"
```

***

### shell?

> `optional` **shell**: `string`

#### Inherited from

[`ExecOptions`](../namespaces/child/interfaces/ExecOptions.md).[`shell`](../namespaces/child/interfaces/ExecOptions.md#shell)

***

### signal?

> `optional` **signal**: `AbortSignal`

#### Inherited from

[`ExecOptions`](../namespaces/child/interfaces/ExecOptions.md).[`signal`](../namespaces/child/interfaces/ExecOptions.md#signal)

***

### maxBuffer?

> `optional` **maxBuffer**: `number`

#### Inherited from

[`ExecOptions`](../namespaces/child/interfaces/ExecOptions.md).[`maxBuffer`](../namespaces/child/interfaces/ExecOptions.md#maxbuffer)

***

### killSignal?

> `optional` **killSignal**: `number` \| `Signals`

#### Inherited from

[`ExecOptions`](../namespaces/child/interfaces/ExecOptions.md).[`killSignal`](../namespaces/child/interfaces/ExecOptions.md#killsignal)

***

### windowsHide?

> `optional` **windowsHide**: `boolean`

#### Default

```ts
false
```

#### Inherited from

[`ExecOptions`](../namespaces/child/interfaces/ExecOptions.md).[`windowsHide`](../namespaces/child/interfaces/ExecOptions.md#windowshide)

***

### timeout?

> `optional` **timeout**: `number`

#### Default

```ts
0
```

#### Inherited from

[`ExecOptions`](../namespaces/child/interfaces/ExecOptions.md).[`timeout`](../namespaces/child/interfaces/ExecOptions.md#timeout)

***

### uid?

> `optional` **uid**: `number`

#### Inherited from

[`ExecOptions`](../namespaces/child/interfaces/ExecOptions.md).[`uid`](../namespaces/child/interfaces/ExecOptions.md#uid)

***

### gid?

> `optional` **gid**: `number`

#### Inherited from

[`ExecOptions`](../namespaces/child/interfaces/ExecOptions.md).[`gid`](../namespaces/child/interfaces/ExecOptions.md#gid)

***

### cwd?

> `optional` **cwd**: `string` \| `URL`

#### Inherited from

[`ExecOptions`](../namespaces/child/interfaces/ExecOptions.md).[`cwd`](../namespaces/child/interfaces/ExecOptions.md#cwd)

***

### env?

> `optional` **env**: `ProcessEnv`

#### Inherited from

[`ExecOptions`](../namespaces/child/interfaces/ExecOptions.md).[`env`](../namespaces/child/interfaces/ExecOptions.md#env)
