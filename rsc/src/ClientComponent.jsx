'use client';

// The 'use client' directive marks this as a Client Component
// This component CAN use hooks, event handlers, and browser APIs

import React, { useState } from 'react';

export default function ClientComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div style={{
      backgroundColor: '#fff3e0',
      padding: '15px',
      borderRadius: '8px'
    }}>
      <h2>⚡ Client Component</h2>
      <p><strong>This component runs on the CLIENT (browser).</strong></p>
      <p>Initial count from server: {initialCount}</p>
      <p>Current count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#ff9800',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          marginRight: '10px'
        }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(initialCount)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#757575',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Reset
      </button>

      <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
        ℹ️ This component has interactive state (useState) and event handlers.
        It's hydrated in the browser and can respond to user interactions.
      </p>
    </div>
  );
}
