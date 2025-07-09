const modifier_withSpring_GetStartedExample = `import React from 'react';
import { animate, useValue, withSpring, withTiming } from 'react-ui-animate';

export default function App() {
  const [width, setWidth] = useValue(100);

  return (
    <>
      <button onClick={() => setWidth(withSpring(200))}>Animate</button>
      <button onClick={() => setWidth(withTiming(100))}>Reset</button>
      <animate.div
        style={{
          width,
          marginTop: 10,
          height: 100,
          backgroundColor: 'teal',
          borderRadius: 4,
        }}
      />
    </>
  );
}
`;
export default modifier_withSpring_GetStartedExample;
