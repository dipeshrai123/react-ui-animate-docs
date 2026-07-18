import React from 'react';
import { animate, useValue, withSpring, withTiming } from 'react-ui-animate';

const App: React.FC = () => {
  const [bg, setBg] = useValue('#60a5fa');

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() => setBg(withSpring('#3b82f6'))}
      >
        Spring to Deep
      </button>
      <button
        className="button buttonPrimary"
        onClick={() => setBg(withSpring('#93c5fd'))}
      >
        Spring to Light
      </button>
      <button
        className="button buttonPrimary"
        onClick={() => setBg(withTiming('#818cf8', { duration: 2000 }))}
      >
        Timing Indigo
      </button>
      <button
        className="button buttonSecondary"
        onClick={() => setBg('#60a5fa')}
      >
        Reset
      </button>

      <animate.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: bg,
          margin: '20px auto 0',
          borderRadius: 8,
        }}
      />
    </div>
  );
};

export default App;
