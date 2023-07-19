# Eval and print usages of `nodejsscript`

## `awk`
```bash
# Sum integers from a file or STDIN, one integer per line.
printf '1\n2\n3\n' | awk '{sum += $1} END {print sum}'
printf '1\n2\n3\n' | nodejsscript -p '$.stdin.lines().map(Number).reduce((acc, curr)=> acc+curr, 0)'

# Using specific character as separator to sum integers from a file or STDIN.
printf '1:2:3' | awk -F ":" '{print $1+$2+$3}'
printf '1:2:3' | nodejsscript -p '$.stdin.text().split(":").map(Number).reduce((acc, curr)=> acc+curr, 0)'

# Print line number 12 of file.txt
cat file.txt | awk 'NR==12'
cat file.txt | nodejsscript -p '$.stdin.lines()[11]'

# Output unique list of available sections under which to create a DEB package.
awk '!A[$1]++ {print($1)}' <<< "$(dpkg-query --show -f='${Section}\n')"
nodejsscript -p '$.stdin.lines()' 'p=> new Set(p)' 's=> [...s].join("\n")' <<< "$(dpkg-query --show -f='${Section}\n')"
nodejsscript -p '$.stdin.lines().reduce((acc, curr)=> acc.add(curr), new Set())' Array.from 'arr=> arr.join("\n")' <<< "$(dpkg-query --show -f='${Section}\n')"
```

## `jq`
```bash
# Output a JSON file, in pretty-print format:
echo '{"a":"A"}' | jq
echo '{"a":"A"}' | nodejsscript -p '$.stdin.json()'

echo '{"a":"A"}' | jq .[]
echo '{"a":"A"}' | nodejsscript -p '$.stdin.json()' Object.values

echo '[{"a":"A"}]' | jq 'map(.a)'
echo '[{"a":"A"}]' | nodejsscript -p '$.stdin.json().map(({ a })=> a)'

echo '[ { "foo": 1 }, { "foo": 2 } ]' | jq '.[] | .foo'
echo '[ { "foo": 1 }, { "foo": 2 } ]' | nodejsscript -p '$.stdin.json().map(({ foo })=> foo).join("\n")'

echo '[ { "foo": 1 }, { "foo": 2 }, { "foo": 3 }, { "foo": 4 } ]' | jq '.[2:3]'
echo '[ { "foo": 1 }, { "foo": 2 }, { "foo": 3 }, { "foo": 4 } ]' | nodejsscript -p '$.stdin.json().slice(2,3)'

# URL Encode something
date | jq -sRr @uri
date | nodejsscript -p '$.stdin.text()' encodeURIComponent
```

## `sed`
```bash
echo 'It is daytime' | sed 's/day/night/g'
echo 'It is daytime' | nodejsscript -p '$.stdin.text().replaceAll("day", "night")'

echo 'Once upon a time' | sed '/Once upon a time/i\Chapter 1'
echo 'Once upon a time' | nodejsscript -p '$.stdin.text().replace(/(Once upon a time)/, "Chapter 1\n$1")'
```

## Some others (`wc`/`column`/…)
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
## Aliases
See [nodejsscriptrc.mjs](./nodejsscriptrc.md).
