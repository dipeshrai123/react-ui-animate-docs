import React, { useRef } from 'react';
import { useScroll, animate } from 'react-ui-animate';

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll(window, {
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  return (
    <div style={{ height: 2000 }}>
      <div style={{ padding: 40, height: 600 }}>
        <h1>Element-Specific Progress</h1>
        <p>Scroll to see this element animate as it enters the viewport</p>
      </div>

      <animate.div
        ref={containerRef}
        style={{
          margin: 40,
          padding: 40,
          background: 'teal',
          borderRadius: 8,
          opacity: scrollYProgress.to([0, 1], [0, 1]),
          translateY: scrollYProgress.to([0, 1], [50, 0]),
          scale: scrollYProgress.to([0, 1], [0.9, 1]),
          color: 'white',
        }}
      >
        <h2>This element animates as you scroll</h2>
        <p>Progress: {Math.round(scrollYProgress.get() * 100)}%</p>
        <div
          style={{
            marginTop: 20,
            height: 4,
            background: 'rgba(255,255,255,0.3)',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <animate.div
            style={{
              width: scrollYProgress.to([0, 1], ['0%', '100%']),
              height: '100%',
              background: 'white',
            }}
          />
        </div>
      </animate.div>

      <div style={{ height: 800, padding: 40 }}>
        <p>Keep scrolling...</p>
      </div>
    </div>
  );
}

