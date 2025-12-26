import React from 'react';
import { useValue, animate, withTiming } from 'react-ui-animate';
import '../../styles.css';

export default function BasicExample() {
  const [obj, setObj] = useValue({ x: 0, y: 0, width: 100, height: 100 });

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() =>
          setObj(
            withTiming(
              { x: 0, y: 0, width: 300, height: 100 },
              {
                duration: 400,
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
          backgroundColor: 'teal',
          margin: '20px auto 0',
          translateX: obj.x,
          translateY: obj.y,
          borderRadius: 8,
        }}
      />
    </div>
  );
}
