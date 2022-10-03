[nodejsscript](../README.md) / [s](../modules/s.md) / RunFunction

# Interface: RunFunction

[s](../modules/s.md).RunFunction

## Callable

### RunFunction

▸ **RunFunction**(`command`, `vars?`): [`ShellString`](../modules/s.md#shellstring)

Executes the given command synchronously, because of that it does not know whether it will be piped,
so by default prints the command output. You can off that by prepend `….$().run`.

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

[src/shelljs.d.ts:87](https://github.com/jaandrle/nodejsscript/blob/8f362e5/src/shelljs.d.ts#L87)

### RunFunction

▸ **RunFunction**(`command`, `vars`, `options`): [`ShellString`](../modules/s.md#shellstring)

Executes the given command synchronously, because of that it does not know whether it will be piped,
so by default prints the command output. You can off that by prepend `….$().run`.

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

[src/shelljs.d.ts:104](https://github.com/jaandrle/nodejsscript/blob/8f362e5/src/shelljs.d.ts#L104)
