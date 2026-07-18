import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { animate, useValue, withSequence, withSpring, withTiming } from 'react-ui-animate';

const Stage = styled.div`
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: 'Inter', sans-serif;
`;

const TabBar = styled.div`
  position: relative;
  display: flex;
  padding: 5px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Indicator = styled(animate.div)`
  position: absolute;
  top: 5px;
  bottom: 5px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.1);
`;

const Tab = styled.button<{ active: boolean }>`
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 8px 0;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 12.5px;
  font-weight: 600;
  color: ${(p) => (p.active ? '#ffffff' : 'rgba(226, 232, 240, 0.6)')};
  transition: color 0.2s ease;
`;

const Panel = styled(animate.div)`
  min-height: 92px;
  padding: 14px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const PanelTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #f5f7ff;
  margin-bottom: 4px;
`;

const PanelText = styled.div`
  font-size: 12px;
  line-height: 1.55;
  color: rgba(226, 232, 240, 0.62);
`;

const TABS = [
  {
    label: 'Overview',
    title: 'Declarative motion',
    text: 'Animate with simple props instead of hand-writing timelines.',
  },
  {
    label: 'Gestures',
    title: 'Built-in gestures',
    text: 'Drag, move, scroll, and wheel hooks for tactile interactions.',
  },
  {
    label: 'Presence',
    title: 'Exit animations',
    text: 'Animate elements out as they leave the DOM, e.g. modals and toasts.',
  },
];

export function TabsDemo() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [left, setLeft] = useValue(0);
  const [width, setWidth] = useValue(0);
  const [enter, setEnter] = useValue(1);

  useLayoutEffect(() => {
    const el = tabRefs.current[active];
    if (el) {
      setLeft(withSpring(el.offsetLeft, { damping: 20, stiffness: 240 }));
      setWidth(withSpring(el.offsetWidth, { damping: 20, stiffness: 240 }));
    }
    setEnter(
      withSequence([
        withTiming(0, { duration: 0 }),
        withTiming(1, { duration: 240 }),
      ])
    );
  }, [active, setLeft, setWidth, setEnter]);

  const current = TABS[active];

  return (
    <Stage>
      <TabBar>
        <Indicator style={{ translateX: left, width }} />
        {TABS.map((t, i) => (
          <Tab
            key={t.label}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            active={active === i}
            onClick={() => setActive(i)}
          >
            {t.label}
          </Tab>
        ))}
      </TabBar>

      <Panel
        style={{ opacity: enter, translateY: enter.to([0, 1], [8, 0]) }}
      >
        <PanelTitle>{current.title}</PanelTitle>
        <PanelText>{current.text}</PanelText>
      </Panel>
    </Stage>
  );
}
