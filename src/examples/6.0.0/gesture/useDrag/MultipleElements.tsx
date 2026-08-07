import React, { useRef } from 'react';
import { animate, useDrag } from 'react-ui-animate';

function DraggableBox({ color }: { color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useDrag(ref, {
    bounds: { left: -60, right: 60, top: -60, bottom: 60 },
  });

  return (
    <animate.div
      ref={ref}
      style={{
        cursor: 'grab',
        translateX: x,
        translateY: y,
        width: 80,
        height: 80,
        backgroundColor: color,
        borderRadius: 4,
      }}
    />
  );
}

const App = () => {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <DraggableBox color="#60a5fa" />
      <DraggableBox color="coral" />
      <DraggableBox color="#38bdf8" />
    </div>
  );
};

export default App;
