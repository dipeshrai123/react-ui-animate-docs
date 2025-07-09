import React from 'react';

import './HomeCard.css';

interface HomeCardProps {
  title: string;
  children: React.ReactNode;
}

export default function HomeCard({ title, children }: HomeCardProps) {
  return (
    <div className="home-card">
      {children}

      <div className="home-card-title">{title}</div>
    </div>
  );
}
