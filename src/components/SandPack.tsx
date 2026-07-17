import React, { useState } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import { useColorMode } from '@docusaurus/theme-common';

import { STABLE_VERSION } from '../constants/versions';

interface ISandPack {
  files: Record<string, string>;
  version?: {
    reactAnimate: string;
  };
}

type TabType = 'preview' | 'js' | 'ts' | 'css';

export default function SandPack({
  files,
  version = { reactAnimate: STABLE_VERSION },
}: ISandPack) {
  const { colorMode } = useColorMode();
  const [activeTab, setActiveTab] = useState<TabType>('preview');

  // Find JS, TS, and CSS files
  const jsFile = Object.keys(files).find(
    (f) => f.endsWith('.js') || f.endsWith('.jsx')
  );
  const tsFile = Object.keys(files).find(
    (f) => f.endsWith('.ts') || f.endsWith('.tsx')
  );
  const cssFile = Object.keys(files).find((f) => f.endsWith('.css'));
  const defaultFile = tsFile || jsFile || Object.keys(files)[0];

  // Determine which file to show based on active tab
  const getActiveFile = (): string | undefined => {
    if (activeTab === 'js' && jsFile) return jsFile;
    if (activeTab === 'ts' && tsFile) return tsFile;
    if (activeTab === 'css' && cssFile) return cssFile;
    if (activeTab === 'preview') return undefined; // Show preview only
    // Fallback: if no specific file found, use default
    return defaultFile;
  };

  const showEditor = activeTab !== 'preview';
  const activeFile = getActiveFile();

  // Custom theme that matches the documentation style
  const customTheme = {
    colors: {
      surface1: colorMode === 'dark' ? '#1e1e1e' : '#ffffff',
      surface2: colorMode === 'dark' ? '#252525' : '#f8f9fa',
      surface3: colorMode === 'dark' ? '#2e2e2e' : '#e9ecef',
      disabled: colorMode === 'dark' ? '#3d3d3d' : '#ced4da',
      base: colorMode === 'dark' ? '#ffffff' : '#000000',
      clickable: colorMode === 'dark' ? '#cccccc' : '#666666',
      hover: colorMode === 'dark' ? '#ffffff' : '#000000',
      accent: '#007bff',
      error: '#ff6b6b',
      errorSurface: colorMode === 'dark' ? '#3d1f1f' : '#fff5f5',
      warning: '#ffa500',
      warningSurface: colorMode === 'dark' ? '#3d2f1f' : '#fffaf0',
    },
    syntax: {
      plain: colorMode === 'dark' ? '#d4d4d4' : '#24292e',
      comment: colorMode === 'dark' ? '#6a9955' : '#6a737d',
      keyword: colorMode === 'dark' ? '#569cd6' : '#d73a49',
      tag: colorMode === 'dark' ? '#569cd6' : '#22863a',
      punctuation: colorMode === 'dark' ? '#d4d4d4' : '#24292e',
      definition: colorMode === 'dark' ? '#4ec9b0' : '#6f42c1',
      property: colorMode === 'dark' ? '#9cdcfe' : '#005cc5',
      static: colorMode === 'dark' ? '#4fc1ff' : '#032f62',
      string: colorMode === 'dark' ? '#ce9178' : '#032f62',
    },
    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", monospace',
      size: '14px',
      lineHeight: '24px',
    },
  };

  return (
    <div className="sandpack-wrapper">
      {/* Custom Tabs */}
      <div className="sandpack-custom-tabs">
        <button
          className={`sandpack-tab ${activeTab === 'preview' ? 'active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
        {jsFile && (
          <button
            className={`sandpack-tab ${activeTab === 'js' ? 'active' : ''}`}
            onClick={() => setActiveTab('js')}
          >
            JS
          </button>
        )}
        {tsFile && (
          <button
            className={`sandpack-tab ${activeTab === 'ts' ? 'active' : ''}`}
            onClick={() => setActiveTab('ts')}
          >
            TS
          </button>
        )}
        {cssFile && (
          <button
            className={`sandpack-tab ${activeTab === 'css' ? 'active' : ''}`}
            onClick={() => setActiveTab('css')}
          >
            CSS
          </button>
        )}
      </div>

      <div
        className={
          showEditor ? 'sandpack-with-editor' : 'sandpack-preview-only'
        }
      >
        <Sandpack
          key={`${activeTab}-${activeFile}`} // Force re-render on tab change
          files={files}
          theme={customTheme}
          template="react-ts"
          options={{
            showConsoleButton: false,
            showInlineErrors: true,
            showNavigator: false,
            showLineNumbers: true,
            showTabs: false, // Hide default tabs, we use custom ones
            editorHeight: 500,
            editorWidthPercentage: showEditor ? 50 : 0,
            wrapContent: true,
            activeFile: showEditor && activeFile ? activeFile : undefined,
          }}
          customSetup={{
            dependencies: {
              'react-ui-animate': version?.reactAnimate,
            },
          }}
        />
      </div>
    </div>
  );
}
