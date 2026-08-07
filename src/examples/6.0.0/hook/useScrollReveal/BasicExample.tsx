import React, { useRef, type RefObject } from 'react';
import { useScrollReveal, animate } from 'react-ui-animate';

function RevealCard({
  label,
  container,
}: {
  label: string;
  container: RefObject<HTMLElement>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { progress } = useScrollReveal(ref, { container });

  return (
    <animate.div
      ref={ref}
      style={{
        width: '100%',
        maxWidth: 260,
        margin: '0 auto 16px',
        padding: '20px 16px',
        borderRadius: 8,
        background: '#1e293b',
        color: 'white',
        textAlign: 'center',
        opacity: progress.to([0, 1], [0, 1]),
        translateY: progress.to([0, 1], [40, 0]),
      }}
    >
      {label}
    </animate.div>
  );
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      style={{
        height: 280,
        overflow: 'auto',
        borderRadius: 8,
        background: '#0f172a',
        padding: '24px 12px',
      }}
    >
      <p style={{ color: 'white', textAlign: 'center', marginTop: 0 }}>
        Scroll down
      </p>
      <div style={{ height: 160 }} />
      <RevealCard label="Card one" container={containerRef} />
      <div style={{ height: 40 }} />
      <RevealCard label="Card two" container={containerRef} />
      <div style={{ height: 40 }} />
      <RevealCard label="Card three" container={containerRef} />
      <div style={{ height: 40 }} />
    </div>
  );
}
