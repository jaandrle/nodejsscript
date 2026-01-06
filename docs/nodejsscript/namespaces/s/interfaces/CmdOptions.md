[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / CmdOptions

# Interface: CmdOptions

## Properties

### cwd?

> `optional` **cwd**: `string`

Change the current working directory only for this `cmd()` invocation.

#### Default

```ts
process.cwd()
```

***

### maxBuffer?

> `optional` **maxBuffer**: `number`

Raise or decrease the default buffer size for stdout/stderr.

#### Default

```ts
20,971,520 (or 20 * 1024 * 1024)
```

***

### timeout?

> `optional` **timeout**: `number`

Change the default timeout.

#### Default

```ts
0
```
