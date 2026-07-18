import React, { useRef, useState, useEffect } from 'react';
import { useScrollProgress, animate } from 'react-ui-animate';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScrollProgress(containerRef);
  const [percent, setPercent] = useState(0);

  useEffect(
    () => scrollYProgress.subscribe((v) => setPercent(Math.round(v * 100))),
    [scrollYProgress]
  );

  return (
    <div
      ref={containerRef}
      style={{
        height: 280,
        width: '100%',
        maxWidth: 360,
        overflow: 'auto',
        borderRadius: 8,
        background: '#111',
      }}
    >
      <animate.div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: scrollYProgress.to([0, 1], ['0%', '100%']),
          height: 4,
          background: 'linear-gradient(90deg, #7d93b0, #6b8ab8)',
        }}
      />

      <div style={{ padding: 24, color: 'white' }}>
        <p>Scroll this box to see progress.</p>
        <div style={{ height: 600 }} />
        <p>Keep scrolling...</p>
      </div>

      <div
        style={{
          position: 'sticky',
          bottom: 16,
          left: 16,
          width: 64,
          height: 64,
          background: '#6b8ab8',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        {percent}%
      </div>
    </div>
  );
}
