[nodejsscript](../README.md) / [xdg\_](xdg_.md) / xdg

# Namespace: xdg

[xdg_](xdg_.md).xdg

This namespace contains convenience folders to store your data, config and cache files.
It tryies to use [xdg-user-dirs](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/) or typical dir on current system.

## Table of contents

### Functions

- [home](xdg_.xdg.md#home)
- [temp](xdg_.xdg.md#temp)
- [data](xdg_.xdg.md#data)
- [config](xdg_.xdg.md#config)
- [cache](xdg_.xdg.md#cache)

## Functions

### home

▸ **home**(...`path`): `string`

Returns the directory/file path based on the passed tag string.
```js
cli.xdg.home() //=> (on my linux) /home/jaandrle
cli.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
cli.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config` ans `cache`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

#### Defined in

[src/xdg.d.ts:11](https://github.com/jaandrle/nodejsscript/blob/ac9fcc4/src/xdg.d.ts#L11)

___

### temp

▸ **temp**(...`path`): `string`

Returns the directory/file path based on the passed tag string.
```js
cli.xdg.home() //=> (on my linux) /home/jaandrle
cli.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
cli.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config` ans `cache`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

#### Defined in

[src/xdg.d.ts:11](https://github.com/jaandrle/nodejsscript/blob/ac9fcc4/src/xdg.d.ts#L11)

___

### data

▸ **data**(...`path`): `string`

Returns the directory/file path based on the passed tag string.
```js
cli.xdg.home() //=> (on my linux) /home/jaandrle
cli.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
cli.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config` ans `cache`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

#### Defined in

[src/xdg.d.ts:11](https://github.com/jaandrle/nodejsscript/blob/ac9fcc4/src/xdg.d.ts#L11)

___

### config

▸ **config**(...`path`): `string`

Returns the directory/file path based on the passed tag string.
```js
cli.xdg.home() //=> (on my linux) /home/jaandrle
cli.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
cli.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config` ans `cache`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

#### Defined in

[src/xdg.d.ts:11](https://github.com/jaandrle/nodejsscript/blob/ac9fcc4/src/xdg.d.ts#L11)

___

### cache

▸ **cache**(...`path`): `string`

Returns the directory/file path based on the passed tag string.
```js
cli.xdg.home() //=> (on my linux) /home/jaandrle
cli.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
cli.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config` ans `cache`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

#### Defined in

[src/xdg.d.ts:11](https://github.com/jaandrle/nodejsscript/blob/ac9fcc4/src/xdg.d.ts#L11)
