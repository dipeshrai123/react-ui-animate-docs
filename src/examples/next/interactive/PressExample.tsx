import React from 'react';
import { animate, withSpring, recipes } from 'react-ui-animate';

export default function App() {
  return (
    <div className="container">
      <animate.button
        className="button buttonPrimary"
        hover={{ scale: withSpring(1.06) }}
        press={{ scale: withSpring(0.94) }}
      >
        Hover + press
      </animate.button>
      <animate.button
        className="button buttonPrimary"
        press={recipes.pressScale}
        style={{ marginLeft: 8 }}
      >
        Press recipe
      </animate.button>
    </div>
  );
}
