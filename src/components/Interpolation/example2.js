import React from 'react';
import {
  AnimatedBlock,
  useAnimatedValue,
  interpolate,
  withTiming,
} from 'react-ui-animate';
import { Button, ButtonGroup, Paper } from '@mui/material';

const Example = () => {
  const opacity = useAnimatedValue(0);

  return (
    <Paper variant="outlined" style={{ padding: 20, marginBottom: 20 }}>
      <AnimatedBlock
        style={{
          width: 100,
          height: 100,
          backgroundColor: interpolate(opacity.value, [0, 1], ['red', 'black']),
          borderRadius: 4,
        }}
      />

      <ButtonGroup style={{ marginTop: 10 }}>
        <Button variant="outlined" onClick={() => (opacity.value = 1)}>
          Animate
        </Button>
        <Button
          variant="outlined"
          onClick={() => (opacity.value = withTiming(0, { duration: 0 }))}
        >
          Reset
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default Example;
