import React from 'react';
import { AnimatedBlock, useAnimatedValue, useDrag } from 'react-ui-animate';
import { Paper } from '@mui/material';

export const DragGesture = () => {
  const left = useAnimatedValue(0);

  const bind = useDrag(({ down, movementX }) => {
    left.value = down ? movementX : 0;
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
          position: 'relative',
          left: left.value,
        }}
      />
    </Paper>
  );
};
