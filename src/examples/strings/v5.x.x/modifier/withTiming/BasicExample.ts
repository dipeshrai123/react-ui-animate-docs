const modifier_withTiming_BasicExample = `import React from 'react';
import { useValue, animate, withTiming } from 'react-ui-animate';

export default function BasicExample() {
  const [obj, setObj] = useValue({ x: 0, y: 0, width: 100, height: 100 });

  return (
    <>
      <button
        onClick={() =>
          setObj(
            withTiming(
              { x: 0, y: 0, width: 300, height: 100 },
              {
                duration: 400,
                onStart: () => console.log('START'),
                onComplete: () => console.log('Animation complete'),
              }
            )
          )
        }
      >
        Start
      </button>
      <button onClick={() => setObj({ x: 0, y: 0, width: 100, height: 100 })}>
        Reset
      </button>

      <animate.div
        style={{
          width: obj.width,
          height: 100,
          backgroundColor: 'teal',
          left: 0,
          top: 0,
          translateX: obj.x,
          translateY: obj.y,
          borderRadius: 4,
        }}
      />
    </>
  );
}
`;
export default modifier_withTiming_BasicExample;
