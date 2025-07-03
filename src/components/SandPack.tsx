import React from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';

interface ISandPack {
  files: Record<string, string>;
  version?: {
    reactAnimate: '5.0.0-rc.9' | '^3.3.0';
  };
}

export default function SandPack({
  files,
  version = { reactAnimate: '5.0.0-rc.9' },
}: ISandPack) {
  return (
    <div style={{ paddingBottom: 15 }}>
      <Sandpack
        files={files}
        theme="auto"
        template="react-ts"
        options={{
          showConsoleButton: false,
          showInlineErrors: true,
          showNavigator: false,
          showLineNumbers: true,
          showTabs: true,
        }}
        customSetup={{
          dependencies: {
            'react-ui-animate': version?.reactAnimate,
          },
        }}
      />
    </div>
  );
}
