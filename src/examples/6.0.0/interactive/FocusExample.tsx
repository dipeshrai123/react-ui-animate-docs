import React from 'react';
import { animate, withSpring } from 'react-ui-animate';

export default function App() {
  return (
    <div className="container">
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, margin: '0 0 8px' }}>
        Tab to focus the field
      </p>
      <animate.input
        type="text"
        placeholder="Focus me"
        focus={{
          scale: withSpring(1.02),
          borderColor: withSpring('#60a5fa'),
          boxShadow: withSpring('0 0 0 3px rgba(96, 165, 250, 0.25)'),
        }}
        style={{
          width: 220,
          padding: '10px 12px',
          borderRadius: 8,
          border: '1px solid rgba(255,255,255,0.14)',
          background: 'rgba(255,255,255,0.04)',
          color: '#fff',
          outline: 'none',
          fontFamily: 'inherit',
          fontSize: 14,
        }}
      />
    </div>
  );
}
