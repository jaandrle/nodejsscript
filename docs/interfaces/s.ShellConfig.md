[nodejsscript](../README.md) / [s](../modules/s.md) / ShellConfig

# Interface: ShellConfig

[s](../modules/s.md).ShellConfig

## Table of contents

### Properties

- [silent](s.ShellConfig.md#silent)
- [fatal](s.ShellConfig.md#fatal)
- [verbose](s.ShellConfig.md#verbose)
- [globOptions](s.ShellConfig.md#globoptions)
- [execPath](s.ShellConfig.md#execpath)

### Methods

- [reset](s.ShellConfig.md#reset)

## Properties

### silent

• **silent**: `boolean`

Suppresses all command output if true, except for echo() calls. Default is false.

#### Defined in

node_modules/@types/shelljs/index.d.ts:1192

___

### fatal

• **fatal**: `boolean`

If true the script will die on errors. Default is false.

#### Defined in

node_modules/@types/shelljs/index.d.ts:1197

___

### verbose

• **verbose**: `boolean`

Will print each executed command to the screen.

**`Default`**

false

#### Defined in

node_modules/@types/shelljs/index.d.ts:1204

___

### globOptions

• **globOptions**: `IOptions`

Passed to glob.sync() instead of the default options ({}).

#### Defined in

node_modules/@types/shelljs/index.d.ts:1209

___

### execPath

• **execPath**: `string`

Absolute path of the Node binary. Default is null (inferred).

#### Defined in

node_modules/@types/shelljs/index.d.ts:1214

## Methods

### reset

▸ **reset**(): `void`

Reset shell.config to the defaults.

#### Returns

`void`

#### Defined in

node_modules/@types/shelljs/index.d.ts:1219
