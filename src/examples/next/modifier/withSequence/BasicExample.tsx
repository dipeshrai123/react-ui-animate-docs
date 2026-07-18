import React from 'react';
import {
  useValue,
  animate,
  withTiming,
  withSequence,
  withSpring,
  withDelay,
} from 'react-ui-animate';
import '../../styles.css';

export default function BasicExample() {
  const [obj, setObj] = useValue({ x: 0, y: 0, width: 100, height: 100 });

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() =>
          setObj(
            withSequence([
              withSpring({ x: 100, y: 100 }),
              withTiming({ width: 200, height: 200 }),
              withDelay(500),
              withTiming({ x: 0, y: 0 }, { duration: 600 }),
            ])
          )
        }
      >
        Run sequence
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
