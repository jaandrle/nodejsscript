[**nodejsscript**](../../../../README.md) • **Docs**

***

[nodejsscript](../../../../README.md) / [xdg\_](../../README.md) / xdg

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

## Index

### Functions

- [globalPackage](functions/globalPackage.md)
- [home](functions/home.md)
- [temp](functions/temp.md)
- [data](functions/data.md)
- [config](functions/config.md)
- [cache](functions/cache.md)
- [root](functions/root.md)
- [cwd](functions/cwd.md)
- [main](functions/main.md)
