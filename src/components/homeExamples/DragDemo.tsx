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
  background: linear-gradient(140deg, #6366f1 0%, #8b5cf6 55%, #a855f7 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 24px 48px -16px rgba(99, 102, 241, 0.65),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);

  &:active {
    cursor: grabbing;
  }
`;

const Caption = styled.div`
  font-family: var(--site-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: rgba(226, 232, 240, 0.5);
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
