import React, { useState } from 'react';
import {
  AnimatedBlock,
  useMountedValue,
  interpolate,
  AnimationConfigUtils,
} from 'react-ui-animate';
import { Button, Paper } from '@mui/material';

export const Unmounting = () => {
  const [visible, setVisible] = useState(true);

  const open = useMountedValue(visible, {
    from: 0,
    enter: 1,
    exit: 0,
  });

  return (
    <Paper variant="outlined" style={{ padding: 20, marginBottom: 20 }}>
      {open(
        (animation, mounted) =>
          mounted && (
            <AnimatedBlock
              style={{
                width: 100,
                height: 100,
                backgroundColor: '#31915f',
                borderRadius: 4,
                opacity: animation.value,
                marginBottom: 10,
              }}
            />
          )
      )}

      <Button variant="outlined" onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </Button>
    </Paper>
  );
};

export const ConfigureUnmounting = () => {
  const [visible, setVisible] = useState(false);

  const open = useMountedValue(visible, {
    from: 0,
    enter: 1,
    exit: 0,
    config: AnimationConfigUtils.BOUNCE,
  });

  return (
    <Paper variant="outlined" style={{ padding: 20, marginBottom: 20 }}>
      {open(
        (animation, mounted) =>
          mounted && (
            <AnimatedBlock
              style={{
                width: 100,
                height: 100,
                backgroundColor: '#3399ff',
                borderRadius: 4,
                opacity: animation.value,
                marginBottom: 10,
                position: 'relative',
                left: interpolate(animation.value, [0, 1], [0, 200]),
              }}
            />
          )
      )}

      <Button variant="outlined" onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </Button>
    </Paper>
  );
};
