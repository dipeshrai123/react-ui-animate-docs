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
  background-color: #e1e1e1;
  border-radius: 8px;
`;

const AnimatedCard = styled(animate.div)`
  width: 100px;
  border-radius: 8px;
  background-color: #0069d9;
  overflow: hidden;
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
            exit={{
              opacity: withTiming(0),
              height: withSpring(0),
            }}
            style={{
              opacity: 1,
              height: 80,
            }}
          />
        )}
      </Presence>
      <Card />
    </Container>
  );
}
