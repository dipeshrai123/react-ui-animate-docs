---
sidebar_position: 3
id: animated-values
title: Animated Values
---

Animated Values are the core concept of **react-ui-animate**. They hold and manage the data that
drives your animations, providing a straightforward way to create smooth and responsive
animations.

## Defining Animated Value

`useAnimatedValue` is a hook that returns an object containing properties like `.value` and
`.currentValue`. These Animated Value objects serve as references to pieces of shared animation data,
which can be accessed and modified using their `.value` property. Similar to `useRef`,
`useAnimatedValue` stores data until the component is unmounted, maintains data across
state changes, and modifies data without triggering re-renders.

To create an Animated Value, use the `useAnimatedValue` hook:

```js
const animationNode = useAnimatedValue(initialValue);
```

This returns a mutable object whose `.value` property is initialized to the provided initialValue,
which can be any primitive type like a `number` or `string`.

To update an Animated Value, set a new value of the same primitive type onto the `.value` property.
This spontaneous modification reflects instant reactivity.

```jsx
import { useAnimatedValue } from 'react-ui-animate';

function SomeComponent() {
  const animationNode = useAnimatedValue(0);

  return (
    <button onClick={() => (animationNode.value = Math.random())}>
      Randomize
    </button>
  );
}
```

In the above example, the value is updated from the initial value of 0 to random values.
Updates are automatically and smoothly animated.

### Example

Let's look at a practical example:

```jsx
import { animate, useAnimatedValue } from 'react-ui-animate';

export default function () {
  const opacity = useAnimatedValue(1);

  return (
    <div>
      <animate.div
        style={{
          opacity: opacity.value,
          width: 100,
          padding: 20,
          background: '#39F',
          borderRadius: 4,
        }}
      >
        ANIMATED
      </animate.div>

      <button onClick={() => (opacity.value = 0)}>Fade Out</button>
    </div>
  );
}
```

In this example, clicking the button animates the opacity from 1 to 0 smoothly.
The `animate.div` component is used instead of a regular HTML element because it can read and
respond to Animated Values. The `animate.div` HOC (Higher-Order Component) acts as a div element
that can also interpret Animated Values.

import AnimatedValues from '/src/components/AnimatedValues';

<AnimatedValues />

### Extending to Other Elements

You might need to animate elements other than `div`. The `animate` object contains all of the HTML / SVG tag elements which can be used similarly as `animated.div`.

```jsx
import { animate } from 'react-ui-animate';
```

You can then create animated versions of any HTML element using `animate`:

```jsx
render(
  <animate.ul>
    <animate.li></animate.li>
  </animate.ul>
);
```

In this example, `animate.ul` and `animate.li` are animated versions of the `ul` and `li` elements, respectively.
This allows you to apply animated values to any HTML element without restriction.

### Creating Custom Animated Components

If you need to create a custom component that can accept animation values, you can use the `makeAnimated()`
function. This utility transforms your custom component into an animated component that can read and
respond to Animated Values.

```jsx
import { makeAnimated } from 'react-ui-animate';

const CustomComponent = (props) => <div {...props}>Custom Content</div>;

const AnimatedCustomComponent = makeAnimated(CustomComponent);
```

In this example:

1. `CustomComponent`: A standard React component that renders a div with custom content.
2. `AnimatedCustomComponent`: A new component created by passing `CustomComponent` to `makeAnimated()`.
   This animated version can now accept and respond to Animated Values.

## What's Next ?

In the next section, we will look into `interpolation`.
