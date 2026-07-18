import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { MdExpandMore } from 'react-icons/md';
import { animate, useValue, withSpring } from 'react-ui-animate';

const PANEL_HEIGHT = 46;

const Stage = styled.div`
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Inter', sans-serif;
`;

const Item = styled.div`
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Header = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 14px;
  cursor: pointer;
  background: transparent;
  border: none;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: #f5f7ff;
`;

const Chevron = styled(animate.div)`
  display: flex;
  flex-shrink: 0;
  color: rgba(226, 232, 240, 0.6);
  font-size: 18px;
`;

const Panel = styled(animate.div)`
  overflow: hidden;
`;

const Answer = styled.div`
  padding: 0 14px 13px;
  font-size: 12px;
  line-height: 1.55;
  color: rgba(226, 232, 240, 0.62);
`;

const FAQ = [
  {
    q: 'Is it production ready?',
    a: 'Yes. It ships with TypeScript types and is tree-shakeable.',
  },
  {
    q: 'Does it support gestures?',
    a: 'Drag, move, scroll, and wheel gestures are built in as hooks.',
  },
  {
    q: 'How big is the bundle?',
    a: 'Small, and you only pay for the pieces you actually import.',
  },
];

function AccordionItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const [progress, setProgress] = useValue(0);

  useEffect(() => {
    setProgress(withSpring(open ? 1 : 0, { damping: 20, stiffness: 220 }));
  }, [open, setProgress]);

  return (
    <Item>
      <Header onClick={onToggle}>
        {q}
        <Chevron style={{ rotateZ: progress.to([0, 1], [0, 180]) }}>
          <MdExpandMore />
        </Chevron>
      </Header>
      <Panel
        style={{
          height: progress.to([0, 1], [0, PANEL_HEIGHT]),
          opacity: progress,
        }}
      >
        <Answer>{a}</Answer>
      </Panel>
    </Item>
  );
}

export function AccordionDemo() {
  const [active, setActive] = useState(0);

  return (
    <Stage>
      {FAQ.map((item, i) => (
        <AccordionItem
          key={item.q}
          q={item.q}
          a={item.a}
          open={active === i}
          onToggle={() => setActive((cur) => (cur === i ? -1 : i))}
        />
      ))}
    </Stage>
  );
}
