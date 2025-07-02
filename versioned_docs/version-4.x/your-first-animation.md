---
sidebar_position: 2
id: your-first-animation
title: Your First Animation
---

In this section, you'll learn how to create your first animation using React UI Animate. We'll guide you through the process with a simple example, focusing on each of the three main steps: initializing, applying, and updating animated values.

## Defining the Animation Value

The first step is to initialize an animated value using the `useValue()` hook from React UI Animate. This value controls the property you want to animate.

```jsx
import { useValue } from 'react-ui-animate';

export const Example = () => {
  // Initialize an animated value starting at 0
  const left = useValue(0);

  return <>...;</>;
};
```

## Applying the Animation Value to a Node

Use the `animate.div` component to apply the animated value to a node's style. The `.value` property of the animated value is read by `animate.div`.

```jsx
import { animate, useValue } from 'react-ui-animate';

export const Example = () => {
  const left = useValue(0);

  return (
    <animate.div
      style={{
        width: 100,
        height: 100,
        background: '#39F',
        position: 'relative',
        left: left.value, // Apply the animated value
      }}
    />
  );
};
```

## Updating the Animation Value

Update the animated value by assigning to its `.value` property. By default, updates the value instantly. Use modifiers like `withSpring` or `withTiming` for applying animation.

```jsx
import { animate, useValue, withSpring } from 'react-ui-animate';

export const Example = () => {
  const left = useValue(0);

  return (
    <>
      <animate.div
        style={{
          width: 100,
          height: 100,
          background: '#39F',
          position: 'relative',
          left: left.value,
        }}
      />
      <button onClick={() => (left.value = withSpring(0))}>Animate Left</button>
      <button onClick={() => (left.value = withSpring(200))}>
        Animate Right
      </button>
    </>
  );
};
```

## Example

import GettingStartedExamples from '/src/components/react-ui-animate-3.3.0-examples/GettingStartedExamples';

<GettingStartedExamples />

This example demonstrates how easy it is to create animations with React UI Animate—initialize animated values, apply them to components, and update them to produce interactive transitions. Once you're comfortable with these basics, you're ready to explore more advanced animations and interactions in your projects.

## What's Next ?

In the next section, we'll dive deeper into **Animated Values** and how to leverage modifiers such as interpolate, withTiming, withSequence, and withEase for more complex animation workflows.
