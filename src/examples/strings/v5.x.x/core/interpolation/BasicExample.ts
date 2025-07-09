const core_interpolation_BasicExample = `import React from 'react';
import { useValue, animate, withSpring } from 'react-ui-animate';

export default function App() {
  const [x, setX] = useValue(0);

  return (
    <>
      <button onClick={() => setX(withSpring(200))}>Animate</button>

      <animate.div
        style={{
          marginTop: 10,
          width: 100,
          height: 100,
          background: x.to([0, 200], ['teal', 'red']),
          translateX: x,
          borderRadius: 4,
        }}
      />
    </>
  );
}
`;
export default core_interpolation_BasicExample;
