import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import {
  animate,
  Easing,
  useValue,
  withDelay,
  withLoop,
  withSequence,
  withSpring,
  withTiming,
} from 'react-ui-animate';

const Container = styled(animate.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Card = styled(animate.div)`
  width: 100%;
  max-width: 260px;
  height: 64px;
  border-radius: 16px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CardTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  font-family: 'Outfit', sans-serif;
  letter-spacing: 0.3px;
`;

const CardSubtitle = styled.div`
  font-size: 12px;
  opacity: 0.85;
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
`;

const StepNumber = styled(animate.div)`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Shine = styled(animate.div)`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
`;

export function Sequence() {
  const [values, setValues] = useValue({
    container: 0,
    one: 0,
    two: 0,
    three: 0,
  });

  useEffect(() => {
    setValues(
      withLoop(
        withSequence([
          withTiming({ container: 1 }, { duration: 300, easing: Easing.ease }),
          withTiming(
            { one: 1 },
            { duration: 400, easing: Easing.out(Easing.ease) }
          ),
          withTiming(
            { two: 1 },
            { duration: 400, easing: Easing.out(Easing.ease) }
          ),
          withTiming(
            { three: 1 },
            { duration: 400, easing: Easing.out(Easing.ease) }
          ),
          withDelay(1500),
          withTiming(
            { three: 0 },
            { duration: 300, easing: Easing.in(Easing.ease) }
          ),
          withDelay(100),
          withTiming(
            { two: 0 },
            { duration: 300, easing: Easing.in(Easing.ease) }
          ),
          withDelay(100),
          withTiming(
            { one: 0 },
            { duration: 300, easing: Easing.in(Easing.ease) }
          ),
          withDelay(100),
          withTiming(
            { container: 0 },
            { duration: 300, easing: Easing.in(Easing.ease) }
          ),
          withDelay(500),
        ])
      )
    );
  }, []);

  const cards = [
    {
      number: 1,
      title: 'Initialize',
      subtitle: 'Setup animation',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
    },
    {
      number: 2,
      title: 'Animate',
      subtitle: 'Apply effects',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
    },
    {
      number: 3,
      title: 'Complete',
      subtitle: 'Final result',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    },
  ];

  return (
    <Container style={{ opacity: values.container }}>
      {cards.map((card, index) => {
        const valueKey = index === 0 ? 'one' : index === 1 ? 'two' : 'three';
        const value = values[valueKey];

        return (
          <Card
            key={index}
            style={{
              opacity: value,
              scale: value.to([0, 1], [0.8, 1]),
              translateX: value.to([0, 1], [-40, 0]),
              rotateZ: value.to([0, 1], [-5, 0]),
              background: card.gradient,
            }}
          >
            <CardContent>
              <StepNumber
                style={{
                  opacity: value,
                  scale: value.to([0, 1], [0.5, 1]),
                  rotateZ: value.to([0, 1], [-180, 0]),
                }}
              >
                {card.number}
              </StepNumber>
              <CardText>
                <CardTitle>{card.title}</CardTitle>
                <CardSubtitle>{card.subtitle}</CardSubtitle>
              </CardText>
            </CardContent>
            <Shine
              style={{
                left: value.to([0, 1], ['-100%', '200%']),
                opacity: value.to([0.3, 0.6, 0.3], [0, 0.5, 0]),
              }}
            />
          </Card>
        );
      })}
    </Container>
  );
}
