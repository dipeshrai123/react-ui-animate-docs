import React, { useRef } from 'react';
import { useValue, animate, useMove, withSpring } from 'react-ui-animate';

import './MagneticCursor.css';

const MAGNETIC_DISTANCE = 120;
const MAGNETIC_STRENGTH = 0.4;

const MagneticButton = ({
  containerRef,
  label,
  buttonRef,
}: {
  containerRef: any;
  label: string;
  buttonRef: any;
}) => {
  const [offset, setOffset] = useValue({ x: 0, y: 0 });

  useMove(containerRef, ({ event }) => {
    if (!buttonRef.current) return;

    const containerRect = containerRef.current!.getBoundingClientRect();
    const buttonRect = buttonRef.current.getBoundingClientRect();

    const cursorX = event.clientX - containerRect.left;
    const cursorY = event.clientY - containerRect.top;

    const buttonCenterX =
      buttonRect.left - containerRect.left + buttonRect.width / 2;
    const buttonCenterY =
      buttonRect.top - containerRect.top + buttonRect.height / 2;

    const dx = cursorX - buttonCenterX;
    const dy = cursorY - buttonCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < MAGNETIC_DISTANCE && distance > 0) {
      const force = (1 - distance / MAGNETIC_DISTANCE) * MAGNETIC_STRENGTH;
      const newX = dx * force;
      const newY = dy * force;
      setOffset(withSpring({ x: newX, y: newY }));
    } else {
      setOffset(withSpring({ x: 0, y: 0 }));
    }
  });

  return (
    <animate.div
      ref={buttonRef}
      className="magnetic-button"
      style={{
        translateX: offset.x,
        translateY: offset.y,
      }}
    >
      {label}
    </animate.div>
  );
};

export function Cursor() {
  const ref = useRef(null);
  const buttonRef = useRef(null);

  return (
    <div ref={ref} className="ctr">
      <div className="magnetic-buttons-container">
        <MagneticButton
          containerRef={ref}
          label="Hover Me"
          buttonRef={buttonRef}
        />
      </div>
    </div>
  );
}
