import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { animate, useValue, useDrag, withSpring } from 'react-ui-animate';

const Stage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Card = styled(animate.div)`
  width: 132px;
  height: 132px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 30px;
  cursor: grab;
  user-select: none;
  touch-action: none;
  color: #ffffff;
  background: #3b82f6;
  border: 1px solid #2563eb;

  &:active {
    cursor: grabbing;
  }
`;

const Caption = styled.div`
  font-family: var(--site-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #6b7280;
`;

export function DragDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useValue(1);
  const [grabbing, setGrabbing] = useState(false);

  const { x, y } = useDrag(ref, {
    bounds: { left: 0, right: 0, top: 0, bottom: 0 },
    onStart: () => {
      setGrabbing(true);
      setScale(withSpring(1.1));
    },
    onEnd: () => {
      setGrabbing(false);
      setScale(withSpring(1));
    },
  });

  return (
    <Stage>
      <Card ref={ref} style={{ translateX: x, translateY: y, scale }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3v18M3 12h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>{grabbing ? 'spring physics' : 'drag me'}</span>
      </Card>
      <Caption>Drag the card. It springs right back.</Caption>
    </Stage>
  );
}
