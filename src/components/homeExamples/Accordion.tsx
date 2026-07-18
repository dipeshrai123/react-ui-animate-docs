import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { FiChevronDown } from 'react-icons/fi';
import { animate, useValue, withSpring } from 'react-ui-animate';

const Stage = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Eyebrow = styled.div`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #6b7280;
  text-align: center;
`;

const List = styled.div`
  overflow: hidden;
  border-radius: 12px;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`;

const Item = styled.div<{ $last: boolean; $open: boolean }>`
  border-bottom: ${(p) => (p.$last ? 'none' : '1px solid #2a2e38')};
  background: ${(p) => (p.$open ? '#15171e' : 'transparent')};
`;

const Header = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr) 20px;
  align-items: center;
  column-gap: 10px;
  padding: 11px 12px;
  cursor: pointer;
  background: transparent;
  border: none;
  text-align: left;
  font-family: inherit;
`;

const Index = styled.span<{ $open: boolean }>`
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
  color: ${(p) => (p.$open ? '#60a5fa' : '#6b7280')};
  transition: color 0.15s ease;
`;

const Question = styled.span<{ $open: boolean }>`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: ${(p) => (p.$open ? '#e5e7eb' : '#d1d5db')};
  transition: color 0.15s ease;
`;

/* animate.div wraps a custom component rather than a DOM tag string, so
   emotion can't auto-filter $-prefixed transient props here. Pass the
   open state through the style prop instead of a styled prop. */
const Chevron = styled(animate.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.15s ease;
`;

const Panel = styled(animate.div)`
  overflow: hidden;
`;

const Answer = styled.div`
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr) 20px;
  column-gap: 10px;
  padding: 0 12px 11px;
  font-size: 12px;
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: #9ca3af;

  span {
    grid-column: 2;
  }
`;

const FAQ = [
  {
    q: 'Is it production ready?',
    a: 'Yes. It ships with TypeScript types, works in React 18+, and is tree-shakeable.',
  },
  {
    q: 'Does it support gestures?',
    a: 'Drag, move, scroll, and wheel are built in as hooks you can drop onto any element.',
  },
  {
    q: 'How big is the bundle?',
    a: 'Small by default. You only pay for the modifiers and gestures you import.',
  },
];

function AccordionItem({
  index,
  q,
  a,
  open,
  last,
  onToggle,
}: {
  index: number;
  q: string;
  a: string;
  open: boolean;
  last: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useValue(0);
  const [height, setHeight] = useValue(0);
  const contentHeight = useRef(0);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => {
      contentHeight.current = el.scrollHeight;
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [a]);

  useEffect(() => {
    setProgress(withSpring(open ? 1 : 0, { damping: 22, stiffness: 260 }));
    setHeight(
      withSpring(open ? contentHeight.current : 0, {
        damping: 22,
        stiffness: 260,
      })
    );
  }, [open, setProgress, setHeight]);

  return (
    <Item $last={last} $open={open}>
      <Header type="button" onClick={onToggle} aria-expanded={open}>
        <Index $open={open}>{String(index + 1).padStart(2, '0')}</Index>
        <Question $open={open}>{q}</Question>
        <Chevron
          style={{
            rotateZ: progress.to([0, 1], [0, 180]),
            color: open ? '#60a5fa' : '#6b7280',
          }}
        >
          <FiChevronDown size={14} strokeWidth={2.25} />
        </Chevron>
      </Header>
      <Panel style={{ height, opacity: progress }}>
        <Answer ref={contentRef}>
          <span>{a}</span>
        </Answer>
      </Panel>
    </Item>
  );
}

export function AccordionDemo() {
  const [active, setActive] = useState(0);

  return (
    <Stage>
      <Eyebrow>Frequently asked</Eyebrow>
      <List>
        {FAQ.map((item, i) => (
          <AccordionItem
            key={item.q}
            index={i}
            q={item.q}
            a={item.a}
            open={active === i}
            last={i === FAQ.length - 1}
            onToggle={() => setActive((cur) => (cur === i ? -1 : i))}
          />
        ))}
      </List>
    </Stage>
  );
}
