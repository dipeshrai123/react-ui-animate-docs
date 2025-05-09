---
sidebar_position: 1
id: use-value
title: useValue
---

The `useValue()` hook creates and returns an Animated Value object for driving transitions. It behaves like a ref, holding data across renders without causing re-renders when updated.

```jsx
import { useValue } from "react-ui-animate";

export const Example = () => {
  // Initialize an animated value at 0
  const opacity = useValue(0);
  return <>{/* ... */}</>;
};
```

## Arguments

| Name           | Type               | Description                           |
| -------------- | ------------------ | ------------------------------------- |
| `initialValue` | `number or string` | The starting value for the animation. |

## Returns

An object with the following properties:

- **`.value`** (`number or string`): Read or assign this property to drive animations.

  - Assigning a new primitive value snaps immediately by default.
  - Wrap assignments in modifier functions (e.g., `withTiming`, `withSpring`) for smooth transitions.

## Example

```jsx
import React from "react";
import { animate, useValue, withTiming } from "react-ui-animate";

export default function App() {
  const opacity = useValue(0);

  return (
    <div>
      <animate.div
        style={{
          opacity: opacity.value, // apply animated value
          width: 100,
          padding: 20,
          backgroundColor: "#39F",
        }}
      >
        ANIMATED
      </animate.div>

      {/* Smooth fade-out using withTiming */}
      <button
        onClick={() => (opacity.value = withTiming(0, { duration: 500 }))}
      >
        Fade Out
      </button>
    </div>
  );
}
```

This demonstrates:

1. Initializing an Animated Value with `useValue(0)`.
2. Applying it to `animate.div` via the `.value` property.
3. Updating it with a timing modifier (`withTiming`) for a smooth transition.

## What's Next?

In the next section, we’ll explore **useMount** in depth.
