import React, { useState } from 'react';
import { Reorder } from 'react-ui-animate';

export default function App() {
  const [items, setItems] = useState(['Alpha', 'Bravo', 'Charlie', 'Delta']);

  return (
    <Reorder.Group
      values={items}
      onReorder={setItems}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        width: '100%',
        maxWidth: 260,
        margin: '0 auto',
      }}
    >
      {items.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          style={{
            padding: '12px 16px',
            borderRadius: 8,
            background: '#1e293b',
            color: 'white',
            userSelect: 'none',
          }}
        >
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
