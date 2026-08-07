import React from 'react';
import { useValue, useTimeline, withSpring, animate } from 'react-ui-animate';

export default function App() {
  const [opacity, setOpacity] = useValue(0);
  const [y, setY] = useValue(20);
  const [scale, setScale] = useValue(0.9);

  const timeline = useTimeline();

  const play = () => {
    setOpacity(0);
    setY(20);
    setScale(0.9);

    timeline
      .add(setOpacity, withSpring(1), { at: 0 })
      .add(setY, withSpring(0), { at: 0 })
      .add(setScale, withSpring(1), { at: 150 })
      .play();
  };

  return (
    <div className="container">
      <button className="button buttonPrimary" onClick={play}>
        Play intro
      </button>

      <animate.div
        style={{
          width: 140,
          height: 80,
          background: '#60a5fa',
          borderRadius: 8,
          opacity,
          translateY: y,
          scale,
        }}
      />
    </div>
  );
}
