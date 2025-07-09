import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  animate,
  Easing,
  Mount,
  withSpring,
  withTiming,
} from 'react-ui-animate';
import { FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
import { MdOutlineError } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

import './Toast.css';

const ICONS = {
  success: <FaCheckCircle size={24} />,
  info: <FaInfoCircle size={24} />,
  warning: <MdOutlineError size={28} />,
  error: <MdOutlineError size={28} />,
};

const ToastItem = ({ id, text, type, onEnd }) => {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<any>();

  useLayoutEffect(() => {
    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <Mount
      state={visible}
      from={{ height: 0, opacity: 0 }}
      enter={withSpring({ height: 60, opacity: 1 }, { damping: 12 })}
      exit={withTiming(
        { height: 0, opacity: 0 },
        { easing: Easing.inOut(Easing.ease), onComplete: () => onEnd(id) }
      )}
    >
      {({ height, opacity }) => (
        <animate.div
          className={`toast ${type}`}
          style={{
            position: 'relative',
            width: 320,
            borderRadius: 8,
            height,
            opacity,
            scale: opacity.to([0, 1], [0.5, 1]),
            overflow: 'hidden',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          <div>{ICONS[type]}</div>
          <div style={{ color: 'var(--ifm-text-color)', flex: 1 }}>{text}</div>
          <div
            onClick={() => {
              if (timerRef.current) {
                clearTimeout(timerRef.current);
                setVisible(false);
              }
            }}
            style={{ paddingRight: 8, color: '#999', cursor: 'pointer' }}
          >
            <IoClose size={20} />
          </div>
        </animate.div>
      )}
    </Mount>
  );
};

let uniqueId = 0;

const TOAST_TEMPLATES = [
  { text: 'Successful message', type: 'success' },
  { text: 'Informational message', type: 'info' },
  { text: 'Warning message', type: 'warning' },
  { text: 'Error message', type: 'error' },
];

export function Toast() {
  const [elements, setElements] = useState<
    { id: number; text: string; type: string }[]
  >([]);

  const generateToast = () => {
    const randomIndex = Math.floor(Math.random() * TOAST_TEMPLATES.length);
    const { text, type } = TOAST_TEMPLATES[randomIndex];
    setElements((prev) => [...prev, { id: uniqueId++, text, type }]);
  };

  return (
    <>
      <button onClick={generateToast} className="btn">
        Toast Me
      </button>

      <div
        style={{
          position: 'fixed',
          right: 10,
          bottom: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          zIndex: 1000,
        }}
      >
        {elements.map(({ id, text, type }) => {
          return (
            <ToastItem
              key={id}
              id={id}
              onEnd={(id) =>
                setElements((els) => els.filter((e) => e.id !== id))
              }
              text={text}
              type={type}
            />
          );
        })}
      </div>
    </>
  );
}
