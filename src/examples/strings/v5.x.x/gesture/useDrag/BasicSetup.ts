const gesture_useDrag_BasicSetup = `import React, { useRef } from 'react';
import { animate, useDrag, useValue } from 'react-ui-animate';

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useValue(0);
  const [translateY, setTranslateY] = useValue(0);

  useDrag(
    ref,
    ({ down, movement }) => {
      setTranslateX(down ? movement.x : 0);
      setTranslateY(down ? movement.y : 0);
    },
    {
      threshold: 10,
    }
  );

  return (
    <animate.div
      ref={ref}
      style={{
        cursor: 'grab',
        translateX,
        translateY,
        width: 100,
        height: 100,
        backgroundColor: 'teal',
        borderRadius: 4,
      }}
    />
  );
};

export default App;
`;
export default gesture_useDrag_BasicSetup;
