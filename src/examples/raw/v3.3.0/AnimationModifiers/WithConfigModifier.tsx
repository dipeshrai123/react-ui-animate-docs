import React from 'react';

import {
  animate,
  AnimationConfigUtils,
  useAnimatedValue,
  withConfig,
} from 'react-ui-animate';

const WithConfigModifier = () => {
  const translateX = useAnimatedValue(0);

  return (
    <div style={{ padding: 20 }}>
      <animate.div
        style={{
          height: 100,
          width: 100,
          background: '#c370ff',
          borderRadius: 4,
          translateX: translateX.value,
        }}
      />

      <button
        onClick={() =>
          (translateX.value = withConfig(0, AnimationConfigUtils.WOOBLE))
        }
      >
        Animate Left
      </button>
      <button
        onClick={() => {
          translateX.value = withConfig(100, AnimationConfigUtils.BOUNCE);
        }}
      >
        Animate Right
      </button>
    </div>
  );
};

export default WithConfigModifier;
