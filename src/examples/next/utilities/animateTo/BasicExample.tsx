import React, { useState } from 'react';
import { useValue, withSpring, animateTo, animate } from 'react-ui-animate';

function DismissibleCard({ onDismiss }: { onDismiss: () => void }) {
  const [opacity, setOpacity] = useValue(1);
  const [x, setX] = useValue(0);

  const dismiss = async () => {
    await Promise.all([
      animateTo(setOpacity, withSpring(0)),
      animateTo(setX, withSpring(60)),
    ]);
    onDismiss();
  };

  return (
    <animate.div
      style={{
        padding: '14px 18px',
        borderRadius: 8,
        background: '#1e293b',
        color: 'white',
        opacity,
        translateX: x,
      }}
    >
      Card
      <button
        className="button buttonSecondary"
        style={{ marginLeft: 12 }}
        onClick={dismiss}
      >
        Dismiss
      </button>
    </animate.div>
  );
}

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="container">
      {visible ? (
        <DismissibleCard onDismiss={() => setVisible(false)} />
      ) : (
        <button className="button buttonPrimary" onClick={() => setVisible(true)}>
          Reset
        </button>
      )}
    </div>
  );
}
