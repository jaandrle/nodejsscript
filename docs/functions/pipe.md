[**nodejsscript**](../README.md) • **Docs**

***

[nodejsscript](../README.md) / pipe

# Function: pipe()

> **pipe**(...`funs`): (`input`) => `any`

Function similar to [Ramda `R.pipe`](https://ramdajs.com/docs/#pipe). Provides functional way to combine commands/functions.

```js
pipe(
	Number,
	v=> `Result is: ${v}`,
	echo
)(await question("Choose number:"));
```

## Parameters

• ...**funs**: `Function`[]

## Returns

`Function`

### Parameters

• **input**: `any`

### Returns

`any`
