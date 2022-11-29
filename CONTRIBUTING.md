# How to contribute
Contributions to the project generally take one of three forms:

1. Issues reports
    1. Bug reports
    1. Feature requests
1. Patches
1. Documentation/examples improvements

## Issues reports
The proper way to report Bug/Feature is to use corresponding issue template.

The maintenance team will read all created issues and …:

1. … provide additional information such as priority and/or ask for more information
1. … assign them to targerted milestone (with specific deadline, if it is known).

## Patches
__We're super grateful for your patch__

The best way to make sure your issue is addressed is to submit a patch.
We accept patches through all mediums: pull requests, issue
comment, email (andrle.jan+at+centrum.cz) and mastodon (@jaandrle@fosstodon.org).

However, before sending a patch, please take try to:

- make your commit message describtive and use issue links for better
understandig commit purpose.
- make your coding style similar to ours, mainly
	- use tabulator for indentation
	- camelCase for function names
	- snake\_case for variables

### Development Environment
The library is developed using [Node.js](http://nodejs.org/) and has
a number of dependencies specified in its package.json file.
To install them just run the following command from within your
repo directory:
```bash
$ npm ci
```
There is `npm` task for generating documentation from TypeScript anotations:
```bash
npm run doc
```

## Documentation/examples improvements
You can use issue for reporting errors and suggesting improvements
similary to [Issues reports](#issues-reports). It is also acceptable
to open issue with question if it wasn’t currently adressed anywhere
and you think it schould.

For updating documentation and examples follow [Patches](#Patches).
The documentation is created by [typedoc](https://github.com/TypeStrong/typedoc).

You can also improve examples founded in [examples/](./docs/examples/).

---
This text was inspired by
[jshint’s one](https://github.com/jshint/jshint/blob/master/CONTRIBUTING.md).
