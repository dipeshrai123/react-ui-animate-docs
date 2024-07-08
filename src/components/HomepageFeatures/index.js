import React from 'react';
import clsx from 'clsx';
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdDraw } from "react-icons/md";
import { PiHandTapFill } from "react-icons/pi";

import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    icon: <FaHandHoldingHeart size={60} />,
    description: (
      <>
        React UI Animate offers intuitive APIs that simplify implementing
        animations and gestures in your projects.
      </>
    ),
  },
  {
    title: 'Animate Anything',
    icon: <MdDraw size={60} />,
    description: (
      <>
        With React UI Animate, you can create beautiful animations for any
        element effortlessly.
      </>
    ),
  },
  {
    title: 'Engage with Interactive Elements',
    icon: <PiHandTapFill size={60} />,
    description: (
      <>
        React UI Animate provides a variety of APIs to easily implement complex
        gestures, enhancing user interaction.
      </>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        {icon}
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
