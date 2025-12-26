import React from 'react';
import {
  useValue,
  animate,
  withTiming,
  withSequence,
  withSpring,
  withDelay,
  withDecay,
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
            withSequence(
              [
                withSpring({ x: 100, y: 100 }),
                withTiming({ width: 200, height: 200 }),
                withDelay(1000),
                withTiming({ x: 0, y: 0 }, { duration: 3000 }),
                withDecay(0.5),
              ],
              {
                onStart() {
                  console.log('obj sequence started');
                },
                onComplete() {
                  console.log('obj sequence completed');
                },
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
