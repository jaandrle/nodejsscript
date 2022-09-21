[nodejsscript](../README.md) / config

# Namespace: config

Read/write global configuration.

## Table of contents

### Functions

- [assign](config.md#assign)

### Variables

- [silent](config.md#silent)
- [verbose](config.md#verbose)
- [fatal](config.md#fatal)
- [noglob](config.md#noglob)
- [globOptions](config.md#globoptions)

## Functions

### assign

▸ **assign**(...`c`): typeof [`config`](config.md)

Set multiple options with one command.
```js
const { verbose, fatal, noglob }= config;
config.silent= true;
const config.assign({ verbose: true, silent: false });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `...c` | `Record`<``"silent"`` \| ``"fatal"`` \| ``"verbose"`` \| ``"noglob"``, `boolean`\>[] |

#### Returns

typeof [`config`](config.md)

#### Defined in

[index.d.ts:41](https://github.com/jaandrle/nodejsscript/blob/cd34166/index.d.ts#L41)

## Variables

### silent

• `Const` **silent**: `boolean`

Suppresses all command output if `true`, except for `echo()` call.

**`Default`**

false

#### Defined in

[index.d.ts:11](https://github.com/jaandrle/nodejsscript/blob/cd34166/index.d.ts#L11)

___

### verbose

• `Const` **verbose**: `boolean`

Will print each executed command to the screen.

**`Default`**

false

#### Defined in

[index.d.ts:16](https://github.com/jaandrle/nodejsscript/blob/cd34166/index.d.ts#L16)

___

### fatal

• `Const` **fatal**: `boolean`

If `true`, the script will throw a JavaScript error when any `shell.js` command encounters an error. This is analogous to Bash's `set -e`.

**`Default`**

false

#### Defined in

[index.d.ts:21](https://github.com/jaandrle/nodejsscript/blob/cd34166/index.d.ts#L21)

___

### noglob

• `Const` **noglob**: `boolean`

Disable filename expansion (globbing)

**`Default`**

false

#### Defined in

[index.d.ts:26](https://github.com/jaandrle/nodejsscript/blob/cd34166/index.d.ts#L26)

___

### globOptions

• `Const` **globOptions**: `IOptions`

Options for [`glob.sync()`](https://github.com/isaacs/node-glob/tree/af57da21c7722bb6edb687ccd4ad3b99d3e7a333#options).

**`Default`**

#### Defined in

[index.d.ts:31](https://github.com/jaandrle/nodejsscript/blob/cd34166/index.d.ts#L31)
