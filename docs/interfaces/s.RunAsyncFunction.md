[nodejsscript](../README.md) / [s](../modules/s.md) / RunAsyncFunction

# Interface: RunAsyncFunction

[s](../modules/s.md).RunAsyncFunction

## Callable

### RunAsyncFunction

▸ **RunAsyncFunction**(`command`, `vars`): [`ProcessPromise`](../classes/s.ProcessPromise.md)

Executes the given command asynchronously.
```js
s.$().runA("git branch --show-current")
.pipe(echo.bind(echo, "success:"))
.catch(echo.bind(echo, "error:"))

const ch= s.$().runA("git branch --show-current");
ch.child.on("data", echo);

const result_a= await s.$().runA("git branch --show-current");
echo(result_a.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value. |
| `vars` | ``false`` \| {} | Arguments for `command`. |

#### Returns

[`ProcessPromise`](../classes/s.ProcessPromise.md)

#### Defined in

[src/shelljs.d.ts:146](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/shelljs.d.ts#L146)

### RunAsyncFunction

▸ **RunAsyncFunction**(`command`, `vars`, `options`): [`ProcessPromise`](../classes/s.ProcessPromise.md)

Executes the given command asynchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value. |
| `vars` | ``false`` \| {} | Arguments for `command`. |
| `options` | [`RunOptions`](../modules/s.md#runoptions) | Silence and options. |

#### Returns

[`ProcessPromise`](../classes/s.ProcessPromise.md)

#### Defined in

[src/shelljs.d.ts:155](https://github.com/jaandrle/nodejsscript/blob/f98d532/src/shelljs.d.ts#L155)
