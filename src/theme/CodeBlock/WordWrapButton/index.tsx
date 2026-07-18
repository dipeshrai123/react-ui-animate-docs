import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import type {Props} from '@theme/CodeBlock/WordWrapButton';
import {FiAlignLeft} from 'react-icons/fi';

export default function WordWrapButton({
  className,
  onClick,
  isEnabled,
}: Props): JSX.Element | null {
  const title = translate({
    id: 'theme.CodeBlock.wordWrapToggle',
    message: 'Toggle word wrap',
    description:
      'The title attribute for toggle word wrapping button of code block lines',
  });

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'clean-btn',
        'code-icon-btn',
        className,
        isEnabled && 'code-icon-btn--active',
      )}
      aria-label={title}
      title={title}
      aria-pressed={isEnabled}>
      <FiAlignLeft size={14} strokeWidth={2} aria-hidden="true" />
      <span className="code-icon-btn__label">Wrap</span>
    </button>
  );
}
