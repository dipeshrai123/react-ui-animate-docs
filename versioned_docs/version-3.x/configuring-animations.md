---
sidebar_position: 5
id: configuring-animations
title: Configuring Animations
---

React UI Animate provides two types of animation configurations: Timing and Spring based animations. By default, Animated Values in React UI Animate implement Spring based animation.

## Spring-Based Animation

```jsx
import { useAnimatedValue } from 'react-ui-animate';

const left = useAnimatedValue(0, { mass: 1, friction: 10, tension: 200 });
```

In this example, `left` is initialized as a spring-based animation with custom parameters (`mass`, `friction`, and `tension`). Spring animations are naturally balanced and simulate physical systems, providing smooth and realistic motion.

import { SpringAnimation } from '/src/components/react-ui-animate-3.3.0-examples/ConfiguringAnimation'

<SpringAnimation />

## Timing-Based Animation

```jsx
import { useAnimatedValue } from 'react-ui-animate';

const left = useAnimatedValue(0, { duration: 1000 });
```

Here, `left` is initialized with a timing-based animation that completes in 1 second (`duration: 1000`). Timing-based animations are linearly interpolated and depend solely on the specified duration, making them suitable for precise, time-dependent animations.

import { TimingAnimation } from '/src/components/react-ui-animate-3.3.0-examples/ConfiguringAnimation'

<TimingAnimation />

## Pre-defined Animation Configurations

```jsx
import { useAnimatedValue, AnimationConfigUtils } from 'react-ui-animate';

const left = useAnimatedValue(0, AnimationConfigUtils.BOUNCE);
```

You can also use pre-defined animation configurations like `ELASTIC`, `EASE`, `BOUNCE`, `STIFF`, `POWER`, `WOOBLE`, etc., provided by `AnimationConfigUtils`. These configurations offer different styles of animations tailored for specific effects.

import { BounceAnimation } from '/src/components/react-ui-animate-3.3.0-examples/ConfiguringAnimation'

<BounceAnimation />

## Timing-Based Animation with Bezier Curve

```jsx
import { useAnimatedValue, Easing } from 'react-ui-animate';

const left = useAnimatedValue(0, {
  duration: 1000,
  easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
});
```

Here, `left` uses a timing-based animation with a duration of 1 second and a custom cubic bezier curve defined by `Easing.bezier(0.17, 0.67, 0.83, 0.67)`. Bezier curves allow for precise control over the animation's acceleration and deceleration, mimicking the behavior of CSS transitions' timing functions.

import { CubicBezierAnimation } from '/src/components/react-ui-animate-3.3.0-examples/ConfiguringAnimation'

<CubicBezierAnimation />

These examples demonstrate how to customize animations in React UI Animate using different configurations, including spring-based animations, pre-defined animation types, timing-based animations with easing functions, and timing-based animations with cubic bezier curves. Each configuration offers unique capabilities for creating engaging and dynamic animations in your applications.

## Summary

React UI Animate offers flexible animation configurations including spring-based and timing-based animations, pre-defined styles like `BOUNCE`, and custom easing with cubic bezier curves. These options enable developers to create dynamic and engaging animations tailored to their application's needs.

## What's Next ?

In the next section, we will look at `Unmounting Components`.
