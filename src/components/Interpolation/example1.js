import React from 'react';
import { AnimatedBlock, useAnimatedValue, interpolate } from 'react-ui-animate';
import { Button, Paper } from '@mui/material';

const Example = () => {
  const left = useAnimatedValue(0);

  return (
    <Paper variant='outlined' style={{ padding: 20, marginBottom: 20 }}>
      <AnimatedBlock
        style={{
          width: interpolate(left.value, [0, 200], [100, 400]),
          height: 100,
          backgroundColor: '#3399ff',
          borderRadius: 4,
          position: 'relative',
          left: left.value,
        }}
      />

      <Button
        variant='outlined'
        onClick={() => (left.value = 200)}
        style={{ marginTop: 10 }}
      >
        Animate
      </Button>
    </Paper>
  );
};

export default Example;
