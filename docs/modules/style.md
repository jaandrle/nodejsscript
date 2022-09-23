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

#### Defined in

node_modules/ansi-colors/types/index.d.ts:212

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

#### Defined in

node_modules/ansi-colors/types/index.d.ts:217

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

#### Defined in

node_modules/ansi-colors/types/index.d.ts:222

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

#### Defined in

node_modules/ansi-colors/types/index.d.ts:230

___

### create

▸ **create**(): typeof [`style`](style.md)

#### Returns

typeof [`style`](style.md)

#### Defined in

node_modules/ansi-colors/types/index.d.ts:232

___

### reset

▸ **reset**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bold

▸ **bold**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### dim

▸ **dim**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### italic

▸ **italic**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### underline

▸ **underline**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### inverse

▸ **inverse**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### hidden

▸ **hidden**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### strikethrough

▸ **strikethrough**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### black

▸ **black**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### red

▸ **red**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### green

▸ **green**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### yellow

▸ **yellow**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### blue

▸ **blue**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### magenta

▸ **magenta**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### cyan

▸ **cyan**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### white

▸ **white**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### gray

▸ **gray**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### grey

▸ **grey**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### blackBright

▸ **blackBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### redBright

▸ **redBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### greenBright

▸ **greenBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### yellowBright

▸ **yellowBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### blueBright

▸ **blueBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### magentaBright

▸ **magentaBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### cyanBright

▸ **cyanBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### whiteBright

▸ **whiteBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgBlack

▸ **bgBlack**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgRed

▸ **bgRed**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgGreen

▸ **bgGreen**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgYellow

▸ **bgYellow**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgBlue

▸ **bgBlue**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgMagenta

▸ **bgMagenta**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgCyan

▸ **bgCyan**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgWhite

▸ **bgWhite**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgBlackBright

▸ **bgBlackBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgRedBright

▸ **bgRedBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgGreenBright

▸ **bgGreenBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgYellowBright

▸ **bgYellowBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgBlueBright

▸ **bgBlueBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgMagentaBright

▸ **bgMagentaBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgCyanBright

▸ **bgCyanBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

___

### bgWhiteBright

▸ **bgWhiteBright**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:150

## Variables

### enabled

• **enabled**: `boolean`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:205

___

### visible

• **visible**: `boolean`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:206

___

### ansiRegex

• `Const` **ansiRegex**: `RegExp`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:207

___

### styles

• `Const` **styles**: `StylesType`<`StyleType`\>

#### Defined in

node_modules/ansi-colors/types/index.d.ts:224

___

### symbols

• `Const` **symbols**: `SymbolsType`

#### Defined in

node_modules/ansi-colors/types/index.d.ts:225
