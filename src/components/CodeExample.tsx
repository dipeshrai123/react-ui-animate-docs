import React from 'react';
import SandPack from './SandPack';
// Import all examples from the auto-generated index
import * as Examples from '../examples';

interface CodeExampleProps {
  /**
   * Key of the example to display (auto-generated from file path)
   * Example: "v5_x_x_core_mount_BasicExample"
   * 
   * The key is generated from the file path:
   * - "v5.x.x/core/mount/BasicExample.tsx" -> "v5_x_x_core_mount_BasicExample"
   */
  example: string;
  /**
   * Version of react-ui-animate to use in Sandpack
   */
  version?: {
    reactAnimate: '5.0.0' | '^3.3.0';
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
 * CodeExample component that displays example code in Sandpack.
 * This is the industry-standard approach - examples are imported directly!
 * 
 * Usage in MDX:
 * ```jsx
 * <CodeExample example="v5_x_x_core_mount_BasicExample" />
 * ```
 * 
 * The example key is auto-generated from the file path. For a file at:
 * `src/examples/raw/v5.x.x/core/mount/BasicExample.tsx`
 * The key would be: `v5_x_x_core_mount_BasicExample`
 */
export default function CodeExample({
  example,
  version = { reactAnimate: '5.0.0' },
  additionalFiles = {},
  fileName = 'App.tsx',
}: CodeExampleProps) {
  const ExampleCode = Examples[example as keyof typeof Examples];
  
  if (!ExampleCode) {
    console.error(`Example "${example}" not found. Available examples:`, Object.keys(Examples));
    return (
      <div style={{ padding: '1rem', background: '#fee', border: '1px solid #fcc' }}>
        <strong>Error:</strong> Example "{example}" not found.
        <br />
        <small>Available examples: {Object.keys(Examples).slice(0, 5).join(', ')}...</small>
      </div>
    );
  }

  // ExampleCode is already a string constant from the generated index
  const codeContent = ExampleCode as string;

  return (
    <SandPack
      version={version}
      files={{
        [fileName]: codeContent,
        ...additionalFiles,
      }}
    />
  );
}

