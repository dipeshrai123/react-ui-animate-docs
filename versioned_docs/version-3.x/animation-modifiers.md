---
sidebar_position: 7
id: animation-modifiers
title: Animation Modifiers
---

To achieve dynamic animations with precise control, React UI Animate provides animation modifier functions. These modifiers allow customization of animation configurations when setting animation values using `useAnimatedValue`.

## Applying `withSpring` modifier

The withSpring modifier facilitates spring-based animations on an animation value.

```jsx
import { useAnimatedValue, withSpring } from 'react-ui-animate';

const animation = useAnimatedValue(0);

const animateRight = () => {
  animation.value = withSpring(100);
};
```

import { WithSpringModifier } from '/src/components/AnimationModifiers'

<WithSpringModifier />

You can further customize the spring configuration by passing options such as `friction` and `tension`.

```js
animation.value = withSpring(100, { friction: 5 });
```

import { WithSpringModifierConfig } from '/src/components/AnimationModifiers'

<WithSpringModifierConfig />

## Applying `withTiming` modifier

The `withTiming` modifier enables timing-based animations on an animation value.

```jsx
import { useAnimatedValue, withTiming } from 'react-ui-animate';

const animation = useAnimatedValue(0);

const animateRight = () => {
  animation.value = withTiming(100);
};
```

import { WithTimingModifier } from '/src/components/AnimationModifiers'

<WithTimingModifier />

You can adjust the timing configuration by passing options such as `duration` or `easing`.

```jsx
animation.value = withTiming(100, { duration: 5000 });
```

import { WithTimingModifierConfig } from '/src/components/AnimationModifiers'

<WithTimingModifierConfig />

## Applying `withEase` modifier

By default, the `withEase` modifier applies ease animation. It is automatically used if no other modifier function is specified.

```jsx
import { useAnimatedValue, withEase } from 'react-ui-animate';

const animation = useAnimatedValue(0);

const animateRight = () => {
  animation.value = withEase(100); // Same as animation.value = 100
};
```

import { WithEaseModifier } from '/src/components/AnimationModifiers'

<WithEaseModifier />

## Sequence Animation with `withSequence` modifier

To create sequential animations, use the `withSequence` modifier in combination with other modifiers like `withTiming`, `withSpring`, or `withEase` as an array.

```jsx
import {
  useAnimatedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-ui-animate';

const animation = useAnimatedValue(0);

const animateRight = () => {
  animation.value = withSequence([withSpring(50), withTiming(100)]);
};
```

In this example, `animation.value` first animates with a spring animation to `50`, followed by a timing animation to `100`.

import { WithSequenceModifier } from '/src/components/AnimationModifiers'

<WithSequenceModifier />

## What's Next ?

In the next section, we will look at `Handling Gestures`.
