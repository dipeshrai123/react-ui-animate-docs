import React, { useRef } from 'react';
import { Gesture, useGesture, useValue, animate } from 'react-ui-animate';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useValue(1);

  useGesture(
    ref,
    Gesture.Hover()
      .onChange(({ hovering }) => setScale(hovering ? 1.08 : 1))
      .onEnd(({ hovering }) => setScale(hovering ? 1.08 : 1))
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
          scale,
          width: 100,
          height: 100,
          borderRadius: 8,
          backgroundColor: '#60a5fa',
        }}
      />
    </div>
  );
}
