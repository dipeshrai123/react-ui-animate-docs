const ConfiguringAnimation_CubicBezierAnimation = `import React from 'react';
import { animate, useAnimatedValue, Easing } from 'react-ui-animate';

const CubicBezierAnimation = () => {
  const left = useAnimatedValue(0, {
    duration: 1000,
    easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
  });

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

export default CubicBezierAnimation;
`;
export default ConfiguringAnimation_CubicBezierAnimation;
