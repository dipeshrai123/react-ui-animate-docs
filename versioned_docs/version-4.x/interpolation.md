---
sidebar_position: 4
id: interpolation
title: Interpolation
---

Interpolation lets you map an animated value from one range to another, enabling complex, responsive animations. The `interpolate()` function supports linear mapping, multiple segments, color interpolation, and customizable extrapolation.

## Basic Interpolation

Use `interpolate()` to convert an input range to an output range.

```jsx
import { useValue, animate, interpolate } from "react-ui-animate";

export const BasicInterpolation = () => {
  const progress = useValue(0);

  return (
    <>
      <animate.div
        style={{
          // width maps from [0,1] → [0,100]
          width: interpolate(progress.value, [0, 1], [0, 100]),
          height: 20,
          backgroundColor: "#39F",
        }}
      />
      <button onClick={() => (progress.value = 1)}>Fill</button>
    </>
  );
};
```

By default, `interpolate` uses linear scaling and will extend beyond the input range (extrapolate).

## Moving an Element

Map position and size simultaneously:

```jsx
import { useValue, animate, interpolate, withSpring } from "react-ui-animate";

export const MoveAndResize = () => {
  const x = useValue(0);

  return (
    <>
      <animate.div
        style={{
          left: x.value,
          width: interpolate(x.value, [0, 200], [100, 400]),
          height: 100,
          backgroundColor: "#3399ff",
          position: "relative",
        }}
      />
      <button onClick={() => (x.value = withSpring(200))}>Animate</button>
    </>
  );
};
```

Instead of animating `left`, consider using `translateX` for smoother GPU transforms:

```jsx
style={{
  translateX: x.value,
  width: interpolate(x.value, [0, 200], [100, 400])
}}
```

## Multiple Range Segments

Define piecewise mappings with dead zones or non-linear progress:

```js
// input: [0→0.5→1], output: [0→100→200]
interpolate(value, [0, 0.5, 1], [0, 100, 200]);
```

## Color Interpolation

Animate between colors:

```js
interpolate(value, [0, 1], ["red", "black"]);
```

```jsx
import { useValue, animate, interpolate, withTiming } from "react-ui-animate";

export const ColorFade = () => {
  const t = useValue(0);
  return (
    <>
      <animate.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: interpolate(t.value, [0, 1], ["red", "black"]),
        }}
      />
      <button onClick={() => (t.value = withTiming(1))}>Fade to Black</button>
    </>
  );
};
```

## Extrapolation Options

Control how `interpolate` handles values outside the input range via an options object:

- **extend** (default): continue the linear curve beyond the range
- **clamp**: cap the output to the nearest bound
- **identity**: return the raw input value

```js
// Clamp output between 0–100
interpolate(value, [0, 1], [0, 100], { extrapolate: "clamp" });
```

Or specify sides separately:

```js
interpolate(value, [0, 1], [0, 100], {
  extrapolateLeft: "clamp",
  extrapolateRight: "extend",
});
```

## Summary

Interpolation in React UI Animate empowers you to translate simple animated values into nuanced, multi-faceted animations. From scaling sizes and positions to blending colors and handling out-of-range inputs, `interpolate()` is your go-to utility for dynamic, data-driven transitions.

## What's Next?

In the next section, we'll cover **Configuring Animations**, including duration, easing curves, and global defaults.
