const gesture_useMove_BasicSetup = `import React from 'react';
import { animate, useValue, useMove } from 'react-ui-animate';

const App = () => {
  const [pos, setPos] = useValue({ x: 0, y: 0 });

  useMove(window, function ({ event }) {
    setPos({ x: event.clientX, y: event.clientY });
  });

  return (
    <animate.div
      style={{
        width: 50,
        height: 50,
        backgroundColor: 'teal',
        borderRadius: 4,
        translateX: pos.x,
        translateY: pos.y,
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default App;
`;
export default gesture_useMove_BasicSetup;
