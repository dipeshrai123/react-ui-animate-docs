import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { animate, Presence, withSpring, withTiming } from 'react-ui-animate';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const Card = styled(animate.div)`
  width: 100px;
  height: 40px;
  background-color: var(--ifm-color-emphasis-200);
  border-radius: 12px;
`;

const AnimatedCard = styled(animate.div)`
  width: 100px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export function MountUnmount() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) return;

    const interval = setTimeout(() => {
      setOpen(false);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      const timeout = setTimeout(() => setOpen(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <Container>
      <Card />
      <Presence>
        {open && (
          <AnimatedCard
            style={{
              opacity: 0,
              height: 0,
              scale: 0.4,
            }}
            animate={{
              opacity: withSpring(1),
              height: withSpring(80),
              scale: 1,
            }}
            exit={{
              opacity: withTiming(0),
              height: withSpring(0),
            }}
          />
        )}
      </Presence>
      <Card />
    </Container>
  );
}
