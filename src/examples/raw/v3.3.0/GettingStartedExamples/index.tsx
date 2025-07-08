import React from 'react';
import { animate, useAnimatedValue } from 'react-ui-animate';

const Example = () => {
  const left = useAnimatedValue(0);

  return (
    <div>
      <animate.div
        style={{
          width: 100,
          height: 100,
          background: '#39F',
          position: 'relative',
          left: left.value,
          borderRadius: 4,
        }}
      />

      <button onClick={() => (left.value = 0)}>Animate Left</button>
      <button onClick={() => (left.value = 200)}>Animate Right</button>
    </div>
  );
};

export default Example;
