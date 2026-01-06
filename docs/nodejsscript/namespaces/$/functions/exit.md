[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [$](../README.md) / exit

# Function: exit()

> **exit**(`code?`, ...`ignore?`): `never`

Just an alias for [\_exit](../../../../functions/exit.md). Any other argument is ignored, so you can use:
```js
if($.hasArgs("-v", "--version")) $.exit(0, echo("v0.0.1"));
```

## Parameters

### code?

`number`

### ignore?

...`any`[]

## Returns

`never`
