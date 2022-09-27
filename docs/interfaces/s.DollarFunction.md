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
const branch= s.$().run("git branch --show-current");
echo(branch);

s.$("-VF").run("gyt branch --show-current");

s.$("-g").rm("*.tx"); //remove only "*.txt" file
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``"-S"`` \| ``"-V"`` \| ``"-F"`` \| ``"-g"`` | Options  - "-V": verbose  - "-S": silent (default)  - "-F": fatal  - "-g": noglob |

#### Returns

[`ShellString`](../modules/s.md#shellstring)

#### Defined in

[src/shelljs.d.ts:54](https://github.com/jaandrle/nodejsscript/blob/a6e3251/src/shelljs.d.ts#L54)

### DollarFunction

▸ **DollarFunction**(): [`ShellString`](../modules/s.md#shellstring)

#### Returns

[`ShellString`](../modules/s.md#shellstring)

#### Defined in

[src/shelljs.d.ts:55](https://github.com/jaandrle/nodejsscript/blob/a6e3251/src/shelljs.d.ts#L55)