[nodejsscript](../README.md) / cli

# Namespace: cli

Namespace contains helpers for working with command line interface.

## Table of contents

### Functions

- [register](cli.md#register)
- [question](cli.md#question)
- [rewritable](cli.md#rewritable)

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

[index.d.ts:186](https://github.com/jaandrle/nodejsscript/blob/cd34166/index.d.ts#L186)

___

### question

▸ **question**(`query?`, `options?`): `Promise`<`string`\>

Promt user for answer. A wrapper around the [readline](https://nodejs.org/api/readline.html) package.
```js
const bear= await cli.question('What kind of bear is best?');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query?` | `string` | Question |
| `options?` | `Object` | The optional `completions` is array of options to be suggested when `tab` key is pressed. |
| `options.completions` | `string`[] | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[index.d.ts:195](https://github.com/jaandrle/nodejsscript/blob/cd34166/index.d.ts#L195)

___

### rewritable

▸ **rewritable**<`T`\>(`options?`): `T`

Overwritable text output, returns [Topic](pubsub.md#topic-1).
So for updating text use [publish](pubsub.md#publish), for end [publishClose](pubsub.md#publishclose).
```js
const { pub, pubC }= pubsub;
const topic= cli.rewritable();
pub(topic, "Task started");
// … later
pub(topic, "1/n Done");
// … later
pubC(topic);
echo("Task finished");
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Topic`](pubsub.md#topic-1) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Options` & { `stream?`: `WritableStream` ; `showCursor`: `boolean` ; `end`: ``"clear"`` \| ``"done"`` ; `topic`: `T`  } |

#### Returns

`T`

#### Defined in

[index.d.ts:210](https://github.com/jaandrle/nodejsscript/blob/cd34166/index.d.ts#L210)
