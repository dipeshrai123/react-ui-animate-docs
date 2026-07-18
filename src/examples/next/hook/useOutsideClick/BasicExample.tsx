import React, { useRef, useState } from 'react';
import { useOutsideClick } from 'react-ui-animate';

export default function App() {
  const ref = useRef(null);
  const [clicked, setClicked] = useState<'inside' | 'outside' | null>(null);

  useOutsideClick(ref, () => {
    setClicked('outside');
  });

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 260,
      }}
    >
      <p
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          margin: 0,
          color: '#a1a1a1',
          fontSize: 13,
        }}
      >
        {clicked === 'outside'
          ? 'Clicked outside — box would close'
          : clicked === 'inside'
          ? 'Clicked inside — box stays open'
          : 'Click inside or outside the box'}
      </p>

      <div
        ref={ref}
        onClick={() => setClicked('inside')}
        style={{
          width: 200,
          height: 120,
          border: '1px solid #2a2e38',
          borderRadius: 8,
          backgroundColor: '#1c1f28',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#a1a1a1',
        }}
      >
        CLICK INSIDE ME
      </div>
    </div>
  );
}
