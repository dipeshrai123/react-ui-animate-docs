import React from 'react';
import {
  AnimatedBlock,
  useAnimatedValue,
  useDrag,
  withSpring,
} from 'react-ui-animate';
import { Paper } from '@mui/material';

export const DragGesture = () => {
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
