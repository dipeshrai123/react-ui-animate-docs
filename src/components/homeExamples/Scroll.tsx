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
  background-color: #0069d9;
  border-radius: 8px;
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
          backgroundColor: scrollYProgress.to([0, 1], ['#0069d9', '#ff5733']),
        }}
      />
    </Container>
  );
}
