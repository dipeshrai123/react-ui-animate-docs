import React from 'react';
import { animate, useValue, withParallel, withSpring, withTiming } from 'react-ui-animate';

const App = () => {
  const [style, setStyle] = useValue({ x: 0, rotate: 0 });

  const run = () => {
    setStyle(
      withParallel({
        x: withSpring(150),
        rotate: withTiming(180, { duration: 600 }),
      })
    );
  };

  return (
    <div className="container">
      <button className="button buttonPrimary" onClick={run}>
        Run
      </button>
      <animate.div
        style={{
          marginTop: 12,
          translateX: style.x,
          rotate: style.rotate,
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
