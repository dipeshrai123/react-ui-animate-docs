import React, { useCallback, useMemo, useState, type ComponentType } from 'react';
import clsx from 'clsx';
import CodeBlock from '@theme/CodeBlock';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {
  FiCode,
  FiEye,
  FiCopy,
  FiCheck,
  FiRotateCcw,
  FiAlignLeft,
} from 'react-icons/fi';
import '@site/src/examples/next/styles.css';

interface CodeExampleProps {
  demo: ComponentType;
  code: string;
  language?: string;
}

/** Strip demo-only noise so the shown source matches what readers should copy. */
function prepareExampleCode(code: string): string {
  return code
    .replace(/^import\s+['"][^'"]*styles\.css['"];?\s*\n/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export default function CodeExample({
  demo: Demo,
  code,
  language = 'tsx',
}: CodeExampleProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [wordWrap, setWordWrap] = useState(false);
  const [demoKey, setDemoKey] = useState(0);

  const displayCode = useMemo(() => prepareExampleCode(code), [code]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(displayCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [displayCode]);

  const handleReset = useCallback(() => {
    setDemoKey((k) => k + 1);
  }, []);

  return (
    <div className="example-block">
      <div className="example-header">
        <span className="example-label">{showCode ? 'Code' : 'Preview'}</span>
        <div className="example-toolbar">
          <button
            type="button"
            className="code-icon-btn"
            title="Reset"
            aria-label="Reset demo"
            onClick={handleReset}
            disabled={showCode}
          >
            <FiRotateCcw size={14} strokeWidth={2} aria-hidden="true" />
            <span className="code-icon-btn__label">Reset</span>
          </button>
          <button
            type="button"
            className="code-icon-btn"
            title={showCode ? 'Preview' : 'Code'}
            aria-label={showCode ? 'Show preview' : 'Show code'}
            aria-pressed={showCode}
            onClick={() => setShowCode((v) => !v)}
          >
            {showCode ? (
              <FiEye size={14} strokeWidth={2} aria-hidden="true" />
            ) : (
              <FiCode size={14} strokeWidth={2} aria-hidden="true" />
            )}
            <span className="code-icon-btn__label">
              {showCode ? 'Preview' : 'Code'}
            </span>
          </button>
          <button
            type="button"
            className={clsx('code-icon-btn', wordWrap && 'code-icon-btn--active')}
            title="Toggle word wrap"
            aria-label="Toggle word wrap"
            aria-pressed={wordWrap}
            onClick={() => setWordWrap((v) => !v)}
            disabled={!showCode}
          >
            <FiAlignLeft size={14} strokeWidth={2} aria-hidden="true" />
            <span className="code-icon-btn__label">Wrap</span>
          </button>
          <button
            type="button"
            className="code-icon-btn"
            title={copied ? 'Copied' : 'Copy'}
            aria-label="Copy code"
            onClick={handleCopy}
          >
            {copied ? (
              <FiCheck size={14} strokeWidth={2} aria-hidden="true" />
            ) : (
              <FiCopy size={14} strokeWidth={2} aria-hidden="true" />
            )}
            <span className="code-icon-btn__label">
              {copied ? 'Copied' : 'Copy'}
            </span>
          </button>
        </div>
      </div>

      {showCode ? (
        <div
          className={clsx('example-code', wordWrap && 'example-code--wrap')}
        >
          <CodeBlock language={language}>{displayCode}</CodeBlock>
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
