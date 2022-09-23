[nodejsscript](../README.md) / [cli](../modules/cli.md) / ReadOptions

# Interface: ReadOptions

[cli](../modules/cli.md).ReadOptions

## Table of contents

### Properties

- [-p](cli.ReadOptions.md#-p)
- [-s](cli.ReadOptions.md#-s)
- [completions](cli.ReadOptions.md#completions)
- [-d](cli.ReadOptions.md#-d)
- [-n](cli.ReadOptions.md#-n)

## Properties

### -p

• **-p**: `string`

Promt mode, value is used as question. It is possible to cobine with other options.

#### Defined in

src/cli.d.ts:113

___

### -s

• **-s**: `boolean`

Make sence to combine only with `-p` to not show pressed keys (e.g. to prompt password).

#### Defined in

src/cli.d.ts:115

___

### completions

• **completions**: `string`[]

Make sence to combine only with `-p` to provide tab suggestion/completions.

#### Defined in

src/cli.d.ts:117

___

### -d

• **-d**: `string`

Returns the `stdin` till given needle.

#### Defined in

src/cli.d.ts:119

___

### -n

• **-n**: `number`

Choose given number of chars from `stdin`.

#### Defined in

src/cli.d.ts:121
