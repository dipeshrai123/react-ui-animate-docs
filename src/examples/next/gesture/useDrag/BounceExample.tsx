import React, { useRef } from 'react';
import { animate, useDrag } from 'react-ui-animate';

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useDrag(ref, {
    bounds: { left: -80, right: 80, top: -80, bottom: 80 },
    bounce: true,
  });

  return (
    <animate.div
      ref={ref}
      style={{
        cursor: 'grab',
        translateX: x,
        translateY: y,
        width: 80,
        height: 80,
        backgroundColor: '#60a5fa',
        borderRadius: 4,
      }}
    />
  );
};

export default App;
