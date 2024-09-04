[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [xdg\_](../README.md) / XdgFunctionPath

# Type Alias: XdgFunctionPath()

> **XdgFunctionPath**: (...`path`) => `string`

Returns the directory/file path based on the passed tag string.
```js
$.xdg.home() //=> (on my linux) /home/jaandrle
$.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
$.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for `temp`, `data`, `config`, `cache`, `root`, `cwd` and `main`.

## Parameters

• ...**path**: [`XdgPath`](XdgPath.md)

## Returns

`string`
