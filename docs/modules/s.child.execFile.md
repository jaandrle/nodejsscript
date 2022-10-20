[nodejsscript](../README.md) / [s](s.md) / [child](s.child.md) / execFile

# Namespace: execFile

[s](s.md).[child](s.child.md).execFile

## Table of contents

### Functions

- [\_\_promisify\_\_](s.child.execFile.md#__promisify__)

## Functions

### \_\_promisify\_\_

▸ **__promisify__**(`file`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

▸ **__promisify__**(`file`, `args`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

▸ **__promisify__**(`file`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `Buffer` ; `stderr`: `Buffer`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`ExecFileOptionsWithBufferEncoding`](../interfaces/s.child.ExecFileOptionsWithBufferEncoding.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `Buffer` ; `stderr`: `Buffer`  }\>

▸ **__promisify__**(`file`, `args`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `Buffer` ; `stderr`: `Buffer`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | [`ExecFileOptionsWithBufferEncoding`](../interfaces/s.child.ExecFileOptionsWithBufferEncoding.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `Buffer` ; `stderr`: `Buffer`  }\>

▸ **__promisify__**(`file`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`ExecFileOptionsWithStringEncoding`](../interfaces/s.child.ExecFileOptionsWithStringEncoding.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

▸ **__promisify__**(`file`, `args`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | [`ExecFileOptionsWithStringEncoding`](../interfaces/s.child.ExecFileOptionsWithStringEncoding.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

▸ **__promisify__**(`file`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` \| `Buffer` ; `stderr`: `string` \| `Buffer`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`ExecFileOptionsWithOtherEncoding`](../interfaces/s.child.ExecFileOptionsWithOtherEncoding.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` \| `Buffer` ; `stderr`: `string` \| `Buffer`  }\>

▸ **__promisify__**(`file`, `args`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` \| `Buffer` ; `stderr`: `string` \| `Buffer`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | [`ExecFileOptionsWithOtherEncoding`](../interfaces/s.child.ExecFileOptionsWithOtherEncoding.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` \| `Buffer` ; `stderr`: `string` \| `Buffer`  }\>

▸ **__promisify__**(`file`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`ExecFileOptions`](../interfaces/s.child.ExecFileOptions.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

▸ **__promisify__**(`file`, `args`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | [`ExecFileOptions`](../interfaces/s.child.ExecFileOptions.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

▸ **__promisify__**(`file`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` \| `Buffer` ; `stderr`: `string` \| `Buffer`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | `ObjectEncodingOptions` & [`ExecFileOptions`](../interfaces/s.child.ExecFileOptions.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` \| `Buffer` ; `stderr`: `string` \| `Buffer`  }\>

▸ **__promisify__**(`file`, `args`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` \| `Buffer` ; `stderr`: `string` \| `Buffer`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `args` | readonly `string`[] |
| `options` | `ObjectEncodingOptions` & [`ExecFileOptions`](../interfaces/s.child.ExecFileOptions.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` \| `Buffer` ; `stderr`: `string` \| `Buffer`  }\>
