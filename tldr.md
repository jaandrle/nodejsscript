### s.cat([options,] file [, file ...])
### s.cat([options,] file_array)

Available options:

+ `-n`: number all output lines

Examples:

```javascript
var str = cat('file*.txt');
var str = cat('file1', 'file2');
var str = cat(['file1', 'file2']); // same as above
```

Returns a [ShellString](#shellstringstr) containing the given file, or a
concatenated string containing the files if more than one file is given (a
new line character is introduced between each file).


### s.cd([dir])

Changes to directory `dir` for the duration of the script. Changes to home
directory if no argument is supplied. Returns a
[ShellString](#shellstringstr) to indicate success or failure.


### s.chmod([options,] octal_mode || octal_string, file)
### s.chmod([options,] symbolic_mode, file)

Available options:

+ `-v`: output a diagnostic for every file processed
+ `-c`: like verbose, but report only when a change is made
+ `-R`: change files and directories recursively

Examples:

```javascript
chmod(755, '/Users/brandon');
chmod('755', '/Users/brandon'); // same as above
chmod('u+x', '/Users/brandon');
chmod('-R', 'a-w', '/Users/brandon');
```

Alters the permissions of a file or directory by either specifying the
absolute permissions in octal form or expressing the changes in symbols.
This command tries to mimic the POSIX behavior as much as possible.
Notable exceptions:

+ In symbolic modes, `a-r` and `-r` are identical.  No consideration is
  given to the `umask`.
+ There is no "quiet" option, since default behavior is to run silent.
+ Windows OS uses a very different permission model than POSIX. `chmod()`
  does its best on Windows, but there are limits to how file permissions can
  be set. Note that WSL (Windows subsystem for Linux) **does** follow POSIX,
  so cross-platform compatibility should not be a concern there.

Returns a [ShellString](#shellstringstr) indicating success or failure.


### s.cp([options,] source [, source ...], dest)
### s.cp([options,] source_array, dest)

Available options:

+ `-f`: force (default behavior)
+ `-n`: no-clobber
+ `-u`: only copy if `source` is newer than `dest`
+ `-r`, `-R`: recursive
+ `-L`: follow symlinks
+ `-P`: don't follow symlinks
+ `-p`: preserve file mode, ownership, and timestamps

Examples:

```javascript
cp('file1', 'dir1');
cp('-R', 'path/to/dir/', '~/newCopy/');
cp('-Rf', '/tmp/*', '/usr/local/*', '/home/tmp');
cp('-Rf', ['/tmp/*', '/usr/local/*'], '/home/tmp'); // same as above
```

Copies files. Returns a [ShellString](#shellstringstr) indicating success
or failure.


### s.pushd([options,] [dir | '-N' | '+N'])

Available options:

+ `-n`: Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated.
+ `-q`: Suppresses output to the console.

Arguments:

+ `dir`: Sets the current working directory to the top of the stack, then executes the equivalent of `cd dir`.
+ `+N`: Brings the Nth directory (counting from the left of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
+ `-N`: Brings the Nth directory (counting from the right of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.

Examples:

```javascript
// process.cwd() === '/usr'
pushd('/etc'); // Returns /etc /usr
pushd('+1');   // Returns /usr /etc
```

Save the current directory on the top of the directory stack and then `cd` to `dir`. With no arguments, `pushd` exchanges the top two directories. Returns an array of paths in the stack.


### s.popd([options,] ['-N' | '+N'])

Available options:

+ `-n`: Suppress the normal directory change when removing directories from the stack, so that only the stack is manipulated.
+ `-q`: Suppresses output to the console.

Arguments:

+ `+N`: Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.
+ `-N`: Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.

Examples:

```javascript
echo(process.cwd()); // '/usr'
pushd('/etc');       // '/etc /usr'
echo(process.cwd()); // '/etc'
popd();              // '/usr'
echo(process.cwd()); // '/usr'
```

When no arguments are given, `popd` removes the top directory from the stack and performs a `cd` to the new top directory. The elements are numbered from 0, starting at the first directory listed with dirs (i.e., `popd` is equivalent to `popd +0`). Returns an array of paths in the stack.


### s.dirs([options | '+N' | '-N'])

Available options:

+ `-c`: Clears the directory stack by deleting all of the elements.
+ `-q`: Suppresses output to the console.

Arguments:

+ `+N`: Displays the Nth directory (counting from the left of the list printed by dirs when invoked without options), starting with zero.
+ `-N`: Displays the Nth directory (counting from the right of the list printed by dirs when invoked without options), starting with zero.

Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if `+N` or `-N` was specified.

See also: `pushd`, `popd`


### s.find(path [, path ...])
### s.find(path_array)

Examples:

```javascript
find('src', 'lib');
find(['src', 'lib']); // same as above
find('.').filter(function(file) { return file.match(/\.js$/); });
```

Returns a [ShellString](#shellstringstr) (with array-like properties) of all
files (however deep) in the given paths.

The main difference from `ls('-R', path)` is that the resulting file names
include the base directories (e.g., `lib/resources/file1` instead of just `file1`).


### s.grep([options,] regex_filter, file [, file ...])
### s.grep([options,] regex_filter, file_array)

Available options:

+ `-v`: Invert `regex_filter` (only print non-matching lines).
+ `-l`: Print only filenames of matching files.
+ `-i`: Ignore case.
+ `-n`: Print line numbers.

Examples:

```javascript
grep('-v', 'GLOBAL_VARIABLE', '*.js');
grep('GLOBAL_VARIABLE', '*.js');
```

Reads input string from given files and returns a
[ShellString](#shellstringstr) containing all lines of the @ file that match
the given `regex_filter`.


### s.head([{'-n': \<num\>},] file [, file ...])
### s.head([{'-n': \<num\>},] file_array)

Available options:

+ `-n <num>`: Show the first `<num>` lines of the files

Examples:

```javascript
var str = head({'-n': 1}, 'file*.txt');
var str = head('file1', 'file2');
var str = head(['file1', 'file2']); // same as above
```

Read the start of a `file`. Returns a [ShellString](#shellstringstr).


### s.ln([options,] source, dest)

Available options:

+ `-s`: symlink
+ `-f`: force

Examples:

```javascript
ln('file', 'newlink');
ln('-sf', 'file', 'existing');
```

Links `source` to `dest`. Use `-f` to force the link, should `dest` already
exist. Returns a [ShellString](#shellstringstr) indicating success or
failure.


### s.ls([options,] [path, ...])
### s.ls([options,] path_array)

Available options:

+ `-R`: recursive
+ `-A`: all files (include files beginning with `.`, except for `.` and `..`)
+ `-L`: follow symlinks
+ `-d`: list directories themselves, not their contents
+ `-l`: provides more details for each file. Specifically, each file is
        represented by a structured object with separate fields for file
        metadata (see
        [`fs.Stats`](https://nodejs.org/api/fs.html#fs_class_fs_stats)). The
        return value also overrides `.toString()` to resemble `ls -l`'s
        output format for human readability, but programmatic usage should
        depend on the stable object format rather than the `.toString()`
        representation.

Examples:

```javascript
ls('projs/*.js');
ls('projs/**/*.js'); // Find all js files recursively in projs
ls('-R', '/users/me', '/tmp');
ls('-R', ['/users/me', '/tmp']); // same as above
ls('-l', 'file.txt'); // { name: 'file.txt', mode: 33188, nlink: 1, ...}
```

Returns a [ShellString](#shellstringstr) (with array-like properties) of all
the files in the given `path`, or files in the current directory if no
`path` is  provided.


### s.mkdir([options,] dir [, dir ...])
### s.mkdir([options,] dir_array)

Available options:

+ `-p`: full path (and create intermediate directories, if necessary)

Examples:

```javascript
mkdir('-p', '/tmp/a/b/c/d', '/tmp/e/f/g');
mkdir('-p', ['/tmp/a/b/c/d', '/tmp/e/f/g']); // same as above
```

Creates directories. Returns a [ShellString](#shellstringstr) indicating
success or failure.


### s.mv([options ,] source [, source ...], dest')
### s.mv([options ,] source_array, dest')

Available options:

+ `-f`: force (default behavior)
+ `-n`: no-clobber

Examples:

```javascript
mv('-n', 'file', 'dir/');
mv('file1', 'file2', 'dir/');
mv(['file1', 'file2'], 'dir/'); // same as above
```

Moves `source` file(s) to `dest`. Returns a [ShellString](#shellstringstr)
indicating success or failure.


### s.pwd()

Returns the current directory as a [ShellString](#shellstringstr).


### s.rm([options,] file [, file ...])
### s.rm([options,] file_array)

Available options:

+ `-f`: force
+ `-r, -R`: recursive

Examples:

```javascript
rm('-rf', '/tmp/*');
rm('some_file.txt', 'another_file.txt');
rm(['some_file.txt', 'another_file.txt']); // same as above
```

Removes files. Returns a [ShellString](#shellstringstr) indicating success
or failure.


### s.sed([options,] search_regex, replacement, file [, file ...])
### s.sed([options,] search_regex, replacement, file_array)

Available options:

+ `-i`: Replace contents of `file` in-place. _Note that no backups will be created!_

Examples:

```javascript
sed('-i', 'PROGRAM_VERSION', 'v0.1.3', 'source.js');
```

Reads an input string from `file`s, line by line, and performs a JavaScript `replace()` on
each of the lines from the input string using the given `search_regex` and `replacement` string or
function. Returns the new [ShellString](#shellstringstr) after replacement.

Note:

Like unix `sed`, ShellJS `sed` supports capture groups. Capture groups are specified
using the `$n` syntax:

```javascript
sed(/(\w+)\s(\w+)/, '$2, $1', 'file.txt');
```

Also, like unix `sed`, ShellJS `sed` runs replacements on each line from the input file
(split by '\n') separately, so `search_regex`es that span more than one line (or include '\n')
will not match anything and nothing will be replaced.


### s.sort([options,] file [, file ...])
### s.sort([options,] file_array)

Available options:

+ `-r`: Reverse the results
+ `-n`: Compare according to numerical value

Examples:

```javascript
sort('foo.txt', 'bar.txt');
sort('-r', 'foo.txt');
```

Return the contents of the `file`s, sorted line-by-line as a
[ShellString](#shellstringstr). Sorting multiple files mixes their content
(just as unix `sort` does).


### s.tail([{'-n': \<num\>},] file [, file ...])
### s.tail([{'-n': \<num\>},] file_array)

Available options:

+ `-n <num>`: Show the last `<num>` lines of `file`s

Examples:

```javascript
var str = tail({'-n': 1}, 'file*.txt');
var str = tail('file1', 'file2');
var str = tail(['file1', 'file2']); // same as above
```

Read the end of a `file`. Returns a [ShellString](#shellstringstr).


### s.test(expression)

Available expression primaries:

+ `'-b', 'path'`: true if path is a block device
+ `'-c', 'path'`: true if path is a character device
+ `'-d', 'path'`: true if path is a directory
+ `'-e', 'path'`: true if path exists
+ `'-f', 'path'`: true if path is a regular file
+ `'-L', 'path'`: true if path is a symbolic link
+ `'-p', 'path'`: true if path is a pipe (FIFO)
+ `'-S', 'path'`: true if path is a socket

Examples:

```javascript
if (test('-d', path)) { /* do something with dir */ };
if (!test('-f', path)) continue; // skip if it's not a regular file
```

Evaluates `expression` using the available primaries and returns
corresponding boolean value.


### s.ShellString.prototype.to(file)

Examples:

```javascript
cat('input.txt').to('output.txt');
```

Analogous to the redirection operator `>` in Unix, but works with
`ShellStrings` (such as those returned by `cat`, `grep`, etc.). _Like Unix
redirections, `to()` will overwrite any existing file!_ Returns the same
[ShellString](#shellstringstr) this operated on, to support chaining.


### s.ShellString.prototype.toEnd(file)

Examples:

```javascript
cat('input.txt').toEnd('output.txt');
```

Analogous to the redirect-and-append operator `>>` in Unix, but works with
`ShellStrings` (such as those returned by `cat`, `grep`, etc.). Returns the
same [ShellString](#shellstringstr) this operated on, to support chaining.


### s.touch([options,] file [, file ...])
### s.touch([options,] file_array)

Available options:

+ `-a`: Change only the access time
+ `-c`: Do not create any files
+ `-m`: Change only the modification time
+ `{'-d': someDate}`, `{date: someDate}`: Use a `Date` instance (ex. `someDate`)
  instead of current time
+ `{'-r': file}`, `{reference: file}`: Use `file`'s times instead of current
  time

Examples:

```javascript
touch('source.js');
touch('-c', 'path/to/file.js');
touch({ '-r': 'referenceFile.txt' }, 'path/to/file.js');
touch({ '-d': new Date('December 17, 1995 03:24:00'), '-m': true }, 'path/to/file.js');
touch({ date: new Date('December 17, 1995 03:24:00') }, 'path/to/file.js');
```

Update the access and modification times of each file to the current time.
A file argument that does not exist is created empty, unless `-c` is supplied.
This is a partial implementation of
[`touch(1)`](http://linux.die.net/man/1/touch). Returns a
[ShellString](#shellstringstr) indicating success or failure.


### s.uniq([options,] [input, [output]])

Available options:

+ `-i`: Ignore case while comparing
+ `-c`: Prefix lines by the number of occurrences
+ `-d`: Only print duplicate lines, one for each group of identical lines

Examples:

```javascript
uniq('foo.txt');
uniq('-i', 'foo.txt');
uniq('-cd', 'foo.txt', 'bar.txt');
```

Filter adjacent matching lines from `input`. Returns a
[ShellString](#shellstringstr).


### s.which(command)

Examples:

```javascript
var nodeExec = which('node');
```

Searches for `command` in the system's `PATH`. On Windows, this uses the
`PATHEXT` variable to append the extension if it's not already executable.
Returns a [ShellString](#shellstringstr) containing the absolute path to
`command`.


### s.error()

Tests if error occurred in the last command. Returns a truthy value if an
error returned, or a falsy value otherwise.

**Note**: do not rely on the
return value to be an error message. If you need the last error message, use
the `.stderr` attribute from the last command's return value instead.


### s.errorCode()

Returns the error code from the last command.

### s.xargs([options,], cmd[, cmd_args])

Available options:

+ `-I`: Next parameter represents to be replaced in `cmd_args`.
+ `-R`: Raw piped string ⇒ turn off escaping piped string (by default).


Works as `xargs` in bash, only `-I` option is supported.
```js
s.run("git branch --show-current").xargs(s.run, "dep deploy --branch={}");
s.run("git branch --show-current").xargs({ "-I": "§" }, s.run, "dep deploy --branch=§");
```
*xarg() by default escapes piped string, this can be off by passing `-R` option.*

@param options	Defaults to `-I {}`
@param cmd		ShellJS method from {@link ShellReturnValue}
@param cmd_args	Arguments for `cmd`
@return			Result of `cmd`

### s.$()
### s.$(options)

Modifies {@link config} for next command in chain. The `$()` runs next command in silent mode:
```bash
// comapre bash
var=$(echo Hi)
echo $var
// with
const var= s.$().echo("Hi");
echo(var);
```
…examples:
```js
const branch= s.$().run("git branch --show-current");
echo(branch);

s.$("-VF").run("gyt branch --show-current");

s.$("-g").rm("*.tx"); //remove only "*.txt" file
```

@param options Options
- "-V": verbose
- "-S": silent (default)
- "-F": fatal
- "-G": glob (evaluate `*` in paths)
- to off option(s) use lower-case letters ("-v" no-verbose, "-s" …, …, **"-g" noglob**)

### s.run`cmd`
### s.run(cmd[, vars][, options])

You can use this function to run executable commands not listed
in the shelljs (`s` namespace). For example (the simplest one):
```js
s.run`git branch --show-current`;
```
…you can also pass variables and function automatically escapes
them.
```js
const var= "Hello World";
s.run`echo ${var}`;
```
…alternatively you can use classic function approach:
```js
s.run("echo ::var::", { var: "Hello World" });
```
…this way you can also pass additional options:
```js
s.run("echo 'HI'", null, { cwd: "../" });
s.run("echo ::var::", { var: "Hi" }, { cwd: "../" });
```
Internally the [`child_process.execFileSync`](https://nodejs.org/api/child_process.html#child_processexecfilefile-args-options-callback)
is used to execute the command, so use any of the options
supported by that function.

By default the function prints the output of the command
to stdout. You can use `$.is_silent= false` or {@link s.$}:
```js
const branch= s.$().run`git branch --show-current`.stdout;
echo(branch);
```

@param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
@param vars Arguments for `command`.
@param options Silence and synchronous options.
@return Returns {@link ShellString}.

### s.runA`cmd`
### s.runA(cmd[, vars][, options])

Executes the given command asynchronously, the function arguments
are the same as for {@link s.run} function except that the
[`child_process.spawn`](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options)
is used internally.
```js
s.runA`git branch --show-current`;
s.runA`echa ${"Hello World"}`;
s.runA("echo ::var::", { var: "Hello World" });
s.runA("echo 'HI'", null, { cwd: "../" });
```

The function returns a {@link ProcessPromise} object.
```js
const result_a= await s.$().runA("git branch --show-current");
echo(result_a.toString());

const result_b= await s.$().runA("git branch --show-::var::", { var: "current" }, { silent: true });
echo(result_b.toString());

const ch= s.$().runA`git branch --show-current`;
ch.child.on("data", echo);
```

@param command String of command(s) to be executed. Defined patterns (by default `/::([^:]+)::/g`) will be replaced by actual value.
@param vars Arguments for `command`.
@param options Silence and synchronous options.
@return Returns {@link ProcessPromise}.

### s.read()
### s.read(options)

Available options:
+ `-p`: Promt mode, value is used as question. It is possible to cobine with other options.
+ `-s`: Make sence to combine only with `-p` to not show pressed keys (e.g. to prompt password).
+ `completions`: Make sence to combine only with `-p` to provide tab suggestion/completions.
+ `-d`: Returns the `stdin` till given needle.
+ `-n`: Choose given number of chars from `stdin`.


This function mimic [`read`](https://phoenixnap.com/kb/bash-read) command.
So, the function purpose is reading from `stdin`.
```js
const answer= await $.read({ "-p": "Question" });
const color= await $.read({ "-p": "Your color", completions: [ "red", "green" ] });
if($.isFIFO(0)) await $.read().then(echo.bind(null, "E.g. for reading received input:"));
```

### $.version

Holds current nodejsscript version


### $.isMain(import.meta)

This is small helper function to determine if current script file was launched as main one.
```js
//nodejsscript main.js

//main.js
if($.isMain(import.meta)) echo("This is main script");
import 'nomain.js';

//nomain.js
if($.isMain(import.meta)) echo("This is NOT main script ⇒ never echo");
```
This can be helpful for writing importable scripts.
It is very similar to [`__name__ == '__main__'`](https://docs.python.org/3/library/__main__.html).
For this use case, be careful to use `$.exit` correctly (when the script is imported, you probably don't want to use it).


### $.is_silent: boolean

Suppresses all command output if `true`, except for `echo()` call.
### $.is_verbose: boolean

Will print each executed command to the screen.
### $.is_fatal: boolean

If `true`, the script will throw a JavaScript error when any `shell.js` command encounters an error. This is analogous to Bash's `set -e`.
### $.glob_options: { is_off: boolean, options: boolean }

+ glob: disable filename expansion (globbing), options for `glob.sync()`


### $.configAssign({ verbose?: boolean, fatal?: boolean, silent?: boolean })

Set multiple options except `glob_options` with one command.
```js
const { is_verbose, is_fatal }= $;
$.is_silent= true;
const $.configAssign({ verbose: true, silent: false });
```


### $.isFIFO(0|1)

Method to check whether script stdin/stdout (0/1) is a first-in-first-out (FIFO) pipe or not.
```bash
node pipes.js | … # — test by $.isFIFO(1)
… | node pipes.js # — test by $.isFIFO(0)
```
…more precisely:
```javascript
import { stdin, stdout } from "node:process";
echo($.isFIFO(stdin.fd), $.isFIFO(stdout.fd));
```
⚠️ On Windows it can throw an error (see https://github.com/jaandrle/nodejsscript/issues/42)!

### $.api([usage])
### $.api(usage, true)

A wrapper around the [lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) package.


### $.xdg: { home, temp, data, config, cache, root, cwd, main }

Returns the directory/file path based on `$.xdg.<tag>()`.
```js
$.xdg.<tag>`…`
$.xdg.<tag>("…")
$.xdg.<tag>()
```


### $.pathFromURL(import.meta.url)`path`

This is a helper motivated to evaluate relative paths from current script file:
```js
const $path= $.pathFromURL(import.meta.url);
echo("Relative path: ", $path`../file.txt`);
```


### $.$

Returns the PID of the process. Compare to bash `$$` vs `$.$`.
@alias process.pid

### $.env

{@link _env}. Compare to bash `$var` vs `$.env['var']`.
@alias process.env

### $.stdin: { text, json, lines }

Holding `stdin` when script was executed with pipe.
```bash
echo TEST | nodejsscript script.js
```
```javascript
echo($.stdin.text());//= "TEST"
```
…but it can be empty in case of platform specific error (see {@link Dollar.isFIFO $.isFIFO}).

### $.error(message)

Throws user targeted error
```js
const number= await $.read({ "-p". "Insert a number:" });
if(Number.isNaN(Number(number))) $.error(`Provided text '${number}' is not a number`);
```


### $.exit(code[, ...ignore])

Just an alias for {@link _exit}. Any other argument is ignored, so you can use:
```js
if($.hasArgs("-v", "--version")) $.exit(0, echo("v0.0.1"));
```

### $.hasArgs(...needles)

Returns boolean value that script has been executed with given arguments (`needles`).
```js
if($.hasArgs("-v", "--version")) $.exit(0, echo("v0.0.1"));
```
### echo([as console.log()])

Prints to `stdout` with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html) (the arguments are all passed to `util.format()`).
Internally uses `console.log`. Stringify inputs except objects and errors in case of `$.is_verbose`.
Supports basic styling, see {@link css}.

```js
const count = 5;
echo('count: %d', count);
// Prints: count: 5, to stdout
echo('count:', count);
// Prints: count: 5, to stdout
echo({ count });
// Prints: { count: 5 }, to stdout
echo(new Error("Test"));
// Prints: 'Error: Test', when `config.verbose= false`
echo("%cRed", "color: red");
// Prints 'Red' in red
```

@param message The text to print.
@return	   Returns processed string with additional utility methods like .to().

### echo.use(options, [as echo()])

Similarly to {@link s.echo}, the first argument accepts options string starting with `-`:
- `-n`: Don’t append **n**ew line
- `-1`/`-2`: Outputs to `stdout`/`stderr`
- `-c`: Don’t **c**olorize output (e.g. objects)
- `-P`: Outputs objects in **p**rettier format
- `-R`/`-r`: Starts/Ends **r**ewritable mode (for spinners, progress bars, etc.). Mode can be ended with any other `echo` without `-R`.
- `-S`: silent mode ⇒ just return processed final string (ignores: `-1`, `-2`, `R`)

```js
echo.use("-R", "0%");
// …
echo.use("-r", "100%");
// combination
echo.use("-2cP", { a: "A" });
```
@param options Available options: `-n`, `-1`/`-2`, `-c`, `-P`, `-R`/`-r`.
@param message The text to print.
@return	   Returns processed string with additional utility methods like .to().

### echo.css`styles`
### echo.css(...styles)

In `echo`, you can use `%c` for styling:
```js
echo("%cHello %cWorld!", "color: red", "color: blue");
```
**But**, implementation for `echo` is much more limited. There is no CSS parser, just keywords see [css_rules](https://github.com/jaandrle/css-in-console/blob/main/docs/README.md#css_rules).
**Internally uses [css-in-console - npm](https://www.npmjs.com/package/css-in-console)**.

You can pre-define css class with this method:
```js
const css= echo.css(".red { color: red; }", ".blue { color: blue; }");
echo("%cRed text", css.red);
echo("%cBlue text", css.blue);
```
…there is special style name `*` which applies to all defined classes:
```js
const css= echo.css("* { font-weight: bold; }", ".red { color: red; }", ".blue { color: blue; }");
echo("%cRed and bold text", css.red);
echo("%cBlue and bold text", css.blue);
```
…there is also helpers (see {@link EchoFunction.format} and {@link EchoFunction.formatWithOptions}) to just return finally formated text:
```js
const css= echo.css`
* { font-weight: bold; }
.red { color: red; }
.blue { color: blue; }
`;
const text= echo.format("%cRed and bold text", css.red);
echo(text);
```
For further information, see:
<br>- [css-in-console - npm](https://www.npmjs.com/package/css-in-console)
<br>- [Styling console output](https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output)
<br>- [Util.format | Node.js v19.1.0 Documentation](https://nodejs.org/api/util.html#utilformatformat-args)

### echo.format([as echo()])

A helper method returning formated text as it processed by {@link echo}, but not printed into the console.
(So infact, it is an alias `echo.use("-S", …);`)
@param message The text to print.
@return	   Returns processed string with additional utility methods like .to().


### echo.formatWithOptions([as echo.use()])

A helper method returning formated text as it processed by {@link echo}, but not printed into the console.
(So infact, it is an alias `echo.use("-S"+…, …);`)
@param options Available options: `-n`, `-c`, `-P` (these are available, but ignored: `-1`/`-2`, `-R`/`-r`).
@param message The text to print.
@return	   Returns processed string with additional utility methods like .to().

### pipe

Function similar to [Ramda `R.pipe`](https://ramdajs.com/docs/#pipe). Provides functional way to combine commands/functions.

```js
pipe(
Number,
v=> `Result is: ${v}`,
echo
)(await question("Choose number:"));
```
