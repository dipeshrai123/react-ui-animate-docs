import React, { useState } from 'react';
import { Paper, Button, ButtonGroup } from '@mui/material';
import {
  AnimatedBlock,
  useAnimatedValue,
  interpolate,
  AnimationConfigUtils,
  useMountedValue,
  useDrag,
  withSpring,
} from 'react-ui-animate';

import styles from './index.module.css';

const Unmounting = () => {
  const [visible, setVisible] = useState(true);

  const open = useMountedValue(visible, {
    from: 0,
    enter: 1,
    exit: 0,
  });

  return (
    <Paper
      variant="outlined"
      style={{
        padding: 20,
        marginBottom: 20,
      }}
    >
      {open(
        (animation, mounted) =>
          mounted && (
            <AnimatedBlock
              style={{
                width: 200,
                height: 100,
                backgroundColor: '#31915f',
                borderRadius: 4,
                opacity: animation.value,
                margin: 'auto',
                marginBottom: 10,
              }}
            />
          )
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button variant="outlined" onClick={() => setVisible(!visible)}>
          {visible ? 'Hide Element' : 'Show Element'}
        </Button>
      </div>
    </Paper>
  );
};

const AnimatedTransitionExample = () => {
  const left = useAnimatedValue(0, AnimationConfigUtils.ELASTIC);

  return (
    <Paper variant="outlined" style={{ padding: 20, marginBottom: 20 }}>
      <AnimatedBlock
        style={{
          height: 100,
          background: '#39F',
          position: 'relative',
          left: left.value,
          borderRadius: 4,
          rotate: interpolate(left.value, [0, 200], [0, 180]),
          width: interpolate(left.value, [0, 200], [100, 200]),
          marginBottom: 10,
        }}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={() => (left.value = 0)}>Animate Left</Button>
          <Button onClick={() => (left.value = 200)}>Animate Right</Button>
        </ButtonGroup>
      </div>
    </Paper>
  );
};

export const Gesture = () => {
  const animation = useAnimatedValue(0);

  const bind = useDrag(({ down, movementX }) => {
    animation.value = down ? movementX : withSpring(0);
  });

  return (
    <Paper variant="outlined" style={{ padding: 20, marginBottom: 20 }}>
      <AnimatedBlock
        {...bind()}
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#f5533d',
          borderRadius: 4,
          translateX: animation.value,
          cursor: 'grabbing',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0px auto',
          color: 'white',
        }}
      >
        DRAG ME
      </AnimatedBlock>
    </Paper>
  );
};

const HomepageExamples = () => {
  return (
    <>
      <div style={{ borderTop: '1px solid #f1f1f1', marginTop: 40 }} />

      <section className={styles.container}>
        <div>
          <h2 className={styles.heading}>Animated Transition</h2>
          <h4 className={styles.subheading}>Animate from point a to point b</h4>
          <AnimatedTransitionExample />
        </div>

        <div>
          <h2 className={styles.heading}>Gestures</h2>
          <h4 className={styles.subheading}>
            Handle complex gestures according to your need
          </h4>
          <Gesture />
        </div>

        <div>
          <h2 className={styles.heading}>Mounting / Unmounting Transition</h2>
          <h4 className={styles.subheading}>
            Control the animation for mounting / unmouting component from the
            DOM
          </h4>
          <Unmounting />
        </div>
      </section>
    </>
  );
};

export default HomepageExamples;
