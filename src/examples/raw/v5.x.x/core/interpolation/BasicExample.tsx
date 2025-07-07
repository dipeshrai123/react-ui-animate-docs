import React from 'react';
import { useValue, animate, withSpring } from 'react-ui-animate';

import './styles.css';

export default function App() {
  const [x, setX] = useValue(0);

  return (
    <div>
      <animate.div
        style={{
          width: 100,
          height: 100,
          background: x.to([0, 100], ['red', 'teal']),
          translateX: x,
        }}
        onClick={() => setX(withSpring(100))}
      />
    </div>
  );
}
