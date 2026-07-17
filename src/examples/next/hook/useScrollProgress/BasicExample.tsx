import React, { useRef } from 'react';
import { useScrollProgress, animate } from 'react-ui-animate';

export default function App() {
  const { scrollYProgress } = useScrollProgress(window);

  return (
    <div style={{ height: 3000 }}>
      <h1 style={{ padding: 40 }}>Scroll down to see progress</h1>
      
      {/* Progress Bar */}
      <animate.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: scrollYProgress.to([0, 1], ['0%', '100%']),
          height: 4,
          background: 'linear-gradient(90deg, #667eea, #764ba2)',
          zIndex: 1000,
        }}
      />

      {/* Animated Box */}
      <animate.div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          translateX: -50,
          translateY: -50,
          width: 150,
          height: 150,
          scale: scrollYProgress.to([0, 1], [1, 1.5]),
          opacity: scrollYProgress.to([0, 0.5, 1], [1, 0.5, 1]),
          backgroundColor: scrollYProgress.to(
            [0, 1],
            ['#0069d9', '#ff5733']
          ),
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        {Math.round(scrollYProgress.get() * 100)}%
      </animate.div>

      <div style={{ height: 2000, padding: 40 }}>
        <p>Keep scrolling to see the progress change</p>
      </div>
    </div>
  );
}

