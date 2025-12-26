import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { animate, useScroll, withSpring } from 'react-ui-animate';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled(animate.div)`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export function Scroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(window, {
    target: ref,
    offset: ['start end', 'start start'],
    toDescriptor: (p) => withSpring(p, { damping: 10 }),
  });

  return (
    <Container ref={ref}>
      <Card
        style={{
          scale: scrollYProgress.to([0, 1], [1, 2]),
          background: scrollYProgress.to(
            [0, 1],
            [
              'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            ]
          ),
        }}
      />
    </Container>
  );
}
