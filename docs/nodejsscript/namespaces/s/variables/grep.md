[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / grep

# Variable: grep

> `const` **grep**: [`GrepFunction`](../interfaces/GrepFunction.md)

Reads input string from given files and returns a string containing all lines
of the file that match the given `regex_filter`. Wildcard `*` accepted.

## Param

**options**

Available options:
       - `-v`: Inverse the sense of the regex and print
               the lines not matching the criteria.
       - `-l`: Print only filenames of matching files

## Param

**regex\_filter**

The regular expression to use.

## Param

**files**

The files to process.

## Returns

Returns a string containing all lines of the file that match the given `regex_filter`.
