[**nodejsscript**](../README.md)

***

[nodejsscript](../README.md) / echo

# Variable: echo

> `const` **echo**: [`EchoFunction`](../interfaces/EchoFunction.md)

This is mixed function between bash’s `echo` and `console.log`.
By default, works more like `console.log` with partial supports
for styling mimic CSS and `console.log` in the web browser. See [echo.css](../interfaces/EchoFunction.md#css) (internally uses [css-in-console - npm](https://www.npmjs.com/package/css-in-console)).

The ['echo.use'](../interfaces/EchoFunction.md#use) provides more `echo` way,
the first argument accepts options string starting with `-`:
- `-n`: Don’t append **n**ew line
- `-1`/`-2`: Outputs to `stdout`/`stderr`
- `-c`: Don’t **c**olorize output (e.g. objects)
- `-P`: Outputs objects in **p**rettier format
- `-R`/`-r`: Starts/Ends **r**ewritable mode (for spinners, progress bars, etc.). Mode can be ended with any other `echo` without `-R`.

There is also 

```js
// as console.log
const count = 5;
echo('count: %d', count);
// Prints: count: 5, to stdout
echo('count:', count);
// Prints: count: 5, to stdout
echo({ count });
// Prints: { count: 5 }, to stdout
echo(new Error("Test"));
// Prints: 'Error: Test', when `config.verbose= false`
echo("%cRed", "color: red");
// Prints 'Red' in red
```
```js
echo.use("-R", "0%");
// …
echo.use("-r", "100%");
// combination
echo.use("-2cP", { a: "A" });
```
```js
echo("Hi").to("./test.txt");
// Prints: 'Hi' & save to file 'test.txt'
```

## Param

The text to print.

## Returns

Returns processed string with additional utility methods like .to().
