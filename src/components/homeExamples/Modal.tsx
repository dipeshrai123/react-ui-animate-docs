import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import {
  animate,
  Presence,
  useOutsideClick,
  withSpring,
  withTiming,
} from 'react-ui-animate';

const Stage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
`;

const Trigger = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: #e5e7eb;
  cursor: pointer;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`;

const Backdrop = styled(animate.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #08090d;
`;

const Dialog = styled(animate.div)`
  position: relative;
  width: 88%;
  max-width: 320px;
  padding: 22px 20px 20px;
  border-radius: 12px;
  background: #15171e;
  border: 1px solid #2a2e38;
  font-family: inherit;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  color: #9ca3af;
  cursor: pointer;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`;

const DialogTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: #e5e7eb;
`;

const DialogText = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  line-height: 1.55;
  color: #9ca3af;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const Ghost = styled.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #e5e7eb;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`;

const Solid = styled.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #eff6ff;
  background: #1e3a5f;
  border: 1px solid #3b5a80;
`;

function Dialog_({ onClose }: { onClose: () => void }) {
  const ref = useRef(null);
  useOutsideClick(ref, onClose);

  return (
    <Backdrop
      style={{ opacity: 0 }}
      animate={{ opacity: withTiming(1, { duration: 200 }) }}
      exit={{ opacity: withTiming(0, { duration: 180 }) }}
    >
      <Dialog
        ref={ref}
        style={{ opacity: 0, scale: 0.86, translateY: 16 }}
        animate={{
          opacity: withTiming(1, { duration: 180 }),
          scale: withSpring(1, { damping: 18, stiffness: 240 }),
          translateY: withSpring(0, { damping: 18, stiffness: 240 }),
        }}
        exit={{
          opacity: withTiming(0, { duration: 160 }),
          scale: withSpring(0.86, { damping: 18, stiffness: 240 }),
          translateY: withSpring(16, { damping: 18, stiffness: 240 }),
        }}
      >
        <CloseBtn onClick={onClose} aria-label="Close">
          <MdClose />
        </CloseBtn>
        <DialogTitle>Delete project?</DialogTitle>
        <DialogText>
          This will permanently remove the project and all of its files. This
          action can&apos;t be undone.
        </DialogText>
        <Actions>
          <Ghost onClick={onClose}>Cancel</Ghost>
          <Solid onClick={onClose}>Confirm</Solid>
        </Actions>
      </Dialog>
    </Backdrop>
  );
}

export function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Stage>
      <Trigger onClick={() => setOpen(true)}>Open dialog</Trigger>
      <Presence>
        {open && <Dialog_ key="dialog" onClose={() => setOpen(false)} />}
      </Presence>
    </Stage>
  );
}
