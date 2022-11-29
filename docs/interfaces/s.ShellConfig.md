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

___

### fatal

• **fatal**: `boolean`

If true the script will die on errors. Default is false.

___

### verbose

• **verbose**: `boolean`

Will print each executed command to the screen.

**`Default`**

false

___

### globOptions

• **globOptions**: `IOptions`

Passed to glob.sync() instead of the default options ({}).

___

### execPath

• **execPath**: `string`

Absolute path of the Node binary. Default is null (inferred).

## Methods

### reset

▸ **reset**(): `void`

Reset shell.config to the defaults.

#### Returns

`void`
