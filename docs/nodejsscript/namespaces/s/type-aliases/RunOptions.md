[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / RunOptions

# Type Alias: RunOptions

> **RunOptions** = [`ExecOptions`](../interfaces/ExecOptions.md) & `object`

Use options as for:

- [`child_process.spawn`](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options)
- [`child_process.execFileSync`](https://nodejs.org/api/child_process.html#child_processexecfilefile-args-options-callback)

…in addition, use `needle` to replace `::var::` in `command` with actual
`var` value.

## Type Declaration

### needle?

> `optional` **needle**: `RegExp`

Pattern in `command` to be replacced by variables.

#### Default

```ts
/::([^:]+)::/g
```
