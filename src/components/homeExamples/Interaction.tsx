import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { animate, useScroll, withSpring } from 'react-ui-animate';
import { AnimatedCard } from '../AnimatedCard';

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
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;

export function Interaction() {
  return (
    <Container>
      <AnimatedCard>
        <Card />
      </AnimatedCard>
    </Container>
  );
}
