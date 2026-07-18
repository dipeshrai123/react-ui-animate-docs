import React, { useState, type ComponentType } from 'react';
import CodeBlock from '@theme/CodeBlock';
import BrowserOnly from '@docusaurus/BrowserOnly';

interface CodeExampleProps {
  /**
   * The example component itself, imported directly, e.g.:
   * import Demo from '@site/src/examples/next/presence/Basic';
   */
  demo: ComponentType;
  /**
   * The same example's source, imported as raw text for display, e.g.:
   * import Code from '!!raw-loader!@site/src/examples/next/presence/Basic.tsx';
   */
  code: string;
  language?: string;
}

/**
 * Renders a live, natively-rendered example (no iframe/sandbox) alongside
 * its syntax-highlighted source, matching the docs site's own styling.
 */
export default function CodeExample({
  demo: Demo,
  code,
  language = 'tsx',
}: CodeExampleProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="example-block">
      <div className="example-preview">
        <BrowserOnly fallback={<div className="example-preview-fallback" />}>
          {() => <Demo />}
        </BrowserOnly>
      </div>
      <button
        type="button"
        className="example-code-toggle"
        onClick={() => setShowCode((v) => !v)}
        aria-expanded={showCode}
      >
        {showCode ? 'Hide code' : 'Show code'}
      </button>
      {showCode && (
        <CodeBlock language={language} className="example-code">
          {code.trim()}
        </CodeBlock>
      )}
    </div>
  );
}
