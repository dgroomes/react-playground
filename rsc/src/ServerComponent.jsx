import React from 'react';
import ClientComponent from './ClientComponent.js';

// This is a Server Component - it runs at BUILD TIME
// Notice it's an async function - this is the key feature of RSC
export default async function ServerComponent() {
  const buildData = await fetchBuildTimeData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>RSC SSG Example</title>
        <style>{`
          body { font-family: system-ui, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
          .server { background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .client { background: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0; }
        `}</style>
      </head>
      <body>
        <h1>React Server Components - SSG Example</h1>
        <div className="server">
          <h2>Server Component (Build Time)</h2>
          <p>Build timestamp: {buildData.timestamp}</p>
          <p>Message: {buildData.message}</p>
          <p>Random number: {buildData.number}</p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            This async component ran at build time. Its code never reaches the browser.
          </p>
        </div>
        <ClientComponent initialValue={buildData.number} />
      </body>
    </html>
  );
}

async function fetchBuildTimeData() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return {
    timestamp: new Date().toISOString(),
    message: 'Hello from build time!',
    number: Math.floor(Math.random() * 100)
  };
}
