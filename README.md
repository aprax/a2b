# a2bt

Shows an ascii tree in the terminal or outputs to JSON when given an array representing a binary tree.

## Install

```
npm install a2bt
```

or

```
yarn add a2bt
```

### install CLI globally

```
npm install -g a2bt
```

## CLI

Use `null` for empty nodes.

```
  $ a2bt <json_array>
```

### Options

```
  --json, -j  Output tree to JSON string
  --addend, -a Adds adds an addend to the height of the tree. Useful for when leaf nodes overlap due to long values
  --grid, -g show number grid instead of whitespace
  --fgColor -f A 4bit ANSI color that range from 30-37 and 90-97 inclusive.
```
## API

```javascript
import a2bt, { toConsole } from "a2bt";

const addend = 0;
const grid = true;
const array = ["aaa", "bbb", "ccc"];

toConsole(a2bt(array, addend, grid));
```
See https://github.com/aprax/a2bt_example for more examples 




## Examples

These examples use Bash. If using zsh you will need to wrap quotes around the argument like `$ a2bt '[1,2,3]'`

```
$ a2bt [1,2,3]
    1
  /   \
 /     \
2       3
```

```
$ a2bt [1,null,3,null,null,6]
                 1
                  \
                   \
                    \
                     \
                      \
                       \
                        \
                         \
                          3
                         /
                        /
                       /
                      /
                     6

```

```
$ a2bt '["a","b","c",null,null,"d","e",null,null,null,null,"f"]'
                                  a
                                 / \
                                /   \
                               /     \
                              /       \
                             /         \
                            /           \
                           /             \
                          /               \
                         /                 \
                        /                   \
                       /                     \
                      /                       \
                     /                         \
                    /                           \
                   /                             \
                  /                               \
                 b                                 c
                                                  / \
                                                 /   \
                                                /     \
                                               /       \
                                              /         \
                                             /           \
                                            /             \
                                           /               \
                                          d                 e
                                         /
                                        /
                                       /
                                      /
                                     f
```

```
$ a2bt ["@","#","$"] -g
123@567
12/4\67
1/345\7
#23456$
```

## Build
Builds to `dist/index.js` for API and `dist/cli.js` for CLI.


```
yarn build
```
