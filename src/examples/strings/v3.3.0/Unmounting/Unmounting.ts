const Unmounting_Unmounting = `import React, { useState } from 'react';
import { animate, useMountedValue } from 'react-ui-animate';

const Unmounting = () => {
  const [visible, setVisible] = useState(true);

  const open = useMountedValue(visible, {
    from: 0,
    enter: 1,
    exit: 0,
  });

  return (
    <div style={{ padding: 20, marginBottom: 20 }}>
      {open(
        (animation, mounted) =>
          mounted && (
            <animate.div
              style={{
                width: 100,
                height: 100,
                backgroundColor: '#31915f',
                borderRadius: 4,
                opacity: animation.value,
                marginBottom: 10,
              }}
            />
          )
      )}

      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default Unmounting;
`;
export default Unmounting_Unmounting;
