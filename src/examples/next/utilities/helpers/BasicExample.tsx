import React, { useRef } from 'react';
import { useValue, withSpring, animate, Gesture, useGesture, rubberClamp, clamp } from 'react-ui-animate';

const BOUND = 80;

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useValue(0);
  const startRef = useRef(0);

  useGesture(
    ref,
    Gesture.Pan()
      .onStart(() => {
        startRef.current = x.current;
      })
      .onUpdate((e) => {
        // highlight-start
        /* rubberClamp lets the drag travel past the bound with resistance */
        setX(rubberClamp(startRef.current + e.movement.x, -BOUND, BOUND));
        // highlight-end
      })
      .onEnd(() => {
        // highlight-start
        /* clamp snaps it back to a hard edge on release */
        setX(withSpring(clamp(x.current, -BOUND, BOUND)));
        // highlight-end
      })
  );

  return (
    <div className="container">
      <div
        style={{
          position: 'relative',
          width: 220,
          height: 60,
          margin: '0 auto',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 110 - BOUND,
            width: BOUND * 2,
            height: 60,
            border: '1px dashed rgba(255,255,255,0.25)',
            borderRadius: 8,
          }}
        />
        <animate.div
          ref={ref}
          style={{
            position: 'absolute',
            left: 110 - 20,
            width: 40,
            height: 40,
            top: 10,
            borderRadius: 8,
            background: '#60a5fa',
            cursor: 'grab',
            translateX: x,
          }}
        />
      </div>
    </div>
  );
}
