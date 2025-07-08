import React from 'react';

import { animate, useAnimatedValue, withSpring } from 'react-ui-animate';

const WithSpringModifierConfig = () => {
  const translateX = useAnimatedValue(0);

  return (
    <div style={{ padding: 20 }}>
      <animate.div
        style={{
          height: 100,
          width: 100,
          background: '#f5533d',
          borderRadius: 4,
          translateX: translateX.value,
        }}
      />

      <button
        onClick={() => (translateX.value = withSpring(100, { friction: 5 }))}
      >
        Animate Right
      </button>
      <button
        onClick={() =>
          (translateX.value = { toValue: 0, config: { immediate: true } })
        }
      >
        Reset
      </button>
    </div>
  );
};

export default WithSpringModifierConfig;
