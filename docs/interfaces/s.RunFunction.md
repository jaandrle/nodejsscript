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

Returns an object containing the return code and output as string.

#### Defined in

[src/shelljs.d.ts:93](https://github.com/jaandrle/nodejsscript/blob/23d39a7/src/shelljs.d.ts#L93)

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
| `options` | [`ExecOptions`](s.ExecOptions.md) & { `async?`: `boolean` \| ``"child"`` ; `needle?`: `RegExp`  } & { `async?`: ``false``  } | Silence and synchronous options. |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

Returns an object containing the return code and output as string,
				  or if `{async: true}` was passed, a `ChildProcess`.

#### Defined in

[src/shelljs.d.ts:110](https://github.com/jaandrle/nodejsscript/blob/23d39a7/src/shelljs.d.ts#L110)

### RunFunction

▸ **RunFunction**(`command`, `vars`, `options`): `Promise`<`string`\>

Executes the given command asynchronously.
```js
s.$().run("git branch --show-current", false, { async: true })
.then(echo.bind(echo, "success:"))
.catch(echo.bind(echo, "error:"))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value. |
| `vars` | ``false`` \| {} | Arguments for `command`. |
| `options` | [`ExecOptions`](s.ExecOptions.md) & { `async?`: `boolean` \| ``"child"`` ; `needle?`: `RegExp`  } & { `async`: ``true``  } | Silence and synchronous options. |

#### Returns

`Promise`<`string`\>

Returns an object containing the return code and output as string,
				  or if `{async: true}` was passed, a `Promise`.

#### Defined in

[src/shelljs.d.ts:126](https://github.com/jaandrle/nodejsscript/blob/23d39a7/src/shelljs.d.ts#L126)

### RunFunction

▸ **RunFunction**(`command`, `vars`, `options`): [`ChildProcess`](../classes/s.child.ChildProcess.md)

Executes the given command asynchronously. *Get the [child](../modules/s.child.md)*:
```js
const ch= s.$().run("git branch --show-current", false, { async: "child" });
ch.on("data", echo);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value. |
| `vars` | ``false`` \| {} | Arguments for `command`. |
| `options` | `never` | Silence and synchronous options. |

#### Returns

[`ChildProcess`](../classes/s.child.ChildProcess.md)

Returns an object containing the return code and output as string,
				  or if `{async: "child"}` was passed, a `ChildProcess`.

#### Defined in

[src/shelljs.d.ts:141](https://github.com/jaandrle/nodejsscript/blob/23d39a7/src/shelljs.d.ts#L141)
