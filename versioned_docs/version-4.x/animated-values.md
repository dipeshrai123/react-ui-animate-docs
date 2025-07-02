---
sidebar_position: 3
id: animated-values
title: Animated Values
---

Animated Values are the core concept of **React UI Animate**. They hold and manage the data that drives your animations, providing a simple and reactive way to create smooth transitions.

## Defining an Animated Value

Use the `useValue()` hook to create an animated value. This hook returns a mutable object with a `.value` property initialized to the provided `initialValue`. You can use any primitive type (number or string).

```jsx
import { useValue } from 'react-ui-animate';

export const Example = () => {
  // Initialize an animated value at 0
  const x = useValue(0);

  return <>{/* ... */}</>;
};
```

The `useValue` hook behaves similarly to `useRef`: it stores data across renders without causing re-renders when the `.value` changes.

## Reading and Applying Animated Values

Animated Values are consumed by special components exported on the `animate` object. These components read any Animated Values applied to their style or props.

```jsx
import { animate, useValue } from 'react-ui-animate';

export const Box = () => {
  const x = useValue(0);

  return (
    <animate.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#39F',
        translateX: x.value,
      }}
    />
  );
};
```

You can animate any CSS property by assigning an Animated Value to it (e.g., `opacity`, `translateY`, `width`, etc.).

## Updating Animated Values

To update an Animated Value, simply assign a new value to its `.value` property. By default, this assignment snaps instantly to the target value without any transition:

```jsx
import { animate, useValue } from 'react-ui-animate';

export const SnapExample = () => {
  const x = useValue(0);

  return (
    <>
      <animate.div
        style={{
          translateX: x.value,
          width: 50,
          height: 50,
          backgroundColor: '#39F',
        }}
      />
      <button onClick={() => (x.value = 200)}>Snap to 200px</button>
    </>
  );
};
```

If you need a smooth animation instead of an immediate snap, wrap the target value in one of the modifier functions:

```jsx
// Using a timing curve for smooth transition
x.value = withTiming(200, { duration: 500 });

// Using a physics-based spring
x.value = withSpring(200);
```

### Using Modifiers

For more control over the animation curve, wrap the target value in modifier functions:

- **Spring**: `withSpring(target, config?)`
- **Timing**: `withTiming(target, { duration })`
- **Sequence**: `withSequence([modifier1, modifier2, ...])`
- **Ease**: `withEase(target, config?)`

```jsx
import { animate, useValue, withSpring, withTiming } from 'react-ui-animate';

export const ModifierExample = () => {
  const x = useValue(0);

  return (
    <>
      <animate.div
        style={{
          translateX: x.value,
          width: 50,
          height: 50,
          backgroundColor: '#39F',
        }}
      />
      <button onClick={() => (x.value = withSpring(200))}>
        Spring to 200px
      </button>
      <button onClick={() => (x.value = withTiming(0, { duration: 1000 }))}>
        Return with Timing
      </button>
    </>
  );
};
```

## Extending to Other Elements

The `animate` object includes animated versions of all HTML and SVG elements. For example:

```jsx
import { animate } from 'react-ui-animate';

export const List = () => (
  <animate.ul>
    <animate.li>Item 1</animate.li>
    <animate.li>Item 2</animate.li>
  </animate.ul>
);
```

## Creating Custom Animated Components

Transform any React component into an animated component using `makeAnimated()`:

```jsx
import { makeAnimated } from 'react-ui-animate';

const Card = (props) => <div {...props}>Card Content</div>;
const AnimatedCard = makeAnimated(Card);

export const App = () => {
  const scale = useValue(1);
  return (
    <AnimatedCard
      style={{ scale: scale.value }}
      onClick={() => (scale.value = 1.2)}
    />
  );
};
```

## Example Component

import AnimatedValues from "/src/components/react-ui-animate-3.3.0-examples/AnimatedValues"

<AnimatedValues />
<br />

This example demonstrates how to define, apply, and update Animated Values using `useValue`, modifiers, and custom animated components.

## What's Next?

In the next section, we'll explore **Interpolation** with the `interpolate()` function to map values between ranges and colors.
