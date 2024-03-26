[nodejsscript](../README.md) / [s](../modules/s.md) / ReadOptions

# Interface: ReadOptions

[s](../modules/s.md).ReadOptions

## Table of contents

### Properties

- [-p](s.ReadOptions.md#-p)
- [-s](s.ReadOptions.md#-s)
- [completions](s.ReadOptions.md#completions)
- [-d](s.ReadOptions.md#-d)
- [-n](s.ReadOptions.md#-n)

## Properties

### -p

• **-p**: `string`

Promt mode, value is used as question. It is possible to cobine with other options.

___

### -s

• **-s**: `boolean`

Make sence to combine only with `-p` to not show pressed keys (e.g. to prompt password).

___

### completions

• **completions**: `string`[]

Make sence to combine only with `-p` to provide tab suggestion/completions.

___

### -d

• **-d**: `string`

Returns the `stdin` till given needle.

___

### -n

• **-n**: `number`

Choose given number of chars from `stdin`.
