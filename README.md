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

## Usage

```javascript
import a2bt, { toConsole } from "a2bt";

toConsole(a2bt(["aaa", "bbb", "ccc"]));
```

### CLI

Use `null` for empty nodes.

```
  $ a2bt <json_array>
```

### Options

```
  --json, -j  Output tree to JSON string
```

## Examples

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
bash-3.2$ a2bt '["a","b","c",null,null,"d","e",null,null,null,null,"f"]'
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

## Build and Run

Builds and compiles to dist/

```
yarn build
```
