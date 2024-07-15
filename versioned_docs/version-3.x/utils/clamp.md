---
sidebar_position: 1
id: clamp
title: clamp
---

The `clamp` function clamps a numeric value between an upper and lower bound, ensuring the value does not exceed these bounds.

```js
function clamp(value: number, lowerbound: number, upperbound: number): number;
```

## Arguments

#### `value` [ number ]

The numeric value to be clamped.

#### `lowerbound` [ number ]

The lower bound for the value.

#### `upperbound` [ number ]

The upper bound for the value.

## Returns

#### [ number ]

Returns the clamped value between the specified lowerbound and upperbound.

## Example

The returned value is clamped between lowerbound 10 and upperbound 100.

```jsx
import { clamp } from 'react-ui-animate';

const value = 150;
const clampedValue = clamp(value, 10, 100);
console.log(clampedValue); // Output: 100
```

In this example, the `clamp` function ensures that `value` is constrained within the bounds of 10 and 100, resulting in an output of 100 when `value` is 150.
