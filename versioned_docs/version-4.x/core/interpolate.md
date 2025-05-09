---
sidebar_position: 3
id: interpolate
title: interpolate
---

An interpolation maps input ranges to output ranges. By default, it uses linear interpolation but also supports easing functions. Interpolation can extrapolate the curve beyond the given ranges or clamp the output value.

## Arguments

#### `value` [ number | AnimatedValue ]

Value from within input range that should be map into value from output range.

#### `inputRange` [ number[] ]

An array of `number` that contains points that indicate the range of the input value. Values in the input range should be increasing.

#### `outputRange` [ number[] | string[] ]

An array of `number` that contains points that indicate the range of the output value. It should have at least the same number of points as the input range.

#### `extrapolateConfig` [ object ]

Optional config object where you can define the extrapolation using these three options by setting the values to either `extend` | `identity` | `clamp`.

| Option           | Description                                                               |
| ---------------- | ------------------------------------------------------------------------- |
| extrapolate      | Option to set the extrapolation beyond the output range on left or right. |
| extrapolateLeft  | Option to set the extrapolation beyond left of output range.              |
| extrapolateRight | Option to set the extrapolation beyond left of output range.              |

## Returns

`interpolate` returns the value after interpolation from within the output range.

## Example

A basic mapping to convert a `0-1` range to a `0-100` range would be:

```js
interpolate(value, [0, 1], [0, 100]);
```
