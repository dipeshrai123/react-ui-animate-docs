import React, { useState } from 'react';
import { Presence, animate, recipes } from 'react-ui-animate';

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="container">
      <button
        className="button buttonPrimary"
        onClick={() => setOpen((v) => !v)}
      >
        Toggle recipe
      </button>
      <div style={{ height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Presence>
          {open && (
            <animate.div
              key="card"
              animate={recipes.scaleIn}
              exit={recipes.scaleOut}
              style={{
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
