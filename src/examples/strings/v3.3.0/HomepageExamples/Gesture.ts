const HomepageExamples_Gesture = `import React from 'react';
import {
  animate,
  useAnimatedValue,
  useDrag,
  withSpring,
} from 'react-ui-animate';

const Gesture = () => {
  const x = useAnimatedValue(0);
  const y = useAnimatedValue(0);

  const bind = useDrag(({ down, movementX, movementY }) => {
    x.value = down ? movementX : withSpring(0);
    y.value = down ? movementY : withSpring(0);
  });

  return (
    <div style={{ padding: 20, marginBottom: 20 }}>
      <animate.div
        {...bind()}
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#f5533d',
          borderRadius: 4,
          translateX: x.value,
          translateY: y.value,
          cursor: 'grabbing',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0px auto',
          color: 'white',
          position: 'relative',
          zIndex: 1,
        }}
      >
        DRAG ME
      </animate.div>
    </div>
  );
};

export default Gesture;
`;
export default HomepageExamples_Gesture;
