import React from 'react';
import {
  AnimatedBlock,
  useAnimatedValue,
  AnimationConfigUtils,
  Easing,
} from 'react-ui-animate';
import { Button, Paper, ButtonGroup } from '@mui/material';

export const SpringAnimation = () => {
  const left = useAnimatedValue(0, { mass: 1, friction: 10, tension: 200 });

  return (
    <Paper variant='outlined' style={{ padding: 20, marginBottom: 20 }}>
      <AnimatedBlock
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#3399ff',
          borderRadius: 4,
          position: 'relative',
          left: left.value,
        }}
      />

      <ButtonGroup variant='outlined' style={{ marginTop: 10 }}>
        <Button onClick={() => (left.value = 0)}>Left</Button>
        <Button onClick={() => (left.value = 500)}>Right</Button>
      </ButtonGroup>
    </Paper>
  );
};

export const TimingAnimation = () => {
  const left = useAnimatedValue(0, { duration: 1000 });

  return (
    <Paper variant='outlined' style={{ padding: 20, marginBottom: 20 }}>
      <AnimatedBlock
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#3399ff',
          borderRadius: 4,
          position: 'relative',
          left: left.value,
        }}
      />

      <ButtonGroup variant='outlined' style={{ marginTop: 10 }}>
        <Button onClick={() => (left.value = 0)}>Left</Button>
        <Button onClick={() => (left.value = 500)}>Right</Button>
      </ButtonGroup>
    </Paper>
  );
};

export const BounceAnimation = () => {
  const left = useAnimatedValue(0, AnimationConfigUtils.BOUNCE);

  return (
    <Paper variant='outlined' style={{ padding: 20, marginBottom: 20 }}>
      <AnimatedBlock
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#3399ff',
          borderRadius: 4,
          position: 'relative',
          left: left.value,
        }}
      />

      <ButtonGroup variant='outlined' style={{ marginTop: 10 }}>
        <Button onClick={() => (left.value = 0)}>Left</Button>
        <Button onClick={() => (left.value = 500)}>Right</Button>
      </ButtonGroup>
    </Paper>
  );
};

export const CubicBezierAnimation = () => {
  const left = useAnimatedValue(0, {
    duration: 1000,
    easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
  });

  return (
    <Paper variant='outlined' style={{ padding: 20, marginBottom: 20 }}>
      <AnimatedBlock
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#3399ff',
          borderRadius: 4,
          position: 'relative',
          left: left.value,
        }}
      />

      <ButtonGroup variant='outlined' style={{ marginTop: 10 }}>
        <Button onClick={() => (left.value = 0)}>Left</Button>
        <Button onClick={() => (left.value = 500)}>Right</Button>
      </ButtonGroup>
    </Paper>
  );
};
