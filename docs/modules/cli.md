[nodejsscript](../README.md) / cli

# Namespace: cli

Helpers for simplify cli creation.

## Table of contents

### Functions

- [register](cli.md#register)
- [question](cli.md#question)

## Functions

### register

▸ **register**(`usage`, `is_single?`): [`Sade`](../interfaces/sade.Sade.md)

A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
In addition to the origin, `cli.register()` supports to fill script name from script file name.
This should be good balance between [commander - npm](https://www.npmjs.com/package/commander) and parsing arguments and writing help texts by hand.
For more complex scripts just create full npm package.
```js
cli.register("", true)
	.version("0.1.0")
	.describe("NodeJS Script cli test")
	.action(echo);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `usage` | `string` | The script name and usage (`[optional]`/`<required>`). If no `name`, then the script file name will be used. |
| `is_single?` | `boolean` | See [__sade](../README.md#__sade) |

#### Returns

[`Sade`](../interfaces/sade.Sade.md)

#### Defined in

[index.d.ts:126](https://github.com/jaandrle/nodejsscript/blob/0f08352/index.d.ts#L126)

___

### question

▸ **question**(`query?`, `options?`): `Promise`<`string`\>

Promt user for answer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query?` | `string` | Question |
| `options?` | `Object` | The optional `completions` is array of options to be suggested when `tab` key is pressed. |
| `options.completions` | `string`[] | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[index.d.ts:132](https://github.com/jaandrle/nodejsscript/blob/0f08352/index.d.ts#L132)
