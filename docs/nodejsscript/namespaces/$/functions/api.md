[**nodejsscript**](../../../../README.md)

***

[nodejsscript](../../../../README.md) / [$](../README.md) / api

# Function: api()

> **api**(`usage`, `is_single?`): [`Sade`](../../sade/interfaces/Sade.md)

A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.
In addition to the origin, `$.api()` supports to fill script name from script file name.
Also, you can call `*.parse()` and it automatically use `process.argv` or use `*.parse(options: {})` with custom `argv` key.
This should be good balance between [commander - npm](https://www.npmjs.com/package/commander) and parsing arguments and writing help texts by hand.
For more complex scripts just create full npm package.
```js
$.api("", true)
.version("0.1.0")
.describe("NodeJS Script $ test")
.action(echo)
.parse();
```
	
```js
$.api("copy <file> <destination>", true)
.version("0.1.0")
.describe("copy file simpulation")
.option("--force", "Overwrite file in destination.")
.action(function(file, destination, { force }){
	// copy file logic
})
.parse();
```

```js
const prog= $.api('my-cli');
prog
  .version('1.0.5')
  .option('--global, -g', 'An example global flag')
  .option('-c, --config', 'Provide path to custom config', 'foo.config.js');
prog
  .command('build <src> <dest>')
  .describe('Build the source directory. Expects an `index.js` entry file.')
  .option('-o, --output', 'Change the name of the output file', 'bundle.js')
  .example('build src build --global --config my-conf.js')
  .example('build app public -o main.js')
  .action((src, dest, opts) => {
    echo(`> building from ${src} to ${dest}`);
    echo('> these are extra opts', opts);
  });
prog.parse();
```

## Parameters

### usage

`string`

The script name and usage (`[optional]`/`<required>`). If no `name`, then the script file name will be used.

### is\_single?

`boolean`

See [\_\_sade](../../../../functions/sade.md)

## Returns

[`Sade`](../../sade/interfaces/Sade.md)
