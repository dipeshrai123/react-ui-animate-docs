import React, { useRef } from 'react';
import { animate, useValue, useMove, withSpring } from 'react-ui-animate';

export default function AnimatedCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [props, setProps] = useValue({ rotateX: 0, rotateY: 0, scale: 1 });

  useMove(ref, ({ offset }) => {
    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();
    const dx = offset.x - width / 2;
    const dy = offset.y - height / 2;

    setProps(
      withSpring({
        rotateX: -dy / 20,
        rotateY: dx / 20,
        scale: 1.1,
      })
    );
  });

  return (
    <animate.div
      onMouseLeave={() =>
        setProps(withSpring({ rotateX: 0, rotateY: 0, scale: 1 }))
      }
      ref={ref}
      style={{
        perspective: '600px',
        scale: props.scale,
        rotateX: props.rotateX,
        rotateY: props.rotateY,
      }}
    >
      {children}
    </animate.div>
  );
}
