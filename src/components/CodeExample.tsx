import React from 'react';
import SandPack from './SandPack';
import { STABLE_VERSION } from '../constants/versions';
import sharedStyles from '!!raw-loader!../examples/styles.css';

interface CodeExampleProps {
  /**
   * Example source, imported at build time via raw-loader, e.g.:
   * import Code from '!!raw-loader!@site/src/examples/next/presence/Basic.tsx';
   */
  code: string;
  /**
   * Optional example-specific CSS, imported the same way as `code`.
   */
  css?: string;
  /**
   * Version of react-ui-animate to install in the Sandpack sandbox.
   * Defaults to STABLE_VERSION; pass NEXT_VERSION for `next`-docs examples.
   */
  version?: {
    reactAnimate: string;
  };
  /**
   * Additional files to include in Sandpack (optional)
   */
  additionalFiles?: Record<string, string>;
  /**
   * Custom file name to display in Sandpack (defaults to "App.tsx")
   */
  fileName?: string;
}

/**
 * Renders a runnable Sandpack example from raw-loader-imported source.
 *
 * Usage in MDX:
 * ```jsx
 * import Code from '!!raw-loader!@site/src/examples/next/presence/Basic.tsx';
 * import { NEXT_VERSION } from '@site/src/constants/versions';
 *
 * <CodeExample code={Code} version={{ reactAnimate: NEXT_VERSION }} />
 * ```
 */
export default function CodeExample({
  code,
  css,
  version = { reactAnimate: STABLE_VERSION },
  additionalFiles = {},
  fileName = 'App.tsx',
}: CodeExampleProps) {
  const files: Record<string, string> = {
    [fileName]: code,
    'styles.css': sharedStyles,
    ...additionalFiles,
  };

  if (css) {
    const cssImportMatch = code.match(/import\s+['"](\.\/)?([^'"]+\.css)['"]/);
    const cssFileName = cssImportMatch
      ? cssImportMatch[2].replace(/^\.\//, '')
      : `${fileName.replace(/\.tsx?$/, '')}.css`;
    files[cssFileName] = css;
  }

  return <SandPack version={version} files={files} />;
}
