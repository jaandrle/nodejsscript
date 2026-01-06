[**nodejsscript**](../../../../../README.md)

***

[nodejsscript](../../../../../README.md) / [xdg\_](../../README.md) / xdg

# xdg

This namespace contains convenience folders to store your data, config and cache files.
It tryies to use [xdg-user-dirs](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/) or typical dir on current system.

```js
$.xdg.home() //=> (on my linux) /home/jaandrle
$.xdg.home`Documents` //=> (on my linux) /home/jaandrle/Documents
$.xdg.home("Documents") //=> (on my linux) /home/jaandrle/Documents
```
…similarly for , `root`, `cwd` and `main`.

- xdg paths: `temp`, `data`, `config`, `cache`
- convenience paths: `root`
- dynamic paths:
   - `cwd`: the current working directory
   - `main`: the main script directory path
   - [globalPackage](functions/globalPackage.md)

## Variables

- [home](variables/home.md)
- [temp](variables/temp.md)
- [data](variables/data.md)
- [config](variables/config.md)
- [cache](variables/cache.md)
- [root](variables/root.md)
- [cwd](variables/cwd.md)
- [main](variables/main.md)

## Functions

- [globalPackage](functions/globalPackage.md)
