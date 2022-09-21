[nodejsscript](../README.md) / [s](../modules/s.md) / ShellConfig

# Interface: ShellConfig

[s](../modules/s.md).ShellConfig

## Table of contents

### Properties

- [execPath](s.ShellConfig.md#execpath)
- [fatal](s.ShellConfig.md#fatal)
- [globOptions](s.ShellConfig.md#globoptions)
- [silent](s.ShellConfig.md#silent)
- [verbose](s.ShellConfig.md#verbose)

### Methods

- [reset](s.ShellConfig.md#reset)

## Properties

### execPath

• **execPath**: `string`

Absolute path of the Node binary. Default is null (inferred).

#### Defined in

node_modules/@types/shelljs/index.d.ts:1214

___

### fatal

• **fatal**: `boolean`

If true the script will die on errors. Default is false.

#### Defined in

node_modules/@types/shelljs/index.d.ts:1197

___

### globOptions

• **globOptions**: `IOptions`

Passed to glob.sync() instead of the default options ({}).

#### Defined in

node_modules/@types/shelljs/index.d.ts:1209

___

### silent

• **silent**: `boolean`

Suppresses all command output if true, except for echo() calls. Default is false.

#### Defined in

node_modules/@types/shelljs/index.d.ts:1192

___

### verbose

• **verbose**: `boolean`

Will print each executed command to the screen.

**`Default`**

false

#### Defined in

node_modules/@types/shelljs/index.d.ts:1204

## Methods

### reset

▸ **reset**(): `void`

Reset shell.config to the defaults.

#### Returns

`void`

#### Defined in

node_modules/@types/shelljs/index.d.ts:1219
