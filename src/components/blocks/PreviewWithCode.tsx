import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function PreviewWithCode({
  preview,
  code,
  title = '',
  style = {},
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'start',
        backgroundColor: 'white',
        height: '450px',
        overflow: 'scroll',
        margin: '20px 0px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
        ...style,
      }}
    >
      {/* Right: Code Block */}
      <div
        className="code_preview"
        style={{
          height: '100%',
          overflowY: 'scroll',
        }}
      >
        <CodeBlock title={title} language={'jsx'} showLineNumbers>
          {code}
        </CodeBlock>
      </div>

      <div
        style={{
          width: '100%',
          padding: '20px',
          overflow: 'scroll',
          height: '100%',
          backgroundColor: '#f6f7f9',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 0.8px 2px rgba(0, 0, 0, .032)',
          }}
        >
          {preview}
        </div>
      </div>
    </div>
  );
}
