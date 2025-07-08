import React from 'react';
import { useValue, withSpring, animate } from 'react-ui-animate';

export default function App() {
  const [values, setValues] = useValue([0, 0, 0]);

  return (
    <>
      <button onClick={() => setValues(withSpring([10, 100, 200]))}>
        Start
      </button>
      <button onClick={() => setValues([0, 0, 0])}>Reset</button>

      {values.map((value, index) => (
        <animate.div
          key={index}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'teal',
            left: 0,
            top: 0,
            translateX: value,
            borderRadius: 4,
          }}
        />
      ))}
    </>
  );
}
