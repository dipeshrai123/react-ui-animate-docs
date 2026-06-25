import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { MdContentCopy, MdCheckCircle, MdArrowForward } from 'react-icons/md';
import {
  FiFeather,
  FiZap,
  FiMove,
  FiLayers,
  FiCode,
  FiPackage,
} from 'react-icons/fi';
import { FaGithub, FaDiscord, FaNpm } from 'react-icons/fa';
import { animate, useValue, withSpring, withTiming } from 'react-ui-animate';

import styles from './index.module.css';
import HomeCard from '../components/HomeCard';

const GITHUB_URL = 'https://github.com/dipeshrai123/react-ui-animate';
const NPM_URL = 'https://www.npmjs.com/package/react-ui-animate';
const DISCORD_URL = 'https://discord.gg/qPqsD8pv';
const INSTALL_COMMAND = 'npm i react-ui-animate';

/** Mount reveal: fade + rise driven by the library. */
function Reveal({ children, delay = 0, y = 14, className }) {
  const [opacity, setOpacity] = useValue(0);
  const [translateY, setTranslateY] = useValue(y);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(withTiming(1, { duration: 500 }));
      setTranslateY(withSpring(0, { damping: 20 }));
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, setOpacity, setTranslateY]);

  return (
    <animate.div className={className} style={{ opacity, translateY }}>
      {children}
    </animate.div>
  );
}

/** Scroll reveal: animates the first time it enters the viewport. */
function ViewReveal({ children, className, y = 24 }) {
  return (
    <animate.div
      className={className}
      style={{ opacity: 0, translateY: y }}
      view={{
        opacity: withTiming(1, { duration: 600 }),
        translateY: withSpring(0, { damping: 20 }),
      }}
      viewOptions={{ threshold: 0.15, once: true }}
    >
      {children}
    </animate.div>
  );
}

function AnimatedButton({ children, to, href, variant = 'primary' }) {
  const className = clsx(
    styles.button,
    variant === 'primary' ? styles.buttonPrimary : styles.buttonGhost
  );
  const motion = {
    className,
    hover: { translateY: withSpring(-2) },
    press: { scale: withSpring(0.97) },
  };

  if (href) {
    return (
      <animate.a
        {...motion}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </animate.a>
    );
  }

  return (
    <Link to={to} className={styles.buttonLink}>
      <animate.span {...motion}>{children}</animate.span>
    </Link>
  );
}

function InstallCommand({ tone = 'dark' }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <animate.button
      type="button"
      onClick={handleCopy}
      className={clsx(styles.install, tone === 'light' && styles.installLight)}
      aria-label="Copy install command"
      hover={{ translateY: withSpring(-2) }}
      press={{ scale: withSpring(0.99) }}
    >
      <span className={styles.installPrompt}>$</span>
      <code className={styles.installCode}>{INSTALL_COMMAND}</code>
      <span className={styles.installCopy}>
        {copied ? (
          <MdCheckCircle className={styles.installCopyIcon} />
        ) : (
          <MdContentCopy className={styles.installCopyIcon} />
        )}
      </span>
    </animate.button>
  );
}

const STATS = ['v5.3.0', 'TypeScript', 'MIT licensed', 'Zero dependencies'];

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroMesh} aria-hidden="true" />
      <div className={styles.heroGrain} aria-hidden="true" />
      <div className={styles.heroFade} aria-hidden="true" />

      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroCopy}>
          <Reveal delay={0}>
            <Link to="/docs/getting-started" className={styles.badge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeLabel}>React UI Animate 5.3</span>
              <MdArrowForward className={styles.badgeArrow} />
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <h1 className={styles.heroTitle}>
              Fluid motion,
              <br />
              <span className={styles.heroTitleAccent}>built for React.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className={styles.heroLede}>
              A lightweight, declarative library for springs, gestures, and exit
              animations. Silky 60fps motion with an API you&apos;ll actually
              enjoy writing.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className={styles.heroActions}>
              <AnimatedButton to="/docs/getting-started" variant="primary">
                Get Started
                <MdArrowForward className={styles.buttonIcon} />
              </AnimatedButton>
              <AnimatedButton href={GITHUB_URL} variant="ghost">
                <FaGithub className={styles.buttonIconLeft} />
                Star on GitHub
              </AnimatedButton>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <InstallCommand />
          </Reveal>

          <Reveal delay={400}>
            <ul className={styles.stats}>
              {STATS.map((stat) => (
                <li key={stat} className={styles.stat}>
                  {stat}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={220} className={styles.heroDemo}>
          <BrowserOnly
            fallback={<div className={styles.demoSkeleton} aria-hidden="true" />}
          >
            {() => {
              const HeroDemo = require('../components/HeroDemo').default;
              return <HeroDemo />;
            }}
          </BrowserOnly>
        </Reveal>
      </div>
    </header>
  );
}

const FEATURES = [
  {
    icon: FiFeather,
    title: 'Declarative API',
    description:
      'Animate with props like animate, hover, press, and view. No imperative timelines or boilerplate.',
  },
  {
    icon: FiZap,
    title: '60fps Performance',
    description:
      'Values update outside React’s render cycle, so motion stays smooth without triggering re-renders.',
  },
  {
    icon: FiMove,
    title: 'Gestures Built-in',
    description:
      'First-class hooks for drag, move, scroll, and wheel let you craft rich, tactile interactions.',
  },
  {
    icon: FiLayers,
    title: 'Presence & Exit',
    description:
      'Animate components as they leave the DOM. Built for modals, tooltips, and dropdowns.',
  },
  {
    icon: FiCode,
    title: 'TypeScript First',
    description:
      'Fully typed components, hooks, and utilities with autocomplete that guides you as you build.',
  },
  {
    icon: FiPackage,
    title: 'Tiny & Tree-shakeable',
    description:
      'Import only what you use. Side-effect free and optimized for modern bundlers.',
  },
];

function FeatureCard({ feature }) {
  const Icon = feature.icon;
  return (
    <animate.div
      className={styles.featureCard}
      style={{ opacity: 0, translateY: 20 }}
      view={{
        opacity: withTiming(1, { duration: 500 }),
        translateY: withSpring(0, { damping: 20 }),
      }}
      viewOptions={{ threshold: 0.1, once: true }}
      hover={{ translateY: withSpring(-4) }}
    >
      <span className={styles.featureIcon}>
        <Icon />
      </span>
      <h3 className={styles.featureTitle}>{feature.title}</h3>
      <p className={styles.featureDescription}>{feature.description}</p>
    </animate.div>
  );
}

function Features() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ViewReveal className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Why React UI Animate</span>
          <h2 className={styles.sectionTitle}>
            A focused toolkit for motion
          </h2>
          <p className={styles.sectionLede}>
            Powerful enough for complex interactions, simple enough to learn in
            an afternoon.
          </p>
        </ViewReveal>

        <div className={styles.featureGrid}>
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

const EXAMPLES = [
  { title: 'Sequence Animations', key: 'Sequence' },
  { title: 'Draggable Elements', key: 'Draggable' },
  { title: 'Scroll Progress', key: 'Scroll' },
  { title: 'Magnetic Cursor', key: 'Cursor' },
  { title: 'Presence & Exit', key: 'MountUnmount' },
  { title: 'Interactive Card', key: 'Interaction' },
];

function Examples() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <ViewReveal className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Live examples</span>
          <h2 className={styles.sectionTitle}>See it in action</h2>
          <p className={styles.sectionLede}>
            Interactive demos built with React UI Animate. Hover, drag, and
            scroll to feel how the API works.
          </p>
        </ViewReveal>

        <div className={styles.exampleGrid}>
          {EXAMPLES.map((example) => (
            <HomeCard key={example.key} title={example.title}>
              <BrowserOnly>
                {() => {
                  const Component = require('../components/homeExamples')[
                    example.key
                  ];
                  return <Component />;
                }}
              </BrowserOnly>
            </HomeCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ViewReveal className={styles.cta}>
          <div className={styles.ctaGlow} aria-hidden="true" />
          <h2 className={styles.ctaTitle}>Start animating in minutes</h2>
          <p className={styles.ctaLede}>
            Install React UI Animate and ship your first animation today.
          </p>
          <div className={styles.ctaActions}>
            <InstallCommand />
            <AnimatedButton to="/docs/getting-started" variant="primary">
              Read the Docs
              <MdArrowForward className={styles.buttonIcon} />
            </AnimatedButton>
          </div>
          <div className={styles.ctaLinks}>
            <a
              className={styles.ctaLink}
              href={NPM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaNpm className={styles.ctaLinkIcon} />
              npm
            </a>
            <a
              className={styles.ctaLink}
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.ctaLinkIcon} />
              GitHub
            </a>
            <a
              className={styles.ctaLink}
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className={styles.ctaLinkIcon} />
              Discord
            </a>
          </div>
        </ViewReveal>
      </div>
    </section>
  );
}

function useNavbarOverlay() {
  useEffect(() => {
    const { body } = document;
    body.classList.add('nav-overlay');

    const onScroll = () => {
      body.classList.toggle('nav-scrolled', window.scrollY > 16);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      body.classList.remove('nav-overlay', 'nav-scrolled');
    };
  }, []);
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  useNavbarOverlay();
  return (
    <Layout
      title={`${siteConfig.title} · Fluid motion for React`}
      description="A lightweight, declarative animation and gesture library for React. Build springs, sequences, drag interactions, and exit animations with a natural API."
    >
      <HeroSection />
      <main>
        <Features />
        <Examples />
        <CallToAction />
      </main>
    </Layout>
  );
}
