import React from 'react';
import { useValue, withSequence, withDelay, withSpring, animate } from 'react-ui-animate';

export default function App() {
  const [x, setX] = useValue(0);

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() =>
          setX(withSequence([withDelay(500), withSpring(160), withSpring(0)]))
        }
      >
        Run (waits 500ms)
      </button>
      <animate.div
        style={{
          marginTop: 16,
          translateX: x,
          width: 64,
          height: 64,
          borderRadius: 8,
          background: '#60a5fa',
        }}
      />
    </div>
  );
}
