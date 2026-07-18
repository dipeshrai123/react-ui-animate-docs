import React from 'react';
import { useValue, animate, withSpring } from 'react-ui-animate';

export default function App() {
  const [x, setX] = useValue(0);

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() => setX(withSpring(200))}
      >
        Animate
      </button>

      <animate.div
        style={{
          marginTop: 20,
          width: 100,
          height: 100,
          background: x.to([0, 200], ['#60a5fa', '#818cf8']),
          translateX: x,
          borderRadius: 8,
        }}
      />
    </div>
  );
}
