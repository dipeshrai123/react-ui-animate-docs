import React from 'react';
import { AnimatedBlock, useAnimatedValue } from 'react-ui-animate';
import { Button, Paper, ButtonGroup } from '@mui/material';

const Example = () => {
  const left = useAnimatedValue(0);

  return (
    <Paper variant='outlined' style={{ padding: 20, marginBottom: 20 }}>
      <AnimatedBlock
        style={{
          width: 100,
          height: 100,
          background: '#39F',
          position: 'relative',
          left: left.value,
          borderRadius: 4,
        }}
      />
      <ButtonGroup
        variant='outlined'
        aria-label='outlined button group'
        style={{ marginTop: 10 }}
      >
        <Button onClick={() => (left.value = 0)}>Animate Left</Button>
        <Button onClick={() => (left.value = 200)}>Animate Right</Button>
      </ButtonGroup>
    </Paper>
  );
};

export default Example;
