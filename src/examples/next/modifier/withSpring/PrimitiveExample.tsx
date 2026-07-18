import React from 'react';
import { animate, useValue, withSpring, withTiming } from 'react-ui-animate';

const App: React.FC = () => {
  const [bg, setBg] = useValue('#7d93b0');

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() => setBg(withSpring('#6b8ab8'))}
      >
        Spring to Blue
      </button>
      <button
        className="button buttonPrimary"
        onClick={() => setBg(withSpring('#8a8ab8'))}
      >
        Spring to Purple
      </button>
      <button
        className="button buttonPrimary"
        onClick={() => setBg(withTiming('#b89a8a', { duration: 2000 }))}
      >
        Timing Red
      </button>
      <button
        className="button buttonSecondary"
        onClick={() => setBg('#7d93b0')}
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
