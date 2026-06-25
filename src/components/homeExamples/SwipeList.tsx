import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { MdDelete, MdDragIndicator } from 'react-icons/md';
import { animate, Presence, useDrag, useValue, withSpring, withTiming } from 'react-ui-animate';

const Stage = styled.div`
  width: 100%;
  max-width: 280px;
  font-family: 'Inter', sans-serif;
`;

const Hint = styled.div`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(226, 232, 240, 0.4);
  text-align: center;
  margin-bottom: 12px;
`;

const RowWrap = styled(animate.div)`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

const DeleteBg = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  padding-right: 16px;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(90deg, #be123c, #f43f5e);
`;

const Fore = styled(animate.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0 12px;
  background: #14161f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: grab;
  user-select: none;
  touch-action: pan-y;
  &:active {
    cursor: grabbing;
  }
`;

const Grip = styled.div`
  display: flex;
  color: rgba(226, 232, 240, 0.35);
  font-size: 18px;
`;

const Avatar = styled.div<{ from: string; to: string }>`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 9px;
  background: ${(p) => `linear-gradient(135deg, ${p.from}, ${p.to})`};
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #f5f7ff;
`;

const Detail = styled.div`
  font-size: 11px;
  color: rgba(226, 232, 240, 0.55);
`;

const ROW_H = 54;
const THRESHOLD = 84;

interface ItemData {
  id: number;
  name: string;
  detail: string;
  from: string;
  to: string;
}

const INITIAL: ItemData[] = [
  { id: 1, name: 'Olivia Hart', detail: 'Sent you a file', from: '#6366f1', to: '#8b5cf6' },
  { id: 2, name: 'Liam Chen', detail: 'Liked your post', from: '#06b6d4', to: '#3b82f6' },
  { id: 3, name: 'Ava Patel', detail: 'New comment', from: '#a855f7', to: '#ec4899' },
];

function Row({ item, onDelete }: { item: ItemData; onDelete: (id: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tx, setTx] = useValue(0);

  useDrag(ref, ({ down, movement: { x } }) => {
    const nx = Math.min(0, x);
    if (down) {
      setTx(nx);
    } else if (nx < -THRESHOLD) {
      setTx(withTiming(-320, { duration: 160 }));
      onDelete(item.id);
    } else {
      setTx(withSpring(0, { damping: 18, stiffness: 240 }));
    }
  });

  return (
    <RowWrap
      style={{ height: ROW_H, marginBottom: 10, opacity: 1 }}
      exit={{
        height: withSpring(0, { damping: 20 }),
        marginBottom: withSpring(0, { damping: 20 }),
        opacity: withTiming(0, { duration: 160 }),
      }}
    >
      <DeleteBg>
        <MdDelete />
        Delete
      </DeleteBg>
      <Fore ref={ref} style={{ translateX: tx }}>
        <Grip>
          <MdDragIndicator />
        </Grip>
        <Avatar from={item.from} to={item.to} />
        <Meta>
          <Name>{item.name}</Name>
          <Detail>{item.detail}</Detail>
        </Meta>
      </Fore>
    </RowWrap>
  );
}

export function SwipeListDemo() {
  const [items, setItems] = useState<ItemData[]>(INITIAL);

  const remove = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  useEffect(() => {
    if (items.length === 0) {
      const t = setTimeout(() => setItems(INITIAL), 900);
      return () => clearTimeout(t);
    }
  }, [items.length]);

  return (
    <Stage>
      <Hint>← Swipe a row to delete</Hint>
      <Presence>
        {items.map((item) => (
          <Row key={item.id} item={item} onDelete={remove} />
        ))}
      </Presence>
    </Stage>
  );
}
