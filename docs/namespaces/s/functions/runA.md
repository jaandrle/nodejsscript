[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [s](../README.md) / runA

# Function: runA()

Executes the given command asynchronously, the function arguments
are the same as for [s.run](run.md) function except that the
[`child_process.spawn`](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options)
is used internally.
```js
s.runA`git branch --show-current`;
s.runA`echa ${"Hello World"}`;
s.runA("echo ::var::", { var: "Hello World" });
s.runA("echo 'HI'", null, { cwd: "../" });
```

The function returns a [ProcessPromise](../classes/ProcessPromise.md) object.
```js
const result_a= await s.$().runA("git branch --show-current");
echo(result_a.toString());

const result_b= await s.$().runA("git branch --show-::var::", { var: "current" }, { silent: true });
echo(result_b.toString());

const ch= s.$().runA`git branch --show-current`;
ch.child.on("data", echo);
```

## Param

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

## Param

Arguments for `command`.

## Param

Silence and synchronous options.

## runA(command, vars)

> **runA**(`command`, `vars`): [`ProcessPromise`](../classes/ProcessPromise.md)

### Parameters

• **command**: `string`

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

• **vars**: `false` \| `object`

Arguments for `command`.

### Returns

[`ProcessPromise`](../classes/ProcessPromise.md)

Returns [ProcessPromise](../classes/ProcessPromise.md).

### Param

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

### Param

Arguments for `command`.

### Param

Silence and synchronous options.

## runA(command, vars, options)

> **runA**(`command`, `vars`, `options`): [`ProcessPromise`](../classes/ProcessPromise.md)

### Parameters

• **command**: `string`

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

• **vars**: `false` \| `object`

Arguments for `command`.

• **options**: [`RunOptions`](../type-aliases/RunOptions.md)

Silence and options.

### Returns

[`ProcessPromise`](../classes/ProcessPromise.md)

Returns [ProcessPromise](../classes/ProcessPromise.md).

### Param

String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.

### Param

Arguments for `command`.

### Param

Silence and synchronous options.
