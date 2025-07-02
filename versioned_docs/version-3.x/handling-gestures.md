---
sidebar_position: 8
id: handling-gestures
title: Handling Gestures
---

React UI Animate provides a powerful set of gesture hooks that enable you to easily bind mouse and touch events to any node. This allows for the creation of complex interactions, such as dragging and scrolling, with just a few lines of code.

import { Gesture } from '/src/components/react-ui-animate-3.3.0-examples/HomepageExamples';

<Gesture />

## Defining a gesture

To get started with gestures, you first need to import the appropriate gesture hook and define it inside a component. For instance, to use the `useDrag` hook, you can set it up as follows:

```jsx
import { useDrag } from 'react-ui-animate';

function Component() {
  const bind = useDrag(() => {});
}
```

The `useDrag` hook takes a function as an argument, which receives all the drag/event data. This hook is assigned to a `bind` variable that contains all the necessary event handlers. You can then attach these handlers to a component.

## Binding a gesture to a Node

Thanks to the consistent pattern of gesture hooks, binding a gesture to a node is straightforward. The gesture hooks return a function that, when called, provides an object with event handlers. Here’s an example of making a `<div />` draggable:

```jsx
import { useDrag } from 'react-ui-animate';

export default function () {
  const bind = useDrag((state) => doSomething(state));

  return (
    <div
      {...bind()}
      style={{
        width: 60,
        height: 60,
        backgroundColor: '#3399ff',
      }}
    />
  );
}
```

In this example, the `<div />` element receives an object with event handlers when you spread `...bind()`. This includes handlers like `onPointerDown` and `onMouseDown`. The `useDrag` hook's callback function receives a `state` object containing all the gesture's attributes. This `state` object is passed to your handler every time the gesture updates.

To implement actual dragging, use the gesture hook in conjunction with an Animated Value:

```jsx
import { useDrag, useAnimatedValue, AnimatedBlock } from 'react-ui-animate';

export default function () {
  const left = useAnimatedValue(0);

  const bind = useDrag(({ down, movementX }) => {
    left.value = down ? movementX : 0;
  });

  return (
    <AnimatedBlock
      {...bind()}
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#f5533d',
        borderRadius: 4,
        position: 'relative',
        left: left.value,
      }}
    />
  );
}
```

In this example, `left` is an animated value. The `state` object includes `down`, which represents whether the mouse button is pressed, and `movementX`, which tracks the movement along the x-axis starting from 0.

import { DragGesture } from '/src/components/react-ui-animate-3.3.0-examples/Gestures';

<DragGesture />

## Available gesture hooks

React UI Animate offers the following gesture hooks, all of which share a similar API pattern:

- `useScroll` for scroll gestures.
- `useMouseMove` for mouse move gestures.
- `useDrag` for drag gestures.
- `useWheel` for mouse wheel gestures.
- `useGesture` for multiple gesturess.

These hooks provide a flexible and efficient way to handle various user interactions, making it easy to implement responsive and interactive UI elements.
