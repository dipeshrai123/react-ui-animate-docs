import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import { HomepageFeatures } from "@site/src/components";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroOuterContainer}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
          <div className={styles.buttonContainer}>
            <Link
              className={styles.buttons}
              // className="button button--secondary button--md"
              to="/docs/intro"
            >
              Get Started
            </Link>
            <Link
              className={styles.buttons}
              // className="button button--secondary button--md"
              to="https://github.com/dipeshrai123/react-ui-animate"
            >
              Try It
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="React Library for Gestures and Animation"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
