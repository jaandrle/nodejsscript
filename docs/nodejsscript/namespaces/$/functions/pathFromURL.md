[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [$](../README.md) / pathFromURL

# Function: pathFromURL()

> **pathFromURL**(`from_url`): (`template`, ...`substitutions`) => `string` \| (`relative`) => `string`

This is a helper motivated to evaluate relative paths from current script file:
```js
const $path= $.pathFromURL(import.meta.url);
echo("Relative path: ", $path`../file.txt`);
```

## Parameters

### from\_url

`URL`

## Returns

(`template`, ...`substitutions`) => `string`

String.raw is usually used as a tag function of a Tagged Template String. When called as
such, the first argument will be a well formed template call site object and the rest
parameter will contain the substitution values. It can also be called directly, for example,
to interleave strings and values from your own tag function, and in this case the only thing
it needs from the first argument is the raw property.

## Parameters

### template

A well-formed template string call site representation.

#### raw

readonly `string`[] \| `ArrayLike`\<`string`\>

### substitutions

...`any`[]

A set of substitution values.

## Returns

`string`

(`relative`) => `string`

## Parameters

### relative

`string`

## Returns

`string`
