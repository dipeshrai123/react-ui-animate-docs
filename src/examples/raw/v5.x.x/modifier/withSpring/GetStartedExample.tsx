import React from 'react';
import { animate, useValue, withSpring } from 'react-ui-animate';

export default function App() {
  const [width, setWidth] = useValue(100);

  return (
    <>
      <button onClick={() => setWidth(withSpring(200))}>Animate</button>
      <button onClick={() => setWidth(withSpring(100))}>Reset</button>
      <animate.div
        style={{
          width,
          height: 100,
          backgroundColor: 'teal',
          borderRadius: 4,
        }}
      />
    </>
  );
}
