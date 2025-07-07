import React from 'react';
import { animate, Mount } from 'react-ui-animate';

const App: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Mount state={open}>
        {(animation) => (
          <animate.div
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'teal',
              opacity: animation,
              borderRadius: 4,
            }}
          />
        )}
      </Mount>

      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        ANIMATE
      </button>
    </>
  );
};

export default App;
