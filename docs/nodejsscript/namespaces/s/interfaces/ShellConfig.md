[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / ShellConfig

# Interface: ShellConfig

## Properties

### silent

> **silent**: `boolean`

Suppresses all command output if true, except for echo() calls. Default is false.

***

### fatal

> **fatal**: `boolean`

If true the script will die on errors. Default is false.

***

### verbose

> **verbose**: `boolean`

Will print each executed command to the screen.

#### Default

```ts
false
```

***

### globOptions

> **globOptions**: `Options`

Passed to glob.sync() instead of the default options ({}).

***

### execPath

> **execPath**: `string`

Absolute path of the Node binary. Default is null (inferred).

## Methods

### reset()

> **reset**(): `void`

Reset shell.config to the defaults.

#### Returns

`void`
