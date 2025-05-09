---
sidebar_position: 5
id: configuring-animations
title: Configuring Animations
---

React UI Animate uses modifier functions for configuring transitions. By default, assigning a new value to an animated value snaps instantly. To animate property changes smoothly, wrap the target in **withTiming** or **withSpring** modifiers.

## Snap-to Value (Default)

Without modifiers, value assignments are applied immediately:

```jsx
import { animate, useValue } from "react-ui-animate";

export const SnapExample = () => {
  const x = useValue(0);

  return (
    <>
      <animate.div
        style={{
          translateX: x.value,
          width: 50,
          height: 50,
          backgroundColor: "#39F",
        }}
      />
      <button onClick={() => (x.value = 100)}>Snap to 100px</button>
    </>
  );
};
```

## Timing Animation

Use `withTiming(target, { duration, easing? })` for time-based transitions. It interpolates linearly (or with a specified easing) over the given duration:

```jsx
import { animate, useValue, withTiming } from "react-ui-animate";

export const TimingExample = () => {
  const x = useValue(0);

  return (
    <>
      <animate.div
        style={{
          translateX: x.value,
          width: 50,
          height: 50,
          backgroundColor: "#39F",
        }}
      />
      <button
        onClick={() =>
          (x.value = withTiming(200, { duration: 800, easing: (t) => t * t }))
        }
      >
        Move with Timing
      </button>
    </>
  );
};
```

- **duration**: length of animation in milliseconds.
- **easing**: optional function with signature `(t: number) => number`, mapping normalized time to progress.

## Spring Animation

Use `withSpring(target, { stiffness?, damping?, mass? })` for physics-based motions. Springs create natural, bouncy transitions:

```jsx
import { animate, useValue, withSpring } from "react-ui-animate";

export const SpringExample = () => {
  const scale = useValue(1);

  return (
    <>
      <animate.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#39F",
          scale: scale.value,
        }}
      />
      <button
        onClick={() =>
          (scale.value = withSpring(1.5, { stiffness: 200, damping: 20 }))
        }
      >
        Pop
      </button>
    </>
  );
};
```

- **stiffness**: spring tension (higher = snappier).
- **damping**: resistance to oscillation (higher = less bounce).
- **mass**: weight of the item (higher = slower movement).

## Combining Modifiers

You can chain multiple animations sequentially with `withSequence()`:

```jsx
import {
  animate,
  useValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-ui-animate";

export const SequenceExample = () => {
  const x = useValue(0);

  return (
    <>
      <animate.div
        style={{
          translateX: x.value,
          width: 50,
          height: 50,
          backgroundColor: "#39F",
        }}
      />
      <button
        onClick={() =>
          (x.value = withSequence([
            withSpring(100, { stiffness: 100 }),
            withTiming(0, { duration: 500 }),
          ]))
        }
      >
        Bounce Back
      </button>
    </>
  );
};
```

## Summary

To configure animations in React UI Animate:

- Use **withTiming** for predictable, duration-based transitions.
- Use **withSpring** for dynamic, physics-driven animations.
- Combine with **withSequence** for chaining multiple effects.

## What's Next?

In the next section, we'll explore **Unmounting Transitions** and how `useMount()` helps orchestrate entry and exit animations.
