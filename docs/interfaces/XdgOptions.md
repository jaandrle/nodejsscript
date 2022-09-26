[nodejsscript](../README.md) / XdgOptions

# Interface: XdgOptions

## Table of contents

### Properties

- [cachedir](XdgOptions.md#cachedir)
- [configdir](XdgOptions.md#configdir)
- [datadir](XdgOptions.md#datadir)
- [env](XdgOptions.md#env)
- [expanded](XdgOptions.md#expanded)
- [homedir](XdgOptions.md#homedir)
- [platform](XdgOptions.md#platform)
- [resolve](XdgOptions.md#resolve)
- [runtimedir](XdgOptions.md#runtimedir)
- [subdir](XdgOptions.md#subdir)
- [tempdir](XdgOptions.md#tempdir)

## Properties

### cachedir

• **cachedir**: `string`

Override the default cachedir

#### Defined in

src/xdg.d.ts:3

___

### configdir

• **configdir**: `string`

Override the default configdir

#### Defined in

src/xdg.d.ts:5

___

### datadir

• **datadir**: `string`

Override the default datadir

#### Defined in

src/xdg.d.ts:7

___

### env

• **env**: `object`

The env object to use for getting paths.

#### Defined in

src/xdg.d.ts:9

___

### expanded

• **expanded**: `boolean`

Expand paths into an object. See the Expanded Paths example for more details.

#### Defined in

src/xdg.d.ts:11

___

### homedir

• **homedir**: `string`

The user's home directory.

#### Defined in

src/xdg.d.ts:13

___

### platform

• **platform**: `string`

The platform to use: darwin, linux, win32

#### Defined in

src/xdg.d.ts:15

___

### resolve

• **resolve**: `Function`

Custom function for resolving paths to each directory. The default function attempts to respect casing in the user's existing directories.

#### Defined in

src/xdg.d.ts:17

___

### runtimedir

• **runtimedir**: `string`

Override the default runtimedir

#### Defined in

src/xdg.d.ts:19

___

### subdir

• **subdir**: `string`

A sub-directory to join to the path, typically the name of your application. This path is joined differently on each platform. See examples.

#### Defined in

src/xdg.d.ts:21

___

### tempdir

• **tempdir**: `string`

The temp directory to use.

#### Defined in

src/xdg.d.ts:23
