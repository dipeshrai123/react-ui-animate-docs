import React from 'react';

export default function AnimateColor() {
  return <div>AnimateColor</div>;
}

// import React from 'react';
// import { useValue, animate, withTiming } from 'react-ui-animate';

// export default function AnimateColor() {
//   const [color, setColor] = useValue('red');
//   return (
//     <>
//       <animate.div
//         style={{ width: '100px', height: '100px', backgroundColor: color }}
//       />
//       <animate.div
//         style={{ backgroundColor: color /* animated string/color */ }}
//       />
//       <button onClick={() => setColor(withTiming('red', { duration: 500 }))}>
//         Change to Red
//       </button>
//       <button onClick={() => setColor(withTiming('blue', { duration: 500 }))}>
//         Change to Blue
//       </button>
//     </>
//   );
// }
