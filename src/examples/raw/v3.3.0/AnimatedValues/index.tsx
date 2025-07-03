import React from 'react';
import { animate, useAnimatedValue, withTiming } from 'react-ui-animate';

export default function () {
  const opacity = useAnimatedValue(1);

  return (
    <div style={{ padding: 20 }}>
      <animate.div
        style={{
          opacity: opacity.value,
          height: 100,
          width: 100,
          background: '#39F',
          borderRadius: 4,
        }}
      />
      <button onClick={() => (opacity.value = 0)}>Fade Out</button>
      <button onClick={() => (opacity.value = withTiming(1, { duration: 0 }))}>
        Reset
      </button>
    </div>
  );
}
