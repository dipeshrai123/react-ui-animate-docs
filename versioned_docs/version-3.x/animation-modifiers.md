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

import WithSpringModifier from '@site/src/examples/strings/v3.3.0/AnimationModifiers/WithSpringModifier';
import WithSpringModifierConfig from '@site/src/examples/strings/v3.3.0/AnimationModifiers/WithSpringModifierConfig';

import WithTimingModifier from '@site/src/examples/strings/v3.3.0/AnimationModifiers/WithTimingModifier';
import WithTimingModifierConfig from '@site/src/examples/strings/v3.3.0/AnimationModifiers/WithTimingModifierConfig';

import WithConfigModifier from '@site/src/examples/strings/v3.3.0/AnimationModifiers/WithConfigModifier';

import WithSequenceModifier from '@site/src/examples/strings/v3.3.0/AnimationModifiers/WithSequenceModifier';
import WithEaseModifier from '@site/src/examples/strings/v3.3.0/AnimationModifiers/WithEaseModifier';

import SandPack from "/src/components/SandPack"

<SandPack version={{reactAnimate:"^3.3.0"}} files={{"App.tsx": WithSpringModifier}}/>

You can further customize the spring configuration by passing options such as `friction` and `tension`.

```js
animation.value = withSpring(100, { friction: 5 });
```

<SandPack version={{reactAnimate:"^3.3.0"}} files={{"App.tsx": WithSpringModifierConfig}}/>

## Applying `withTiming` modifier

The `withTiming` modifier enables timing-based animations on an animation value.

```jsx
import { useAnimatedValue, withTiming } from 'react-ui-animate';

const animation = useAnimatedValue(0);

const animateRight = () => {
  animation.value = withTiming(100);
};
```

<SandPack version={{reactAnimate:"^3.3.0"}} files={{"App.tsx": WithTimingModifier}}/>

You can adjust the timing configuration by passing options such as `duration` or `easing`.

```jsx
animation.value = withTiming(100, { duration: 5000 });
```

<SandPack version={{reactAnimate:"^3.3.0"}} files={{"App.tsx": WithTimingModifierConfig}}/>

## Applying `withEase` modifier

By default, the `withEase` modifier applies ease animation. It is automatically used if no other modifier function is specified.

```jsx
import { useAnimatedValue, withEase } from 'react-ui-animate';

const animation = useAnimatedValue(0);

const animateRight = () => {
  animation.value = withEase(100); // Same as animation.value = 100
};
```

<SandPack version={{reactAnimate:"^3.3.0"}} files={{"App.tsx": WithEaseModifier}}/>

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

<SandPack version={{reactAnimate:"^3.3.0"}} files={{"App.tsx": WithSequenceModifier}}/>

## Applying Pre-defined configs with `withConfig` modifier

To create sequential animations, use the `withSequence` modifier in combination with other modifiers like `withTiming`, `withSpring`, or `withEase` as an array.

To apply different pre-defined configs from `AnimationConfigUtils` like `ELASTIC`, `BOUNCE`, `WOOBLE` etc. we can use `withConfig` modifier.

```jsx
import {
  useAnimatedValue,
  withConfig,
  AnimationConfigUtils,
} from 'react-ui-animate';

const animation = useAnimatedValue(0);

const animateLeft = () => {
  animation.value = withConfig(0, AnimationConfigUtils.WOOBLE);
};

const animateRight = () => {
  animation.value = withConfig(100, AnimationConfigUtils.BOUNCE);
};
```

In this example, `animation.value` is applied with `BOUNCE` animation when Animate Right button is clicked and `WOOBLE` animation when Animate Left button is clicked.

<SandPack version={{reactAnimate:"^3.3.0"}} files={{"App.tsx": WithConfigModifier}}/>

## What's Next ?

In the next section, we will look at `Handling Gestures`.
