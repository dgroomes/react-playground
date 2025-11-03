import React from 'react';
import ClientComponent from './ClientComponent.jsx';

// This is a Server Component - it runs at BUILD TIME
// Notice it's an async function - this is the key feature of RSC!
export default async function ServerComponent() {
  // This runs at build time, not in the browser
  const buildData = await fetchBuildTimeData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>RSC SSG Example</title>
        <style>{`
          body {
            font-family: system-ui, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
          }
          .server { background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .client { background: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0; }
          button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
        `}</style>
      </head>
      <body>
        <h1>React Server Components - SSG Example</h1>

        <div className="server">
          <h2>📦 Server Component (Build Time)</h2>
          <p><strong>This rendered at build time: {buildData.timestamp}</strong></p>
          <p>Build message: "{buildData.message}"</p>
          <p>Random build number: {buildData.number}</p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            ℹ️ This async component ran during the build, not in the browser.
            The code for this component is NOT in the client bundle!
          </p>
        </div>

        <ClientComponent initialValue={buildData.number} />
      </body>
    </html>
  );
}

// Simulated async data fetching at build time
async function fetchBuildTimeData() {
  // Simulate reading from filesystem, database, etc.
  await new Promise(resolve => setTimeout(resolve, 100));

  return {
    timestamp: new Date().toISOString(),
    message: 'Hello from build time!',
    number: Math.floor(Math.random() * 100)
  };
}
