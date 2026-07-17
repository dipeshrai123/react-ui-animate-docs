import React from 'react';
import { animate, useValue, withSpring, withTiming } from 'react-ui-animate';
import '../../styles.css';

const App: React.FC = () => {
  const [bg, setBg] = useValue('teal');

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() => setBg(withSpring('blue'))}
      >
        Spring to Blue
      </button>
      <button
        className="button buttonPrimary"
        onClick={() => setBg(withSpring('purple'))}
      >
        Spring to Purple
      </button>
      <button
        className="button buttonPrimary"
        onClick={() => setBg(withTiming('red', { duration: 2000 }))}
      >
        Timing Red
      </button>
      <button
        className="button buttonSecondary"
        onClick={() => setBg('teal')}
      >
        Immediate to Teal
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
