import React from 'react';
import ClientComponent from './ClientComponent.jsx';

// This is a Server Component - it runs ONLY on the server
// Notice it's an async function - this is unique to Server Components!
export default async function ServerComponent() {
  // Simulate fetching data from a database or API
  // In a real app, this could be: const data = await db.query(...)
  const serverData = await fetchServerData();

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>🚀 React Server Components - Hello World</h1>

      <div style={{
        backgroundColor: '#e3f2fd',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2>📦 Server Component</h2>
        <p><strong>This component runs on the SERVER only.</strong></p>
        <p>Data fetched at: {serverData.timestamp}</p>
        <p>Server message: "{serverData.message}"</p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          ℹ️ This component is async and can directly access databases,
          file systems, or any server-side resources. Its code is never
          sent to the browser!
        </p>
      </div>

      {/* Server Components can render Client Components */}
      <ClientComponent initialCount={serverData.count} />
    </div>
  );
}

// Simulated async data fetching
async function fetchServerData() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));

  return {
    timestamp: new Date().toISOString(),
    message: 'Hello from the Server Component!',
    count: Math.floor(Math.random() * 100)
  };
}
