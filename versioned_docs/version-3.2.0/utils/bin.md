---
sidebar_position: 6
id: bin
title: bin
---

The `bin` function is a simple utility that converts a boolean value to its binary equivalent, returning `1` for `true` and `0` for `false`.

```js
function bin(bool: boolean): number;
```

## Arguments

#### `bool` [ boolean ]

The boolean value to be converted to binary.

## Returns

#### `1` or `0` [ number ]

Returns `1` if the input boolean value is `true`, and `0` if the input boolean value is `false`.

## Example

```jsx
import { bin } from 'react-ui-animate';

// Example usage
console.log(bin(true)); // Output: 1
console.log(bin(false)); // Output: 0
```

In this example, the `bin` function is used to convert `true` to `1` and `false` to `0`. This can be particularly useful in scenarios where you need to work with binary representations of boolean values.
