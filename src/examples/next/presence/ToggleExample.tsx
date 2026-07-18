import React, { useState } from 'react';
import { Presence, animate, withTiming, withSpring } from 'react-ui-animate';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() => setIsVisible((v) => !v)}
      >
        Toggle
      </button>
      <div style={{ height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Presence>
          {isVisible && (
            <animate.div
              animate={{ opacity: withSpring(1), scale: withSpring(1) }}
              exit={{ opacity: withTiming(0), scale: withSpring(0.85) }}
              style={{
                opacity: 0,
                scale: 0.85,
                width: 100,
                height: 100,
                borderRadius: 10,
                background: '#60a5fa',
              }}
            />
          )}
        </Presence>
      </div>
    </div>
  );
}
