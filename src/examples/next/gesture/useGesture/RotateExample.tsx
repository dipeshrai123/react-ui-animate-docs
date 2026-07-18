import React, { useRef } from 'react';
import { Gesture, useGesture, useValue, animate } from 'react-ui-animate';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useValue(0);

  useGesture(
    ref,
    Gesture.Rotate().onChange(({ rotation }) => setRotate(rotation))
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        height: 200,
        justifyContent: 'center',
      }}
    >
      <div
        ref={ref}
        style={{
          width: 220,
          height: 160,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          border: '1px solid #2a2e38',
          backgroundColor: '#1c1f28',
          touchAction: 'none',
        }}
      >
        <animate.div
          style={{
            rotate: rotate.to((v) => `${v}deg`),
            width: 100,
            height: 60,
            borderRadius: 8,
            backgroundColor: '#60a5fa',
          }}
        />
      </div>
      <p style={{ margin: 0, color: '#a1a1a1', fontSize: 13 }}>
        Rotate with two fingers on a touchscreen
      </p>
    </div>
  );
}
