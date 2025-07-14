import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import {
  animate,
  Easing,
  useValue,
  withDelay,
  withLoop,
  withSequence,
  withTiming,
} from 'react-ui-animate';

const Container = styled(animate.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Card = styled(animate.div)`
  width: 200px;
  height: 40px;
  background-color: #3399ff;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
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
          withTiming({ container: 1 }, { easing: Easing.inOut(Easing.ease) }),
          withTiming({ one: 1 }, { easing: Easing.inOut(Easing.ease) }),
          withTiming({ two: 1 }, { easing: Easing.inOut(Easing.ease) }),
          withTiming({ three: 1 }, { easing: Easing.inOut(Easing.ease) }),
          withDelay(1000),
          withTiming(
            { container: 0, one: 0, two: 0, three: 0 },
            { easing: Easing.inOut(Easing.ease) }
          ),
        ])
      )
    );
  }, []);

  return (
    <Container style={{ opacity: values.container }}>
      <Card
        style={{
          opacity: values.one,
          scale: values.one.to([0, 1], [0.8, 1]),
          translateY: values.one.to([0, 1], [20, 0]),
        }}
      />
      <Card
        style={{
          opacity: values.two,
          scale: values.two.to([0, 1], [0.8, 1]),
          translateY: values.two.to([0, 1], [20, 0]),
        }}
      />
      <Card
        style={{
          opacity: values.three,
          scale: values.three.to([0, 1], [0.8, 1]),
          translateY: values.three.to([0, 1], [20, 0]),
        }}
      />
    </Container>
  );
}
