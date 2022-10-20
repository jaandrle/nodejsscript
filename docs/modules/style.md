[nodejsscript](../README.md) / style

# Namespace: style

The [doowb/ansi-colors](https://github.com/doowb/ansi-colors) package as `style` namespace.
```js
style.theme({ info: style.blue });
echo(style.info('Hello world!'));
```

## Table of contents

### Functions

- [stripColor](style.md#stripcolor)
- [strip](style.md#strip)
- [unstyle](style.md#unstyle)
- [ok](style.md#ok)
- [create](style.md#create)
- [reset](style.md#reset)
- [bold](style.md#bold)
- [dim](style.md#dim)
- [italic](style.md#italic)
- [underline](style.md#underline)
- [inverse](style.md#inverse)
- [hidden](style.md#hidden)
- [strikethrough](style.md#strikethrough)
- [black](style.md#black)
- [red](style.md#red)
- [green](style.md#green)
- [yellow](style.md#yellow)
- [blue](style.md#blue)
- [magenta](style.md#magenta)
- [cyan](style.md#cyan)
- [white](style.md#white)
- [gray](style.md#gray)
- [grey](style.md#grey)
- [blackBright](style.md#blackbright)
- [redBright](style.md#redbright)
- [greenBright](style.md#greenbright)
- [yellowBright](style.md#yellowbright)
- [blueBright](style.md#bluebright)
- [magentaBright](style.md#magentabright)
- [cyanBright](style.md#cyanbright)
- [whiteBright](style.md#whitebright)
- [bgBlack](style.md#bgblack)
- [bgRed](style.md#bgred)
- [bgGreen](style.md#bggreen)
- [bgYellow](style.md#bgyellow)
- [bgBlue](style.md#bgblue)
- [bgMagenta](style.md#bgmagenta)
- [bgCyan](style.md#bgcyan)
- [bgWhite](style.md#bgwhite)
- [bgBlackBright](style.md#bgblackbright)
- [bgRedBright](style.md#bgredbright)
- [bgGreenBright](style.md#bggreenbright)
- [bgYellowBright](style.md#bgyellowbright)
- [bgBlueBright](style.md#bgbluebright)
- [bgMagentaBright](style.md#bgmagentabright)
- [bgCyanBright](style.md#bgcyanbright)
- [bgWhiteBright](style.md#bgwhitebright)

### Interfaces

- [StyleFunction](../interfaces/style.StyleFunction.md)

### Variables

- [enabled](style.md#enabled)
- [visible](style.md#visible)
- [ansiRegex](style.md#ansiregex)
- [styles](style.md#styles)
- [symbols](style.md#symbols)

## Functions

### stripColor

▸ **stripColor**(`s`): `string`

Remove styles from string

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### strip

▸ **strip**(`s`): `string`

Remove styles from string

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### unstyle

▸ **unstyle**(`s`): `string`

Remove styles from string

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### ok

▸ **ok**(...`args`): `string`

Outputs a string with check-symbol as prefix

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `string`[] |

#### Returns

`string`

___

### create

▸ **create**(): typeof [`style`](style.md)

#### Returns

typeof [`style`](style.md)

___

### reset

▸ **reset**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bold

▸ **bold**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### dim

▸ **dim**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### italic

▸ **italic**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### underline

▸ **underline**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### inverse

▸ **inverse**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### hidden

▸ **hidden**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### strikethrough

▸ **strikethrough**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### black

▸ **black**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### red

▸ **red**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### green

▸ **green**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### yellow

▸ **yellow**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### blue

▸ **blue**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### magenta

▸ **magenta**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### cyan

▸ **cyan**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### white

▸ **white**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### gray

▸ **gray**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### grey

▸ **grey**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### blackBright

▸ **blackBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### redBright

▸ **redBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### greenBright

▸ **greenBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### yellowBright

▸ **yellowBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### blueBright

▸ **blueBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### magentaBright

▸ **magentaBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### cyanBright

▸ **cyanBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### whiteBright

▸ **whiteBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgBlack

▸ **bgBlack**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgRed

▸ **bgRed**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgGreen

▸ **bgGreen**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgYellow

▸ **bgYellow**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgBlue

▸ **bgBlue**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgMagenta

▸ **bgMagenta**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgCyan

▸ **bgCyan**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgWhite

▸ **bgWhite**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgBlackBright

▸ **bgBlackBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgRedBright

▸ **bgRedBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgGreenBright

▸ **bgGreenBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgYellowBright

▸ **bgYellowBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgBlueBright

▸ **bgBlueBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgMagentaBright

▸ **bgMagentaBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgCyanBright

▸ **bgCyanBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

___

### bgWhiteBright

▸ **bgWhiteBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

## Variables

### enabled

• **enabled**: `boolean`

___

### visible

• **visible**: `boolean`

___

### ansiRegex

• `Const` **ansiRegex**: `RegExp`

___

### styles

• `Const` **styles**: `StylesType`<`StyleType`\>

___

### symbols

• `Const` **symbols**: `SymbolsType`
