import React from 'react';
import { animate, useValue, withKeyframes } from 'react-ui-animate';

const App = () => {
  const [x, setX] = useValue(0);

  const run = () => {
    setX(withKeyframes([0, 150, 50, 200, 0], { duration: 1200 }));
  };

  return (
    <div className="container">
      <button className="button buttonPrimary" onClick={run}>
        Run keyframes
      </button>
      <animate.div
        style={{
          marginTop: 12,
          translateX: x,
          width: 60,
          height: 60,
          background: '#60a5fa',
          borderRadius: 8,
        }}
      />
    </div>
  );
};

export default App;
