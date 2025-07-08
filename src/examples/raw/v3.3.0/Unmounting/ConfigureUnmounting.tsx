import React, { useState } from 'react';
import {
  animate,
  useMountedValue,
  interpolate,
  AnimationConfigUtils,
} from 'react-ui-animate';

const ConfigureUnmounting = () => {
  const [visible, setVisible] = useState(false);

  const open = useMountedValue(visible, {
    from: 0,
    enter: 1,
    exit: 0,
    config: AnimationConfigUtils.BOUNCE,
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
                backgroundColor: '#3399ff',
                borderRadius: 4,
                opacity: animation.value,
                marginBottom: 10,
                position: 'relative',
                left: interpolate(animation.value, [0, 1], [0, 200]),
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

export default ConfigureUnmounting;
