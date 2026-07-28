import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  animate,
  FlipGroup,
  useValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-ui-animate';

const Stage = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TabBar = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 12px;
  background: #15171e;
  border: 1px solid #2a2e38;
`;

const Tab = styled.button<{ active: boolean }>`
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 10px 0;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${(p) => (p.active ? '#ffffff' : '#9ca3af')};
  transition: color 0.2s ease;
`;

const Panel = styled(animate.div)`
  min-height: 108px;
  padding: 16px 18px;
  border-radius: 12px;
  background: #15171e;
  border: 1px solid #2a2e38;
`;

const PanelTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: #e5e7eb;
  margin-bottom: 6px;
`;

const PanelText = styled.div`
  font-size: 14px;
  line-height: 1.55;
  color: #9ca3af;
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
    label: 'Unmount',
    title: 'Exit animations',
    text: 'Animate elements out as they leave the DOM, e.g. modals and toasts.',
  },
];

export function TabsDemo() {
  const [active, setActive] = useState(0);
  const [enter, setEnter] = useValue(1);
  const current = TABS[active];

  const select = (index: number) => {
    if (index === active) return;
    setActive(index);
    setEnter(
      withSequence([
        withTiming(0, { duration: 0 }),
        withSpring(1, { damping: 22, stiffness: 280 }),
      ])
    );
  };

  return (
    <Stage>
      <FlipGroup>
        <TabBar>
          {TABS.map((t, i) => (
            <Tab
              key={t.label}
              type="button"
              active={active === i}
              onClick={() => select(i)}
            >
              {active === i && (
                <animate.div
                  flipId="home-tabs-indicator"
                  flipOptions={withSpring({ stiffness: 420, damping: 34 })}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 7,
                    backgroundColor: '#1f222b',
                    zIndex: -1,
                  }}
                />
              )}
              {t.label}
            </Tab>
          ))}
        </TabBar>
      </FlipGroup>

      <Panel
        style={{
          opacity: enter,
          translateY: enter.to([0, 1], [6, 0]),
        }}
      >
        <PanelTitle>{current.title}</PanelTitle>
        <PanelText>{current.text}</PanelText>
      </Panel>
    </Stage>
  );
}
