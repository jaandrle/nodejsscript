[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / read

# Function: read()

> **read**(`options`): `Promise`\<[`ShellString`](../type-aliases/ShellString.md)\>

This function mimic [`read`](https://phoenixnap.com/kb/bash-read) command.
So, the function purpose is reading from `stdin`.
```js
const answer= await $.read({ "-p": "Question" });
const color= await $.read({ "-p": "Your color", completions: [ "red", "green" ] });
if($.isFIFO(0)) await $.read().then(echo.bind(null, "E.g. for reading received input:"));
```

## Parameters

• **options**: [`ReadOptions`](../interfaces/ReadOptions.md)

## Returns

`Promise`\<[`ShellString`](../type-aliases/ShellString.md)\>
