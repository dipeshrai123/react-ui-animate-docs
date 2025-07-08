const Interpolation_example2 = `import React from 'react';
import {
  animate,
  useAnimatedValue,
  interpolate,
  withTiming,
} from 'react-ui-animate';

const Example = () => {
  const opacity = useAnimatedValue(0);

  return (
    <div>
      <animate.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: interpolate(opacity.value, [0, 1], ['red', 'black']),
          borderRadius: 4,
        }}
      />

      <button onClick={() => (opacity.value = 1)}>Animate</button>
      <button onClick={() => (opacity.value = withTiming(0, { duration: 0 }))}>
        Reset
      </button>
    </div>
  );
};

export default Example;
`;
export default Interpolation_example2;
