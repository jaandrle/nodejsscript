[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [$](../README.md) / hasArgs

# Function: hasArgs()

> **hasArgs**(...`needles`): `boolean`

Returns boolean value that script has been executed with given arguments (`needles`).
```js
if($.hasArgs("-v", "--version")) $.exit(0, echo("v0.0.1"));
```

## Parameters

• ...**needles**: `string`[]

## Returns

`boolean`
