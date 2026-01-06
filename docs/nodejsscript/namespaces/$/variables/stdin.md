[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [$](../README.md) / stdin

# Variable: stdin

> `const` **stdin**: [`STDIN`](../interfaces/STDIN.md)

Holding `stdin` when script was executed with pipe.
```bash
echo TEST | nodejsscript script.js
```
```javascript
echo($.stdin.text());//= "TEST"
```
…but it can be empty in case of platform specific error (see [$.isFIFO](../functions/isFIFO.md)).
