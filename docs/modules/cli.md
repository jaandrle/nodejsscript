[nodejsscript](../README.md) / cli

# Namespace: cli

## Table of contents

### Public Functions

- [configAssign](cli.md#configassign)
- [isFIFO](cli.md#isfifo)
- [api](cli.md#api)
- [read](cli.md#read)

### Public Variables

- [is\_silent](cli.md#is_silent)
- [is\_verbose](cli.md#is_verbose)
- [is\_fatal](cli.md#is_fatal)
- [glob\_options](cli.md#glob_options)
- [xdg](cli.md#xdg)

### Interfaces

- [ReadOptions](../interfaces/cli.ReadOptions.md)

## Public Functions

### configAssign

▸ **configAssign**(...`c`): `void`

Set multiple options except `glob_options` with one command.
```js
const { is_verbose, is_fatal }= cli;
cli.is_silent= true;
const cli.configAssign({ verbose: true, silent: false });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `...c` | `Record`<``"silent"`` \| ``"fatal"`` \| ``"verbose"``, `boolean`\>[] |

#### Returns

`void`

#### Defined in

[src/cli.d.ts:53](https://github.com/jaandrle/nodejsscript/blob/8f31caa/src/cli.d.ts#L53)

___

### isFIFO

▸ **isFIFO**(`stream_id`): `boolean`

Method to check whether script stdin/stdout (0/1) is a first-in-first-out (FIFO) pipe or not.
```bash
node pipes.js | … # — test by cli.isFIFO(1)
… | node pipes.js # — test by cli.isFIFO(0)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream_id` | ``0`` \| ``1`` |

#### Returns

`boolean`

#### Defined in

[src/cli.d.ts:63](https://github.com/jaandrle/nodejsscript/blob/8f31caa/src/cli.d.ts#L63)

___

### api

▸ **api**(`usage`, `is_single?`): [`Sade`](../interfaces/sade.Sade.md)

A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
In addition to the origin, `cli.api()` supports to fill script name from script file name.
This should be good balance between [commander - npm](https://www.npmjs.com/package/commander) and parsing arguments and writing help texts by hand.
For more complex scripts just create full npm package.
```js
cli.api("", true)
.version("0.1.0")
.describe("NodeJS Script cli test")
.action(echo)
.parse(process.argv);
```
	
```js
cli.api("copy <file> <destination>", true)
.version("0.1.0")
.describe("copy file simpulation")
.option("--force", "Overwrite file in destination.")
.action(function(file, destination, { force }){
	// copy file logic
})
.parse(process.argv);
```

```js
const prog= cli.api('my-cli');
prog
  .version('1.0.5')
  .option('--global, -g', 'An example global flag')
  .option('-c, --config', 'Provide path to custom config', 'foo.config.js');
prog
  .command('build <src> <dest>')
  .describe('Build the source directory. Expects an `index.js` entry file.')
  .option('-o, --output', 'Change the name of the output file', 'bundle.js')
  .example('build src build --global --config my-conf.js')
  .example('build app public -o main.js')
  .action((src, dest, opts) => {
    echo(`> building from ${src} to ${dest}`);
    echo('> these are extra opts', opts);
  });
prog.parse(process.argv);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `usage` | `string` | The script name and usage (`[optional]`/`<required>`). If no `name`, then the script file name will be used. |
| `is_single?` | `boolean` | See [__sade](../README.md#__sade) |

#### Returns

[`Sade`](../interfaces/sade.Sade.md)

#### Defined in

[src/cli.d.ts:110](https://github.com/jaandrle/nodejsscript/blob/8f31caa/src/cli.d.ts#L110)

___

### read

▸ **read**(`options`): `Promise`<`string`\>

This function mimic [`read`](https://phoenixnap.com/kb/bash-read) command.
So, the function purpose is reading from `stdin`.
```js
const answer= await cli.read({ "-p": "Question" });
const color= await cli.read({ "-p": "Your color", completions: [ "red", "green" ] });
if(cli.isFIFO(0)) await cli.read().then(echo.bind(null, "E.g. for reading received input:"));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ReadOptions`](../interfaces/cli.ReadOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/cli.d.ts:134](https://github.com/jaandrle/nodejsscript/blob/8f31caa/src/cli.d.ts#L134)

## Public Variables

### is\_silent

• `Const` **is\_silent**: `boolean`

Suppresses all command output if `true`, except for `echo()` call.

**`Default`**

false

#### Defined in

[src/cli.d.ts:16](https://github.com/jaandrle/nodejsscript/blob/8f31caa/src/cli.d.ts#L16)

___

### is\_verbose

• `Const` **is\_verbose**: `boolean`

Will print each executed command to the screen.

**`Default`**

false

#### Defined in

[src/cli.d.ts:22](https://github.com/jaandrle/nodejsscript/blob/8f31caa/src/cli.d.ts#L22)

___

### is\_fatal

• `Const` **is\_fatal**: `boolean`

If `true`, the script will throw a JavaScript error when any `shell.js` command encounters an error. This is analogous to Bash's `set -e`.

**`Default`**

false

#### Defined in

[src/cli.d.ts:28](https://github.com/jaandrle/nodejsscript/blob/8f31caa/src/cli.d.ts#L28)

___

### glob\_options

• `Const` **glob\_options**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `is_off` | `boolean` | Disable filename expansion (globbing)  **`Default`**  false |
| `options` | `IOptions` | Options for [`glob.sync()`](https://github.com/isaacs/node-glob/tree/af57da21c7722bb6edb687ccd4ad3b99d3e7a333#options).  **`Default`** |

#### Defined in

[src/cli.d.ts:31](https://github.com/jaandrle/nodejsscript/blob/8f31caa/src/cli.d.ts#L31)

___

### xdg

• `Const` **xdg**: typeof [`xdg`](xdg_.xdg.md)

#### Defined in

[src/cli.d.ts:139](https://github.com/jaandrle/nodejsscript/blob/8f31caa/src/cli.d.ts#L139)
