---
sidebar_position: 2
id: use-mount
title: useMount
---

The `useMount()` hook returns a function to orchestrate entry and exit animations for components based on a boolean state. It animates a value from `0 → 1` on mount and `1 → 0` on unmount using a default ease animation.

## Arguments

| Name   | Type    | Description                                                           |
| ------ | ------- | --------------------------------------------------------------------- |
| `open` | boolean | Controls whether the component is shown (`true`) or hidden (`false`). |

## Returns

A **mount function** with signature:

```ts
type MountFn = (
  renderer: (
    animation: { value: number },
    isMounted: boolean
  ) => React.ReactNode
) => React.ReactNode;
```

- **`animation.value`**: Animated Value that transitions from `0` to `1` (enter) and `1` to `0` (exit).
- **`isMounted`**: Indicates whether the content should be rendered post-animation.

## Example

```jsx
import React from "react";
import { animate, bInterpolate, useMount } from "react-ui-animate";

export const UseMount: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  const mounted = useMount(open);

  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)}>ANIMATE ME</button>

      {mounted(
        (animation, isMounted) =>
          isMounted && (
            <>
              <animate.div
                style={{
                  width: bInterpolate(animation.value, 100, 300),
                  height: bInterpolate(animation.value, 100, 200),
                  backgroundColor: bInterpolate(
                    animation.value,
                    "red",
                    "#3399ff"
                  ),
                  translateX: 45,
                }}
              />
              <animate.div
                style={{
                  width: bInterpolate(animation.value, 100, 400),
                  height: bInterpolate(animation.value, 100, 50),
                  border: "1px solid black",
                  backgroundColor: bInterpolate(
                    animation.value,
                    "red",
                    "#3399ff"
                  ),
                  translateX: 45,
                }}
              />
              <animate.div
                style={{
                  width: bInterpolate(animation.value, 100, 500),
                  height: 100,
                  backgroundColor: bInterpolate(
                    animation.value,
                    "red",
                    "#3399ff"
                  ),
                  translateX: 45,
                }}
              />
            </>
          )
      )}
    </>
  );
};
```

## What's Next?

In the next section, we'll explore **Animation Modifiers** using `withSpring`, `withTiming`, and more.
