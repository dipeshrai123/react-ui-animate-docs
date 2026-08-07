import React, { useRef, useState } from 'react';
import { useOutsideClick } from 'react-ui-animate';

const OPTIONS = ['Profile', 'Settings', 'Logout'];

export default function App() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useOutsideClick(ref, () => setOpen(false));

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 200,
        paddingTop: 30,
      }}
    >
      <div ref={ref} style={{ position: 'relative', width: 180 }}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          style={{
            width: '100%',
            padding: '10px 14px',
            borderRadius: 8,
            border: '1px solid #2a2e38',
            backgroundColor: '#1c1f28',
            color: '#e5e7eb',
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Menu {open ? '▲' : '▼'}
        </button>

        {open && (
          <ul
            style={{
              position: 'absolute',
              top: '110%',
              left: 0,
              right: 0,
              margin: 0,
              padding: 6,
              listStyle: 'none',
              borderRadius: 8,
              border: '1px solid #2a2e38',
              backgroundColor: '#1c1f28',
            }}
          >
            {OPTIONS.map((option) => (
              <li
                key={option}
                onClick={() => setOpen(false)}
                style={{
                  padding: '8px 10px',
                  borderRadius: 6,
                  color: '#a1a1a1',
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
