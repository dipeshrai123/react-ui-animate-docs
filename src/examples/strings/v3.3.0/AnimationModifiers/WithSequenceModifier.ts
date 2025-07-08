const AnimationModifiers_WithSequenceModifier = `import React from 'react';

import {
  animate,
  useAnimatedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-ui-animate';

const WithSequenceModifier = () => {
  const translateX = useAnimatedValue(0);

  return (
    <div style={{ padding: 20 }}>
      <animate.div
        style={{
          height: 100,
          width: 100,
          background: '#f0ca6c',
          borderRadius: 4,
          translateX: translateX.value,
        }}
      />

      <button
        onClick={() => {
          translateX.value = withSequence([withSpring(50), withTiming(100)]);
        }}
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

export default WithSequenceModifier;
`;
export default AnimationModifiers_WithSequenceModifier;
