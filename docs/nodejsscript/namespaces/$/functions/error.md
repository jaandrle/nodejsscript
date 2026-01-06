[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [$](../README.md) / error

# Function: error()

> **error**(`message`): `Error`

Throws user targeted error
```js
const number= await $.read({ "-p". "Insert a number:" });
if(Number.isNaN(Number(number))) $.error(`Provided text '${number}' is not a number`);
```

## Parameters

### message

`string`

## Returns

`Error`
