[nodejsscript](../README.md) / ReadOptions

# Interface: ReadOptions

## Table of contents

### Properties

- [-p](ReadOptions.md#-p)
- [-s](ReadOptions.md#-s)
- [completions](ReadOptions.md#completions)
- [-d](ReadOptions.md#-d)
- [-n](ReadOptions.md#-n)

## Properties

### -p

• **-p**: `string`

Promt mode, value is used as question. It is possible to cobine with other options.

#### Defined in

[index.d.ts:179](https://github.com/jaandrle/nodejsscript/blob/2dce906/index.d.ts#L179)

___

### -s

• **-s**: `boolean`

Make sence to combine only with `-p` to not show pressed keys (e.g. to prompt password).

#### Defined in

[index.d.ts:181](https://github.com/jaandrle/nodejsscript/blob/2dce906/index.d.ts#L181)

___

### completions

• **completions**: `string`[]

Make sence to combine only with `-p` to provide tab suggestion/completions.

#### Defined in

[index.d.ts:183](https://github.com/jaandrle/nodejsscript/blob/2dce906/index.d.ts#L183)

___

### -d

• **-d**: `string`

Returns the `stdin` till given needle.

#### Defined in

[index.d.ts:185](https://github.com/jaandrle/nodejsscript/blob/2dce906/index.d.ts#L185)

___

### -n

• **-n**: `number`

Choose given number of chars from `stdin`.

#### Defined in

[index.d.ts:187](https://github.com/jaandrle/nodejsscript/blob/2dce906/index.d.ts#L187)
