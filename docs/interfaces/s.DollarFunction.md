[nodejsscript](../README.md) / [s](../modules/s.md) / DollarFunction

# Interface: DollarFunction

[s](../modules/s.md).DollarFunction

## Callable

### DollarFunction

▸ **DollarFunction**(`options`): [`ShellString`](../modules/s.md#shellstring)

Modifies [config](../modules/s.md#config) for next command in chain. The `$()` runs next command in silent mode:
```bash
// comapre bash
var=$(echo Hi)
echo $var
// with
const var= s.$().echo("Hi");
echo(var);
```
…examples:
```js
const branch= s.$().exec("git branch --show-current");
echo(branch);

s.$("-vf").exec("gyt branch --show-current");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``"-f"`` \| ``"-v"`` \| ``"-s"`` | Options  - "-v":  verbose  - "-s": silent (default)  - "-f": fatal |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

#### Defined in

[src/shelljs.d.ts:46](https://github.com/jaandrle/nodejsscript/blob/574f62d/src/shelljs.d.ts#L46)

### DollarFunction

▸ **DollarFunction**(): [`ShellString`](../modules/s.md#shellstring)

#### Returns

[`ShellString`](../modules/s.md#shellstring)

#### Defined in

[src/shelljs.d.ts:47](https://github.com/jaandrle/nodejsscript/blob/574f62d/src/shelljs.d.ts#L47)
