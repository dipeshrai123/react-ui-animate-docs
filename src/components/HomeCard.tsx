import React from 'react';
import { animate, withSpring } from 'react-ui-animate';

import './HomeCard.css';

interface HomeCardProps {
  title: string;
  children: React.ReactNode;
}

export default function HomeCard({ title, children }: HomeCardProps) {
  return (
    <animate.div className="home-card" hover={{ translateY: withSpring(-4) }}>
      <div className="home-card-content">{children}</div>
      <div className="home-card-title">{title}</div>
    </animate.div>
  );
}
