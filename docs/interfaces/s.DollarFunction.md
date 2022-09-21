[nodejsscript](../README.md) / [s](../modules/s.md) / DollarFunction

# Interface: DollarFunction

[s](../modules/s.md).DollarFunction

## Callable

### DollarFunction

▸ **DollarFunction**(`options`): [`ShellReturnValue`](s.ShellReturnValue.md)

Modifies [config](../modules/s.md#config) for next command. By default `silent= true`

**`Example`**

```ts
// comapre bash
var=$(echo Hi)
echo $var
// with
const var= s.$().echo("Hi");
echo(var);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``"-f"`` \| ``"-v"`` \| ``"-s"`` | Options  - "-v":  verbose  - "-s": silent (default)  - "-f": fatal |

#### Returns

[`ShellReturnValue`](s.ShellReturnValue.md)

#### Defined in

[src/shelljs.d.ts:33](https://github.com/jaandrle/nodejsscript/blob/fe6a3a4/src/shelljs.d.ts#L33)

### DollarFunction

▸ **DollarFunction**(): [`ShellReturnValue`](s.ShellReturnValue.md)

#### Returns

[`ShellReturnValue`](s.ShellReturnValue.md)

#### Defined in

[src/shelljs.d.ts:34](https://github.com/jaandrle/nodejsscript/blob/fe6a3a4/src/shelljs.d.ts#L34)
