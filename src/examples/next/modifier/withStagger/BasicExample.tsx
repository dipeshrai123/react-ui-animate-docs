import React from 'react';
import { animate, useValue, withStagger, withSpring, withParallel } from 'react-ui-animate';

const ITEMS = [0, 1, 2, 3, 4];

const App = () => {
  const [heights, setHeights] = useValue(ITEMS.map(() => 20));

  const expand = () => {
    setHeights(
      withParallel(ITEMS.map((_, i) => withStagger(i, withSpring(100), { each: 60 })))
    );
  };

  return (
    <div>
      <button onClick={expand}>Expand</button>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginTop: 12 }}>
        {ITEMS.map((_, i) => (
          <animate.div
            key={i}
            style={{
              width: 24,
              height: heights[i],
              background: 'teal',
              borderRadius: 4,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
