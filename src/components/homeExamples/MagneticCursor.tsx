import React, { useRef } from 'react';
import { useValue, animate, useMove, withSpring } from 'react-ui-animate';

import './MagneticCursor.css';

const CURSOR_SIZE = 8;

const MagneticCursor = ({ containerRef }: { containerRef: any }) => {
  const [position, setPosition] = useValue({
    x: 0,
    y: 0,
    width: CURSOR_SIZE,
    height: CURSOR_SIZE,
  });

  useMove(containerRef, ({ event }) => {
    const containerRect = containerRef.current!.getBoundingClientRect();
    const element = document.elementFromPoint(event.clientX, event.clientY);
    let x: number, y: number, width: number, height: number;

    if (element?.closest('.target')) {
      const {
        left,
        top,
        width: w,
        height: h,
      } = element.getBoundingClientRect();
      x = left - containerRect.left;
      y = top - containerRect.top;
      width = w;
      height = h;
    } else {
      x = event.clientX - containerRect.left - CURSOR_SIZE / 2;
      y = event.clientY - containerRect.top - CURSOR_SIZE / 2;
      width = CURSOR_SIZE;
      height = CURSOR_SIZE;
    }

    setPosition(withSpring({ x, y, width, height }));
  });

  return (
    <animate.div
      style={{
        userSelect: 'none',
        pointerEvents: 'none',
        width: position.width,
        height: position.height,
        border: '2px solid #3399ff',
        position: 'absolute',
        left: position.x,
        top: position.y,
        borderRadius: 4,
      }}
    />
  );
};

export function Cursor() {
  const ref = useRef(null);
  return (
    <div ref={ref} className="ctr">
      <div className="target">Target Button</div>
      <MagneticCursor containerRef={ref} />
    </div>
  );
}
