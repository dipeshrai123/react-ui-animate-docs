import React, { useRef } from 'react';
import { animate, useDrag } from 'react-ui-animate';

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useDrag(ref);

  return (
    <animate.div
      ref={ref}
      style={{
        cursor: 'grab',
        translateX: x,
        translateY: y,
        width: 100,
        height: 100,
        backgroundColor: 'teal',
        borderRadius: 4,
      }}
    />
  );
};

export default App;
