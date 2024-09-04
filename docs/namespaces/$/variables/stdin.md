[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [$](../README.md) / stdin

# Variable: stdin

> `const` **stdin**: [`STDIN`](../interfaces/STDIN.md)

Holding `stdin` when script was executed.
```bash
echo TEST | nodejsscript script.js
```
```javascript
echo($.stdin.text());//= "TEST"
```
