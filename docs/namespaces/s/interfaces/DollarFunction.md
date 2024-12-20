[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / DollarFunction

# Interface: DollarFunction()

> **DollarFunction**(`options`): [`ShellString`](../type-aliases/ShellString.md)

Modifies [config](../variables/config.md) for next command in chain. The `$()` runs next command in silent mode:
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

## Parameters

• **options**: `"-f"` \| `"-S"` \| `"-V"` \| `"-F"` \| `"-g"` \| `"-v"` \| `"-s"` \| `"-G"`

Options
	- "-V": verbose
	- "-S": silent (default)
	- "-F": fatal
	- "-G": glob (evaluate `*` in paths)
	- to off option(s) use lower-case letters ("-v" no-verbose, "-s" …, …, **"-g" noglob**)

## Returns

[`ShellString`](../type-aliases/ShellString.md)

> **DollarFunction**(): [`ShellString`](../type-aliases/ShellString.md)

## Returns

[`ShellString`](../type-aliases/ShellString.md)
