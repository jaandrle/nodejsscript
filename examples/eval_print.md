# Eval and print usages of `nodejsscript`

## `awk`/`wc`/`column`
```bash
nodejsscript -p '6+5*Math.cos(Math.PI)'

apt list --installed | nodejsscript -p '$.stdin.lines().filter(l=> l.indexOf("libreoffice")!==-1).length'

who | nodejsscript -p '$.stdin.text().split(/ +/)[0]'

ls -A | nodejsscript -p '$.stdin.lines().slice(1).filter((_, i)=> i%6)'
ls -A | nodejsscript -p '$.stdin.lines().slice(1).sort().filter((_, i)=> i>6)'
echo -e "aaanbbbnaaanaancccnaa" | nodejsscript -p '[...new Set($.stdin.text())].join("")'
ls -l | nodejsscript -p '$.stdin.lines().slice(1).reduce((acc, l)=> acc+Number(l.split(/  ?/)[4]), 0)'

history | nodejsscript -p 'const add= name=> acc=> Reflect.set(acc, name, Reflect.has(acc, name) ? acc[name]+1 : 1) && acc; $.stdin.lines().reduce((acc, l)=> add(l.trim().split(/  ?/)[1])(acc), {})'
```

## `jq`
```bash
echo '{"a":"A"}' | nodejsscript -p '$.stdin.json().a'
```

Alternatives to [Three jq Tips You May Need to Know - DEV Community 👩‍💻👨‍💻](https://dev.to/kevcui/three-jq-tips-you-may-need-to-know-5bf5):
```bash
curl https://api.spacexdata.com/v4/launches/latest | nodejsscript -p '$.stdin.json()'
echo '{"fairings":{"reused":false,, "recovery_attempt":true}}' | nodejsscript -p '$.stdin.json()'
curl https://api.spacexdata.com/v4/launches/latest | nodejsscript -p 'pipe($.stdin.json, Object.entries, a=> a.filter(([k,v])=> Array.isArray(v)))()'
```
## Aliases
For now, just an idea:
```bash
# instead of
echo '{"a":"A"}' | nodejsscript -p '$.stdin.json().a'
# you can also use
echo '{"a":"A"}' | nodejsscript -p '$.nojq.a'
```
```bash
# instead of
who | nodejsscript -p '$.stdin.text().split(/ +/)[0]'
# you can also use
who | nodejsscript -p '$.nosed.split(/ +/)[0]'
```
```bash
# instead of
apt list --installed | nodejsscript -p '$.stdin.lines().filter(l=> l.indexOf("libreoffice")!==-1).length'
# you can also use
apt list --installed | nodejsscript -p '$.noawk.filter(l=> l.indexOf("libreoffice")!==-1).length'
```
