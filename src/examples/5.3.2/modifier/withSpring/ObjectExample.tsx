import React from 'react';
import { useValue, withSpring, animate } from 'react-ui-animate';

export default function App() {
  const [obj, setObj] = useValue({ x: 0, y: 0, width: 100, height: 100 });

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() =>
          setObj(
            withSpring(
              { x: 100, y: 100, width: 200, height: 200 },
              {
                onStart: () => console.log('START'),
                onComplete: () => console.log('Animation complete'),
              }
            )
          )
        }
      >
        Start
      </button>
      <button
        className="button buttonSecondary"
        onClick={() => setObj({ x: 0, y: 0, width: 100, height: 100 })}
      >
        Reset
      </button>

      <animate.div
        style={{
          width: obj.width,
          height: 100,
          backgroundColor: '#7d93b0',
          margin: '20px auto 0',
          translateX: obj.x,
          translateY: obj.y,
          borderRadius: 8,
        }}
      />
    </div>
  );
}
