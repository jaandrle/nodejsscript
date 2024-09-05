[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [$](../README.md) / pathFromURL

# Function: pathFromURL()

> **pathFromURL**(`from_url`): *typeof* `String.raw` \| (`relative`) => `string`

This is a helper motivated to evaluate relative paths from current script file:
```js
const $path= $.pathFromURL(import.meta.url);
echo("Relative path: ", $path`../file.txt`);
```

## Parameters

• **from\_url**: `URL`

## Returns

*typeof* `String.raw` \| (`relative`) => `string`
