[nodejsscript](../README.md) / [s](s.md) / [child](s.child.md) / exec

# Namespace: exec

[s](s.md).[child](s.child.md).exec

## Table of contents

### Functions

- [\_\_promisify\_\_](s.child.exec.md#__promisify__)

## Functions

### \_\_promisify\_\_

▸ **__promisify__**(`command`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:934

▸ **__promisify__**(`command`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `Buffer` ; `stderr`: `Buffer`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | { `encoding`: ``"buffer"``  } & [`ExecOptions`](../interfaces/s.child.ExecOptions.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `Buffer` ; `stderr`: `Buffer`  }\>

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:938

▸ **__promisify__**(`command`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | { `encoding`: `BufferEncoding`  } & [`ExecOptions`](../interfaces/s.child.ExecOptions.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:947

▸ **__promisify__**(`command`, `options`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options` | [`ExecOptions`](../interfaces/s.child.ExecOptions.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` ; `stderr`: `string`  }\>

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:956

▸ **__promisify__**(`command`, `options?`): [`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` \| `Buffer` ; `stderr`: `string` \| `Buffer`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `options?` | `ObjectEncodingOptions` & [`ExecOptions`](../interfaces/s.child.ExecOptions.md) |

#### Returns

[`PromiseWithChild`](../interfaces/s.child.PromiseWithChild.md)<{ `stdout`: `string` \| `Buffer` ; `stderr`: `string` \| `Buffer`  }\>

#### Defined in

node_modules/@types/node/ts4.8/child_process.d.ts:963
