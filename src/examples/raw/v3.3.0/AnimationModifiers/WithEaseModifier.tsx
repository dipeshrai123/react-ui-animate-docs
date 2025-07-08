import React from 'react';

import { animate, useAnimatedValue } from 'react-ui-animate';

const WithEaseModifier = () => {
  const translateX = useAnimatedValue(0);

  return (
    <div style={{ padding: 20 }}>
      <animate.div
        style={{
          height: 100,
          width: 100,
          background: '#32a852',
          borderRadius: 4,
          translateX: translateX.value,
        }}
      />

      <button onClick={() => (translateX.value = 100)}>Animate Right</button>
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

export default WithEaseModifier;
