---
sidebar_position: 8
id: handling-gestures
title: Handling Gestures
---

React UI Animate provides a set of gesture hooks that bind native pointer and scroll events to Animated Values. With just a few lines of code, you can create draggable, scroll-responsive, and gesture-driven interfaces.

import Gesture from '@site/src/examples/strings/v3.3.0/HomepageExamples/Gesture';

import SandPack from "/src/components/SandPack"

<SandPack version={{reactAnimate:"^3.3.0"}} files={{"App.tsx": Gesture}}/>

## Defining a Gesture

Import the gesture hook you need and define it inside your component. Gesture hooks return a `bind` function supplying the necessary event handlers.

```jsx
import { useDrag } from 'react-ui-animate';

export const DraggableBox = () => {
  const bind = useDrag((state) => {
    // state contains { down, movementX, movementY, ... }
    console.log(state);
  });

  return (
    <div
      {...bind()}
      style={{ width: 60, height: 60, backgroundColor: '#3399ff' }}
    />
  );
};
```

## Drag Example with Animated Value

Combine `useDrag` with an Animated Value (`useValue`) to move an element:

```jsx
import { animate, useValue, useDrag, withSpring } from 'react-ui-animate';

export const DragGesture = () => {
  const x = useValue(0);
  const y = useValue(0);
  const bind = useDrag(({ down, movementX, movementY }) => {
    x.value = down ? movementX : withSpring(0);
    y.value = down ? movementY : withSpring(0);
  });

  return (
    <animate.div
      {...bind()}
      style={{
        width: 80,
        height: 80,
        backgroundColor: '#f5533d',
        borderRadius: 4,
        translateX: x.value,
        translateY: y.value,
      }}
    />
  );
};
```

## Scroll, Wheel, and MouseMove Hooks

- **useScroll**: React to page scroll
- **useWheel**: React to wheel (trackpad/mouse wheel)
- **useMouseMove**: React to pointer movement within a container

```jsx
import {
  animate,
  useValue,
  useScroll,
  useWheel,
  useMouseMove,
} from 'react-ui-animate';

export const ScrollColor = () => {
  const progress = useValue(0);
  useScroll(({ scrollY }) => {
    progress.value = scrollY;
  });

  return <></>;
};
```

## Combining Gestures with Animated Values

You can use any Animated Value modifiers with gesture-driven updates:

```jsx
import { animate, useValue, useWheel, withSpring } from 'react-ui-animate';

export const PinchZoom = () => {
  const scale = useValue(1);
  useWheel(({ deltaY }) => {
    // zoom in/out with spring for bounce effect
    const next = scale.value - deltaY * 0.001;
    scale.value = withSpring(Math.max(0.5, Math.min(2, next)));
  });

  return (
    <animate.div
      style={{
        width: 150,
        height: 150,
        backgroundColor: '#39F',
        scale: scale.value,
      }}
    />
  );
};
```

## Multi-Gesture Handling

Use `useGesture` to combine multiple gesture types on one element:

```jsx
import { animate, useValue, useGesture, withSpring } from 'react-ui-animate';

export const CombinedGesture = () => {
  const x = useValue(0);
  const y = useValue(0);

  const bind = useGesture({
    onDrag: ({ movementX, movementY }) => {
      x.value = withSpring(movementX);
      y.value = withSpring(movementY);
    },
    onWheel: ({ deltaY }) => {
      x.value = withSpring(x.value - deltaY);
    },
  });

  return (
    <animate.div
      {...bind()}
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#39F',
        translateX: x.value,
        translateY: y.value,
      }}
    />
  );
};
```

## Available Gesture Hooks

- `useDrag`
- `useScroll`
- `useWheel`
- `useMouseMove`
- `useGesture` (combine multiple gesture handlers)

## Summary

Gesture hooks in React UI Animate let you bind complex interactions—drag, scroll, wheel, pointer move—to Animated Values. By combining these hooks with modifiers like `withSpring` or `withTiming`, you can create highly interactive, responsive UIs.

## What's Next?

In the next section, we'll explore **Custom Animated Components** using `makeAnimated()` and the animate API.
