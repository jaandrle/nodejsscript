[nodejsscript](../README.md) / [s](../modules/s.md) / RunFunction

# Interface: RunFunction

[s](../modules/s.md).RunFunction

## Callable

### RunFunction

▸ **RunFunction**(`command`, `vars?`): [`ShellString`](../modules/s.md#shellstring)

Executes the given command synchronously.

*Synchronous simple examples*:
```js
s.run("node --version");
const version= s.$().run("node --version").stdout;
```
*Passing variables*:
```js
const branch= s.$().run("git branch --show-current").stdout;
s.run("echo ::branch::", { branch });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value. |
| `vars?` | `Object` | Arguments for `command`. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns an object containing the return code and output as [ShellString](../modules/s.md#shellstring).

#### Defined in

[src/shelljs.d.ts:86](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/shelljs.d.ts#L86)

### RunFunction

▸ **RunFunction**(`command`, `vars`, `options`): [`ShellString`](../modules/s.md#shellstring)

Executes the given command synchronously.

*Passing variables*:
```js
const branch= s.$().run("git branch --show-current").stdout;
s.run("echo ::branch::", { branch });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value. |
| `vars` | ``false`` \| {} | Arguments for `command`. |
| `options` | [`RunOptions`](../modules/s.md#runoptions) | Silence and options. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns an object containing the return code and output as [ShellString](../modules/s.md#shellstring).

#### Defined in

[src/shelljs.d.ts:102](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/shelljs.d.ts#L102)
