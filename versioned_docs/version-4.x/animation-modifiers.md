---
sidebar_position: 7
id: animation-modifiers
title: Animation Modifiers
---

To achieve dynamic animations with precise control, React UI Animate provides modifier functions. Wrap target values in these modifiers when assigning to an Animated Value's `.value`.

## Applying `withSpring`

Spring animations simulate physical motion. Use `withSpring(target, config?)`:

```jsx
import { useValue, animate, withSpring } from "react-ui-animate";

export const WithSpringModifier = () => {
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
          (x.value = withSpring(100, { stiffness: 200, damping: 20 }))
        }
      >
        Spring to 100
      </button>
    </>
  );
};
```

- **stiffness**: spring tension (higher = snappier)
- **damping**: resistance to oscillation (higher = less bounce)
- **mass**: weight of the item (higher = slower motion)

## Applying `withTiming`

Timing animations interpolate over a duration. Use `withTiming(target, { duration, easing? })`:

```jsx
import { useValue, animate, withTiming } from "react-ui-animate";

export const WithTimingModifier = () => {
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
      <button onClick={() => (x.value = withTiming(100, { duration: 500 }))}>
        Move to 100
      </button>
    </>
  );
};
```

- **duration**: length in milliseconds
- **easing**: optional function `(t: number) => number` mapping time to progress

## Applying `withEase`

Use `withEase(target, config?)` for an ease curve or custom easing:

```jsx
import { useValue, animate, withEase } from "react-ui-animate";

export const WithEaseModifier = () => {
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
      <button onClick={() => (x.value = withEase(100))}>Ease to 100</button>
    </>
  );
};
```

## Sequence Animations with `withSequence`

Chain modifiers sequentially: the next begins when the previous completes.

```jsx
import {
  useValue,
  animate,
  withSequence,
  withSpring,
  withTiming,
} from "react-ui-animate";

export const WithSequenceModifier = () => {
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
            withSpring(50),
            withTiming(100, { duration: 300 }),
          ]))
        }
      >
        Sequence
      </button>
    </>
  );
};
```

## Using Predefined Configurations

React UI Animate exports `AnimationConfig`, containing separate presets for timing-based and spring-based animations. You can import and use these presets directly with `withTiming` and `withSpring`.

```jsx
import {
  useValue,
  animate,
  withTiming,
  withSpring,
  AnimationConfig,
} from "react-ui-animate";

export const PresetExample = () => {
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

      {/* Timing Presets */}
      <button
        onClick={() =>
          (x.value = withTiming(100, AnimationConfig.Timing.BOUNCE))
        }
      >
        Bounce Timing
      </button>
      <button
        onClick={() =>
          (x.value = withTiming(100, AnimationConfig.Timing.POWER3))
        }
      >
        Power3 Curve
      </button>

      {/* Spring Presets */}
      <button
        onClick={() =>
          (x.value = withSpring(100, AnimationConfig.Spring.ELASTIC))
        }
      >
        Elastic Spring
      </button>
      <button
        onClick={() =>
          (x.value = withSpring(100, AnimationConfig.Spring.WOBBLE))
        }
      >
        Wobble Spring
      </button>
    </>
  );
};
```

**Available Timing Presets:**

- `AnimationConfig.Timing.BOUNCE`
- `AnimationConfig.Timing.EASE_IN`
- `AnimationConfig.Timing.EASE_OUT`
- `AnimationConfig.Timing.EASE_IN_OUT`
- `AnimationConfig.Timing.POWER1`
- `AnimationConfig.Timing.POWER2`
- `AnimationConfig.Timing.POWER3`
- `AnimationConfig.Timing.POWER4`
- `AnimationConfig.Timing.LINEAR`

**Available Spring Presets:**

- `AnimationConfig.Spring.ELASTIC`
- `AnimationConfig.Spring.EASE`
- `AnimationConfig.Spring.STIFF`
- `AnimationConfig.Spring.WOBBLE`

## What's Next??

In the next section, we'll explore **Handling Gestures** with hooks like `useDrag`, `useScroll`, and `useWheel`.
