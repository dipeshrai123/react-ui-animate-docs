import React from 'react';
import { animate, useAnimatedValue } from 'react-ui-animate';

const TimingAnimation = () => {
  const left = useAnimatedValue(0, { duration: 1000 });

  return (
    <div style={{ padding: 20, marginBottom: 20 }}>
      <animate.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#3399ff',
          borderRadius: 4,
          position: 'relative',
          left: left.value,
        }}
      />

      <button onClick={() => (left.value = 0)}>Left</button>
      <button onClick={() => (left.value = 200)}>Right</button>
    </div>
  );
};

export default TimingAnimation;
