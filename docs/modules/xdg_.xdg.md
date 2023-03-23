[nodejsscript](../README.md) / [xdg\_](xdg_.md) / xdg

# Namespace: xdg

[xdg_](xdg_.md).xdg

This namespace contains convenience folders to store your data, config and cache files.
It tryies to use [xdg-user-dirs](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/) or typical dir on current system.

## Table of contents

### Functions

- [globalPackage](xdg_.xdg.md#globalpackage)
- [home](xdg_.xdg.md#home)
- [temp](xdg_.xdg.md#temp)
- [data](xdg_.xdg.md#data)
- [config](xdg_.xdg.md#config)
- [cache](xdg_.xdg.md#cache)
- [root](xdg_.xdg.md#root)
- [cwd](xdg_.xdg.md#cwd)
- [main](xdg_.xdg.md#main)

## Functions

### globalPackage

▸ **globalPackage**(`...path`): `string`

This is helper function to get the globally installed packages.
```js
npm install chrome-remote-interface --location=global
// script.mjs
const pkg= await import($.xdg.globalPackage`chrome-remote-interface`);
// or script.js
const pkg= require($.xdg.globalPackage`chrome-remote-interface`);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

▸ **globalPackage**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

___

### home

▸ **home**(`...path`): `string`

Returns the directory/file path based on the passed tag string.
```js
$.xdg.home() //=> (on my linux) /home/jaandrle
$.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
$.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config`, `cache`, `root`, `cwd` and `main`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

___

### temp

▸ **temp**(`...path`): `string`

Returns the directory/file path based on the passed tag string.
```js
$.xdg.home() //=> (on my linux) /home/jaandrle
$.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
$.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config`, `cache`, `root`, `cwd` and `main`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

___

### data

▸ **data**(`...path`): `string`

Returns the directory/file path based on the passed tag string.
```js
$.xdg.home() //=> (on my linux) /home/jaandrle
$.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
$.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config`, `cache`, `root`, `cwd` and `main`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

___

### config

▸ **config**(`...path`): `string`

Returns the directory/file path based on the passed tag string.
```js
$.xdg.home() //=> (on my linux) /home/jaandrle
$.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
$.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config`, `cache`, `root`, `cwd` and `main`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

___

### cache

▸ **cache**(`...path`): `string`

Returns the directory/file path based on the passed tag string.
```js
$.xdg.home() //=> (on my linux) /home/jaandrle
$.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
$.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config`, `cache`, `root`, `cwd` and `main`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

___

### root

▸ **root**(`...path`): `string`

Returns the directory/file path based on the passed tag string.
```js
$.xdg.home() //=> (on my linux) /home/jaandrle
$.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
$.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config`, `cache`, `root`, `cwd` and `main`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

___

### cwd

▸ **cwd**(`...path`): `string`

Returns the directory/file path based on the passed tag string.
```js
$.xdg.home() //=> (on my linux) /home/jaandrle
$.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
$.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config`, `cache`, `root`, `cwd` and `main`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`

___

### main

▸ **main**(`...path`): `string`

Returns the directory/file path based on the passed tag string.
```js
$.xdg.home() //=> (on my linux) /home/jaandrle
$.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
$.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config`, `cache`, `root`, `cwd` and `main`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

#### Returns

`string`
