[**nodejsscript**](../../../README.md) • **Docs**

***

[nodejsscript](../../../README.md) / [$](../README.md) / isFIFO

# Function: isFIFO()

> **isFIFO**(`stream_id`): `boolean`

Method to check whether script stdin/stdout (0/1) is a first-in-first-out (FIFO) pipe or not.
```bash
node pipes.js | … # — test by $.isFIFO(1)
… | node pipes.js # — test by $.isFIFO(0)
```

## Parameters

• **stream\_id**: `0` \| `1`

## Returns

`boolean`