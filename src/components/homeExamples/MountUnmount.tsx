import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { animate, Mount, useScroll, withSpring } from 'react-ui-animate';

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
`;

const Card = styled(animate.div)`
  width: 100px;
  height: 40px;
  background-color: #0069d9;
  border-radius: 8px;
  margin-bottom: 4px;
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

  return (
    <Container>
      <Card style={{ backgroundColor: '#e1e1e1' }} />
      <Mount
        state={open}
        enter={withSpring(1, { damping: 10 })}
        exit={withSpring(0, {
          onComplete: () => setTimeout(() => setOpen(true), 1000),
        })}
      >
        {(a) => (
          <Card
            style={{
              opacity: a,
              height: a.to([0, 1], [0, 80]),
            }}
          />
        )}
      </Mount>
      <Card style={{ backgroundColor: '#e1e1e1' }} />
    </Container>
  );
}
