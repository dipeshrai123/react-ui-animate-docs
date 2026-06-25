import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { MdCheckCircle } from 'react-icons/md';
import { animate, Presence, withSpring, withTiming } from 'react-ui-animate';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Toast = styled(animate.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 224px;
  padding: 14px 18px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(52, 211, 153, 0.16);
  color: #34d399;
  font-size: 20px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--ifm-heading-color);
`;

const Sub = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: var(--ifm-color-content-secondary);
`;

export function MountUnmount() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow((v) => !v), show ? 2600 : 1100);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <Container>
      <Presence>
        {show && (
          <Toast
            key="toast"
            style={{ opacity: 0, translateY: 18, scale: 0.92 }}
            animate={{
              opacity: withTiming(1, { duration: 240 }),
              translateY: withSpring(0, { damping: 16 }),
              scale: withSpring(1, { damping: 16 }),
            }}
            exit={{
              opacity: withTiming(0, { duration: 200 }),
              translateY: withSpring(14),
              scale: withSpring(0.95),
            }}
          >
            <IconWrap>
              <MdCheckCircle />
            </IconWrap>
            <Text>
              <Title>Changes saved</Title>
              <Sub>Your work is up to date</Sub>
            </Text>
          </Toast>
        )}
      </Presence>
    </Container>
  );
}
