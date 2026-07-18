import React, { createRef, useMemo, useState } from 'react';
import { animate, useValue, useMove } from 'react-ui-animate';

const App = () => {
  const [pos, setPos] = useValue({ x: 0, y: 0 });

  const refs = useMemo(
    () => Array.from({ length: 3 }, () => createRef<HTMLDivElement>()),
    []
  );

  useMove(refs, function ({ event }) {
    setPos({ x: event.clientX, y: event.clientY });
  });

  return (
    <>
      <animate.div
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#60a5fa',
          borderRadius: 4,
          translateX: pos.x,
          translateY: pos.y,
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      />

      {refs.map((r, i) => (
        <div
          key={i}
          ref={r}
          style={{
            width: 400,
            height: 60,
            backgroundColor: '#1c1f28',
            borderRadius: 4,
            border: '1px solid #2a2e38',
            marginBottom: 40,
          }}
        />
      ))}
    </>
  );
};

export default App;
