---
sidebar_position: 2
id: rubber-clamp
title: rubberClamp
---

The `rubberClamp` function calculates a rubberbanding effect from a given position value, two bounds (`min` and `max`), and an optional elasticity constant.

```js
function rubberClamp(value: number, lowerbound: number, upperbound: number, constant: number = 0.15): number;
```

## Arguments

#### `value` [ number ]

The numeric value to be clamped and potentially rubberbanded.

#### `min` [ number ]

The lower bound of the clamp.

#### `max` [ number ]

The upper bound of the clamp.

#### `constant` [ number, optional ]

The elasticity constant for the rubberbanding effect. Defaults to `0.15`.

## Returns

#### [ number ]

Returns the clamped value if within the bounds (`min` to `max`). If the value exceeds these bounds, it applies a rubberband effect based on the elasticity constant.

## Example

```jsx
import { rubberClamp } from 'react-ui-animate';

// Example usage
const x = rubberClamp(value, 10, 100);
console.log(x);
```

In this example, `rubberClamp` clamps value between `10` and `100`, applying a rubberband effect if `value` extends beyond these bounds based on the default elasticity constant of `0.15`.
