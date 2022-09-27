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

[src/xdg.d.ts:1](https://github.com/jaandrle/nodejsscript/blob/a6e3251/src/xdg.d.ts#L1)

___

### XdgFunctionPath

Ƭ **XdgFunctionPath**: (...`path`: [`XdgPath`](xdg_.md#xdgpath)) => `string`

#### Type declaration

▸ (...`path`): `string`

Returns the directory/file path based on the passed tag string.
```
cli.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | [`XdgPath`](xdg_.md#xdgpath) |

##### Returns

`string`

#### Defined in

[src/xdg.d.ts:8](https://github.com/jaandrle/nodejsscript/blob/a6e3251/src/xdg.d.ts#L8)

___

### XdgFunctionRoot

Ƭ **XdgFunctionRoot**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[src/xdg.d.ts:9](https://github.com/jaandrle/nodejsscript/blob/a6e3251/src/xdg.d.ts#L9)

___

### XdgFunction

Ƭ **XdgFunction**: [`XdgFunctionPath`](xdg_.md#xdgfunctionpath) \| [`XdgFunctionRoot`](xdg_.md#xdgfunctionroot)

#### Defined in

[src/xdg.d.ts:10](https://github.com/jaandrle/nodejsscript/blob/a6e3251/src/xdg.d.ts#L10)
