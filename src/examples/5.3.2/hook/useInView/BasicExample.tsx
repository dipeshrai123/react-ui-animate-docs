import React, { useRef, useEffect } from 'react';
import { useInView, useValue, animate, withSpring } from 'react-ui-animate';

export default function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const [opacity, setOpacity] = useValue(0);
  const [translateY, setTranslateY] = useValue(50);
  const [scale, setScale] = useValue(0.8);

  useEffect(() => {
    if (isInView) {
      setOpacity(withSpring(1));
      setTranslateY(withSpring(0));
      setScale(withSpring(1));
    } else {
      setOpacity(withSpring(0));
      setTranslateY(withSpring(50));
      setScale(withSpring(0.8));
    }
  }, [isInView]);

  return (
    <div style={{ height: 2000 }}>
      <div style={{ padding: 40, height: 800 }}>
        <h1>Scroll down to see the animation</h1>
        <p>The box below will animate when it enters the viewport</p>
      </div>

      <animate.div
        ref={ref}
        style={{
          padding: 40,
          background: isInView ? '#7d93b0' : '#2a2e38',
          borderRadius: 8,
          opacity,
          translateY,
          scale,
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          transition: 'background 0.3s',
        }}
      >
        <h2>{isInView ? 'I am in view!' : 'Scroll to see me'}</h2>
        <p>Status: {isInView ? 'Visible' : 'Not Visible'}</p>
      </animate.div>

      <div style={{ height: 800, padding: 40 }}>
        <p>Keep scrolling...</p>
      </div>
    </div>
  );
}

