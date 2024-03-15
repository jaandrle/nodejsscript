[nodejsscript](../README.md) / [s](../modules/s.md) / ShellReturnValue

# Interface: ShellReturnValue

[s](../modules/s.md).ShellReturnValue

## Table of contents

### Public Properties

- [read](s.ShellReturnValue.md#read)

### Internal Properties

- [xargs](s.ShellReturnValue.md#xargs)
- [$](s.ShellReturnValue.md#$)
- [run](s.ShellReturnValue.md#run)
- [runA](s.ShellReturnValue.md#runa)

## Public Properties

### read

• **read**: (`options`: [`ReadOptions`](s.ReadOptions.md)) => `Promise`<[`ShellString`](../modules/s.md#shellstring)\>

#### Type declaration

▸ (`options`): `Promise`<[`ShellString`](../modules/s.md#shellstring)\>

This function mimic [`read`](https://phoenixnap.com/kb/bash-read) command.
So, the function purpose is reading from `stdin`.
```js
const answer= await $.read({ "-p": "Question" });
const color= await $.read({ "-p": "Your color", completions: [ "red", "green" ] });
if($.isFIFO(0)) await $.read().then(echo.bind(null, "E.g. for reading received input:"));
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ReadOptions`](s.ReadOptions.md) |

##### Returns

`Promise`<[`ShellString`](../modules/s.md#shellstring)\>

___

## Internal Properties

### xargs

• **xargs**: [`XargsFunction`](s.XargsFunction.md)

___

### $

• **$**: [`DollarFunction`](s.DollarFunction.md)

___

### run

• **run**: [`RunFunction`](s.RunFunction.md)

___

### runA

• **runA**: [`RunAsyncFunction`](s.RunAsyncFunction.md)
