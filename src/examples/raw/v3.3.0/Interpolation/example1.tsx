import React from 'react';
import {
  animate,
  useAnimatedValue,
  interpolate,
  withTiming,
} from 'react-ui-animate';

const Example = () => {
  const left = useAnimatedValue(0);

  return (
    <div style={{ padding: 20, marginBottom: 20 }}>
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

      <button onClick={() => (left.value = 200)}>Animate</button>
      <button onClick={() => (left.value = withTiming(0, { duration: 0 }))}>
        Reset
      </button>
    </div>
  );
};

export default Example;
