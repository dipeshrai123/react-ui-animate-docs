import React, { useRef } from 'react';
import { useOutsideClick } from 'react-ui-animate';

export default function App() {
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    alert('You clicked outside box');
  });

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            padding: 100,
            position: 'absolute',
            left: 0,
            top: 0,
            color: '#a1a1a1',
          }}
        >
          CLICK OUTSIDE
        </div>

        <div
          ref={ref}
          style={{
            width: 200,
            height: 200,
            border: '1px solid #2a2e38',
            borderRadius: 8,
            backgroundColor: '#1c1f28',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a1a1a1',
            zIndex: 1,
          }}
        >
          CLICK INSIDE ME
        </div>
      </div>
    </>
  );
}
