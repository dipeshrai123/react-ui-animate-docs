import React from 'react';
import { useValue, animate, withTiming, withSequence, withLoop } from 'react-ui-animate';

export default function BasicExample() {
  const [obj, setObj] = useValue({ x: 0, y: 0, width: 100, height: 100 });

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() =>
          setObj(
            withLoop(
              withSequence([
                withTiming({ x: 100 }),
                withTiming({ y: 100 }),
                withTiming({ x: 0 }),
                withTiming({ y: 0 }),
              ]),
              5
            )
          )
        }
      >
        Loop 5 times
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
