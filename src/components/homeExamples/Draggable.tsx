import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { animate, useDrag, useValue, withSpring } from 'react-ui-animate';

const Card = styled(animate.div)`
  width: 160px;
  height: 100px;
  background-color: white;
  border-radius: 8px;
  color: #3399ff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  user-select: none;
  cursor: grab;
  transition: box-shadow 0.2s ease;
  z-index: 10;
  touch-action: none;
`;

export function Draggable() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useValue(1);
  const [pos, setPos] = useValue({ x: 0, y: 0 });

  useDrag(ref, ({ down, movement: { x, y } }) => {
    setPos(down ? { x, y } : withSpring({ x: 0, y: 0 }, { damping: 10 }));
    setScale(withSpring(down ? 1.5 : 1));
  });

  return (
    <Card
      ref={ref}
      style={{
        translateX: pos.x,
        translateY: pos.y,
        scale,
      }}
    >
      Drag Me 🤚
    </Card>
  );
}
