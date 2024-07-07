import React from 'react';
import { AnimatedBlock, useAnimatedValue, interpolate } from 'react-ui-animate';
import { Button, Paper } from '@mui/material';

const Example = () => {
  const opacity = useAnimatedValue(0);

  return (
    <Paper variant='outlined' style={{ padding: 20, marginBottom: 20 }}>
      <AnimatedBlock
        style={{
          width: 100,
          height: 100,
          backgroundColor: interpolate(opacity.value, [0, 1], ['red', 'black']),
          borderRadius: 4,
        }}
      />

      <Button
        variant='outlined'
        onClick={() => (opacity.value = 1)}
        style={{ marginTop: 10 }}
      >
        Animate
      </Button>
    </Paper>
  );
};

export default Example;
