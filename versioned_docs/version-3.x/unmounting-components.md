---
sidebar_position: 6
id: unmounting-components
title: Unmounting components
---

When working with animations in React, especially when mounting and unmounting components with
transitions, `useMountedValue()` hook or `MountedBlock` HOC from React UI Animate is a powerful tool. It facilitates smooth
transitions for components entering and leaving the DOM.

import { Unmounting } from '/src/components/react-ui-animate-3.3.0-examples/Unmounting';

<Unmounting />

:::tip

Both `useMountedValue()` hook and HOC `MountedBlock` provide same result. The `MountedBlock` HOC is easier and better to use. Check [`MountedBlock`](#using-mountedblock-hoc).

:::

## Using `useMountedValue()`

Let's walk through an example where we have a component that toggles its visibility using state
and applies animations when it mounts and unmounts.

```jsx
import { useState } from 'react';
import { useMountedValue, AnimatedBlock } from 'react-ui-animate';

export default function App() {
  const [visible, setVisible] = useState(false);

  // useMountedValue hook manages the mounting and unmounting animations
  const open = useMountedValue(visible, {
    from: 0, // Initial state [visible = false]
    enter: 1, // State when mounting [visible = true]
    exit: 0, // State when unmounting [visible from true to false]
  });

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>

      {/* Conditional rendering based on mounted state */}
      {open(
        (animation, mounted) =>
          mounted && (
            <AnimatedBlock
              style={{
                width: 100,
                height: 100,
                backgroundColor: '#3399ff',
                borderRadius: 4,
                opacity: animation.value,
              }}
            />
          )
      )}
    </div>
  );
}
```

**Explanation**

1. **State Management:**

   - We start with a `visible` state variable (`false` initially) to toggle the visibility of our component.

2. **useMountedValue Hook:**

   - `useMountedValue()` hook takes `visible` as its first argument. This tells the hook whether the
     component should be mounted (`true`) or unmounted (`false`).

   - The second argument is an options object defining animation states:
     - `from`: Initial state when not mounted (`0` typically means hidden).
     - `enter`: State when mounting (`1` typically means fully visible).
     - `exit`: State when unmounting (back to `0`, hidden).

3. **Rendering Logic:**

   - The `open` function returned by `useMountedValue()` accepts a callback function with parameters `animation`
     and `mounted`.

   - Inside the callback, `mounted` is a boolean indicating whether the component is currently mounted (`true`)
     or unmounted (`false`).

   - `open()` conditionally renders `AnimatedBlock` based on the `mounted` state. This ensures that
     transitions are applied only when the component is mounting or unmounting.

4. **Component Interaction:**

   - The button toggles the `visible` state, which in turn triggers the mounting/unmounting animations managed by
     `useMountedValue()`.

## Configuring Animation

To configure mounting and unmounting animations:

### Adding config

We can configure the animation by passing it in `config` object inside the `useMountedValue()` hook. You
can customize any spring or timing based animations or pass any built-in pre-defined animation from `react-ui-animate`

```jsx
import { useMountedValue, AnimationConfigUtils } from 'react-ui-animate';

const open = useMountedValue(visible, {
  from: 0,
  enter: 1,
  exit: 0,
  config: AnimationConfigUtils.BOUNCE,
});
```

Here, `AnimationConfigUtils.BOUNCE` provides a predefined bouncing effect, ensuring a visually engaging
transition.

### Interpolating Animation Values

You can interpolate animation values to achieve complex animations. For example:

```jsx
interpolate(animation.value, [0, 1], [0, 200]),
```

### Example

Here is the full example about configuring animations for `useMountedValue()`:

import { ConfigureUnmounting } from '/src/components/react-ui-animate-3.3.0-examples/Unmounting';

<ConfigureUnmounting />

```jsx
import { useState } from 'react';
import {
  useMountedValue,
  AnimatedBlock,
  AnimationConfigUtils,
  interpolate,
} from 'react-ui-animate';

export default function App() {
  const [visible, setVisible] = useState(false);

  const open = useMountedValue(visible, {
    from: 0,
    enter: 1,
    exit: 0,
    config: AnimationConfigUtils.BOUNCE,
  });

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>

      {open(
        (animation, mounted) =>
          mounted && (
            <AnimatedBlock
              style={{
                width: 100,
                height: 100,
                backgroundColor: '#3399ff',
                borderRadius: 4,
                opacity: animation.value,
                position: 'relative',
                left: interpolate(animation.value, [0, 1], [0, 200]),
              }}
            />
          )
      )}
    </div>
  );
}
```

## Using `MountedBlock` HOC

`MountedBlock` is a higher-order component (HOC) that simplifies the process of mounting and unmounting components with animations. It is built using the `useMountedValue` hook and provides a more convenient way to handle the same logic.

```jsx
import { useState } from 'react';
import {
  MountedBlock,
  AnimatedBlock,
  AnimationConfigUtils,
  interpolate,
} from 'react-ui-animate';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>

      <MountedBlock state={visible} config={AnimationConfigUtils.BOUNCE}>
        {(animation) => (
          <AnimatedBlock
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'red',
              translateX: interpolate(animation.value, [0, 1], [0, 200]),
              opacity: 0.3,
            }}
          />
        )}
      </MountedBlock>
    </div>
  );
}
```

**Explanation**

1. **State Management:**

   - We start with a `visible` state variable (`false` initially) to toggle the visibility of our component.

2. **Rendering Logic:**
   - `MountedBlock` HOC wraps the `AnimatedBlock` component.
   - The `state` prop of `MountedBlock` is set to the `visible` state, indicating whether the component should be mounted (`true`) or unmounted (`false`).
   - The config `prop` allows for additional animation configuration.
   - The `AnimatedBlock` component is rendered with the specified styles and interpolated values based on the animation state.
   - The children as a function is passed with the argument of animated value, animating from `0` to `1`.

## Summary

Using `useMountedValue` and `MountedBlock` from React UI Animate allows developers to easily manage and customize mounting and unmounting animations in React applications. By defining animation states and configurations, such as duration, easing functions, and predefined animations, developers can create smooth and intuitive transitions that enhance user experience and interface dynamics. This approach ensures that animations are not only visually appealing but also responsive to user interactions, making applications more engaging and user-friendly.

## What's Next ?

In the next section, we will look at `Animation Modifiers`.
