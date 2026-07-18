import React, { useEffect, useRef, useState } from 'react';
import {
  animate,
  useValue,
  useDrag,
  withSpring,
  withTiming,
  withLoop,
  withSequence,
} from 'react-ui-animate';

import styles from './HeroDemo.module.css';

interface FloatTagProps {
  label: string;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
}

function FloatTag({
  label,
  className,
  delay = 0,
  distance = 7,
  duration = 3200,
}: FloatTagProps) {
  const [translateY, setTranslateY] = useValue(distance);
  const [opacity, setOpacity] = useValue(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(withTiming(1, { duration: 500 }));
      setTranslateY(
        withLoop(
          withSequence([
            withTiming(-distance, { duration }),
            withTiming(distance, { duration }),
          ])
        )
      );
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, distance, duration]);

  return (
    <animate.div
      className={`${styles.tag} ${className ?? ''}`}
      style={{ opacity, translateY }}
    >
      <span className={styles.tagDot} />
      {label}
    </animate.div>
  );
}

export default function HeroDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useValue(1);
  const [lift, setLift] = useValue(0);
  const [grabbing, setGrabbing] = useState(false);

  // bounds pinned to the origin means any drag is instantly "out of
  // bounds" on release, so useDrag's own spring-back handles the "snaps
  // right back to center" motion — no manual position tracking needed.
  const { x, y } = useDrag(ref, {
    bounds: { left: 0, right: 0, top: 0, bottom: 0 },
    onStart: () => {
      setGrabbing(true);
      setScale(withSpring(1.1));
      setLift(withSpring(1));
    },
    onEnd: () => {
      setGrabbing(false);
      setScale(withSpring(1));
      setLift(withSpring(0));
    },
  });

  return (
    <div className={styles.stage}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.spotlight} aria-hidden="true" />

      <FloatTag label="useDrag" className={styles.tagTopLeft} delay={300} />
      <FloatTag
        label="withSpring"
        className={styles.tagTopRight}
        delay={520}
        duration={3600}
      />
      <FloatTag
        label="hover"
        className={styles.tagBottomLeft}
        delay={740}
        duration={4000}
      />

      <div className={styles.cardWrap}>
        <animate.div
          className={styles.cardShadow}
          style={{ scale, opacity: lift.to([0, 1], [0.3, 0.55]) }}
        />
        <animate.div
          ref={ref}
          className={styles.card}
          style={{ translateX: x, translateY: y, scale }}
        >
          <span className={styles.cardGlyph} aria-hidden="true">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              role="img"
              aria-hidden="true"
              focusable="false"
            >
              <title>Move handle</title>
              <path
                d="M12 3v18M3 12h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className={styles.cardLabel}>
            {grabbing ? 'spring physics' : 'drag me'}
          </span>
        </animate.div>
      </div>

      <div className={styles.caption}>Drag the card. It springs right back.</div>
    </div>
  );
}
