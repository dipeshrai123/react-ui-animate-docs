import React from 'react';
import { animate, useValue, withSpring } from 'react-ui-animate';

export default function App() {
  const [width, setWidth] = useValue(100);

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() => setWidth(withSpring(200))}
      >
        Expand
      </button>
      <button
        className="button buttonSecondary"
        onClick={() => setWidth(withSpring(100))}
      >
        Reset
      </button>
      <animate.div
        style={{
          width,
          height: 100,
          backgroundColor: '#60a5fa',
          borderRadius: '8px',
          margin: '20px auto 0',
        }}
      />
    </div>
  );
}
