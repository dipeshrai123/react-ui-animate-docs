import React, { useCallback, useState, type ComponentType } from 'react';
import CodeBlock from '@theme/CodeBlock';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { FiCode, FiEye, FiCopy, FiCheck, FiRotateCcw } from 'react-icons/fi';

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
 * Renders a live, natively-rendered example (no iframe/sandbox) in one
 * bordered frame, with a corner toolbar (reset / code-preview toggle /
 * copy) instead of a separate "show code" section.
 */
export default function CodeExample({
  demo: Demo,
  code,
  language = 'tsx',
}: CodeExampleProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [demoKey, setDemoKey] = useState(0);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [code]);

  const handleReset = useCallback(() => {
    setDemoKey((k) => k + 1);
  }, []);

  return (
    <div className="example-block">
      <div className="example-toolbar">
        <button
          type="button"
          className="example-icon-btn"
          title="Reset"
          aria-label="Reset demo"
          onClick={handleReset}
          disabled={showCode}
        >
          <FiRotateCcw />
        </button>
        <button
          type="button"
          className="example-icon-btn"
          title={showCode ? 'Preview' : 'Show code'}
          aria-label={showCode ? 'Show preview' : 'Show code'}
          aria-pressed={showCode}
          onClick={() => setShowCode((v) => !v)}
        >
          {showCode ? <FiEye /> : <FiCode />}
        </button>
        <button
          type="button"
          className="example-icon-btn"
          title="Copy code"
          aria-label="Copy code"
          onClick={handleCopy}
        >
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </div>

      {showCode ? (
        <div className="example-code">
          <CodeBlock language={language}>{code.trim()}</CodeBlock>
        </div>
      ) : (
        <div className="example-preview">
          <BrowserOnly fallback={<div className="example-preview-fallback" />}>
            {() => <Demo key={demoKey} />}
          </BrowserOnly>
        </div>
      )}
    </div>
  );
}
