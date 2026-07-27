import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { FiCheck, FiX } from 'react-icons/fi';
import {
  animate,
  Unmount,
  withSequence,
  withSpring,
  withTiming,
} from 'react-ui-animate';

const MESSAGES = [
  { title: 'Changes saved', detail: 'Your draft was synced' },
  { title: 'Invite sent', detail: 'Alex will get an email shortly' },
  { title: 'Deploy complete', detail: 'Production is live on v6.0.0-next.1' },
];

const Stage = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
`;

const Trigger = styled.button`
  align-self: center;
  padding: 10px 16px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #e5e7eb;
  cursor: pointer;
  background: #1a1d24;
  border: 1px solid #2a2e38;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: #1f222b;
    border-color: #3a3f4a;
  }
`;

const Tray = styled.div`
  position: relative;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #2a2e38;
  background: #12141a;
`;

const ToastCard = styled(animate.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`;

const Body = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 14px 14px 16px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin-top: 1px;
  border-radius: 8px;
  background: #143528;
  color: #34d399;
`;

const Copy = styled.div`
  flex: 1;
  min-width: 0;
  padding-top: 1px;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: #e5e7eb;
`;

const Detail = styled.div`
  margin-top: 3px;
  font-size: 14px;
  line-height: 1.45;
  color: #9ca3af;
`;

const Dismiss = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin: -2px -2px 0 0;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: #1f222b;
    color: #d1d5db;
  }
`;

const Track = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: #1f222b;
`;

const Progress = styled(animate.div)`
  height: 100%;
  background: #60a5fa;
  transform-origin: left center;
`;

const EmptyHint = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: #6b7280;
  opacity: ${(p: { $visible: boolean }) => (p.$visible ? 1 : 0)};
  transition: opacity 0.2s ease;
`;

let uid = 0;

type ToastItem = {
  id: number;
  title: string;
  detail: string;
};

function Toast({
  item,
  onEnd,
}: {
  item: ToastItem;
  onEnd: (id: number) => void;
}) {
  return (
    <ToastCard
      style={{ height: 0, opacity: 0, scale: 0.97, y: -6 }}
      animate={{
        height: withSpring(76, { damping: 18, stiffness: 220 }),
        opacity: withSpring(1, { damping: 18 }),
        scale: withSpring(1, { damping: 18 }),
        y: withSpring(0, { damping: 18 }),
      }}
      unmount={{
        height: withSpring(0, { damping: 18 }),
        opacity: withTiming(0, { duration: 160 }),
        scale: withSpring(0.97, { damping: 18 }),
        y: withTiming(-4, { duration: 160 }),
      }}
    >
      <Body>
        <Icon aria-hidden="true">
          <FiCheck size={14} strokeWidth={2.5} />
        </Icon>
        <Copy>
          <Title>{item.title}</Title>
          <Detail>{item.detail}</Detail>
        </Copy>
        <Dismiss
          type="button"
          aria-label="Dismiss"
          onClick={() => onEnd(item.id)}
        >
          <FiX size={14} strokeWidth={2} />
        </Dismiss>
      </Body>
      <Track>
        <Progress
          style={{ width: '0%' }}
          animate={{
            width: withSequence([
              withTiming('0%', { duration: 0 }),
              withTiming('100%', {
                duration: 3200,
                onComplete: () => onEnd(item.id),
              }),
            ]),
          }}
        />
      </Track>
    </ToastCard>
  );
}

export function ToastDemo() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const add = () => {
    const message = MESSAGES[uid % MESSAGES.length];
    setToasts((prev) => [
      ...prev.slice(-2),
      { id: uid++, title: message.title, detail: message.detail },
    ]);
  };

  return (
    <Stage>
      <Trigger type="button" onClick={add}>
        Show notification
      </Trigger>
      <Tray>
        <EmptyHint $visible={toasts.length === 0}>
          Notifications appear here
        </EmptyHint>
        <Unmount>
          {toasts.map((item) => (
            <Toast key={item.id} item={item} onEnd={remove} />
          ))}
        </Unmount>
      </Tray>
    </Stage>
  );
}
