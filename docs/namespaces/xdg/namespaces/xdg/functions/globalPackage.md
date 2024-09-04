[**nodejsscript**](../../../../../README.md) • **Docs**

***

[nodejsscript](../../../../../README.md) / [xdg\_](../../../README.md) / [xdg](../README.md) / globalPackage

# Function: globalPackage()

## globalPackage(path)

> **globalPackage**(...`path`): `string` \| `void`

This is helper function to get the globally installed packages.
```js
npm install chrome-remote-interface --location=global
// script.mjs
const pkg= await import($.xdg.globalPackage`chrome-remote-interface`);
// or script.js
const pkg= require($.xdg.globalPackage`chrome-remote-interface`);
@throws {Error} Package not found/has no global exports
```

### Parameters

• ...**path**: [`XdgPath`](../../../type-aliases/XdgPath.md)

### Returns

`string` \| `void`

## globalPackage(path)

> **globalPackage**(`path`): `string` \| `void`

### Parameters

• **path**: `string`

### Returns

`string` \| `void`
