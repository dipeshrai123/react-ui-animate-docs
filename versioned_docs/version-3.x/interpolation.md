---
sidebar_position: 4
id: interpolation
title: Interpolation
---

Interpolation is a powerful feature in `react-ui-animate` that maps input ranges to output ranges,
enabling complex animations based on the animated values. The `interpolate` function provides a
flexible way to convert an animated value into another range or value type.

## Basic Interpolation

An interpolation maps input ranges to output ranges. By default, it uses linear interpolation
but also supports easing functions. Interpolation can extrapolate the curve beyond the given
ranges or clamp the output value.

## Basic Usage

To perform a basic interpolation, you can use the `interpolate` function. For example, to
map a `0-1` range to a `0-100` range:

```jsx
interpolate(value, [0, 1], [0, 100]);
```

This converts the value from a `0-1` range to a `0-100` range linearly.

### Example: Moving an Element

Suppose you want to move an element from left `0px` to `200px` and change its width from
`100px` to `400px`. Here's how you can achieve this with `interpolate`:

```jsx
import { useAnimatedValue, AnimatedBlock, interpolate } from 'react-ui-animate';

export default function () {
  const left = useAnimatedValue(0);

  return (
    <>
      <AnimatedBlock
        style={{
          // highlight-next-line
          width: interpolate(left.value, [0, 200], [100, 400]),
          height: 100,
          backgroundColor: '#3399ff',
          borderRadius: 4,
          position: 'relative',
          left: left.value,
        }}
      />

      <button onClick={() => (left.value = 200)}>Animate</button>
    </>
  );
}
```

import InterpolationExample1 from '@site/src/examples/strings/v3.3.0/Interpolation/example1';
import InterpolationExample2 from '@site/src/examples/strings/v3.3.0/Interpolation/example2';

import SandPack from "/src/components/SandPack"

<SandPack version={{reactAnimate:"^3.3.0"}} files={{"App.tsx": InterpolationExample1}}/>

In this example:

1. `left`: An animated value initialized to `0`.
2. `AnimatedBlock`: The element we want to animate.
3. `interpolate`: Maps `left.value` from the range `[0, 200]` to `[100, 400]` for the width style property.

:::tip

Instead of setting the `position` to `relative` and animating the `left` CSS property, you can use the provided helper CSS properties such as `translateX`, `scaleX`, and `rotateZ` for transforms in all the Higher Order Components provided by `react-ui-animate`.

:::

## Advanced Interpolation

The `interpolate` function can also handle more complex scenarios, such as multiple range segments
and clamping.

### Multiple Range Segments

You can define multiple input and output range segments, useful for creating animations with dead
zones or other non-linear mappings:

```jsx
interpolate(value, [0, 0.5, 1], [0, 100, 200]);
```

This maps the value from `0 to 0.5` to `0 to 100` and `0.5 to 1` to `100 to 200`.

### Color Interpolation

Interpolation can also handle non-numeric values, such as colors:

```jsx
interpolate(value, [0, 1], ['red', 'black']);
```

This changes the color from `red` to `black` as the value goes from `0` to `1`.

<SandPack version={{reactAnimate:"^3.3.0"}} files={{"App.tsx": InterpolationExample2}}/>

## Extrapolation

By default, interpolate extrapolates values beyond the given input range. To control this behavior,
you can use the fourth argument, which is an extrapolation configuration object. This object
can include `extrapolate`, `extrapolateLeft`, or `extrapolateRight` options.

- `extrapolate`: Sets the extrapolation for both sides (default is `extend`).
- `extrapolateLeft`: Sets the extrapolation for the left side.
- `extrapolateRight`: Sets the extrapolation for the right side.

The options are:

- `extend`: (default) Extends the curve beyond the input range.
- `clamp`: Clamps the value to the output range.
- `identity`: No extrapolation, returns the input value directly.

Example with clamping:

```jsx
interpolate(value, [0, 1], [0, 100], { extrapolate: 'clamp' });
```

This clamps the output value to the range `[0, 100]`, preventing it from exceeding the specified range.

## Summary

Interpolation in `react-ui-animate` provides a flexible and powerful way to create complex animations.
Whether you're converting simple ranges, handling multiple segments, or animating colors,
`interpolate` offers the tools you need to map animated values to desired output ranges effectively.

By mastering interpolation, you can create sophisticated and responsive animations that enhance the
user experience in your React applications.

## What's Next ?

In the next section, we will look at `Configuring Animations`.
