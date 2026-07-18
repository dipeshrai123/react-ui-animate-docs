import React, { createRef, useMemo, useRef } from 'react';
import { animate, useValue, useDrag, withSpring } from 'react-ui-animate';

const App = () => {
  const items = useRef(Array.from({ length: 5 }, () => 0));
  const [positions, setPositions] = useValue(items.current);

  const refs = useMemo(
    () => Array.from({ length: 3 }, () => createRef<HTMLDivElement>()),
    []
  );

  useDrag(refs, function ({ down, movement, index }) {
    if (down) {
      const newPositions = [...items.current];
      newPositions[index] = movement.x;
      setPositions(newPositions);
    } else {
      setPositions(withSpring(items.current));
    }
  });

  return (
    <>
      {refs.map((r, i) => (
        <animate.div
          key={i}
          ref={r}
          style={{
            width: 100,
            height: 100,
            cursor: 'grab',
            backgroundColor: '#7d93b0',
            borderRadius: 4,
            marginBottom: 10,
            translateX: positions[i],
          }}
        />
      ))}
    </>
  );
};

export default App;
