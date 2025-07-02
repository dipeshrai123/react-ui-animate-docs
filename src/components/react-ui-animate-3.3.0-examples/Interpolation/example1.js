import React from 'react';
import {
  animate,
  useAnimatedValue,
  interpolate,
  withTiming,
} from 'react-ui-animate';
import { Button, ButtonGroup, Paper } from '@mui/material';

const Example = () => {
  const left = useAnimatedValue(0);

  return (
    <Paper variant='outlined' style={{ padding: 20, marginBottom: 20 }}>
      <animate.div
        style={{
          width: interpolate(left.value, [0, 200], [100, 400]),
          height: 100,
          backgroundColor: '#3399ff',
          borderRadius: 4,
          position: 'relative',
          left: left.value,
        }}
      />

      <ButtonGroup style={{ marginTop: 10 }}>
        <Button variant='outlined' onClick={() => (left.value = 200)}>
          Animate
        </Button>
        <Button
          variant='outlined'
          onClick={() => (left.value = withTiming(0, { duration: 0 }))}
        >
          Reset
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default Example;
