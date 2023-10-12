# a2bt

Prints an ASCII representation of a binary tree.

## Install

```
npm install --save a2bt
```

or

```
yarn add a2bt
```

### install CLI globally

```
npm install -g a2bt
```

or

```
yarn global add a2bt
```

## CLI

Use `null` for empty nodes.

```
  $ a2bt <json_array>
```

### Options

```
  --json, -j  Output tree to JSON string
  --addend, -a Increases the height of the tree. Useful when leaf nodes overlap due to long values
  --grid, -g show number grid instead of whitespace
  --fgColor -f A 4bit ANSI color that ranges from 30-37 and 90-97 inclusive.
  --bst Output data as Binary Search Tree
```

The values and their associated color mappings for `--fgColor` are

| Color          | value |
| -------------- | :---: |
| Black          |  30   |
| Red            |  31   |
| Green          |  32   |
| Yellow         |  33   |
| Blue           |  34   |
| Magenta        |  35   |
| Cyan           |  36   |
| White          |  37   |
| Bright Black   |  90   |
| Bright Red     |  91   |
| Bright Green   |  92   |
| Bright Yellow  |  93   |
| Bright Blue    |  94   |
| Bright Magenta |  95   |
| Bright Cyan    |  96   |
| Bright White   |  97   |

## API

See https://github.com/aprax/a2bt/tree/master/packages/a2bt_example/src/index.ts.

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

```
$ a2bt '["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]' --bst
                 f
                / \
               /   \
              /     \
             /       \
            /         \
           /           \
          /             \
         /               \
        c                 i
       / \               / \
      /   \             /   \
     /     \           /     \
    /       \         /       \
   a         d       g         j
    \         \       \         \
     \         \       \         \
      b         e       h         k
```

## Build

Enable git hooks for local development.

```shell
$ yarn hooks
```

Builds _a2bt_ library to `packages/a2bt/dist/index.js` and command line tool to `packages/a2bt/dist/cli.js` and _a2bt_example_ to `packages/a2bt_example/dist/index.js`.

```shell
$ yarn run build
```

## Run local

```shell
$ yarn --cwd=packages/a2bt start [1,2,3]
```

```shell
$ yarn --cwd=packages/a2bt_example start
```
