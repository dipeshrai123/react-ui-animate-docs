import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { animate, useDrag, useValue, withSpring } from 'react-ui-animate';

const Card = styled(animate.div)`
  width: 160px;
  height: 100px;
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  user-select: none;
  cursor: grab;
  z-index: 10;
  touch-action: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
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
      Drag Me
    </Card>
  );
}
