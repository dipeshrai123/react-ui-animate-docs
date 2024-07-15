---
sidebar_position: 1
id: use-animated-value
title: useAnimatedValue
---

`useAnimatedValue` is a hook that returns an object containing properties like `.value` and
`.currentValue`. These Animated Value objects serve as references to pieces of shared animation data,
which can be accessed and modified using their `.value` property. Similar to `useRef`,
`useAnimatedValue` stores data until the component is unmounted, maintains data across
state changes, and modifies data without triggering re-renders.

It returns a mutable object whose `.value` property is initialized to the passed argument initialValue. The initial value can be `number` or `string`.

## Arguments

#### `initialValue` [ number | string ]

The first argument takes the initial value, which could be any of the primitive JavaScript types, and assigns it as the initial value of the created Shared Value. The value then can be read from the Shared Value reference using `.value` attribute.

#### `config` [ object ]

Optional `object` containing the animation configuration. Allowed parameters are listed below:

| Options   | Default   | Description                                                                                                    |
| --------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| mass      | 1         | Spring mass                                                                                                    |
| friction  | 26        | Spring friction                                                                                                |
| tension   | 170       | Spring energy                                                                                                  |
| immediate | false     | If true, the animation is not applied rather updates are immediate.                                            |
| duration  | undefined | How long the animation should last, if > than 0 switch to a duration-based animation instead of spring physics |
| easing    | t => t    | Linear by default when `duration` is defined, you can use `Easing` module.                                     |
| onStart   | undefined | Function called on start of animation with numeric value.                                                      |
| onChange  | undefined | Function called every time the value is updated with numeric value.                                            |
| onRest    | undefined | Function called when the animation completes with object `{ finished: boolean, value: number }`.               |

## Returns

Returns a reference to the Animated Value with the provided data. The value can be updated and read by HOCs using `.value` attribute. To read current value for conditional operations, we use `.currentValue`.

```jsx
opacity.value = 100;
```

## Example

In the below example, we render a `AnimatedBlock` and a button. We initialize an Animated Value `opacity` and applied in `AnimatedBlock` and triggering the update with a button.

```jsx
import { AnimatedBlock, useAnimatedValue } from 'react-ui-animate';

export default function () {
  const opacity = useAnimatedValue(0); // It initializes opacity object with value 0.

  return (
    <div>
      {/* AnimatedBlock component can read useAnimatedValue() */}
      <AnimatedBlock
        style={{
          opacity: opacity.value, // using opacity with value property
          width: 100,
          padding: 20,
          background: '#39F',
        }}
      >
        ANIMATED
      </AnimatedBlock>

      {/* Assigning value to 1 auto animates from initialized value 0 to 1 smoothly */}
      <button onClick={() => (opacity.value = 1)}>Animate Me</button>
    </div>
  );
}
```
