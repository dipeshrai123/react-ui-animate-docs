import React from 'react';
import { animate, useAnimatedValue, useDrag } from 'react-ui-animate';

const DragGesture = () => {
  const left = useAnimatedValue(0);

  const bind = useDrag(({ down, movementX }) => {
    left.value = down ? movementX : 0;
  });

  return (
    <div style={{ padding: 20, marginBottom: 20 }}>
      <animate.div
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
    </div>
  );
};

export default DragGesture;
