import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { MdFavorite } from 'react-icons/md';
import { animate, useValue, withSequence, withSpring, withTiming } from 'react-ui-animate';

const Stage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-family: inherit;
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  cursor: pointer;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`;

const Heart = styled(animate.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
`;

const Particle = styled(animate.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 7px;
  height: 7px;
  margin: -3.5px 0 0 -3.5px;
  border-radius: 50%;
  background: #f43f5e;
  pointer-events: none;
`;

const Count = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #9ca3af;
`;

const PARTICLES = 6;

const DOTS = Array.from({ length: PARTICLES }, (_, i) => {
  const angle = (i / PARTICLES) * Math.PI * 2;
  const dist = 42;
  return { angle, dx: Math.cos(angle) * dist, dy: Math.sin(angle) * dist };
});

function Burst() {
  return (
    <>
      {DOTS.map((d) => (
        <ParticleDot key={d.angle} dx={d.dx} dy={d.dy} />
      ))}
    </>
  );
}

function ParticleDot({ dx, dy }: { dx: number; dy: number }) {
  const [x, setX] = useValue(0);
  const [y, setY] = useValue(0);
  const [o, setO] = useValue(1);
  const [s, setS] = useValue(1);

  useEffect(() => {
    setX(withSpring(dx, { damping: 14, stiffness: 200 }));
    setY(withSpring(dy, { damping: 14, stiffness: 200 }));
    setO(withTiming(0, { duration: 600 }));
    setS(withTiming(0, { duration: 600 }));
  }, [dx, dy, setO, setS, setX, setY]);

  return (
    <Particle style={{ translateX: x, translateY: y, opacity: o, scale: s }} />
  );
}

export function LikeButtonDemo() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(128);
  const [bursts, setBursts] = useState<number[]>([]);
  const [scale, setScale] = useValue(1);
  const [color, setColor] = useValue(0);

  const toggle = () => {
    const next = !liked;
    setLiked(next);
    setCount((c) => c + (next ? 1 : -1));
    setColor(withTiming(next ? 1 : 0, { duration: 220 }));

    if (next) {
      setScale(
        withSequence([
          withSpring(1.35, { damping: 6, stiffness: 320 }),
          withSpring(1, { damping: 14 }),
        ])
      );
      const id = Date.now();
      setBursts((b) => [...b, id]);
      setTimeout(() => setBursts((b) => b.filter((x) => x !== id)), 700);
    } else {
      setScale(withSpring(1, { damping: 14 }));
    }
  };

  return (
    <Stage>
      <Button onClick={toggle} aria-pressed={liked}>
        {bursts.map((id) => (
          <Burst key={id} />
        ))}
        <Heart
          style={{
            scale,
            color: color.to([0, 1], ['#6b7280', '#f43f5e']),
          }}
        >
          <MdFavorite />
        </Heart>
      </Button>
      <Count>
        {count.toLocaleString()} {count === 1 ? 'like' : 'likes'}
      </Count>
    </Stage>
  );
}
