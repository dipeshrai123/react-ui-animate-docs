import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { MdContentCopy, MdCheckCircle, MdArrowForward } from 'react-icons/md';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {
  animate,
  useValue,
  useInView,
  withSpring,
  withTiming,
  withDelay,
  withLoop,
  withSequence,
} from 'react-ui-animate';

import styles from './index.module.css';
import HomeCard from '../components/HomeCard';

function AnimatedButton({ children, to, className, delay = 0 }) {
  const [opacity, setOpacity] = useValue(0);
  const [translateY, setTranslateY] = useValue(10);
  const [scale, setScale] = useValue(0.9);

  React.useEffect(() => {
    setTimeout(() => {
      setOpacity(withTiming(1, { duration: 600 }));
      setTranslateY(withSpring(0));
      setScale(withSpring(1));
    }, delay);
  }, [delay]);

  return (
    <animate.div
      style={{
        opacity,
        translateY,
        scale,
      }}
      hover={{
        scale: withSpring(1.05),
        translateY: withSpring(-2),
      }}
      press={{ scale: withSpring(0.95) }}
    >
      <Link className={className} to={to}>
        {children}
      </Link>
    </animate.div>
  );
}

function AnimatedSection({ children }) {
  return (
    <animate.div
      style={{
        opacity: 0,
        translateY: 30,
      }}
      view={{
        opacity: 1,
        translateY: 0,
      }}
    >
      {children}
    </animate.div>
  );
}

function Community() {
  return (
    <div className={styles?.communityLinks}>
      <animate.a
        href="https://discord.gg/qPqsD8pv"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.communityLink}
        hover={{
          translateY: withSpring(-2),
          scale: withSpring(1.02),
        }}
      >
        <svg
          fill="white"
          stroke="white"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
        >
          <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
        </svg>
        <span>Join Discord</span>
      </animate.a>
      <animate.a
        href="https://github.com/dipeshrai123/react-ui-animate"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.communityLink}
        hover={{
          translateY: withSpring(-2),
          scale: withSpring(1.02),
        }}
      >
        <svg
          fill="white"
          stroke="white"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
        </svg>
        <span>GitHub</span>
      </animate.a>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [copied, setCopied] = React.useState(false);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const installRef = useRef(null);

  const [badgeOpacity, setBadgeOpacity] = useValue(0);
  const [badgeY, setBadgeY] = useValue(-10);
  const [titleOpacity, setTitleOpacity] = useValue(0);
  const [titleY, setTitleY] = useValue(20);
  const [subtitleOpacity, setSubtitleOpacity] = useValue(0);
  const [subtitleY, setSubtitleY] = useValue(20);
  const [installOpacity, setInstallOpacity] = useValue(0);
  const [installY, setInstallY] = useValue(20);
  const [dotScale, setDotScale] = useValue(1);
  const [dotOpacity, setDotOpacity] = useValue(1);
  const [bgPosition, setBgPosition] = useValue(0);
  const [orb1X, setOrb1X] = useValue(0);
  const [orb1Y, setOrb1Y] = useValue(0);
  const [orb2X, setOrb2X] = useValue(0);
  const [orb2Y, setOrb2Y] = useValue(0);
  const [orb3X, setOrb3X] = useValue(0);
  const [orb3Y, setOrb3Y] = useValue(0);
  const headerRef = useRef(null);

  useEffect(() => {
    // Animate in on mount
    setBadgeOpacity(withTiming(1, { duration: 600 }));
    setBadgeY(withSpring(0));

    setTimeout(() => {
      setTitleOpacity(withTiming(1, { duration: 800 }));
      setTitleY(withSpring(0));
    }, 100);

    setTimeout(() => {
      setSubtitleOpacity(withTiming(1, { duration: 800 }));
      setSubtitleY(withSpring(0));
    }, 200);

    setTimeout(() => {
      setInstallOpacity(withTiming(1, { duration: 600 }));
      setInstallY(withSpring(0));
    }, 600);

    // Animate badge dot pulse
    setDotScale(
      withLoop(
        withSequence([
          withTiming(1.2, { duration: 1200 }),
          withTiming(1, { duration: 1200 }),
        ]),
        -1 // Infinite
      )
    );
    setDotOpacity(
      withLoop(
        withSequence([
          withTiming(0.6, { duration: 1200 }),
          withTiming(1, { duration: 1200 }),
        ]),
        -1 // Infinite
      )
    );

    // Animate gradient background position
    setBgPosition(
      withLoop(
        withSequence([
          withTiming(100, { duration: 8000 }),
          withTiming(0, { duration: 8000 }),
        ]),
        -1 // Infinite
      )
    );

    // Animate floating orbs
    setOrb1X(
      withLoop(
        withSequence([
          withTiming(30, { duration: 4000 }),
          withTiming(0, { duration: 4000 }),
        ]),
        -1
      )
    );
    setOrb1Y(
      withLoop(
        withSequence([
          withTiming(20, { duration: 5000 }),
          withTiming(0, { duration: 5000 }),
        ]),
        -1
      )
    );
    setOrb2X(
      withLoop(
        withSequence([
          withTiming(-25, { duration: 4500 }),
          withTiming(0, { duration: 4500 }),
        ]),
        -1
      )
    );
    setOrb2Y(
      withLoop(
        withSequence([
          withTiming(-15, { duration: 5500 }),
          withTiming(0, { duration: 5500 }),
        ]),
        -1
      )
    );
    setOrb3X(
      withLoop(
        withSequence([
          withTiming(20, { duration: 6000 }),
          withTiming(0, { duration: 6000 }),
        ]),
        -1
      )
    );
    setOrb3Y(
      withLoop(
        withSequence([
          withTiming(-25, { duration: 4800 }),
          withTiming(0, { duration: 4800 }),
        ]),
        -1
      )
    );
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm i react-ui-animate@5.3.0-next.1');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <animate.header
      ref={headerRef}
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundPosition: bgPosition.to((v) => `${v}% 50%`),
      }}
    >
      {/* Animated background orbs */}
      <animate.div
        className={styles.orb1}
        style={{
          translateX: orb1X.to((v) => `${v}px`),
          translateY: orb1Y.to((v) => `${v}px`),
        }}
      />
      <animate.div
        className={styles.orb2}
        style={{
          translateX: orb2X.to((v) => `${v}px`),
          translateY: orb2Y.to((v) => `${v}px`),
        }}
      />
      <animate.div
        className={styles.orb3}
        style={{
          translateX: orb3X.to((v) => `${v}px`),
          translateY: orb3Y.to((v) => `${v}px`),
        }}
      />

      <div className="container">
        <div className={styles.heroContent}>
          <animate.div
            ref={badgeRef}
            style={{
              opacity: badgeOpacity,
              translateY: badgeY,
            }}
          >
            <div className={styles.badge}>
              <span className={styles.badgeText}>v5.2.0</span>
              <animate.span
                className={styles.badgeDot}
                style={{
                  scale: dotScale,
                  opacity: dotOpacity,
                }}
              />
              <span>Latest</span>
            </div>
          </animate.div>

          <animate.h1 ref={titleRef} className="hero__title">
            {siteConfig.title}
          </animate.h1>

          <animate.p
            ref={subtitleRef}
            className="hero__subtitle"
            style={{
              opacity: subtitleOpacity,
              translateY: subtitleY,
            }}
          >
            Create smooth, performant animations and interactive gestures in
            React with a simple, declarative API. Perfect for beginners and
            power users alike.
          </animate.p>

          <div className={styles.buttons}>
            <AnimatedButton
              to="/docs/getStarted"
              className={styles.primaryButton}
              delay={400}
            >
              Get Started
              <MdArrowForward className={styles.buttonIconRight} />
            </AnimatedButton>
            <AnimatedButton
              to="/docs/concept/animate"
              className={styles.secondaryButton}
              delay={500}
            >
              View Docs
            </AnimatedButton>
          </div>

          <Community />
        </div>
      </div>
      <div className={styles.heroGradient}></div>
      <div className={styles.heroPattern}></div>
    </animate.header>
  );
}

function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Simple & Intuitive',
      description:
        'Declarative API that feels natural. Animate with props, not complex configurations.',
    },
    {
      icon: '🎨',
      title: 'High Performance',
      description:
        'Optimized animations that run at 60fps. No re-renders, pure performance.',
    },
    {
      icon: '🔥',
      title: 'Interactive Gestures',
      description:
        'Drag, scroll, hover, press—handle all user interactions with ease.',
    },
    {
      icon: '✨',
      title: 'TypeScript Ready',
      description:
        'Full TypeScript support with excellent autocomplete and type safety.',
    },
  ];

  return (
    <section className={styles.features}>
      <AnimatedSection delay={0}>
        <div className={styles.featuresHeader}>
          <h2>Why Choose React UI Animate?</h2>
          <p>
            Everything you need to create beautiful, performant animations in
            your React applications
          </p>
        </div>
      </AnimatedSection>
      <div className={styles.featureList}>
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  return (
    <animate.div
      className={styles.featureCard}
      style={{
        opacity: 0,
        translateY: 30,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        scale: 1,
      }}
      hover={{
        scale: withSpring(1.02),
        translateY: withSpring(-4),
      }}
    >
      <div className={styles.featureIcon}>{feature.icon}</div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </animate.div>
  );
}

function QuickStart() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm i react-ui-animate@5.2.0');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.quickStart}>
      <AnimatedSection delay={0}>
        <div className={styles.quickStartContent}>
          <h2>Ready to Get Started?</h2>
          <p>
            Install React UI Animate in seconds and start building beautiful
            animations
          </p>
          <animate.div
            className={styles.installCommand}
            hover={{
              translateY: withSpring(-2),
              scale: withSpring(1.01),
            }}
          >
            <div className={styles.installCommandInner}>
              <code className={styles.installCode}>
                npm i react-ui-animate@5.2.0
              </code>
              <animate.button
                onClick={handleCopy}
                className={styles.copyInstallButton}
                aria-label="Copy installation command"
                hover={{
                  scale: withSpring(1.1),
                }}
                press={{
                  scale: withSpring(0.95),
                }}
              >
                {copied ? (
                  <MdCheckCircle className={styles.copyIcon} />
                ) : (
                  <MdContentCopy className={styles.copyIcon} />
                )}
              </animate.button>
            </div>
            {copied && (
              <span className={styles.copiedMessage}>Copied to clipboard!</span>
            )}
          </animate.div>
          <AnimatedButton
            to="/docs/getStarted"
            className={styles.learnMoreButton}
            delay={200}
          >
            View Documentation
            <MdArrowForward className={styles.buttonIconRight} />
          </AnimatedButton>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Smooth React Animations Made Simple`}
      description="Create smooth, performant animations and interactive gestures in React with a simple, declarative API. Perfect for beginners and power users alike."
    >
      <HomepageHeader />
      <Features />
      <QuickStart />

      <section className={styles.examples}>
        <AnimatedSection delay={0}>
          <div className={styles.examplesHeader}>
            <h2>See It In Action</h2>
            <p>
              Explore interactive examples showcasing the power and simplicity
              of React UI Animate
            </p>
          </div>
        </AnimatedSection>

        <div className="homecards-container">
          <HomeCard title="Sequence Animations">
            <BrowserOnly>
              {() => {
                const { Sequence } = require('../components/homeExamples');
                return <Sequence />;
              }}
            </BrowserOnly>
          </HomeCard>

          <HomeCard title="Draggable Elements">
            <BrowserOnly>
              {() => {
                const { Draggable } = require('../components/homeExamples');
                return <Draggable />;
              }}
            </BrowserOnly>
          </HomeCard>

          <HomeCard title="Scroll Progress">
            <BrowserOnly>
              {() => {
                const { Scroll } = require('../components/homeExamples');
                return <Scroll />;
              }}
            </BrowserOnly>
          </HomeCard>

          <HomeCard title="Magnetic Cursor">
            <BrowserOnly>
              {() => {
                const { Cursor } = require('../components/homeExamples');
                return <Cursor />;
              }}
            </BrowserOnly>
          </HomeCard>

          <HomeCard title="Presence & Exit">
            <BrowserOnly>
              {() => {
                const { MountUnmount } = require('../components/homeExamples');
                return <MountUnmount />;
              }}
            </BrowserOnly>
          </HomeCard>

          <HomeCard title="Interactive Cards">
            <BrowserOnly>
              {() => {
                const { Interaction } = require('../components/homeExamples');
                return <Interaction />;
              }}
            </BrowserOnly>
          </HomeCard>
        </div>
      </section>
    </Layout>
  );
}
