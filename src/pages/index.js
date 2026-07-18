import React, { useCallback, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
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
  FiEye,
  FiRotateCcw,
  FiAlignLeft,
  FiCopy,
  FiCheck,
} from 'react-icons/fi';
import { FaGithub, FaDiscord, FaNpm, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { animate, useValue, withSpring, withTiming } from 'react-ui-animate';

import DragDemoSource from '!!raw-loader!@site/src/components/homeExamples/DragDemo.tsx';
import ToastDemoSource from '!!raw-loader!@site/src/components/homeExamples/Toast.tsx';
import ModalDemoSource from '!!raw-loader!@site/src/components/homeExamples/Modal.tsx';
import AccordionDemoSource from '!!raw-loader!@site/src/components/homeExamples/Accordion.tsx';
import TabsDemoSource from '!!raw-loader!@site/src/components/homeExamples/Tabs.tsx';
import LikeButtonDemoSource from '!!raw-loader!@site/src/components/homeExamples/LikeButton.tsx';
import SwipeListDemoSource from '!!raw-loader!@site/src/components/homeExamples/SwipeList.tsx';

import styles from './index.module.css';

const GITHUB_URL = 'https://github.com/dipeshrai123/react-ui-animate';
const NPM_URL = 'https://www.npmjs.com/package/react-ui-animate';
const DISCORD_URL = 'https://discord.gg/qPqsD8pv';

const PACKAGE_MANAGERS = [
  { id: 'npm', label: 'npm', command: 'npm i react-ui-animate' },
  { id: 'pnpm', label: 'pnpm', command: 'pnpm add react-ui-animate' },
  { id: 'yarn', label: 'yarn', command: 'yarn add react-ui-animate' },
  { id: 'bun', label: 'bun', command: 'bun add react-ui-animate' },
];

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

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.buttonShine} aria-hidden="true" />
        <span className={styles.buttonContent}>{children}</span>
      </a>
    );
  }

  return (
    <Link to={to} className={clsx(styles.buttonLink, className)}>
      <span className={styles.buttonShine} aria-hidden="true" />
      <span className={styles.buttonContent}>{children}</span>
    </Link>
  );
}

/** Tabbed terminal-style install card. Pick a package manager, copy the command. */
function InstallCommand() {
  const [tab, setTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const active = PACKAGE_MANAGERS[tab];

  const handleCopy = () => {
    navigator.clipboard
      .writeText(active.command)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  return (
    <div className={styles.installCard}>
      <div className={styles.installTabs} role="tablist" aria-label="Package manager">
        {PACKAGE_MANAGERS.map((pm, index) => (
          <button
            key={pm.id}
            type="button"
            role="tab"
            aria-selected={index === tab}
            className={clsx(
              styles.installTab,
              index === tab && styles.installTabActive
            )}
            onClick={() => setTab(index)}
          >
            {pm.label}
          </button>
        ))}
      </div>
      <div className={styles.installCommandRow}>
        <span className={styles.installPrompt}>$</span>
        <code className={styles.installCode}>{active.command}</code>
        <button
          type="button"
          onClick={handleCopy}
          className={styles.installCopyBtn}
          aria-label="Copy install command"
        >
          {copied ? (
            <MdCheckCircle className={styles.installCopyIcon} />
          ) : (
            <MdContentCopy className={styles.installCopyIcon} />
          )}
        </button>
      </div>
    </div>
  );
}

const TECH_ICONS = [
  { icon: FaReact, label: 'React' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: FiZap, label: '60fps performance' },
  { icon: FiPackage, label: 'Zero dependencies' },
];

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGrid} aria-hidden="true" />
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

          <Reveal delay={400} className={styles.techRow}>
            {TECH_ICONS.map(({ icon: Icon, label }) => (
              <span key={label} className={styles.techIcon} title={label}>
                <Icon aria-hidden="true" />
              </span>
            ))}
          </Reveal>
        </div>
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
      hover={{ scale: withSpring(1.02) }}
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

/** Strip leading/trailing noise so the shown source is clean and copy-pasteable. */
function prepareSource(code) {
  return code.replace(/\n{3,}/g, '\n\n').trim();
}

const EXAMPLES = [
  {
    key: 'DragDemo',
    title: 'Drag & spring',
    description: 'Grab, release, and watch it spring back into place.',
    code: DragDemoSource,
  },
  {
    key: 'ToastDemo',
    title: 'Toast',
    description: 'Enter, hold, then exit with Presence.',
    code: ToastDemoSource,
  },
  {
    key: 'ModalDemo',
    title: 'Modal',
    description: 'Scale-in dialog with outside-click dismiss.',
    code: ModalDemoSource,
  },
  {
    key: 'AccordionDemo',
    title: 'Accordion',
    description: 'Height spring for expanding panels.',
    code: AccordionDemoSource,
  },
  {
    key: 'TabsDemo',
    title: 'Tabs',
    description: 'Sliding indicator that follows the active tab.',
    code: TabsDemoSource,
  },
  {
    key: 'LikeButtonDemo',
    title: 'Like button',
    description: 'Press feedback with a spring pop.',
    code: LikeButtonDemoSource,
  },
  {
    key: 'SwipeListDemo',
    title: 'Swipe to delete',
    description: 'Drag with snap-back and dismiss.',
    code: SwipeListDemoSource,
  },
];

function Examples() {
  const [active, setActive] = React.useState(0);
  const [showCode, setShowCode] = useState(false);
  const [wordWrap, setWordWrap] = useState(false);
  const [copied, setCopied] = useState(false);
  const [demoKey, setDemoKey] = useState(0);
  const current = EXAMPLES[active];

  const source = useMemo(() => prepareSource(current.code), [current.code]);

  const selectExample = (index) => {
    setActive(index);
    setShowCode(false);
  };

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(source).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [source]);

  const handleReset = useCallback(() => {
    setDemoKey((k) => k + 1);
  }, []);

  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={clsx('container', styles.showcaseWrap)}>
        <ViewReveal className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Live demos</span>
          <h2 className={styles.sectionTitle}>Examples</h2>
          <p className={styles.sectionLede}>
            Interactive patterns built with React UI Animate. Real source, not a
            mockup.
          </p>
          <Link to="/docs/getting-started" className={styles.showcaseDocsLink}>
            Read the docs
            <MdArrowForward className={styles.showcaseDocsIcon} />
          </Link>
        </ViewReveal>

        <ViewReveal className={styles.showcaseFrame}>
          <nav className={styles.showcaseNav} aria-label="Examples">
            {EXAMPLES.map((example, index) => {
              const selected = index === active;
              return (
                <button
                  key={example.key}
                  type="button"
                  className={clsx(
                    styles.showcaseNavItem,
                    selected && styles.showcaseNavItemActive
                  )}
                  onClick={() => selectExample(index)}
                  aria-current={selected ? 'true' : undefined}
                >
                  <span className={styles.showcaseNavIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.showcaseNavCopy}>
                    <span className={styles.showcaseNavTitle}>
                      {example.title}
                    </span>
                    <span className={styles.showcaseNavDesc}>
                      {example.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>

          <div className={styles.showcaseStage}>
            <div className={styles.showcaseStageHead}>
              <div>
                <div className={styles.showcaseStageTitle}>{current.title}</div>
                <div className={styles.showcaseStageDesc}>
                  {current.description}
                </div>
              </div>

              <div className={styles.showcaseToolbar}>
                <button
                  type="button"
                  className={styles.showcaseToolbarBtn}
                  title="Reset demo"
                  aria-label="Reset demo"
                  onClick={handleReset}
                  disabled={showCode}
                >
                  <FiRotateCcw aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className={styles.showcaseToolbarBtn}
                  title={showCode ? 'Show preview' : 'Show code'}
                  aria-label={showCode ? 'Show preview' : 'Show code'}
                  aria-pressed={showCode}
                  onClick={() => setShowCode((v) => !v)}
                >
                  {showCode ? (
                    <FiEye aria-hidden="true" />
                  ) : (
                    <FiCode aria-hidden="true" />
                  )}
                  <span>{showCode ? 'Preview' : 'Code'}</span>
                </button>
                {showCode && (
                  <>
                    <button
                      type="button"
                      className={clsx(
                        styles.showcaseToolbarBtn,
                        wordWrap && styles.showcaseToolbarBtnActive
                      )}
                      title="Toggle word wrap"
                      aria-label="Toggle word wrap"
                      aria-pressed={wordWrap}
                      onClick={() => setWordWrap((v) => !v)}
                    >
                      <FiAlignLeft aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className={styles.showcaseToolbarBtn}
                      title={copied ? 'Copied' : 'Copy code'}
                      aria-label="Copy code"
                      onClick={handleCopy}
                    >
                      {copied ? (
                        <FiCheck aria-hidden="true" />
                      ) : (
                        <FiCopy aria-hidden="true" />
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>

            {showCode ? (
              <div
                className={clsx(
                  styles.showcaseCode,
                  wordWrap && styles.showcaseCodeWrap
                )}
              >
                <CodeBlock language="tsx">{source}</CodeBlock>
              </div>
            ) : (
              <div className={styles.showcaseCanvas} key={`${current.key}-${demoKey}`}>
                <BrowserOnly
                  fallback={
                    <div className={styles.showcaseFallback} aria-hidden="true" />
                  }
                >
                  {() => {
                    const Component = require('../components/homeExamples')[
                      current.key
                    ];
                    return <Component />;
                  }}
                </BrowserOnly>
              </div>
            )}
          </div>
        </ViewReveal>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ViewReveal className={styles.cta}>
          <h2 className={styles.ctaTitle}>Start animating in minutes</h2>
          <p className={styles.ctaLede}>
            Install React UI Animate and ship your first animation today.
          </p>
          <div className={styles.ctaActions}>
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
