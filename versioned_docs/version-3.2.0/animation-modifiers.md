---
sidebar_position: 7
id: animation-modifiers
title: Animation Modifiers
---

To achieve dynamic animation, the animation modifiers functions are used. When we create the animation value with `useAnimatedValue` hook, we can define the config or pass the pre-defined config from the library for different types of animation. But when we want even more control in our animation we can use the animation modifiers to modify the animation configuration when we set the value.

## Applying `withSpring` modifier

If we want to achieve the spring animation we can use `withSpring` modifier function on our animation value. For example, if we want to animate a box from left to right with spring animation, then we need to use `withSpring`.

```jsx
const animation = useAnimatedValue(0);

const animateRight = () => {
  animation.value = withSpring(100);
};
```

In this example, when we call `animateRight` function, the animation value is animated with spring animation. We futher can modify the spring configuration by passing the `config`.

```jsx
const animation = useAnimatedValue(0);

const animateRight = () => {
  animation.value = withSpring(100, { friction: 10 });
};
```

## Applying `withTiming` modifier

If we want to achieve the timing animation we can use `withTiming` modifier function on our animation value.

```jsx
const animation = useAnimatedValue(0);

const animateRight = () => {
  animation.value = withTiming(100);
};
```

In this example, when we call `animateRight` function, the animation value is animated with timing animation. We futher can modify the timing configuration by passing the `config`.

```jsx
const animation = useAnimatedValue(0);

const animateRight = () => {
  animation.value = withSpring(100, { duration: 5000 });
};
```

## Applying `withEase` modifier

By default, the ease animation is applied. If we do not use any of the modifier function when setting the animation value, then `withEase` modifier is applied.

```jsx
const animation = useAnimatedValue(0);

const animateRight = () => {
  animation.value = withEase(100); // is same as animation.value = 100
};
```

## Sequence animation with `withSequence` modifier

When we want to have the sequence animation ( one after another ), then we need to use `withSequence` modifier with the conjunction of `withTiming` or `withSpring` or `withEase`.

```jsx
const animation = useAnimatedValue(0);

const animateRight = () => {
  animation.value = withSequence(withSpring(50), withTiming(100));
};
```
