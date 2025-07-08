const HomepageExamples_HomepageExamples = `import React, { useState } from 'react';
import { Paper, Button, ButtonGroup } from '@mui/material';
import {
  animate,
  useAnimatedValue,
  interpolate,
  AnimationConfigUtils,
  useMountedValue,
} from 'react-ui-animate';

import styles from './index.module.css';
import Gesture from './Gesture';

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
            <animate.div
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
  const left = useAnimatedValue(0, AnimationConfigUtils?.ELASTIC);

  return (
    <Paper variant="outlined" style={{ padding: 20, marginBottom: 20 }}>
      <animate.div
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
`;
export default HomepageExamples_HomepageExamples;
