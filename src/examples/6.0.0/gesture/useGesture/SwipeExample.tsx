import React, { useRef, useState } from 'react';
import { Gesture, useGesture } from 'react-ui-animate';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [lastSwipe, setLastSwipe] = useState<string | null>(null);

  useGesture(
    ref,
    Gesture.Swipe()
      .distanceThreshold(40)
      .onSwipe(({ direction }) => setLastSwipe(direction))
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        height: 200,
        justifyContent: 'center',
      }}
    >
      <div
        ref={ref}
        style={{
          width: 220,
          height: 120,
          borderRadius: 8,
          border: '1px solid #2a2e38',
          backgroundColor: '#1c1f28',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#a1a1a1',
          touchAction: 'none',
          userSelect: 'none',
        }}
      >
        SWIPE ME
      </div>
      <p style={{ margin: 0, color: '#a1a1a1', fontSize: 13 }}>
        {lastSwipe ? `Last swipe: ${lastSwipe}` : 'Swipe in any direction'}
      </p>
    </div>
  );
}
