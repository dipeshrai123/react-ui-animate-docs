---
sidebar_position: 3
id: snap-to
title: snapTo
---

The `snapTo` function calculates a snapping point based on the current value, current velocity, and an array of snap points.

```js
function snapTo(value: number, velocity: number, snapPoints: Array<number>): number;
```

## Arguments

#### `value` [ number ]

The current numeric value.

#### `velocity` [ number ]

The current velocity affecting the snapping behavior.

#### `snapPoints` [ number[] ]

An array of numeric snap points to which the value can snap.

## Returns

#### [ number ]

Returns the closest snap point based on the calculated final value after applying velocity.

## Example

```jsx
import { snapTo } from 'react-ui-animate';

// Example usage
const value = 150;
const velocity = -10;
const snapPoints = [0, 100, 200, 300];
const snappedValue = snapTo(value, velocity, snapPoints);
console.log(snappedValue); // Output: 100
```

In this example, `snapTo` calculates the closest snap point from `[0, 100, 200, 300]`, resulting in `100` as the closest snap point.
