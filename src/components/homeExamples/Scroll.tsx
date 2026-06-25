import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { animate, useValue, withSpring } from 'react-ui-animate';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
`;

const Scroller = styled.div`
  position: absolute;
  inset: 0;
  overflow-y: scroll;
`;

const Spacer = styled.div`
  height: 720px;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const Circle = styled(animate.div)`
  width: 90px;
  height: 90px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.35);
`;

const Hint = styled.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ifm-color-content-secondary);
  pointer-events: none;
`;

const ProgressTrack = styled.div`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 14px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  pointer-events: none;
`;

const ProgressBar = styled(animate.div)`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
`;

export function Scroll() {
  const [progress, setProgress] = useValue(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const max = el.scrollHeight - el.clientHeight;
    const value = max > 0 ? el.scrollTop / max : 0;
    setProgress(withSpring(value, { damping: 14 }));
  };

  return (
    <Wrapper>
      <Scroller onScroll={handleScroll}>
        <Spacer />
      </Scroller>

      <Hint>Scroll ↓</Hint>

      <Overlay>
        <Circle
          style={{
            scale: progress.to([0, 1], [1, 1.6]),
            rotateZ: progress.to([0, 1], [0, 180]),
            background: progress.to(
              [0, 1],
              [
                'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
              ]
            ),
          }}
        />
      </Overlay>

      <ProgressTrack>
        <ProgressBar style={{ width: progress.to([0, 1], ['0%', '100%']) }} />
      </ProgressTrack>
    </Wrapper>
  );
}
