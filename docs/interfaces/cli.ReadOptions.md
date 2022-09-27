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

[src/cli.d.ts:114](https://github.com/jaandrle/nodejsscript/blob/9ae5d73/src/cli.d.ts#L114)

___

### -s

• **-s**: `boolean`

Make sence to combine only with `-p` to not show pressed keys (e.g. to prompt password).

#### Defined in

[src/cli.d.ts:116](https://github.com/jaandrle/nodejsscript/blob/9ae5d73/src/cli.d.ts#L116)

___

### completions

• **completions**: `string`[]

Make sence to combine only with `-p` to provide tab suggestion/completions.

#### Defined in

[src/cli.d.ts:118](https://github.com/jaandrle/nodejsscript/blob/9ae5d73/src/cli.d.ts#L118)

___

### -d

• **-d**: `string`

Returns the `stdin` till given needle.

#### Defined in

[src/cli.d.ts:120](https://github.com/jaandrle/nodejsscript/blob/9ae5d73/src/cli.d.ts#L120)

___

### -n

• **-n**: `number`

Choose given number of chars from `stdin`.

#### Defined in

[src/cli.d.ts:122](https://github.com/jaandrle/nodejsscript/blob/9ae5d73/src/cli.d.ts#L122)
