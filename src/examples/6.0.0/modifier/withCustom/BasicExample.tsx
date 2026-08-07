import React from 'react';
import { useValue, animate, withCustom } from 'react-ui-animate';

export default function App() {
  const [x, setX] = useValue(0);

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() =>
          setX(
            withCustom(
              ({ elapsed, from }) => from + Math.sin(elapsed / 100) * 40,
              { duration: 2000 }
            )
          )
        }
      >
        Wobble
      </button>

      <animate.div
        style={{
          width: 80,
          height: 80,
          background: '#60a5fa',
          borderRadius: 8,
          translateX: x,
        }}
      />
    </div>
  );
}
