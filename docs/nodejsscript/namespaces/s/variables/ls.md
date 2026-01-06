[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [s](../README.md) / ls

# Variable: ls

> `const` **ls**: [`ListFunction`](../interfaces/ListFunction.md)

Returns array of files in the given path, or in current directory if no path provided.

## Param

Available options:
       - `-R`: recursive
       - `-A`: all files (include files beginning with ., except for . and ..)
       - `-L`: follow symlinks
       - `-d`: list directories themselves, not their contents
       - `-l`: list objects representing each file, each with fields containing
               `ls -l` output fields. See fs.Stats for more info

## Param

Paths to search.

## Returns

An array of files in the given path(s).
