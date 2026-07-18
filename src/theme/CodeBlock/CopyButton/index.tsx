import React, {useCallback, useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import copy from 'copy-text-to-clipboard';
import {translate} from '@docusaurus/Translate';
import type {Props} from '@theme/CodeBlock/CopyButton';
import {FiCopy, FiCheck} from 'react-icons/fi';

export default function CopyButton({code, className}: Props): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeout = useRef<number | undefined>(undefined);
  const handleCopyCode = useCallback(() => {
    copy(code);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  }, [code]);

  useEffect(() => () => window.clearTimeout(copyTimeout.current), []);

  const label = isCopied
    ? translate({
        id: 'theme.CodeBlock.copied',
        message: 'Copied',
        description: 'The copied button label on code blocks',
      })
    : translate({
        id: 'theme.CodeBlock.copy',
        message: 'Copy',
        description: 'The copy button label on code blocks',
      });

  return (
    <button
      type="button"
      aria-label={
        isCopied
          ? label
          : translate({
              id: 'theme.CodeBlock.copyButtonAriaLabel',
              message: 'Copy code to clipboard',
              description: 'The ARIA label for copy code blocks button',
            })
      }
      title={label}
      className={clsx('clean-btn', 'code-icon-btn', className)}
      onClick={handleCopyCode}>
      {isCopied ? (
        <FiCheck size={14} strokeWidth={2} aria-hidden="true" />
      ) : (
        <FiCopy size={14} strokeWidth={2} aria-hidden="true" />
      )}
      <span className="code-icon-btn__label">{label}</span>
    </button>
  );
}
