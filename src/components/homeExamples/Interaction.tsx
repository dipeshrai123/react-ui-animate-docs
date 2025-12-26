import React from 'react';
import styled from '@emotion/styled';
import { animate, withSpring } from 'react-ui-animate';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`;

const Card = styled(animate.div)`
  width: 280px;
  height: 180px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
  color: #1a1a1a;
  text-align: center;
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Outfit', sans-serif;
  color: #666;
  text-align: center;
`;

export function Interaction() {
  return (
    <Container>
      <Card
        hover={{
          scale: withSpring(1.05),
          rotateZ: withSpring(2),
          boxShadow: withSpring('0 30px 80px rgba(0, 0, 0, 0.4)'),
        }}
        press={{
          scale: withSpring(0.98),
        }}
      >
        <Title>Hover Me</Title>
        <Subtitle>See smooth animations in action</Subtitle>
      </Card>
    </Container>
  );
}
