[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [$](../README.md) / configAssign

# Function: configAssign()

> **configAssign**(...`c`): `void`

Set multiple options except `glob_options` with one command.
```js
const { is_verbose, is_fatal }= $;
$.is_silent= true;
const $.configAssign({ verbose: true, silent: false });
```

## Parameters

### c

...`Record`\<`"silent"` \| `"fatal"` \| `"verbose"`, `boolean`\>[]

## Returns

`void`
