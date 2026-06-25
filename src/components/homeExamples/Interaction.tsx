import React, { useState } from 'react';
import styled from '@emotion/styled';
import { animate, useValue, withSpring, withTiming } from 'react-ui-animate';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
`;

const Track = styled(animate.div)`
  width: 68px;
  height: 38px;
  padding: 4px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const Knob = styled(animate.div)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
`;

const Label = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: var(--ifm-color-content-secondary);
  letter-spacing: 0.01em;
`;

export function Interaction() {
  const [on, setOn] = useState(true);
  const [x, setX] = useValue(30);
  const [t, setT] = useValue(1);

  const toggle = () => {
    const next = !on;
    setOn(next);
    setX(withSpring(next ? 30 : 0, { damping: 15, stiffness: 220 }));
    setT(withTiming(next ? 1 : 0, { duration: 240 }));
  };

  return (
    <Container>
      <Track
        onClick={toggle}
        style={{
          backgroundColor: t.to(
            [0, 1],
            ['rgba(255,255,255,0.08)', '#6366f1']
          ),
        }}
      >
        <Knob style={{ translateX: x }} />
      </Track>
      <Label>{on ? 'Enabled' : 'Disabled'} · tap to toggle</Label>
    </Container>
  );
}
