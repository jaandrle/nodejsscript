[nodejsscript](../README.md) / EchoFunction

# Interface: EchoFunction

## Callable

### EchoFunction

▸ **EchoFunction**(`message?`, ...`optionalParams`): [`ShellString`](../modules/s.md#shellstring)

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
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message?` | `any` | The text to print. |
| `...optionalParams` | `any`[] | - |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns processed string with additional utility methods like .to().

## Table of contents

### Methods

- [use](EchoFunction.md#use)
- [css](EchoFunction.md#css)
- [format](EchoFunction.md#format)
- [formatWithOptions](EchoFunction.md#formatwithoptions)

## Methods

### use

▸ **use**(`options`, `message?`, ...`optionalParams`): [`ShellString`](../modules/s.md#shellstring)

Similarly to [echo](../modules/s.md#echo), the first argument accepts options string starting with `-`:
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

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | \`-${string}\` | Available options: `-n`, `-1`/`-2`, `-c`, `-P`, `-R`/`-r`. |
| `message?` | `any` | The text to print. |
| `...optionalParams` | `any`[] | - |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns processed string with additional utility methods like .to().

___

### css

▸ **css**(...`styles`): `Record`<`string`, `string`\>

In `echo`, you can use `%c` for styling:
```js
echo("%cHello %cWorld!", "color: red", "color: blue");
```
**But**, implementation for `echo` is much more limited. There is no CSS parser, just keywords see [css_rules](../README.md#css_rules) (alternatively file `src/ansi_constants.js`).

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
…there is also helpers (see [format](EchoFunction.md#format) and [formatWithOptions](EchoFunction.md#formatwithoptions)) to just return finally formated text:
```js
const css= echo.css("* { font-weight: bold; }", ".red { color: red; }", ".blue { color: blue; }");
const text= echo.format("%cRed and bold text", css.red);
echo(text);
```
For further information, see:
<br>- [Styling console output](https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output)
<br>- [Util.format | Node.js v19.1.0 Documentation](https://nodejs.org/api/util.html#utilformatformat-args)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...styles` | (\`.${string}{ color: black; }\` \| \`.${string}{ color: red; }\` \| \`.${string}{ color: green; }\` \| \`.${string}{ color: yellow; }\` \| \`.${string}{ color: blue; }\` \| \`.${string}{ color: magenta; }\` \| \`.${string}{ color: cyan; }\` \| \`.${string}{ color: white; }\` \| \`.${string}{ color: gray; }\` \| \`.${string}{ color: lightred; }\` \| \`.${string}{ color: lightgreen; }\` \| \`.${string}{ color: lightyellow; }\` \| \`.${string}{ color: lightblue; }\` \| \`.${string}{ color: lightmagenta; }\` \| \`.${string}{ color: lightcyan; }\` \| \`.${string}{ color: whitesmoke; }\` \| \`.${string}{ background: black; }\` \| \`.${string}{ background: red; }\` \| \`.${string}{ background: green; }\` \| \`.${string}{ background: yellow; }\` \| \`.${string}{ background: blue; }\` \| \`.${string}{ background: magenta; }\` \| \`.${string}{ background: cyan; }\` \| \`.${string}{ background: white; }\` \| \`.${string}{ background: gray; }\` \| \`.${string}{ background: lightred; }\` \| \`.${string}{ background: lightgreen; }\` \| \`.${string}{ background: lightyellow; }\` \| \`.${string}{ background: lightblue; }\` \| \`.${string}{ background: lightmagenta; }\` \| \`.${string}{ background: lightcyan; }\` \| \`.${string}{ background: whitesmoke; }\` \| \`.${string}{ margin-left: ${number}; }\` \| \`.${string}{ text-decoration: underline }\` \| \`.${string}{ text-decoration: line-through }\` \| \`.${string}{ unset: all; }\` \| \`.${string}{ display: none; }\` \| \`.${string}{ font-style: italic; }\` \| \`.${string}{ font-weight: bold; }\` \| \`.${string}{ animation: blink; }\`)[] |

#### Returns

`Record`<`string`, `string`\>

___

### format

▸ **format**(`message?`, ...`optionalParams`): [`ShellString`](../modules/s.md#shellstring)

A helper method returning formated text as it processed by [echo](../README.md#echo), but not printed into the console.
(So infact, it is an alias `echo.use("-S", …);`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message?` | `any` | The text to print. |
| `...optionalParams` | `any`[] | - |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns processed string with additional utility methods like .to().

___

### formatWithOptions

▸ **formatWithOptions**(`options`, `message?`, ...`optionalParams`): [`ShellString`](../modules/s.md#shellstring)

A helper method returning formated text as it processed by [echo](../README.md#echo), but not printed into the console.
(So infact, it is an alias `echo.use("-S"+…, …);`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | \`-${string}\` | Available options: `-n`, `-c`, `-P` (these are available, but ignored: `-1`/`-2`, `-R`/`-r`). |
| `message?` | `any` | The text to print. |
| `...optionalParams` | `any`[] | - |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns processed string with additional utility methods like .to().
