import React, { useRef } from 'react';
import { Gesture, useGesture, useValue, animate } from 'react-ui-animate';

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useValue(0);

  useGesture(
    scrollRef,
    Gesture.Scroll().onChange(({ offset }) => {
      const el = scrollRef.current;
      if (!el) return;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? offset.y / max : 0);
    })
  );

  return (
    <div>
      <div
        style={{
          height: 6,
          borderRadius: 3,
          backgroundColor: '#2a2e38',
          overflow: 'hidden',
          marginBottom: 12,
        }}
      >
        <animate.div
          style={{
            height: '100%',
            width: progress.to([0, 1], ['0%', '100%']),
            backgroundColor: '#60a5fa',
          }}
        />
      </div>

      <div
        ref={scrollRef}
        style={{
          height: 160,
          overflowY: 'auto',
          borderRadius: 8,
          border: '1px solid #2a2e38',
          backgroundColor: '#1c1f28',
          padding: 16,
          color: '#a1a1a1',
        }}
      >
        <p>Scroll inside this box to move the progress bar above.</p>
        <p style={{ marginTop: 200 }}>Keep scrolling...</p>
        <p style={{ marginTop: 200 }}>You reached the bottom.</p>
      </div>
    </div>
  );
}
