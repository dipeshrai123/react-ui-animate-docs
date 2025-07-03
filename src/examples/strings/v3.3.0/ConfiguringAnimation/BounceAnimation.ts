const ConfiguringAnimation_BounceAnimation = `import React from 'react';
import {
  animate,
  useAnimatedValue,
  AnimationConfigUtils,
} from 'react-ui-animate';

const BounceAnimation = () => {
  const left = useAnimatedValue(0, AnimationConfigUtils.BOUNCE);

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

export default BounceAnimation;
`;
export default ConfiguringAnimation_BounceAnimation;
