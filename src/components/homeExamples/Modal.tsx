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
  padding: 8px 14px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

const Backdrop = styled(animate.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
`;

const Dialog = styled(animate.div)`
  position: relative;
  width: 86%;
  max-width: 260px;
  padding: 20px 18px 18px;
  border-radius: 12px;
  background: #12141a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-family: inherit;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  color: rgba(226, 232, 240, 0.7);
  cursor: pointer;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const DialogTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
  color: #f5f7ff;
`;

const DialogText = styled.p`
  margin: 0 0 18px;
  font-size: 13px;
  line-height: 1.5;
  color: rgba(226, 232, 240, 0.65);
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const Ghost = styled.button`
  flex: 1;
  padding: 8px 0;
  border-radius: 9px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: #e6e9f5;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
`;

const Solid = styled.button`
  flex: 1;
  padding: 8px 0;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 550;
  cursor: pointer;
  color: #eff6ff;
  background: rgba(96, 165, 250, 0.18);
  border: 1px solid rgba(96, 165, 250, 0.28);
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
