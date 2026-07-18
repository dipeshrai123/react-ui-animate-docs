import React from 'react';
import { animate, withSpring, recipes } from 'react-ui-animate';

export default function App() {
  return (
    <div className="container">
      <animate.button
        className="button buttonPrimary"
        hover={{ scale: withSpring(1.08) }}
      >
        Hover me
      </animate.button>
      <animate.button
        className="button buttonPrimary"
        hover={recipes.hoverLift}
        style={{ marginLeft: 8 }}
      >
        Recipe lift
      </animate.button>
    </div>
  );
}
