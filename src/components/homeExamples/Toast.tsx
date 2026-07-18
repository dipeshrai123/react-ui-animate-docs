import React, { useCallback, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { MdCheckCircle } from 'react-icons/md';
import {
  animate,
  Presence,
  withSequence,
  withSpring,
  withTiming,
} from 'react-ui-animate';

const Stage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
`;

const Trigger = styled.button`
  flex-shrink: 0;
  padding: 8px 14px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

const Stack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ToastCard = styled(animate.div)`
  position: relative;
  width: 100%;
  max-width: 250px;
  overflow: hidden;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 12px 14px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 9px;
  background: rgba(52, 211, 153, 0.16);
  color: #34d399;
  font-size: 18px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #f5f7ff;
`;

const Sub = styled.div`
  font-size: 11px;
  color: rgba(226, 232, 240, 0.6);
`;

const Progress = styled(animate.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background: #60a5fa;
`;

let uid = 0;

function Toast({ id, onEnd }: { id: number; onEnd: (id: number) => void }) {
  return (
    <ToastCard
      style={{ height: 0, opacity: 0, scale: 0.9 }}
      animate={{
        height: withSpring(58, { damping: 16 }),
        opacity: withSpring(1, { damping: 16 }),
        scale: withSpring(1, { damping: 16 }),
      }}
      exit={{
        height: withSpring(0, { damping: 16 }),
        opacity: withTiming(0, { duration: 180 }),
        scale: withSpring(0.9, { damping: 16 }),
      }}
    >
      <Row>
        <Icon>
          <MdCheckCircle />
        </Icon>
        <Text>
          <Title>Changes saved</Title>
          <Sub>Synced just now</Sub>
        </Text>
      </Row>
      <Progress
        style={{ width: '0%' }}
        animate={{
          width: withSequence([
            withTiming('0%', { duration: 0 }),
            withTiming('100%', { duration: 2800, onComplete: () => onEnd(id) }),
          ]),
        }}
      />
    </ToastCard>
  );
}

export function ToastDemo() {
  const [toasts, setToasts] = useState<number[]>([]);

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t !== id));
  }, []);

  const add = () => {
    setToasts((prev) => [...prev.slice(-2), uid++]);
  };

  return (
    <Stage>
      <Trigger onClick={add}>Show notification</Trigger>
      <Stack>
        <Presence>
          {toasts.map((id) => (
            <Toast key={id} id={id} onEnd={remove} />
          ))}
        </Presence>
      </Stack>
    </Stage>
  );
}
