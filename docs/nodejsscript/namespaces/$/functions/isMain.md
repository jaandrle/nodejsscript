[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [$](../README.md) / isMain

# Function: isMain()

> **isMain**(`import_meta`): `boolean`

This is small helper function to determine if current script file was launched as main one.
```js
//nodejsscript main.js

//main.js
if($.isMain(import.meta)) echo("This is main script");
import 'nomain.js';

//nomain.js
if($.isMain(import.meta)) echo("This is NOT main script ⇒ never echo");
```
This can be helpful for writing importable scripts.
It is very similar to [`__name__ == '__main__'`](https://docs.python.org/3/library/__main__.html).
For this use case, be careful to use `$.exit` correctly (when the script is imported, you probably don't want to use it).

## Parameters

### import\_meta

`ImportMeta`

## Returns

`boolean`
