---
sidebar_position: 2
id: use-mounted-value
title: useMountedValue
---

`useMountedValue` facilitates the management of mounting and unmounting transitions for components. When invoked with a boolean state and an object defining transition phases, it returns a function.

The boolean state (`boolean`) indicates whether the component is mounted (`true`) or unmounted (`false`). The second argument is an object containing three numeric properties: `from`, `enter`, and `exit`. These properties define the progression of the component's transition lifecycle:

- `from`: Initial state of the transition.
- `enter`: State when the component mounts.
- `exit`: State when the component unmounts.

This hook enables seamless integration of transition effects into components, ensuring smooth and visually appealing mounting and unmounting experiences.

## Arguments

#### `initialState` [ boolean ]

The first argument is `initialState` which determines the current mounting state of a component. Changes to it triggers the animation and mounting/unmounting of component occurs.

#### `config` [ object ]

Optional `object` containing the animation configuration. Allowed parameters are listed below:

| Options | Description                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------ |
| from    | Initial state of animation value when component mounts                                                 |
| enter   | Animation value animates from `from` phase to `enter` phase when component mounts                      |
| exit    | Animation value animates from `enter` phase to `exit` phase when state is false and component unmounts |
| config? | Animation configuration object                                                                         |

`config` object is animation configuration object with following properties:

| Options       | Default   | Description                                                                                                    |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| animationType | "ease"    | Default spring type animation                                                                                  |
| mass          | 1         | Spring mass                                                                                                    |
| friction      | 26        | Spring friction                                                                                                |
| tension       | 170       | Spring energy                                                                                                  |
| immediate     | false     | If true, the animation is not applied rather updates are immediate.                                            |
| duration      | undefined | How long the animation should last, if > than 0 switch to a duration-based animation instead of spring physics |
| easing        | t => t    | Linear by default, you can use Easing module.                                                                  |
| onStart       | undefined | Function called on start of animation with numeric value.                                                      |
| onChange      | undefined | Function called every time the value is updated with numeric value.                                            |
| onRest        | undefined | Function called when the animation completes with object `{ finished: boolean, value: number }`.               |

## Returns

It returns a function which takes a callback function with arguments: Animated Value as first argument and boolean defining current state as second argument.

```jsx
const mountedFunction = useMountedValue(boolean, {
  from: 0,
  enter: 1,
  exit: 0,
});
```

## Example

In the below example, `open` function receives a callback that receives two arguments: the Animated Value and a boolean respectively. The first argument, Animated Value animates from `from = 0` to `enter = 1` when the visible is true and `enter = 1` to `exit = 0` when visible is false. And the second argument, boolean dinamically determines whether the component is mounted or not after animation. `AnimatedBlock` HOC is used to read animated values.

```jsx
import { useState } from 'react';
import { useMountedValue } from 'react-ui-animate';

function SomeComponent() {
  const [visible, setVisible] = useState(false);

  const open = useMountedValue(visible, { from: 0, enter: 1, exit: 0 });

  return (
    <div>
      {open(
        (animation, mounted) =>
          mounted && (
            <AnimatedBlock
              style={{
                width: 100,
                height: 100,
                backgroundColor: '#3399ff',
                opacity: animation.value,
              }}
            />
          )
      )}

      <button onClick={() => setVisible((prev) => !prev)}>CLICK ME</button>
    </div>
  );
}
```
