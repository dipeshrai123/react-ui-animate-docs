import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { animate, useDrag, useValue, withSpring } from 'react-ui-animate';

const Stage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = styled.div`
  position: absolute;
  width: 156px;
  height: 96px;
  border-radius: 18px;
  border: 1px dashed rgba(255, 255, 255, 0.14);
`;

const Card = styled(animate.div)`
  width: 156px;
  height: 96px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 18px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 18px 40px -14px rgba(99, 102, 241, 0.7);
  user-select: none;
  cursor: grab;
  z-index: 10;
  touch-action: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Glyph = styled.div`
  font-size: 18px;
  opacity: 0.9;
`;

export function Draggable() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useValue(1);
  const [pos, setPos] = useValue({ x: 0, y: 0 });

  useDrag(ref, ({ down, movement: { x, y } }) => {
    setPos(down ? { x, y } : withSpring({ x: 0, y: 0 }, { damping: 12 }));
    setScale(withSpring(down ? 1.12 : 1));
  });

  return (
    <Stage>
      <Home />
      <Card
        ref={ref}
        style={{
          translateX: pos.x,
          translateY: pos.y,
          scale,
        }}
      >
        <Glyph>⠿</Glyph>
        Drag me
      </Card>
    </Stage>
  );
}
