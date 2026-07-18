import React, { useRef } from 'react';
import { Gesture, useGesture, useValue, animate } from 'react-ui-animate';

export default function App() {
  const areaRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useValue(0);
  const [y, setY] = useValue(0);

  useGesture(
    areaRef,
    Gesture.Move().onChange(({ offset }) => {
      setX(offset.x - 15);
      setY(offset.y - 15);
    })
  );

  return (
    <div
      ref={areaRef}
      style={{
        position: 'relative',
        width: '100%',
        height: 200,
        borderRadius: 8,
        border: '1px solid #2a2e38',
        backgroundColor: '#1c1f28',
        overflow: 'hidden',
        cursor: 'none',
      }}
    >
      <animate.div
        style={{
          position: 'absolute',
          translateX: x,
          translateY: y,
          width: 30,
          height: 30,
          borderRadius: '50%',
          backgroundColor: '#60a5fa',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
