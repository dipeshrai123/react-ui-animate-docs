---
sidebar_position: 2
id: your-first-animation
title: Your First Animation
---

In this section, you'll learn how to create your first animation using React UI Animate.
We'll guide you through the process with a simple example, focusing on each of the three main steps:
initializing, applying, and updating animation values.

## Defining the Animation Value

The first step is to initialize an animation value. This value will control the property you want
to animate. You can create a animation value using `useAnimatedValue()` hook.

```jsx
import { useAnimatedValue } from 'react-ui-animate';

export const Example = () => {
  const left = useAnimatedValue(0); // initialize with value 0

  return (
    <>{/* The rest of the example will be added in the next sections */}</>
  );
};
```

## Apply the Animation Value to a Node

Next, apply the initialized animation value to a node. This node will use the animated value
for its style properties. Use the `left` animation value in the `AnimatedBlock` component for
the `left` style property.

The animation value's `.value` property is read by the `AnimatedBlock`
component and can be modified when a new value is assigned to it.

```jsx
import { AnimatedBlock, useAnimatedValue } from 'react-ui-animate';

export const Example = () => {
  const left = useAnimatedValue(0);

  return (
    <>
      <AnimatedBlock
        style={{
          width: 100,
          height: 100,
          background: '#39F',
          position: 'relative',
          left: left.value, // Apply animated value with .value property
        }}
      />

      {/* The rest of the example will be added in the next section */}
    </>
  );
};
```

## Update the Animation Value

Finally, update the animation value based on user interaction or any other event.
In this example, we'll update the `left` property when a button is clicked.
Modify the `.value` property to automatically animate the value.

```jsx
import { AnimatedBlock, useAnimatedValue } from 'react-ui-animate'; // Import your Button component

export const Example = () => {
  const left = useAnimatedValue(0);

  return (
    <>
      <AnimatedBlock
        style={{
          width: 100,
          height: 100,
          background: '#39F',
          position: 'relative',
          left: left.value, // Apply animated value with .value property
        }}
      />

      {/* Update the animation value */}
      <button onClick={() => (left.value = 0)}>Animate Left</button>
      <button onClick={() => (left.value = 500)}>Animate Right</button>
    </>
  );
};
```

## Example

import GettingStartedExamples from '/src/components/GettingStartedExamples';

<GettingStartedExamples />

This example demonstrates how easy it is to create animations with React UI Animate.
You'll see how to initialize an animated value, apply it to a component, and update it based
on user interaction. Once you've understood this example, you'll be ready to explore more advanced
animations and interactions in your projects.

## What's Next ?

In the next section, we will dive deeper into **Animated Values** and how to leverage them for
more complex animations.
