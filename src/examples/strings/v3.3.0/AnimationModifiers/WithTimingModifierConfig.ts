const AnimationModifiers_WithTimingModifierConfig = `import React from 'react';

import { animate, useAnimatedValue, withTiming } from 'react-ui-animate';

const WithTimingModifierConfig = () => {
  const translateX = useAnimatedValue(0);

  return (
    <div style={{ padding: 20 }}>
      <animate.div
        style={{
          height: 100,
          width: 100,
          background: '#3399ff',
          borderRadius: 4,
          translateX: translateX.value,
        }}
      />

      <button
        onClick={() => (translateX.value = withTiming(100, { duration: 5000 }))}
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

export default WithTimingModifierConfig;
`;
export default AnimationModifiers_WithTimingModifierConfig;
