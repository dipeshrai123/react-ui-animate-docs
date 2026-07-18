import React from 'react';
import { animate, withTiming, withSpring } from 'react-ui-animate';

export default function App() {
  return (
    <div
      style={{
        height: 240,
        overflow: 'auto',
        width: '100%',
        borderRadius: 8,
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(0,0,0,0.2)',
      }}
    >
      <div
        style={{
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(255,255,255,0.45)',
          fontSize: 13,
        }}
      >
        Scroll down inside this panel
      </div>
      <animate.div
        view={{ opacity: withTiming(1), translateY: withSpring(0) }}
        viewOptions={{ threshold: 0.4, once: true }}
        style={{
          opacity: 0,
          translateY: 36,
          margin: '0 auto 24px',
          width: 120,
          height: 80,
          borderRadius: 10,
          background: '#60a5fa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        In view
      </animate.div>
      <div style={{ height: 40 }} />
    </div>
  );
}
