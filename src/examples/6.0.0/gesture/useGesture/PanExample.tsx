import React, { useRef } from 'react';
import { Gesture, useGesture, useValue, animate } from 'react-ui-animate';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useValue(0);

  useGesture(
    ref,
    Gesture.Pan()
      .onChange(({ movement }) => setX(movement.x))
      .onEnd(() => setX(0))
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 160,
      }}
    >
      <animate.div
        ref={ref}
        style={{
          translateX: x,
          width: 90,
          height: 90,
          borderRadius: 8,
          backgroundColor: '#60a5fa',
          cursor: 'grab',
        }}
      />
    </div>
  );
}
