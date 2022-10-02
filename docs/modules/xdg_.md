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

#### Defined in

[src/xdg.d.ts:1](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/xdg.d.ts#L1)

___

### XdgFunctionPath

Ƭ **XdgFunctionPath**: (...`path`: [`XdgPath`](xdg_.md#xdgpath)) => `string`

#### Type declaration

▸ (...`path`): `string`

Returns the directory/file path based on the passed tag string.
```js
cli.xdg.home() //=> (on my linux) /home/jaandrle
cli.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
cli.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config` ans `cache`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

##### Returns

`string`

#### Defined in

[src/xdg.d.ts:11](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/xdg.d.ts#L11)

___

### XdgFunctionRoot

Ƭ **XdgFunctionRoot**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[src/xdg.d.ts:12](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/xdg.d.ts#L12)

___

### XdgFunction

Ƭ **XdgFunction**: [`XdgFunctionPath`](xdg_.md#xdgfunctionpath) \| [`XdgFunctionRoot`](xdg_.md#xdgfunctionroot)

#### Defined in

[src/xdg.d.ts:13](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/xdg.d.ts#L13)
