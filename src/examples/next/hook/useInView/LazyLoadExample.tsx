import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-ui-animate';

export default function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (isInView && !imageSrc) {
      setTimeout(() => {
        setImageSrc('https://picsum.photos/800/400');
      }, 500);
    }
  }, [isInView, imageSrc]);

  return (
    <div style={{ height: 2000 }}>
      <div style={{ padding: 40, height: 800 }}>
        <h1>Lazy Loading Example</h1>
        <p>Scroll down to see the image load when it enters the viewport</p>
      </div>

      <div
        ref={ref}
        style={{
          minHeight: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1c1f28',
          borderRadius: 8,
          margin: 40,
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Lazy loaded"
            style={{
              width: '100%',
              maxWidth: 800,
              height: 'auto',
              borderRadius: 8,
            }}
          />
        ) : (
          <div
            style={{
              padding: 40,
              textAlign: 'center',
              color: '#666',
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                border: '4px solid #2a2e38',
                borderTop: '4px solid #7d93b0',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 20px',
              }}
            />
            <p>Loading image...</p>
            <p style={{ fontSize: 12, marginTop: 10 }}>
              {isInView ? 'Image is in view, loading...' : 'Scroll to load'}
            </p>
          </div>
        )}
      </div>

      <div style={{ height: 800, padding: 40 }}>
        <p>Image loaded: {imageSrc ? 'Yes' : 'No'}</p>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

