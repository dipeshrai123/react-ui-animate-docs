import React, { useRef, useState, useEffect } from 'react';
import { useScrollProgress, animate } from 'react-ui-animate';

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);

  const { scrollYProgress } = useScrollProgress(scrollRef, {
    target: targetRef,
    offset: ['start end', 'start start'],
  });

  useEffect(
    () => scrollYProgress.subscribe((v) => setPercent(Math.round(v * 100))),
    [scrollYProgress]
  );

  return (
    <div
      ref={scrollRef}
      style={{
        height: 280,
        width: '100%',
        maxWidth: 360,
        overflow: 'auto',
        borderRadius: 8,
        background: '#111',
      }}
    >
      <div style={{ padding: 24, color: 'white' }}>
        <p>Scroll down to reveal the card below.</p>
        <div style={{ height: 200 }} />
      </div>

      <animate.div
        ref={targetRef}
        style={{
          margin: '0 24px 24px',
          padding: 24,
          background: 'teal',
          borderRadius: 8,
          opacity: scrollYProgress.to([0, 1], [0, 1]),
          translateY: scrollYProgress.to([0, 1], [30, 0]),
          color: 'white',
        }}
      >
        <p>This card animates in as it enters view. Progress: {percent}%</p>
      </animate.div>

      <div style={{ height: 200 }} />
    </div>
  );
}
