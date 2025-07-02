---
sidebar_position: 6
id: unmounting-components
title: Unmounting components
---

When animating React components in and out of the DOM, the `useMount()` hook and `MountedBlock` HOC in React UI Animate offer a simple, declarative way to orchestrate entry and exit transitions.

import { Unmounting } from '/src/components/react-ui-animate-3.3.0-examples/Unmounting';

<Unmounting />

## Using `useMount()`

The `useMount(open)` hook returns a function that drives mount and unmount animations based on a boolean state (`open`). It takes **no config argument**, defaulting to a smooth ease animation.

```jsx
import React from 'react';
import { animate, bInterpolate, useMount } from 'react-ui-animate';

export const UseMount: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  const mounted = useMount(open);

  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)}>ANIMATE ME</button>

      {mounted(
        (animation, isMounted) =>
          isMounted && (
            <>
              <animate.div
                style={{
                  width: bInterpolate(animation.value, 100, 300),
                  height: bInterpolate(animation.value, 100, 200),
                  backgroundColor: bInterpolate(
                    animation.value,
                    'red',
                    '#3399ff'
                  ),
                  translateX: 45,
                }}
              />
              <animate.div
                style={{
                  width: bInterpolate(animation.value, 100, 400),
                  height: bInterpolate(animation.value, 100, 50),
                  border: '1px solid black',
                  backgroundColor: bInterpolate(
                    animation.value,
                    'red',
                    '#3399ff'
                  ),
                  translateX: 45,
                }}
              />
              <animate.div
                style={{
                  width: bInterpolate(animation.value, 100, 500),
                  height: 100,
                  backgroundColor: bInterpolate(
                    animation.value,
                    'red',
                    '#3399ff'
                  ),
                  translateX: 45,
                }}
              />
            </>
          )
      )}
    </>
  );
};
```

### How It Works

1. **State Toggle**: A boolean `open` controls whether the children should mount.
2. **Mount Function**: `useMount(open)` returns `mounted`, a function that takes a render callback.
3. **Render Callback**: Called with `(animation, isMounted)`.

   - `animation.value` animates from `0 → 1` on enter and `1 → 0` on exit (ease by default).
   - `isMounted` indicates whether to render content.

## Using `MountedBlock` HOC

For a more concise API, wrap your JSX in `MountedBlock`. Pass the `state` prop and an optional `enter` modifier (e.g. `withSpring(1)`) for the mount animation.

```jsx
import React from 'react';
import {
  MountedBlock,
  animate,
  bInterpolate,
  interpolate,
  withSpring,
} from 'react-ui-animate';

export const Mounted: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <MountedBlock state={open} enter={withSpring(1)}>
        {(animation) => (
          <animate.div
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#3399ff',
              translateX: bInterpolate(animation.value, 0, 500),
              borderRadius: interpolate(
                animation.value,
                [0.5, 1],
                ['0%', '100%'],
                { extrapolateLeft: 'clamp' }
              ),
            }}
          />
        )}
      </MountedBlock>

      <button onClick={() => setOpen((prev) => !prev)}>ANIMATE ME</button>
    </>
  );
};
```

### Props

- **state** `(boolean)`: Controls mount (`true`) and unmount (`false`).
- **from** `(number)`: Optional initial value (default 0).
- **enter** `(modifier)`: Optional transition for entry (e.g. `withSpring(1)`, `withTiming(1)`).
- **exit** `(modifier)`: Optional transition for exit (e.g. `withSpring(0)`, `withTiming(0)`).
- **children** `(animation) => ReactNode`: Render callback receiving an object with `.value` (`0 → 1` range).

## Summary

- **useMount(open)**: Returns a mount function for granular control.
- **MountedBlock**: HOC for concise mount/unmount animations.
- **bInterpolate**: Fast two-value interpolation helper.
- **interpolate**: Full-feature interpolation across ranges.
- By combining these, you can orchestrate complex, multi-element mount/unmount transitions.

## What's Next?

In the next section, we'll explore **Animation Modifiers** like combining springs, timing, and sequences for fine-grained control.
