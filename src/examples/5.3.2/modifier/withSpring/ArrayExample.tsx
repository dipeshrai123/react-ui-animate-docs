import React from 'react';
import { useValue, withSpring, animate } from 'react-ui-animate';

export default function App() {
  const [values, setValues] = useValue([0, 0, 0]);

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() => setValues(withSpring([10, 100, 200]))}
      >
        Start
      </button>
      <button
        className="button buttonSecondary"
        onClick={() => setValues([0, 0, 0])}
      >
        Reset
      </button>

      <div style={{ marginTop: 20, display: 'flex', gap: 10, justifyContent: 'center' }}>
        {values.map((value, index) => (
          <animate.div
            key={index}
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'teal',
              translateX: value,
              borderRadius: 8,
            }}
          />
        ))}
      </div>
    </div>
  );
}
