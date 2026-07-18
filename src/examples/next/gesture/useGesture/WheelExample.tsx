import React, { useRef } from 'react';
import { Gesture, useGesture, useValue, animate, clamp } from 'react-ui-animate';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useValue(1);

  useGesture(
    ref,
    Gesture.Wheel().onChange(({ movement }) => {
      setScale(clamp(scale.current - movement.y * 0.0015, 0.5, 2));
    })
  );

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderRadius: 8,
        border: '1px solid #2a2e38',
        backgroundColor: '#1c1f28',
        overflow: 'hidden',
      }}
    >
      <animate.div
        style={{
          scale,
          width: 90,
          height: 90,
          borderRadius: 8,
          backgroundColor: '#60a5fa',
        }}
      />
    </div>
  );
}
