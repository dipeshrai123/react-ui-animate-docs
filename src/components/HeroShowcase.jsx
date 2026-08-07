import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { MdFavorite } from 'react-icons/md';
import { FiMove, FiZap, FiActivity, FiBell } from 'react-icons/fi';
import {
  animate,
  useValue,
  useDrag,
  withSpring,
  withTiming,
} from 'react-ui-animate';

/**
 * The hero's live visual: a framed panel that demonstrates the library
 * instead of describing it — a draggable spring card plus two ambient
 * mini-demos, so the first thing a visitor sees is real motion, not a
 * screenshot or a stock background animation.
 */

const Panel = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 22px;
  background: #0c0d12;
  border: 1px solid #262a35;
  box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.7),
    0 1px 0 rgba(255, 255, 255, 0.04) inset;
`;

const PanelHead = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 13px 16px;
  border-bottom: 1px solid #21242e;
  background: rgba(14, 15, 20, 0.6);
  backdrop-filter: blur(6px);
`;

const Dots = styled.div`
  display: flex;
  gap: 6px;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #262a35;
`;

const HeadLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
`;

const HeadPulse = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6);
  animation: heroShowcasePulse 2s ease-out infinite;

  @keyframes heroShowcasePulse {
    0% {
      box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5);
    }
    70% {
      box-shadow: 0 0 0 7px rgba(52, 211, 153, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
    }
  }
`;

const Stage = styled.div`
  position: relative;
  flex: 1;
  min-height: 360px;
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 24px 24px;
`;

const Glow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 320px;
  transform: translate(-50%, -50%);
  background: radial-gradient(closest-side, rgba(59, 130, 246, 0.22), transparent);
  pointer-events: none;
`;

const DragCard = styled(animate.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 128px;
  height: 128px;
  margin: -64px 0 0 -64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 26px;
  cursor: grab;
  user-select: none;
  touch-action: none;
  color: #ffffff;
  background: linear-gradient(155deg, #4f8ef7 0%, #3b6fe0 100%);
  border: 1px solid #2f5bc4;
  box-shadow: 0 18px 40px -12px rgba(59, 130, 246, 0.55);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  z-index: 3;

  &:active {
    cursor: grabbing;
  }
`;

/* Positions + owns the continuous idle float (plain CSS animation). Kept
   separate from the react-ui-animate-controlled card inside it, so the
   library's transform writes (entrance translateY) never fight the CSS
   keyframe's transform writes on the same element. */
const FloatWrap = styled.div`
  position: absolute;
`;

const MiniCard = styled(animate.div)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 14px;
  background: #14161d;
  border: 1px solid #262a35;
  box-shadow: 0 14px 30px -14px rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

const MiniIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 9px;
  font-size: 15px;
`;

const MiniCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const MiniTitle = styled.div`
  font-size: 12.5px;
  font-weight: 600;
  color: #e5e7eb;
  line-height: 1.3;
`;

const MiniSub = styled.div`
  font-size: 11px;
  color: #6b7280;
  line-height: 1.3;
`;

const Pill = styled(animate.div)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border-radius: 999px;
  background: #14161d;
  border: 1px solid #262a35;
  color: #9ca3af;
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: -0.01em;
  z-index: 2;
`;

const Caption = styled.div`
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  font-family: var(--site-mono);
  font-size: 11.5px;
  color: #4b5563;
  white-space: nowrap;
  z-index: 2;
`;

/** Fade + rise mount reveal, self-contained so this panel has no external deps. */
function useReveal(delay) {
  const [opacity, setOpacity] = useValue(0);
  const [translateY, setTranslateY] = useValue(14);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(withTiming(1, { duration: 500 }));
      setTranslateY(withSpring(0, { damping: 20 }));
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, setOpacity, setTranslateY]);

  return { opacity, translateY };
}

function ToastMini() {
  const reveal = useReveal(650);

  return (
    <FloatWrap className="heroFloatSlow" style={{ top: '13%', left: '8%' }}>
      <MiniCard
        style={{
          rotate: '-6deg',
          opacity: reveal.opacity,
          translateY: reveal.translateY,
        }}
      >
        <MiniIcon style={{ background: '#1c2333', color: '#93c5fd' }}>
          <FiBell aria-hidden="true" />
        </MiniIcon>
        <MiniCopy>
          <MiniTitle>Deploy complete</MiniTitle>
          <MiniSub>Enter → hold → exit</MiniSub>
        </MiniCopy>
      </MiniCard>
    </FloatWrap>
  );
}

function LikeMini() {
  const reveal = useReveal(760);
  const [liked, setLiked] = useState(true);
  const [scale, setScale] = useValue(1);

  const toggle = () => {
    setLiked((v) => !v);
    setScale(withSpring(1.3, { damping: 7, stiffness: 300 }));
    setTimeout(() => setScale(withSpring(1, { damping: 14 })), 90);
  };

  return (
    <FloatWrap
      className="heroFloatSlow heroFloatDelay"
      style={{ bottom: '15%', left: '12%' }}
    >
      <MiniCard
        as="button"
        onClick={toggle}
        style={{
          rotate: '5deg',
          border: 'none',
          cursor: 'pointer',
          font: 'inherit',
          textAlign: 'left',
          opacity: reveal.opacity,
          translateY: reveal.translateY,
        }}
      >
        <MiniIcon style={{ background: '#2a1520', color: liked ? '#f43f5e' : '#6b7280' }}>
          <animate.div style={{ scale, display: 'inline-flex' }}>
            <MdFavorite aria-hidden="true" />
          </animate.div>
        </MiniIcon>
        <MiniCopy>
          <MiniTitle>2,048 likes</MiniTitle>
          <MiniSub>Press feedback</MiniSub>
        </MiniCopy>
      </MiniCard>
    </FloatWrap>
  );
}

function DragMini() {
  const ref = useRef(null);
  const reveal = useReveal(560);
  const [scale, setScale] = useValue(0.8);
  const [grabbing, setGrabbing] = useState(false);

  const { x, y } = useDrag(ref, {
    bounds: { left: 0, right: 0, top: 0, bottom: 0 },
    onStart: () => {
      setGrabbing(true);
      setScale(withSpring(1.08));
    },
    onEnd: () => {
      setGrabbing(false);
      setScale(withSpring(1));
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => setScale(withSpring(1, { damping: 20 })), 560);
    return () => clearTimeout(timer);
  }, [setScale]);

  return (
    <DragCard
      ref={ref}
      style={{
        translateX: x,
        translateY: y,
        scale,
        opacity: reveal.opacity,
      }}
    >
      <FiMove size={20} aria-hidden="true" />
      <span>{grabbing ? 'spring physics' : 'drag me'}</span>
    </DragCard>
  );
}

const PILLS = [
  { icon: FiZap, label: '60 FPS', top: '12%', right: '7%', delay: 900 },
  { icon: FiActivity, label: 'Spring-driven', bottom: '13%', right: '9%', delay: 980 },
];

function PillBadge({ icon: Icon, label, delay, ...pos }) {
  const reveal = useReveal(delay);
  return (
    <FloatWrap className="heroFloatSlow" style={pos}>
      <Pill style={{ opacity: reveal.opacity, translateY: reveal.translateY }}>
        <Icon aria-hidden="true" />
        {label}
      </Pill>
    </FloatWrap>
  );
}

export default function HeroShowcase() {
  return (
    <Panel>
      <PanelHead>
        <Dots aria-hidden="true">
          <Dot />
          <Dot />
          <Dot />
        </Dots>
        <HeadLabel>
          <HeadPulse aria-hidden="true" />
          Live - built with react-ui-animate
        </HeadLabel>
      </PanelHead>

      <Stage>
        <Glow aria-hidden="true" />
        <ToastMini />
        <LikeMini />
        <DragMini />
        {PILLS.map((pill) => (
          <PillBadge key={pill.label} {...pill} />
        ))}
        <Caption>drag the card &middot; it springs right back</Caption>
      </Stage>
    </Panel>
  );
}
