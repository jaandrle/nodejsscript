[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../../../../nodejsscript/namespaces/s/README.md) / [child\_process](../../../README.md) / [exec](../README.md) / \_\_promisify\_\_

# Function: \_\_promisify\_\_()

## Call Signature

> **\_\_promisify\_\_**(`command`): [`PromiseWithChild`](../../../interfaces/PromiseWithChild.md)\<\{ `stdout`: `string`; `stderr`: `string`; \}\>

### Parameters

#### command

`string`

### Returns

[`PromiseWithChild`](../../../interfaces/PromiseWithChild.md)\<\{ `stdout`: `string`; `stderr`: `string`; \}\>

## Call Signature

> **\_\_promisify\_\_**(`command`, `options`): [`PromiseWithChild`](../../../interfaces/PromiseWithChild.md)\<\{ `stdout`: `NonSharedBuffer`; `stderr`: `NonSharedBuffer`; \}\>

### Parameters

#### command

`string`

#### options

[`ExecOptionsWithBufferEncoding`](../../../interfaces/ExecOptionsWithBufferEncoding.md)

### Returns

[`PromiseWithChild`](../../../interfaces/PromiseWithChild.md)\<\{ `stdout`: `NonSharedBuffer`; `stderr`: `NonSharedBuffer`; \}\>

## Call Signature

> **\_\_promisify\_\_**(`command`, `options`): [`PromiseWithChild`](../../../interfaces/PromiseWithChild.md)\<\{ `stdout`: `string`; `stderr`: `string`; \}\>

### Parameters

#### command

`string`

#### options

[`ExecOptionsWithStringEncoding`](../../../interfaces/ExecOptionsWithStringEncoding.md)

### Returns

[`PromiseWithChild`](../../../interfaces/PromiseWithChild.md)\<\{ `stdout`: `string`; `stderr`: `string`; \}\>

## Call Signature

> **\_\_promisify\_\_**(`command`, `options`): [`PromiseWithChild`](../../../interfaces/PromiseWithChild.md)\<\{ `stdout`: `string` \| `NonSharedBuffer`; `stderr`: `string` \| `NonSharedBuffer`; \}\>

### Parameters

#### command

`string`

#### options

[`ExecOptions`](../../../interfaces/ExecOptions.md)

### Returns

[`PromiseWithChild`](../../../interfaces/PromiseWithChild.md)\<\{ `stdout`: `string` \| `NonSharedBuffer`; `stderr`: `string` \| `NonSharedBuffer`; \}\>
