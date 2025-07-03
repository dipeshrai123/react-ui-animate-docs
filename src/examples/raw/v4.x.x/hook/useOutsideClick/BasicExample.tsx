import React, { useRef, useState } from 'react';
import { useOutsideClick } from 'react-ui-animate';

export default function BasicExample() {
  const [isOpen, setOpen] = useState(true);
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setOpen(false);
  });
  return (
    <>
      <button onClick={() => setOpen(true)}>Reset</button>

      <div
        ref={ref}
        style={{
          height: 70,
          width: 70,
        }}
      >
        {isOpen && (
          <div
            style={{
              width: 70,
              height: 70,
              backgroundColor: 'teal',
              borderRadius: 4,
              pointerEvents: 'none',
              color: 'white',
            }}
          >
            Open
          </div>
        )}
      </div>
    </>
  );
}
