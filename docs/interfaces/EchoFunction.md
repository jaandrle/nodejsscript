[**nodejsscript**](../README.md) • **Docs**

***

[nodejsscript](../README.md) / EchoFunction

# Interface: EchoFunction()

> **EchoFunction**(`message`?, ...`optionalParams`?): [`ShellString`](../namespaces/s/type-aliases/ShellString.md)

Prints to `stdout` with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html) (the arguments are all passed to `util.format()`).
Internally uses `console.log`. Stringify inputs except objects and errors in case of `$.is_verbose`.
Supports basic styling, see [css](EchoFunction.md#css).

```js
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

## Parameters

• **message?**: `any`

The text to print.

• ...**optionalParams?**: `any`[]

## Returns

[`ShellString`](../namespaces/s/type-aliases/ShellString.md)

Returns processed string with additional utility methods like .to().

## Public

### css()

> **css**: (...`styles`) => `Record`\<`string`, `string`\>(...`styles`) => `Record`\<`string`, `string`\>

In `echo`, you can use `%c` for styling:
```js
echo("%cHello %cWorld!", "color: red", "color: blue");
```
**But**, implementation for `echo` is much more limited. There is no CSS parser, just keywords see [css_rules](https://github.com/jaandrle/css-in-console/blob/main/docs/README.md#css_rules).
**Internally uses [css-in-console - npm](https://www.npmjs.com/package/css-in-console)**.

You can pre-define css class with this method:
```js
const css= echo.css(".red { color: red; }", ".blue { color: blue; }");
echo("%cRed text", css.red);
echo("%cBlue text", css.blue);
```
…there is special style name `*` which applies to all defined classes:
```js
const css= echo.css("* { font-weight: bold; }", ".red { color: red; }", ".blue { color: blue; }");
echo("%cRed and bold text", css.red);
echo("%cBlue and bold text", css.blue);
```
…there is also helpers (see [EchoFunction.format](EchoFunction.md#format) and [EchoFunction.formatWithOptions](EchoFunction.md#formatwithoptions)) to just return finally formated text:
```js
const css= echo.css`
	* { font-weight: bold; }
	.red { color: red; }
	.blue { color: blue; }
`;
const text= echo.format("%cRed and bold text", css.red);
echo(text);
```
For further information, see:
<br>- [css-in-console - npm](https://www.npmjs.com/package/css-in-console)
<br>- [Styling console output](https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output)
<br>- [Util.format | Node.js v19.1.0 Documentation](https://nodejs.org/api/util.html#utilformatformat-args)

This is helper function to predefine CSS-like rules for being used with log/[formatWithOptions](EchoFunction.md#formatwithoptions)/[format](EchoFunction.md#format)/….
```js
const css= style(".red { color: red; }", ".blue { color: blue; }");
log("%cRed text", css.red);
log("%cBlue text", css.blue);
```
…there is special style name `*` which applies to all defined classes:
```js
const css= style("* { font-weight: bold; }", ".red { color: red; }", ".blue { color: blue; }");
log("%cRed and bold text", css.red);
log("%cBlue and bold text", css.blue);
```
…you can also import css file:
```js
const css= style("@import './file.css'");
```

#### Parameters

• ...**styles**: (\`.$\{string\}\{ @import "$\{string\}" \}\` \| \`.$\{string\}\{ display: none; \}\` \| \`.$\{string\}\{ display: list-item; \}\` \| \`.$\{string\}\{ color: black; \}\` \| \`.$\{string\}\{ color: blue; \}\` \| \`.$\{string\}\{ color: cyan; \}\` \| \`.$\{string\}\{ color: gray; \}\` \| \`.$\{string\}\{ color: green; \}\` \| \`.$\{string\}\{ color: magenta; \}\` \| \`.$\{string\}\{ color: red; \}\` \| \`.$\{string\}\{ color: white; \}\` \| \`.$\{string\}\{ color: yellow; \}\` \| \`.$\{string\}\{ color: lightred; \}\` \| \`.$\{string\}\{ color: lightgreen; \}\` \| \`.$\{string\}\{ color: lightyellow; \}\` \| \`.$\{string\}\{ color: lightblue; \}\` \| \`.$\{string\}\{ color: lightmagenta; \}\` \| \`.$\{string\}\{ color: lightcyan; \}\` \| \`.$\{string\}\{ color: whitesmoke; \}\` \| \`.$\{string\}\{ background: black; \}\` \| \`.$\{string\}\{ background: blue; \}\` \| \`.$\{string\}\{ background: cyan; \}\` \| \`.$\{string\}\{ background: gray; \}\` \| \`.$\{string\}\{ background: green; \}\` \| \`.$\{string\}\{ background: magenta; \}\` \| \`.$\{string\}\{ background: red; \}\` \| \`.$\{string\}\{ background: white; \}\` \| \`.$\{string\}\{ background: yellow; \}\` \| \`.$\{string\}\{ background: lightred; \}\` \| \`.$\{string\}\{ background: lightgreen; \}\` \| \`.$\{string\}\{ background: lightyellow; \}\` \| \`.$\{string\}\{ background: lightblue; \}\` \| \`.$\{string\}\{ background: lightmagenta; \}\` \| \`.$\{string\}\{ background: lightcyan; \}\` \| \`.$\{string\}\{ background: whitesmoke; \}\` \| \`.$\{string\}\{ margin-left: $\{number\}; \}\` \| \`.$\{string\}\{ margin-right: $\{number\}; \}\` \| \`.$\{string\}\{ text-decoration: underline \}\` \| \`.$\{string\}\{ text-decoration: line-through \}\` \| \`.$\{string\}\{ list-style-type: $\{string\} \}\` \| \`.$\{string\}\{ unset: all; \}\` \| \`.$\{string\}\{ font-style: italic; \}\` \| \`.$\{string\}\{ font-weight: bold; \}\` \| \`.$\{string\}\{ animation: blink; \}\`)[]

#### Returns

`Record`\<`string`, `string`\>

You can use it aslo as template function:
```js
const css= style`
	@import "./file.css";
	.red{ color: red; }
`;
```

#### Parameters

• ...**styles**: `cssTemplate`

#### Returns

`Record`\<`string`, `string`\>

## Internal

### use()

> **use**(`options`, `message`?, ...`optionalParams`?): [`ShellString`](../namespaces/s/type-aliases/ShellString.md)

Similarly to [s.echo](../namespaces/s/functions/echo.md), the first argument accepts options string starting with `-`:
- `-n`: Don’t append **n**ew line
- `-1`/`-2`: Outputs to `stdout`/`stderr`
- `-c`: Don’t **c**olorize output (e.g. objects)
- `-P`: Outputs objects in **p**rettier format
- `-R`/`-r`: Starts/Ends **r**ewritable mode (for spinners, progress bars, etc.). Mode can be ended with any other `echo` without `-R`.
- `-S`: silent mode ⇒ just return processed final string (ignores: `-1`, `-2`, `R`)

```js
echo.use("-R", "0%");
// …
echo.use("-r", "100%");
// combination
echo.use("-2cP", { a: "A" });
```

#### Parameters

• **options**: \`-$\{string\}\`

Available options: `-n`, `-1`/`-2`, `-c`, `-P`, `-R`/`-r`.

• **message?**: `any`

The text to print.

• ...**optionalParams?**: `any`[]

#### Returns

[`ShellString`](../namespaces/s/type-aliases/ShellString.md)

Returns processed string with additional utility methods like .to().

***

### format()

> **format**(`message`?, ...`optionalParams`?): [`ShellString`](../namespaces/s/type-aliases/ShellString.md)

A helper method returning formated text as it processed by [echo](../functions/echo.md), but not printed into the console.
(So infact, it is an alias `echo.use("-S", …);`)

#### Parameters

• **message?**: `any`

The text to print.

• ...**optionalParams?**: `any`[]

#### Returns

[`ShellString`](../namespaces/s/type-aliases/ShellString.md)

Returns processed string with additional utility methods like .to().

***

### formatWithOptions()

> **formatWithOptions**(`options`, `message`?, ...`optionalParams`?): [`ShellString`](../namespaces/s/type-aliases/ShellString.md)

A helper method returning formated text as it processed by [echo](../functions/echo.md), but not printed into the console.
(So infact, it is an alias `echo.use("-S"+…, …);`)

#### Parameters

• **options**: \`-$\{string\}\`

Available options: `-n`, `-c`, `-P` (these are available, but ignored: `-1`/`-2`, `-R`/`-r`).

• **message?**: `any`

The text to print.

• ...**optionalParams?**: `any`[]

#### Returns

[`ShellString`](../namespaces/s/type-aliases/ShellString.md)

Returns processed string with additional utility methods like .to().
