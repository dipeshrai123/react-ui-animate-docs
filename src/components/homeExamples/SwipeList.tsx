import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { FiTrash2 } from 'react-icons/fi';
import {
  animate,
  Unmount,
  Gesture,
  useGesture,
  useValue,
  withSpring,
  withStagger,
  withTiming,
} from 'react-ui-animate';

const Stage = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Hint = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #6b7280;
  text-align: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 220px;
`;

const RowWrap = styled(animate.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

const DeleteBg = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding-right: 18px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #ffffff;
  background: #dc2626;
`;

const Fore = styled(animate.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 14px 0 16px;
  background: #1a1d24;
  border: 1px solid #2a2e38;
  border-radius: 10px;
  cursor: grab;
  user-select: none;
  touch-action: pan-y;

  &:active {
    cursor: grabbing;
  }
`;

const Avatar = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 9px;
  background: ${(p) => p.$color};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

const Meta = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: #e5e7eb;
`;

const Detail = styled.div`
  font-size: 14px;
  line-height: 1.35;
  color: #9ca3af;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Time = styled.div`
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 500;
  color: #6b7280;
`;

const ROW_H = 64;
const THRESHOLD = 88;

type ItemData = {
  id: number;
  order: number;
  name: string;
  detail: string;
  time: string;
  color: string;
  initials: string;
};

const SEED: Omit<ItemData, 'id' | 'order'>[] = [
  {
    name: 'Olivia Hart',
    detail: 'Sent you design.fig',
    time: '2m',
    color: '#3b82f6',
    initials: 'OH',
  },
  {
    name: 'Liam Chen',
    detail: 'Liked your update',
    time: '1h',
    color: '#10b981',
    initials: 'LC',
  },
  {
    name: 'Ava Patel',
    detail: 'Commented on Draft',
    time: '3h',
    color: '#f59e0b',
    initials: 'AP',
  },
];

let nextId = 1;

function createItems(): ItemData[] {
  return SEED.map((item, order) => ({ ...item, id: nextId++, order }));
}

function Row({
  item,
  onDelete,
}: {
  item: ItemData;
  onDelete: (id: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tx, setTx] = useValue(0);
  const deleting = useRef(false);

  useGesture(
    ref,
    Gesture.Pan()
      .onChange(({ movement }) => {
        if (deleting.current) return;
        setTx(Math.min(0, movement.x));
      })
      .onEnd(({ movement }) => {
        if (deleting.current) return;
        const nx = Math.min(0, movement.x);
        if (nx < -THRESHOLD) {
          deleting.current = true;
          setTx(
            withTiming(-320, {
              duration: 180,
              onComplete: () => onDelete(item.id),
            })
          );
        } else {
          setTx(withSpring(0, { damping: 20, stiffness: 280 }));
        }
      })
  );

  return (
    <RowWrap
      style={{ height: 0, opacity: 0, scale: 0.98, marginBottom: 0 }}
      animate={{
        height: withStagger(
          item.order,
          withSpring(ROW_H, { damping: 22, stiffness: 260 }),
          { each: 55 }
        ),
        marginBottom: withStagger(
          item.order,
          withSpring(8, { damping: 22, stiffness: 260 }),
          { each: 55 }
        ),
        opacity: withStagger(item.order, withTiming(1, { duration: 200 }), {
          each: 55,
        }),
        scale: withStagger(
          item.order,
          withSpring(1, { damping: 22, stiffness: 260 }),
          { each: 55 }
        ),
      }}
      unmount={{
        height: withSpring(0, { damping: 22, stiffness: 280 }),
        marginBottom: withSpring(0, { damping: 22, stiffness: 280 }),
        opacity: withTiming(0, { duration: 160 }),
        scale: withTiming(0.98, { duration: 160 }),
      }}
    >
      <DeleteBg>
        <FiTrash2 size={14} strokeWidth={2.25} />
        Delete
      </DeleteBg>
      <Fore ref={ref} style={{ translateX: tx }}>
        <Avatar $color={item.color}>{item.initials}</Avatar>
        <Meta>
          <Name>{item.name}</Name>
          <Detail>{item.detail}</Detail>
        </Meta>
        <Time>{item.time}</Time>
      </Fore>
    </RowWrap>
  );
}

export function SwipeListDemo() {
  const [items, setItems] = useState<ItemData[]>(() => createItems());
  const shouldRestore = useRef(false);
  const restoreTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const remove = useCallback((id: number) => {
    setItems((prev) => {
      const next = prev.filter((item) => item.id !== id);
      shouldRestore.current = next.length === 0;
      return next;
    });
  }, []);

  const handleExitComplete = useCallback(() => {
    if (!shouldRestore.current) return;
    shouldRestore.current = false;

    if (restoreTimer.current) clearTimeout(restoreTimer.current);
    restoreTimer.current = setTimeout(() => {
      setItems(createItems());
    }, 420);
  }, []);

  useEffect(() => {
    return () => {
      if (restoreTimer.current) clearTimeout(restoreTimer.current);
    };
  }, []);

  return (
    <Stage>
      <Hint>Swipe left on a row to delete</Hint>
      <List>
        <Unmount onExitComplete={handleExitComplete}>
          {items.map((item) => (
            <Row key={item.id} item={item} onDelete={remove} />
          ))}
        </Unmount>
      </List>
    </Stage>
  );
}
