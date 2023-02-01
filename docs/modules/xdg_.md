[nodejsscript](../README.md) / xdg\_

# Namespace: xdg\_

## Table of contents

### Type Aliases

- [XdgPath](xdg_.md#xdgpath)
- [XdgFunctionPath](xdg_.md#xdgfunctionpath)
- [XdgFunctionRoot](xdg_.md#xdgfunctionroot)
- [XdgFunction](xdg_.md#xdgfunction)

### Namespaces

- [xdg](xdg_.xdg.md)

## Type Aliases

### XdgPath

Ƭ **XdgPath**: [path: TemplateStringsArray, path\_vars: string[]]

___

### XdgFunctionPath

Ƭ **XdgFunctionPath**: (...`path`: [`XdgPath`](xdg_.md#xdgpath)) => `string`

#### Type declaration

▸ (`...path`): `string`

Returns the directory/file path based on the passed tag string.
```js
$.xdg.home() //=> (on my linux) /home/jaandrle
$.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
$.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config`, `cache`, `root`, `cwd` and `main`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

##### Returns

`string`

___

### XdgFunctionRoot

Ƭ **XdgFunctionRoot**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

___

### XdgFunction

Ƭ **XdgFunction**: [`XdgFunctionPath`](xdg_.md#xdgfunctionpath) \| [`XdgFunctionRoot`](xdg_.md#xdgfunctionroot)
