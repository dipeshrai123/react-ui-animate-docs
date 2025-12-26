import React from 'react';
import SandPack from './SandPack';
// Import all examples directly
import * as Examples from '../examples';

interface CodeExampleProps {
  /**
   * Key of the example to display (auto-generated from file path)
   * Example: "v5_x_x_modifier_withSpring_GetStartedExample"
   *
   * The key is generated from the file path:
   * - "v5.x.x/modifier/withSpring/GetStartedExample.tsx" -> "v5_x_x_modifier_withSpring_GetStartedExample"
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
 *
 * Usage in MDX:
 * ```jsx
 * <CodeExample example="v5_x_x_modifier_withSpring_GetStartedExample" />
 * ```
 */
export default function CodeExample({
  example,
  version = { reactAnimate: '5.0.0' },
  additionalFiles = {},
  fileName = 'App.tsx',
}: CodeExampleProps) {
  const ExampleCode = Examples[example as keyof typeof Examples];
  const cssKey = `${example}_CSS` as keyof typeof Examples;
  const cssContent = Examples[cssKey] as string | undefined;

  if (!ExampleCode) {
    console.error(
      `Example "${example}" not found. Available examples:`,
      Object.keys(Examples).slice(0, 10)
    );
    return (
      <div
        style={{
          padding: '1rem',
          background: '#fee',
          border: '1px solid #fcc',
          borderRadius: '8px',
        }}
      >
        <strong>Error:</strong> Example "{example}" not found.
        <br />
        <small>
          Available examples: {Object.keys(Examples).slice(0, 5).join(', ')}...
        </small>
        <br />
        <small>
          Please run "npm run generate:examples" to update the index.
        </small>
      </div>
    );
  }

  // ExampleCode is already a string constant from the generated index
  const codeContent = ExampleCode as string;

  // Get shared styles from the generated index
  const sharedStyles = (Examples as any).sharedStyles as string | undefined;

  // Build files object - always include shared styles.css
  const files: Record<string, string> = {
    [fileName]: codeContent,
    ...additionalFiles,
  };

  // Add shared styles.css if available
  if (sharedStyles) {
    files['styles.css'] = sharedStyles;
  }

  // Add example-specific CSS file if it exists
  if (cssContent) {
    // Extract the CSS filename from the import statement in the code
    // Look for: import './GetStartedExample.css';
    const cssImportMatch = codeContent.match(
      /import\s+['"](\.\/)?([^'"]+\.css)['"]/
    );
    if (cssImportMatch) {
      // Use the filename from the import statement
      const cssFileName = cssImportMatch[2].replace(/^\.\//, ''); // Remove leading ./
      files[cssFileName] = cssContent;
    } else {
      // Fallback: extract from example key
      const cssFileName = example.split('_').pop() + '.css';
      files[cssFileName] = cssContent;
    }
  }

  return <SandPack version={version} files={files} />;
}
