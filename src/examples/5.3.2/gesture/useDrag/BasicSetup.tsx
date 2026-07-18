import React, { useRef } from 'react';
import { animate, useDrag, useValue, withSpring } from 'react-ui-animate';

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useValue(0);
  const [translateY, setTranslateY] = useValue(0);

  useDrag(ref, ({ down, movement }) => {
    setTranslateX(down ? movement.x : withSpring(0));
    setTranslateY(down ? movement.y : withSpring(0));
  });

  return (
    <animate.div
      ref={ref}
      style={{
        cursor: 'grab',
        translateX,
        translateY,
        width: 100,
        height: 100,
        backgroundColor: '#60a5fa',
        borderRadius: 4,
      }}
    />
  );
};

export default App;
